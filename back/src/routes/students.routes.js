const express=require('express');
const router = express.Router();
const student =require('../controlers/students.controller');

router.get('/',student.getStudents);
router.post('/',student.createStudents);
router.get('/:id',student.getStudent);
module.exports=router;