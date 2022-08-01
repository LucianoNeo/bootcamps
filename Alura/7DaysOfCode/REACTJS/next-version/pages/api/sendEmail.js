import nodemailer from 'nodemailer'
import sendGridTransport from 'nodemailer-sendgrid-transport'


const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}))


export default function handler(req, res) {
    if (req.method === 'POST') {
        const { emailValue, mensagem, assunto, titulo } = req.body
        transporter.sendMail({
            to: emailValue,
            from: 'tec.info.luciano@hotmail.com',
            subject: assunto,
            html: `<h3>${titulo}</h3>
                    <p>${mensagem}</p>`
        }).then(resp => {
            res.json({ resp })
        })
            .catch(err => {
                console.log(err)
            })
    } else {
        res.status(200).json({ Olá: 'Neo' })
        console.log('comunicando com GET')
    }
  }