var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({

    empId:{
        type:Number
    },
    empName:{
        type:String
    },
    empDesignation:{
        type:String
    },
    empAddress:{
        type:String
    }

});

var Employee = module.exports = mongoose.model('Employee',EmployeeSchema);