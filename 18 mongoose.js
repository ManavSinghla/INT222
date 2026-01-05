import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/college");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        minlength:7,
        maxlength:10
    },
    roll:Number
})
const student = mongoose.model("Student",studentSchema);

// CREATE
await student.create({ name: "Manav", roll: 8 });

// READ
const students = await student.find();
console.log(students);

// UPDATE
await student.updateOne({ name: "Manav" }, { roll: 10 });

// DELETE
await student.deleteOne({ name: "Manav" });