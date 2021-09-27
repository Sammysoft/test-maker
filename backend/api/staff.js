const { json } = require('body-parser');
const Staff = require('../models/staff-model');


module.exports = {
    _addStaff: async (req,res,next) => {
        console.log(req.body)
        const staff = req.body
        const newStaff = await new Staff( staff )

        newStaff.save()
            .then(res.json(`Successfully added ${staff.lastname} to Calibrain`))
    },
    _removeStaff: async (req,res,next) =>{
        const toBeDeleted = await Staff.findOne({_id: req.params.id})
        try {
            await  Staff.findByIdAndDelete(req.params.id)
            res.status(200).json(`${toBeDeleted.firstname} can no longer use Calibrain`)
        } catch (error) {
            res.status(400).json(`Unable to delete ${toBeDeleted.firstname}`)
        }
        },


        _getAllStaffs : async(req,res,next) => {
          try {
            const allStaffs = await Staff.find();
            res.status(200).json(allStaffs)
          } catch (error) {
                res.status(400).json('Unable to get all staffs')
          }

        },

        _getAStaff: async (req,res,next) => {
            try {
                const oneStaff = await Staff.findById(req.params.id);
                res.status(200).json( oneStaff )
            } catch (error) {
                res.status(400).json('Could not get staff')
            }
        }
}