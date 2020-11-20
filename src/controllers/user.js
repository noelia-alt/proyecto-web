const { restart } = require("nodemon");
const User = require('../models/user');
const Prop = require("../models/prop");
const prop = require("../models/prop");
const user = require("../models/user");


module.exports = {

    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },
    
    newUser: async (req, res, next) => {
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(200).json(user);
    },

    getUser: async (req, res, next) => {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        const {userId} = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true});
    },

    updateUser: async (req, res, next) => {
        const {userId} = req.params;
        const newuser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success: true});
    },
    deleteUser: async (req, res, next) => {
        const {userId} = req.params;
        await User.findByIdAndRemove(userId);
        res.status(200).json({success: true});
    },

    getUsersProps: async (req,res,next) => {
        const{userId} = req.params;
        const user = await User.findById(userId).populate('prop');
        res.status(200).json(user);
    },

    newUserProp: async (req,res,next) => {
        const {userId} = req.params;
        const newProp = new Prop(req.body);
        const user = await User.findById(userId);
        newProp.broker = user;
        await newProp.save();
        user.prop.push(newProp);
        await user.save();
        res.status(201).json(newProp);

    }

    


};