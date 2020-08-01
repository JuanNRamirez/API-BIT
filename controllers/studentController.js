const Student = require('../models/studentModel');

function create(req, res) {
    var userStudent = new Student();
    var params = req.body;

    userStudent.firstName = params.firstName;
    userStudent.lastName = params.lastName;
    userStudent.document = params.document;
    userStudent.age = params.age;

    userStudent.save((error, userCreated) => {
        if (error) {
            res.status(500).send({
                message: "Server Error"
            });
        } else {
            if (!userCreated) {
                res.status(400).send({
                    message: "Error creating user"
                });
            } else {
                res.status(200).send({
                    message: "User creation was successful!",
                    userData: userCreated
                });
            }
        }
    });
}

function obtain(req, res) {
    var studentData = req.body;
    var studentID = req.params.id;

    Student.find(studentID, (error, foundStudent) => {
        if (error) {
            res.status(500).send({
                message: "Server Error"
            });
        } else {
            if (!foundStudent) {
                res.status(200).send({
                    message: "Error finding user"
                });
            } else {
                res.status(200).send({
                    message: "User found!",
                    studentData: foundStudent
                });
            }
        }
    });
}

function update(req, res) {
    var userData = req.body;
    var id = req.params.id;

    Student.findByIdAndUpdate(id, userData, (error, userUpdated) => {
        if (error) {
            res.status(500).send({
                message: "Error connecting to the server"
            });
        } else {
            if (!userUpdated) {
                res.status(200).send({
                    message: "Error updating user"
                });
            } else {
                res.status(200).send({
                    message: "User modified successfully",
                    userData: userUpdated
                });
            }
        }
    });
}

function eliminate(req, res) {
    var id = req.params.id;

    Student.findByIdAndDelete(id, (error, eliminatedStudent) => {
        if (error) {
            res.status(500).send({
                message: "Error connecting to the server"
            });
        } else {
            if (!eliminatedStudent) {
                res.status(404).send({
                    message: "Error eliminating user"
                });
            } else {
                res.status(200).send({
                    message: "User deleted successfully",
                    userData: eliminatedStudent
                });
            }
        }
    });  
}

function getUserByID(req, res) {
    var id = req.params.id;
    Student.findById(id, (error, retrievedStudent) => {
        if (error) {
            res.status(500).send({
                message: "Error connecting to the server"
            });
        } else {
            if (!retrievedStudent) {
                res.status(404).send({
                    message: "Error retrieving user"
                });
            } else {
                res.status(200).send({
                    message: "User retrieved successfully",
                    studentData: retrievedStudent
                });
            }
        }
    });
}

module.exports = {
    create,
    obtain,
    update,
    eliminate,
    getUserByID
}