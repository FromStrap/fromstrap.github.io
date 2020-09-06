import express from 'express'
import bodyParser from 'body-parser'
import nodemailer from 'nodemailer'

const app = express()
app.use(express.static('.'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


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
      res.json({"Status": "Error", "Error": error})
    } else {
      res.json({"Status": "Sent"})
    }
  })

})



app.listen(8081, () => {
  console.log('Server rodando')
})