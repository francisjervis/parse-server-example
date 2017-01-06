
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('sendPush', function(request, response) {
    var username = request.params.username;
    var message = request.params.message;
    
    console.log(request.params);
    response.success(request.params);
//     Parse.Push.send({
//         channels: [ request.params.channel ],
//         data: {
//             alert: message,
//             sound: 'default',
//             badge: 'Increment'
//         }
//     }, {
//             success: function() {
//                     // Push was successful
//                     console.log('### PUSH SENT');
//                     response.success("### Push sent");
//             },
//             error: function(error) {
//                     // Handle error
//                     console.log('### PUSH FAILED');
//                     response.error("### Push failed: " + error);
//             },
//             useMasterKey: true
//     });
});
