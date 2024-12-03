const User = require('../models/userModel'); 

// Get all users
exports.handleGetAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
exports.handleGetUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update user by ID
exports.handleUpdateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ status: 'Success', updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete user by ID
exports.handleDeleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ status: 'Success', deletedUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
exports.handleCreateUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
