import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "5e601e78046d82",
    pass: "4b80b8639c5e10"
  }
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback <oi@feedback.com>',
      to: 'Patrick Santos <patrickfrews@gmail.com>',
      subject,
      html: body,
    })
  };
}