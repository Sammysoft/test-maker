const CryptoJS = require('crypto-js');

const User = require('../models/simpleUser');

module.exports = {
    _loginUser: async (req,res,next)=> {
       try{
        const username = req.body.username;
        const user = User.findOne({username: username})

        !user && res.status(400).json('Wrong Credentials')

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPT_PASS);
        const password = hashedPassword.toString(CryptoJS.enc.utf8);

        password !== req.body.password &&
        res.status(401).json('Invalid Password')

        res.status(200).json( user )
       }catch(err){
            res.status(500).json('Could not login ', err)
       }
    },

    
}