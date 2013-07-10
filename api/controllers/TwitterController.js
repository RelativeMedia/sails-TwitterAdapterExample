/*---------------------
	:: Twitter
	-> controller
---------------------*/
var TwitterController = {
  timeline: function(req, res){

    //Use the Waterline syntax
    var criteria = {
      where: {
        screen_name: req.params.screen_name,
        count: req.params.count
      }
    };

    Twitter.adapter.find('timeline', criteria, function(err, result){
      res.send(result);
    });
  }
};
module.exports = TwitterController;
