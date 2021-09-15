const Staff = require('../models/staff-model');

module.exports = {
    _addStaff: (req,res,next) => {
        console.log(req.body)
        const staff = req.body
        const newStaff = new Staff( staff )

        newStaff.save()
            .then(res.json(`Successfully added ${staff.lastname} to Calibrain`))
    },
    _removeStaff: (req,res,next) =>{
        Staff.findByIdAndDelete(req.params.id, ()=>{
            console.log('You just removed a staff...')
        })
    }
}