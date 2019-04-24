var Employee = require("../model/employee");

exports.addEmployee = function(req,res){

    console.log(req.body);
    var empId = req.body.empId;
    var empName = req.body.empName;
    var empDesignation = req.body.empDesignation;
    var empAddress = req.body.empAddress;
    
    var newEmp = new Employee({
    
        empId:empId,
        empName:empName,
        empDesignation:empDesignation,
        empAddress:empAddress
    });
    Employee.findOne({empId:empId},function(err,event){
        if(err){
            res.send({status:false,message:"error occured while finding employee",err});
            console.error(err);
        }
        else{

            if(event==null){
                newEmp.save(function(err1,result){
                    if(err1){
                        res.send({status:false,message:"Cannot add employee"});
                    }
                    else{
                        res.send({status:true,message:"Employee details Added Succesfully"});
                        console.log(result);

                    }
                });
            }
            else{
                res.send({status:false,message:"Employee already exist"});
            }
        }
    });

}

exports.getEmployee = function(request,response){

    Employee.find(function(err,res){
        if(err){
            console.log(err);
            // res.send({status:false,message:"error in loading products"});
        }
        else{
            console.log(res);
            // res.send({status:true,message:"Success",res});
            response.json(res);
        }
    });

}

exports.getEmployeeById = function(request,response){

    console.log(request.params.empName);
    var empName = {"empName":request.params.empName};
    Employee.findOne(empName,function(err,res){
        if(err){
            console.log(err);
        }
        console.log(res);
        response.json(res);
    })

}

exports.updateEmployee = function(req,res){

    let empId = req.params.empId;
    var data = {
        
		empName : req.body.empName,
		empDesignation : req.body.empDesignation,
		empAddress : req.body.empAddress
	}
    Employee.findByIdAndUpdate(empId, data, function(err, result) {
        if (err) throw err;
     
        res.send({status:true,message:"updated succesfully - "+result.empName});
        })
}

// exports.deleteEmployee = function(req,res){
//     console.log(req.params.empId);
// 	let id = req.params.empid;
// 	Employee.findByIdAndRemove({empId : id}, function(err,result) {
// 		if (err){
//             console.log(err);
//         }
		
// 		else{
//         res.send('Successfully! Employee has been Deleted.',result);	
//     }
// 	});
// }

exports.deleteEmployee = (req, res) => {
    Employee.findByIdAndRemove(req.params.empId, function (err, result) {
        if (err) { 
            console.log(err);
         res.status(500).send("There was a error in deleting the employee.");
    } else {
        res.status(200).send("Employee "+ result.empId +" was deleted.");
        res.json({ result: result });
    }
    });
};

