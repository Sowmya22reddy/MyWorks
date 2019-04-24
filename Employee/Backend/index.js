var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
// const jwt = require('jsonwebtoken');
var Employee = require("./server/route/employees");

mongoose.connect("mongodb://localhost/EMPLOYEE");

var db = mongoose.connection;
var app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/dummy.restapiexample.com/api/v1/addEmployee',Employee.addEmployee);
app.get('/dummy.restapiexample.com/api/v1/getEmployee',Employee.getEmployee);
app.get('/dummy.restapiexample.com/api/v1/getEmployee/:empName',Employee.getEmployeeById);
app.put('/dummy.restapiexample.com/api/v1/updateEmployee:empId',Employee.updateEmployee);
  app.delete('/dummy.restapiexample.com/api/v1/deleteEmployee:empId',Employee.deleteEmployee);  

app.listen(8888,function(){
    console.log("server started");
});
