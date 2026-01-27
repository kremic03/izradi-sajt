import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Sanitizacija HTML-a za sprečavanje XSS napada
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Validacija email formata
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Ograničenje dužine unosa
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Provera da li su polja stringovi
    if (typeof body.name !== 'string' || typeof body.email !== 'string' || typeof body.message !== 'string') {
      return NextResponse.json(
        { error: 'Nevažeći format podataka' },
        { status: 400 }
      );
    }

    const name = body.name.trim();
    const email = body.email.trim().toLowerCase();
    const message = body.message.trim();

    // Validacija - obavezna polja
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Sva polja su obavezna' },
        { status: 400 }
      );
    }

    // Validacija - dužina polja
    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: 'Ime je predugačko (max 100 karaktera)' },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { error: 'Email je predugačak' },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: 'Poruka je predugačka (max 5000 karaktera)' },
        { status: 400 }
      );
    }

    // Validacija - email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Nevažeća email adresa' },
        { status: 400 }
      );
    }

    // Sanitizacija korisničkog unosa pre ubacivanja u HTML
    const safeName = sanitizeHtml(name);
    const safeEmail = sanitizeHtml(email);
    const safeMessage = sanitizeHtml(message);

    // Slanje emaila
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Kontakt <kontakt@izradi-sajt.com>',
      to: 'nikolakremic15@gmail.com',
      replyTo: email,
      subject: `Nova poruka sa portfolia od ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            Nova poruka sa portfolia
          </h2>

          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px;"><strong>Ime:</strong> ${safeName}</p>
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${safeEmail}</p>
          </div>

          <div style="background: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #334155; margin-top: 0;">Poruka:</h3>
            <p style="color: #64748b; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <p style="color: #94a3b8; font-size: 12px; margin-top: 30px; text-align: center;">
            Ova poruka je poslata sa tvog portfolio sajta
          </p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: 'Greška pri slanju poruke' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch {
    return NextResponse.json(
      { error: 'Serverska greška' },
      { status: 500 }
    );
  }
}
