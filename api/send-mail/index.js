const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  name: "hostgator",
  host: "mail.radarcontroltotal.com",
  port: 587,
  secure: false,
  auth: {
    user: "no-reply@radarcontroltotal.com",
    pass: "uw5de$PBWu8b",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
var mailOptions = {
  from: "no-reply@radarcontroltotal.com",
  to: "axel.lopez@aumenta.mx",
  subject: "Información contacto",
  text: ``,
};
module.exports = async function (context, req) {
  console.log(req.body)
  mailOptions.text = `Un cliente ha enviado su informacion de contacto.Nombre : ${req.body.name}.Apellido: ${req.body.lastname}.Email: ${req.body.email}.Teléfono: ${req.body.phone}.Mensaje : ${req.body.message}`
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      context.res.status(200).json({
        text: "Error: "+err
      });
    } else {
      context.res.status(200).json({
        text: "Success"
      });
    }
  });

}
