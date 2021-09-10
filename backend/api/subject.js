
const Subject = require('../models/subjects.Schema');

module.exports = {
    _addSubject : (req,res,next) => {
        const subject = req.body;
        console.log(subject);

        const newSubject = new Subject(subject);

        newSubject.save()
            .then(()=>{
                res.status(200).json('You have succesfully added a subject')
            })
            .catch(err => res.status(400).json('Could not add subject ', err ))
    },
    _getSubject: (req,res,next) => {
        Subject.find()
            .then(response => res.json(response))
            .catch(err=> res.json(err))
    },

    _addStdSub: (req,res,next) => {
        Subject.findById(req.params.id, function(err, result){
            const document = req.body;
           result.student.push(document);
           result.save()
           res.json(`You have enrolled a new student for ${result.subjectName}`)
        })
    }
}