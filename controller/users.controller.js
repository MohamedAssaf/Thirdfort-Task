const user = require('../models/user.model');

exports.test = (req, res) => {
    res.send('Greetings from the user controller!');
};

exports.userLogIn = (req, res) => {
    let query = { name: req.body.name };
    user.findOne( query , (err, usr) => {
        if (err) return next(err);
        if(!usr){
            res.status(404).json({success: false, error :'no such user'});
        }
        if(!req.body.password) {
            res.status(422).json({success: false, error :'The password are missing'});
        }
        if(usr.password == req.body.password){
            res.status(200).json({userId: usr.id});
        } else {
            res.status(400).json({success: false, error :'The password is wrong'})

        }

    })
}
exports.userSignUp = (req, res) => {
    if(!req.body.name || !req.body.password){
        res.status(422).json({success: false, error :'Either the name or the password are missing'});
    }
    let usr = new user(
        {
            name: req.body.name,
            password: req.body.password,
            notes: req.body.notes
        }
    );
    
    usr.save((err) => {
        if (err) {
            console.log("WHOA WHAT HAPPENED HERE")
            console.log(err);
        }
        res.send({userId: usr.id})
    })
};

