import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

const sendMail = async (name: string, email: string, content: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.163.com', // 选择一个邮件服务提供商，如 Gmail、Outlook
    auth: {
      user: process.env.SMTP_USER, // 发送邮件的邮箱
      pass: process.env.SMTP_PASSWORD,   // 发送邮件的邮箱密码或授权码
    },
    port: 465, // SMTP 端口
  });

  const mailOptions = {
    from: process.env.SMTP_USER,  // 发送者邮箱
    to: process.env.SMTP_USER,     // 接收者邮箱
    subject: `Hello from ${name}: ${email}`,   // 邮件主题
    text: content,   // 邮件正文
  };

  // 发送邮件
  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({data: 'ok'});
  } catch (err) {
    return NextResponse.json({data: 'error'}, {status: 500});
  }
}

export async function POST(request: NextRequest) {
  const {name, email, content} = await request.json();
  const res = await sendMail(name, email, content)
  return res
}