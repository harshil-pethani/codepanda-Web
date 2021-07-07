const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config({path: "./config.env"})


const port = process.env.PORT || 4000;

//Middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
})

app.post('/sendmsg', (req, res) => {
    const { industry,
        serviceType,
        company,
        fullname,
        email,
        mobile } = req.body;

    req.body.subject = "Client Form";

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.PASS}`
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: `${process.env.EMAIL}`,
        subject: `Message from ${req.body.email} : ${req.body.subject}`,
        text: `
            industry    :   ${industry},
            serviceType :   ${serviceType},
            company     :   ${company},
            fullname    :   ${fullname},
            email       :   ${email} ,
            mobile      :   ${mobile} 
        `
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Email sending Failed");
            console.log(error);
            res.send(error);
        } else {
            console.log(`Email Send : ${info.response}`);
            res.send(`success`);
        }
    })
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});