const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            minLength: 1,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            minLength: 1,
            trim: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 3,
        },
        address: {
            type: String,
            required: true,
            minLength: 3,
        }
    },
    {
        // Track creation and update time of fields/
        timestamp: true,

    })

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact