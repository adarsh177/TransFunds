const express = require('express');
const fs = require('fs');
const MailsManager = require('./MailsManager');
const utils = require('./Utils');

const app = express();

const secret = JSON.parse(fs.readFileSync('./secret.json', {encoding: "utf-8"}));
const config = require('./config.json');
const mailManager = new MailsManager();
mailManager.init(secret.email, secret.pass);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/AddNGO_SendOTP', (req, res) => {
    if(req.body['ngoId']){
        utils.GetNGODetails(req.body['ngoId'], (error, details) => {
            if(error == null){
                if(details.email){
                    let otp = utils.GenerateOTP(6);
                    let v_id = utils.GenerateRandomString(10);
                    mailManager.sendMail(details.email, "OTP", `OTP To register your ngo ${details.name} is: ${otp}, ${req.body.address}`, '', 'TransFUNDS - NGO Registration');
                    fs.writeFileSync(`./otp/${v_id}`, otp.toString());
                    res.status(200);
                    res.send({
                        success: 1,
                        v_id: v_id,
                        message: "OTP Sent"
                    });
                }else{
                    res.status(500);
                    res.send({
                        success: 0,
                        error: "Email not found!"
                    });    
                }
            }else{
                res.status(500);
                res.send({
                    success: 0,
                    error: error
                });
            }
        })
        mailManager.sendMail('adarsh1772000@gmail.com', "OTP", `Otp is here!! ${req.body.ngoId}, ${req.body.address}`, '', 'TransFUNDS');
    }else{
        res.status(400);
        res.send({
            success: 0
        });    
    }
});

app.post('/AddNGO_VerifyOTP', (req,res) => {
    if(req.body.v_id && req.body.otp && req.body.ngoId && req.body.wallet){
        if(fs.existsSync(`./otp/${req.body.v_id}`)){
            let otp = fs.readFileSync(`./otp/${req.body.v_id}`, {encoding: "utf-8"});
            if(otp == req.body.otp){
                // add ngo
                utils.AddNGO(req.body.wallet, utils.GetLastPartOfNGOId(req.body.ngoId), config, secret.mnemonic, (err, rslt) => {
                    if(err == null){
                        res.status(200);
                        res.send({
                            success: 1,
                            message: "NGO Added"
                        });
                    }else{
                        res.status(500);
                        res.send({
                            success: 0,
                            message: "Error Adding NGO"
                        });        
                    }
                })
                fs.unlinkSync(`./otp/${req.body.v_id}`);
            }else{
                res.status(403);
                res.send({
                    success: 0,
                    message: "Invalid otp"
                });        
            }
        }else{
            res.status(400);
            res.send({
                success: 0,
                message: "Invalid v_id"
            });        
        }
        
    }else{
        res.status(400);
        res.send({
            success: 0
        });    
    }
});

app.listen(2020);