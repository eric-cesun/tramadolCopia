const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/messaje', (req, res) => {
    contentHtml = `
        <h1>Pedido de ${req.body.medicine}</h1>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Name: ${req.body.name}</li>
            <li>Option Page: ${req.body.page}</li>
        </ul>
    `;
    //https://ethereal.email/create
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'loren75@ethereal.email',
            pass: '9PurG8xxDndQ2UVnav'
        }
    });
    var mailOptions = {
        from: '"Our Code World " <ericd.1996_@outlook.com>',
        to: "ericd1996@outlook.com",
        subject: "Compra",
        html: contentHtml
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.json({ ok: false })
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
    res.json({ ok: true })
});

router.post('/messaje2', (req, res) => {
    contentHtml = `
        <h1>comentario de ${req.body.name}</h1>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>commentary: ${req.body.message}</li>
        </ul>
    `;
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'loren75@ethereal.email',
            pass: '9PurG8xxDndQ2UVnav'
        }
    });
    var mailOptions = {
        from: '"Our Code World " <ericd.1996_@outlook.com>',
        to: "ericd1996@outlook.com",
        subject: "Commentario",
        html: contentHtml
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            res.json({ ok: false })
            return console.log(error);
        }

        console.log('Message sent: ' + info.response);
    });
    res.json({ ok: true })
});

module.exports = router;