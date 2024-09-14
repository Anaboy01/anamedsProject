const express = require('express');
const { registerPatient, sendVerificationEmail, verifyPatient, loginPatient, sendLoginCode, loginWithCode, forgotPassword, resetPassword, changePassword, updatePatient, deletePatient, getAllPatients, getPatient, loginStatus, requestAccessToPatientData, accessPatientDataWithCode, addPatientFile, getPatientFilesByHospitalId, getPatientFilesByDoctorId, logoutPatient,  getPatientFileById, getPatientFiles } = require('../controllers/patientController');
const { patientProtect, patientAdminOnly, doctorProtect, hospitalProtect } = require('../middleware/authMiddleware');



const patientRouter = express.Router()

patientRouter.post('/registerPatient', registerPatient)
patientRouter.post('/loginPatient', loginPatient)
patientRouter.post('/sendPatientLoginCode/:email', sendLoginCode)
patientRouter.post('/loginPatientWithCode/:email', loginWithCode)
patientRouter.get('/getPatient',patientProtect, getPatient)
patientRouter.get('/logout', logoutPatient)

patientRouter.patch('/updatePatient',patientProtect, updatePatient)
patientRouter.delete('/:id',patientProtect,patientAdminOnly, deletePatient)
patientRouter.get('/getAllPatients',patientProtect,patientAdminOnly, getAllPatients)
patientRouter.get('/loginStatus',loginStatus)



patientRouter.post('/sendPatientVerificationEmail',patientProtect,  sendVerificationEmail)
patientRouter.patch('/verifyPatient/:verificationToken', verifyPatient)
patientRouter.post('/forgotPassword',forgotPassword)
patientRouter.patch('/resetPassword/:resetToken', resetPassword)
patientRouter.patch('/changePassword',patientProtect, changePassword),

patientRouter.get('/getPatientFileById/:email', getPatientFileById);

patientRouter.get('/getPatientFilesByHospitalId/:email',hospitalProtect, getPatientFilesByHospitalId);
patientRouter.get("/getPatientFiles", patientProtect, getPatientFiles);


module.exports = patientRouter

// 