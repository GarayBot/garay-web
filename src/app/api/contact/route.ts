import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase first (always persist the lead)
    const { error: dbError } = await supabase.from("contact_leads").insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      message,
      email_sent: false,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
    }

    // 2. Send email via Resend
    let emailSent = false;
    try {
      await resend.emails.send({
        from: "Garay Web <sasori@ivangar.com>",
        to: "garciayalaivan@gmail.com",
        subject: `Nuevo contacto: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4a64eb;">Nuevo lead desde garay.ivangar.com</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Nombre</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Email</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `<tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Teléfono</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>` : ""}
              ${company ? `<tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; border-bottom: 1px solid #eee;">Empresa</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${company}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Mensaje</td>
                <td style="padding: 8px 12px;">${message.replace(/\n/g, "<br>")}</td>
              </tr>
            </table>
            <p style="margin-top: 20px; font-size: 12px; color: #999;">
              Enviado desde el formulario de contacto de garay.ivangar.com
            </p>
          </div>
        `,
      });
      emailSent = true;
    } catch (emailErr) {
      console.error("Resend email error:", emailErr);
    }

    // 3. Update email_sent status if we saved to DB
    if (emailSent && !dbError) {
      await supabase
        .from("contact_leads")
        .update({ email_sent: true })
        .eq("email", email)
        .order("created_at", { ascending: false })
        .limit(1);
    }

    return NextResponse.json({
      success: true,
      emailSent,
      message: "Mensaje recibido correctamente.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
