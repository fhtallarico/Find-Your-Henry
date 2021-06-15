const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  contentHTML = `
  <h1>User Information</h1>
  <ul>
  <li>User Name: ${name} </li>
  <li>User Email: ${email} </li>
  <li><p>${message}</p></li>
  <ul/>
  `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "henrydevjobs@gmail.com", // generated ethereal user
      pass: "ejpictgicjxfqvwb", // generated ethereal password, guardar en una .env
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const info = await transporter.sendMail({
    from: "Admin de Henry Job Dev <henrydevjobs@gmail.com>",
    to: "juan.villalba08@gmail.com",
    subject: "Se quieren contactar con Ud.",
    text: "Felicidades, hay un reclutador que esta interesado en vos",
  });

  console.log("message send", info.messageId);

  res.redirect("/catalogue");
});

module.exports = router;
