
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});


Parse.Cloud.define('sendPush', function(request, response) {

    console.log(request.params);
//     response.success(request.params);
  
    var targetUserId = request.params.targetUserId
    var query = new Parse.Query(Parse.Installation);
  
    Parse.Push.send({

      query.equalTo('owner', targetUserId);

      where: query,
      data: request.params
    }, {
      useMasterKey: true,
      success: function() {
        response.success("### Push sent")
      },
      error: function(error) {
        response.error("### Push failed: " + error);
      }
    });
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
