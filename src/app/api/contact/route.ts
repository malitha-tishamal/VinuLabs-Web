import { NextResponse } from 'next/server';

// Email configuration
const EMAIL_TO = 'hello@vinulabs.lk';

// Temporary in-memory / state store for messages (persists during server uptime)
let messagesStore = [
  {
    id: 'msg-1',
    name: 'Kasun Perera',
    email: 'kasun.p@example.com',
    company: 'Lanka Tech Solutions',
    phone: '+94 77 123 4567',
    service: 'AI Strategy & Architecture',
    message: 'We would like to consult VinuLabs regarding our enterprise AI automation roadmap for Q4.',
    date: '2026-08-06 14:30',
    status: 'Unread',
  },
  {
    id: 'msg-2',
    name: 'Takashi Tanaka',
    email: 't.tanaka@tokyosys.jp',
    company: 'Tokyo Systems Corp',
    phone: '+81 90 8765 4321',
    service: 'Cloud Microservices',
    message: 'Looking for a high-performance Kubernetes migration team for our fintech backend.',
    date: '2026-08-05 09:15',
    status: 'Replied',
  },
];

// Function to generate mailto link for opening email client
function generateMailtoLink(formData: any) {
  const subject = encodeURIComponent(`New Contact Form Submission: ${formData.service}`);
  const body = encodeURIComponent(`
New Contact Form Submission

Service Type: ${formData.service}
Full Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
  `);
  
  return `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
}

export async function GET() {
  return NextResponse.json({ success: true, messages: messagesStore });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newMessage = {
      id: `msg-${Date.now()}`,
      name: body.name || 'Anonymous',
      email: body.email || 'N/A',
      company: body.company || 'N/A',
      phone: body.phone || 'N/A',
      service: body.service || 'General Inquiry',
      message: body.message || '',
      date: new Date().toLocaleString(),
      status: 'Unread',
    };
    
    // Store message
    messagesStore.unshift(newMessage);
    
    // Generate mailto link for manual email sending
    const mailtoLink = generateMailtoLink(newMessage);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message stored successfully! Click the link below to send email:',
      mailtoLink: mailtoLink,
      data: newMessage 
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to process contact request' }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (id) {
      messagesStore = messagesStore.filter((m) => m.id !== id);
    }
    return NextResponse.json({ success: true, messages: messagesStore });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete message' }, { status: 400 });
  }
}
