const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
    try {
     if(authHeader){
         const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.TOKEN_KEY)
        .then(user => {
            req.user = user
            next();
        }).catch(err=>{
            err
                return res.status(403).json('Invalid Token')
        })
     }else{
         return res.status(401).json('You are not authenticated')
     }
    } catch (error) {

    }
}




const verifyTokenAndAuth = (req,res,next) => {
verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json('Access denied')
        }
    })
}


module.exports = {
    verifyTokenAndAuth
}