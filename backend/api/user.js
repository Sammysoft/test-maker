
const User = require('../models/simpleUser');
const bcrypt = require('bcryptjs');
require('dotenv').config();

module.exports = {
    _getUser: (req,res,next)=> {
        User.find()
            .then((result)=>{
                res.json(result)
            })
            .catch(err => res.status(400).json('error occured..'))
    },

    _postUser: async (req,res,next)=> {
     const { username, password, email, position } = req.body;
     const user = await new User()
     user.password = password
     user.email = email
     user.username = username
     user.position = position
            try{
            bcrypt.genSalt(10, (err, salt)=>{
                !err
                bcrypt.hash(user.password, salt, async (err, hash)=>{
                    !err
                        user.password = hash;
                        const newUser = await user.save()
                        res.status(200).json( newUser )
                })
            })
            }catch(err){
                    res.status(400).json("Could not add a new user ", err)
            }

    }
}