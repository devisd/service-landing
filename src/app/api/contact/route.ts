import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface ContactFormData {
    name: string;
    phone: string;
    problem: string;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactFormData = await request.json();

        if (!data.name || !data.phone) {
            return NextResponse.json(
                { error: 'Имя и телефон обязательны' },
                { status: 400 }
            );
        }

        if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
            console.error('Telegram credentials not configured');
            return NextResponse.json(
                { error: 'Сервис временно недоступен' },
                { status: 500 }
            );
        }

        const message = `
📱 *Новая заявка на ремонт*

👤 *Имя:* ${escapeMarkdown(data.name)}
📞 *Телефон:* ${escapeMarkdown(data.phone)}
📝 *Описание проблемы:* ${data.problem ? escapeMarkdown(data.problem) : 'Не указано'}

⏰ _${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Barnaul' })}_
        `.trim();

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown',
                }),
            }
        );

        if (!telegramResponse.ok) {
            const errorData = await telegramResponse.json();
            console.error('Telegram API error:', errorData);
            return NextResponse.json(
                { error: 'Ошибка отправки сообщения' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500 }
        );
    }
}

function escapeMarkdown(text: string): string {
    return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}
