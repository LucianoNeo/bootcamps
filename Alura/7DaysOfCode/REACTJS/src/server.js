import express from 'express'
import nodemailer from 'nodemailer'
import sendGridTransport from 'nodemailer-sendgrid-transport'
import cors from 'cors'

const app = express()
const PORT = 5000
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: 
    }
}))

app.post('/send', (req, res) => {
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
})
app.listen(PORT, () => {
    console.log('Servidor de API rodando na porta:', PORT)
})