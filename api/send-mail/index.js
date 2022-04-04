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
  to: "raul.argott@aumenta.mx",
  subject: "Información contacto",
  text: ``,
};
module.exports = async function (context, req) {
  try{
    context.log('JavaScript HTTP trigger function processed a request.');
    mailOptions.text = `Un cliente ha enviado su informacion de contacto.Nombre : ${req.body.name}.Apellido: ${req.body.lastname}.Email: ${req.body.email}.Teléfono: ${req.body.phone}.Mensaje : ${req.body.message}`
    transporter.sendMail(mailOptions, function (err, data) {});
    context.res.json({
      text: "SENT",
      success : true
    });
  }catch(err){
    context.res.json({
      text: "ERROR",
      success : false
    });
  }

}
