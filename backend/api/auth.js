
const bcrypt = require('bcryptjs');
const User = require('../models/simpleUser');

module.exports = {
     _loginUser: async (req,res,next)=> {
          const { username,password } = req.body;
          console.log(username)
          const user = await User.findOne({username: username})
          if(!user){
               res.status(400).json('Wrong Credentials')
          }else{
          user
               try {
                    bcrypt.compare( password, user.password, (err, isMatch)=>{
                        if(isMatch){
                            res.status(200).json( user )
                        }else{
                            res.status(400).json('Wrong password')
                        }
                    })

               } catch (error) {
                    res.status(400).json( error)
               }
           }
       }
}