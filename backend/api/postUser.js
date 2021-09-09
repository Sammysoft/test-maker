
const User = require('../models/simpleUser')

module.exports = {
    getUser: ()=> {
        User.find()
            .then((result)=>{
                res.json(result)
            })
            .catch(err => res.status(400).json('error occured..'))
    },

    postUser: (req,res,next)=> {
        const user  = req.body
        console.log(user)
        const newUser = new User(user)
            newUser.save()
                .then(()=>{
                    res.json('User inserted...')
                })
    }
}