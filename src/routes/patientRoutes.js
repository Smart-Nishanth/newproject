const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Route to get all patients
router.get('/', patientController.getAllPatients);

// Route to get a specific patient by ID
router.get('/:id', patientController.getPatientById);

// Route to add a new patient
router.post('/', patientController.addPatient);

// Route to update an existing patient
router.put('/:id', patientController.updatePatient);

// Route to delete a patient
router.delete('/:id', patientController.deletePatient);

module.exports = router;