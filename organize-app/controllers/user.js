const { User } = require('../models')
const bcrypt = require('bcrypt')
const { createToken } = require('../helpers/jwt')
const nodemailer = require("nodemailer")

class UserController {
    static async register(req, res, next) {
        try {
            const { name, email, password, address } = req.body
            const response = await User.create({ name, email, password, address })
            
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.USER_NODEMAILER,
                    pass: process.env.PASSWORD_NODEMAILER,
                },
            })
            let notif = {
                from: process.env.USER_NODEMAILER,
                to: email,
                subject: 'Success Register Organize App',
                text: 'Welcome to organize app, lets organize your tasks!'
            }
            transporter.sendMail(notif, (err, data)=>{
                if(err){
                    console.log(err, 'Email not send');
                } else {
                    console.log('Email has been sent');
                }
            })
            res.status(201).json({
                name: response.name,
                email: response.email
            })
        } catch (err) {
            next(err)
        }
    }
    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: "notFoundId" }
            }
            const response = await User.findOne({
                where: { email }
            })
            if (!response) {
                throw { name: 'notFoundId' }
            }
            const isValidPassword = bcrypt.compareSync(password, response.password)
            if (!isValidPassword) {
                throw { name: 'notFoundId' }
            }
            const payload = {
                id: response.id,
                email: response.email,
            }
            const userById = {
                id: response.id,
                email: response.email,
                role: response.role
            }
            res.status(200).json({ access_token: createToken(payload), userById })
        } catch (err) {
            next(err)
        }
    }
    // static async loginFB(req, res, next) {
    //     passport.use(new FacebookStrategy({
    //         clientID: FACEBOOK_APP_ID,
    //         clientSecret: FACEBOOK_APP_SECRET,
    //         callbackURL: "http://localhost:3000/auth/facebook/callback"
    //     },
    //         function (accessToken, refreshToken, profile, cb) {
    //             User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    //                 return cb(err, user);
    //             });
    //         }
    //     ));
    // }
}

module.exports = UserController