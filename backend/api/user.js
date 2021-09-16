
const User = require('../models/simpleUser');
const CryptoJS = require('crypto-js');
require('dotenv').config();

module.exports = {
    getUser: (req,res,next)=> {
        User.find()
            .then((result)=>{
                res.json(result)
            })
            .catch(err => res.status(400).json('error occured..'))
    },

    postUser: async (req,res,next)=> {
     const { username, password, email, position } = req.body;

     const user = new User({
         password: CryptoJS.AES.encrypt(password, process.env.CRYPT_PASS).toString(),
         email,
         position,
         username
     })
     console.log( password )
            try{
            const newUser = await user.save()
            res.status(200).json( newUser )

            }catch(err){
                    res.status(400).json("Could not add a new user ", err)
            }

    }
}