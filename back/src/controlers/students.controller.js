const Student =require('../models/stundents.models');
const studentController={};

studentController.getStudents=async(req,res)=>{
     const students = await Student.find();
     res.json(students);
}   
studentController.createStudents=async(req,res)=>{
    const student =new Student(req.body);
    await student.save();
    res.json({
        'status' :'Created'
    });
}   
studentController.getStudent=async(req,res)=>{
    const student=await Student.findById(req.params.id);
    res.json(student);
}   
module.exports=studentController;