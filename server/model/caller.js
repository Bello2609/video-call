const mongoose = require("mongoose");
const { Schema } = mongoose;

const callerSchema = new Schema({
    name: {
        type: String,
        required: true
    } 
});
module.exports = mongoose.model("Caller", callerSchema);
