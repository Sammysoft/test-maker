const CryptoJS = require('crypto-js');
const bcrypt = require('bcryptjs');
const User = require('../models/simpleUser');

module.exports = {
    _loginUser: async (req,res,next)=> {
       try{
        const { username, password } = req.body;
        const user = await User.findOne({username: username})

        !user && res.status(400).json('Wrong Credentials')

       bcrypt.compare(password, user.password, (err, isMatch)=>{
            isMatch && res.status(200).json( user )
            res.status(401).json('Invalid Password')
       })
       }catch(err){
            res.status(500).json('Could not login ', err)
       }
    },

}