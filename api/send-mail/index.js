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
  to: "ventas@radarcontroltotal.com",
  subject: "Información contacto",
  text: ``,
  html: ``,
};
module.exports = async function (context, req) {
  try{
    context.log('JavaScript HTTP trigger function processed a request.');
    mailOptions.text = `Un cliente ha enviado su informacion de contacto.Nombre : ${req.body.name}.Apellido: ${req.body.lastname}.Email: ${req.body.email}.Teléfono: ${req.body.phone}.Mensaje : ${req.body.message}`
    mailOptions.html = `<p>Un cliente ha enviado su informacion de contacto.</p><p>Nombre : ${req.body.name}</p><p>Apellido: ${req.body.lastname}.</p><p>Email: ${req.body.email}.</p><p>Teléfono: ${req.body.phone}.</p><p>Mensaje : ${req.body.message}</p>`
    await transporter.sendMail(mailOptions);
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
