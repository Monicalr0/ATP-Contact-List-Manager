const mongoose = require('mongoose')

const dbUri = 'mongodb+srv://admin:atpadmin145@cluster0.xymysbo.mongodb.net/contact_db?retryWrites=true&w=majority'

module.exports = () => {
    return mongoose.connect(dbUri)
}