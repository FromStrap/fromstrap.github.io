import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express()
// app.use(express.static('.'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  app.use(cors())
  next()
})
// Routes
app.post('/form', (req, res) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOps = {
    from: 'contato.fromstrap@gmail.com',
    to: 'fromstrap@gmail.com',
    subject: 'Projeto',
    text:
    `
    Nome: ${req.body.name}
    Email: ${req.body.mail}
    Telefone: ${req.body.phone}
    Mensagem: ${req.body.msg}
  `
  }

  transporter.sendMail(mailOps, (error, data) => {
    if (error) {
      res.json({code: 200, message: 'Erro ao enviar o email'})
    } else {
      res.json({Code: 502, message: 'Email enviado'})
    }
  })

})

app.listen(8081, () => {
  console.log('Server rodando')
})