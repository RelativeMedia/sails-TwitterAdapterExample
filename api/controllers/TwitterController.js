/*---------------------
	:: Twitter
	-> controller
---------------------*/
var TwitterController = {
  timeline: function(req, res){

    //Use the Waterline syntax
    var criteria = {
      where: req.query || req.params
    };

    if(!criteria.where.screen_name) res.send(500, 'screen_name must be specified');
    Twitter.adapter.find('timeline', criteria, function(err, result){
      if(err){
        console.log.error(err);
        res.send(err.statusCode);
      }else{
        sails.log.debug('search/user_timeline result, ', result);
        res.send(result);
      }
    });
  },

  search: function(req, res){
    var criteria = {
      where: {
        q: req.query.q || req.params.query,
        count: req.query.count || req.params.count
      }
    };

    sails.log.debug(criteria);

    Twitter.adapter.find('tweet', criteria, function(err, result){
      if(err){
        sails.log.error(err);
        res.send(err.statusCode);
      }else{
        sails.log.debug('search/tweets result, ', result);
        res.send(result);
      }

    });
  }
};
module.exports = TwitterController;
