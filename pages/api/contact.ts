// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400).json({ message: "全ての項目を入力してください。" });
    return;
  }

  // nodemailer設定（環境変数で設定推奨）
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_MAIL_USER,
      pass: process.env.CONTACT_MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_MAIL_TO || process.env.CONTACT_MAIL_USER,
      subject: `お問い合わせ: ${name}`,
      text: message,
    });
    res.status(200).json({ message: "メール送信完了" });
  } catch (error) {
    res.status(500).json({ message: "メール送信に失敗しました。" });
  }
}