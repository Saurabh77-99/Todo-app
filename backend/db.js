const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:spade@cluster0.jhbbojy.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {
    todo:todo
}