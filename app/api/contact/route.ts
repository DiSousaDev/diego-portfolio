import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "me@diego.dev.br";

type ContactPayload = {
    email?: string;
    message?: string;
    name?: string;
    subject?: string;
};

export async function POST(request: Request) {
    if (!resendApiKey) {
        return Response.json(
            { error: "A chave RESEND_API_KEY não foi configurada." },
            { status: 500 }
        );
    }

    if (!contactFromEmail) {
        return Response.json(
            { error: "O e-mail remetente CONTACT_FROM_EMAIL não foi configurado." },
            { status: 500 }
        );
    }

    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
        return Response.json(
            { error: "Preencha todos os campos obrigatórios." },
            { status: 400 }
        );
    }

    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
        from: contactFromEmail,
        to: [contactToEmail],
        replyTo: email,
        subject: `[Portfolio] ${subject}`,
        text: [
            `Nome: ${name}`,
            `E-mail: ${email}`,
            `Assunto: ${subject}`,
            "",
            message,
        ].join("\n"),
        html: `
            <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
                <h2>Nova mensagem do portfólio</h2>
                <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
                <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
                <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
                <p><strong>Mensagem:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
            </div>
        `,
    });

    if (error) {
        return Response.json(
            { error: "Não foi possível enviar sua mensagem agora." },
            { status: 500 }
        );
    }

    return Response.json({ success: true });
}

function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}
