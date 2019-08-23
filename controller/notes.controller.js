const user = require('../models/user.model');
const mongoose = require('mongoose');


exports.test =  (req, res) => {
    res.send('Greetings from the Test controller!');
};

exports.noteCreate = (req, res) => {
    let id = mongoose.Types.ObjectId();
    user.findByIdAndUpdate(req.body.id,
        { "$push": { "notes":{ "_id": id, "text" :req.body.text, "isDeleted":false, "isArchived":false } } },
        (err, usr) => {
        if (err) res.status(400).json({err})
        res.status(200).json({noteId: id});
    })
};

exports.noteUpdate = (req, res) => {
    
    user.findOneAndUpdate(
        {  _id:req.body.id, "notes._id": req.body.noteId },
        { $set: { "notes.$.text": req.body.text } },
        (err, usr) => {
            if(err) res.status(400).json({err})
            res.status(200).json({success: true});
        }
    );
};

exports.noteDelete = (req, res) => {
    user.findOneAndUpdate(
        {  _id:req.body.id, "notes._id": req.body.noteId },
        { $set: { "notes.$.isDeleted": true } },
        (err, usr) => {
            if(err) res.status(400).json({err})
            res.status(200).json({success: true});
        }
    );
};

exports.noteArchive = (req, res) => {
    user.findOneAndUpdate(
        {  _id:req.body.id, "notes._id": req.body.noteId },
        { $set: { "notes.$.isArchived": true } },
        (err, usr) => {
            if(err) res.status(400).json({err})
            res.status(200).json({success: true});

        }
    );
};

exports.noteUnArchive = (req, res) => {
    user.findOneAndUpdate(
        {  _id:req.body.id, "notes._id": req.body.noteId },
        { $set: { "notes.$.isArchived": false } },
        (err, usr) => {
            if(err) res.status(400).json({err})
            res.status(200).json({success: true});
        }
    );
};

exports.noteUnArchivedList = (req, res) => {
    user.find(
        {  _id:req.body.id  },
        (err,usr) => {
            if(err) res.status(400).json({err})

            let notesArray = usr[0].notes.filter( (note) =>  {
                return note.isArchived == false &&
                        note.isDeleted == false
              });
            res.status(200).json({data: notesArray});
        })
}

exports.noteArchivedList = (req, res) => {
    user.find(
        {  _id:req.body.id  },
        (err,usr) => {
            if(err) res.status(400).json({err})
            let notesArray = usr[0].notes.filter( (note) =>  {
                return note.isArchived == true &&
                        note.isDeleted == false
              });
            res.status(200).json({data: notesArray});
        })
}
