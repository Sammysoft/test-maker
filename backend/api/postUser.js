
require('../models/simpleUser')

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
        const newUser = new User(user)

        .then(()=> newUser.save()
                .then(()=>{
                    res.json('User added...')
                }) .catch((err)=> {
                    res.status(400).json('Error occured...')
                })
                )
        .catch((err)=> {
            res.status(400).json('Error occured...')
        })
    }



}