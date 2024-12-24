const Patient = require('../models/patientModel');

// Get all patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving patients', error });
    }
};

// Add a new patient
exports.addPatient = async (req, res) => {
    const newPatient = new Patient(req.body);
    try {
        const savedPatient = await newPatient.save();
        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error adding patient', error });
    }
};

// Update patient information
exports.updatePatient = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(400).json({ message: 'Error updating patient', error });
    }
};

// Get patient by ID
exports.getPatientById = async (req, res) => {
    const { id } = req.params;
    try {
        const patient = await Patient.findById(id);
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving patient', error });
    }
};