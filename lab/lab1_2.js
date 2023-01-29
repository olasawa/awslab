// //stub for lab 1_2
// var AWS = require('aws-sdk');
// let os = require("os");
// AWS.config.loadFromPath('./config.json');

// let ec2 = new AWS.EC2({region: 'us-east-1'});

// var task =  function(request, callback){
// 	var params = {
//         ImageId: "ami-0574da719dca65348",  
//         InstanceType: "t2.micro",
//         MaxCount: 1,
//         MinCount: 1,
//        };
       
//        ec2.runInstances(params, function(err, data) {
//          if (err) console.log(err, err.stack); // an error occurred
//          else{
//             console.log(data);           // successful response

//             let params = { InstanceIds: data.Instances.map(instance => instance.InstanceId) };
//             ec2.waitFor('instanceRunning', params, function(err, data) {
//                 if (err) console.log(err, err.stack); // an error occurred
//                 else{     
//                     console.log(data);           // successful response
//                     const instancesPublicIds = data.Reservations[0].Instances.map(instance => instance.PublicIpAddress).filter(id => id);
//                     callback(null, 'IP/DNS of ran instance:<br>' + instancesPublicIds.join('<br>') + `<hr><br>Service provided by: ${os.hostname()}`);
//                 }
//           });
//        }
//     });
// }

// exports.lab = task