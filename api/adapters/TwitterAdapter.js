/*---------------------
  :: TwitterAdapter
  -> adapter
---------------------*/
var Twit = require('twit');
module.exports = {
  connections: {},
  registerCollection: function (collection, cb) {
    var config = this.config;
    connections = {
      api: new Twit({
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token: config.access_token,
        access_token_secret: config.access_token_secret
       })
    }
    cb();
  },
  find: function(collectionName, options, cb) {
    // for now, only use the "where" part of the criteria set

    var criteria = options.where || {};
    switch (collectionName) {
      case 'tweet'  : return searchTweets(collectionName, criteria, afterwards);
      case 'timeline' : return getTimeline(collectionName, criteria, afterwards);
      default: return afterwards('Unknown usage of find() with model ('+collectionName+') ');
    }
    function afterwards (err, results) {
      if (err) return cb(err);
      if (options.limit) return cb(null, _.first(results,options.limit));
      return cb(err,results);
    }
  }
};

function searchTweets(collectionName, criteria, cb) {
  sails.log.debug(criteria);
  connections.api.get('search/tweets', criteria, function (err, result) {
    if (err) return cb(err);
    if (!(result && result.statuses) ) return cb(result);
    cb(err, result.statuses);
  });
}

function getTimeline(collectionName, criteria, cb){
  console.log('getting timeline data for user: ', criteria);
  if(criteria.limit) criteria.count = criteria.limit;

  connections.api.get('statuses/user_timeline', criteria, function(err, result){
    if (err) return cb(err, null);
    if (!(result && result) ) return cb(result);
    cb(err, result);
  });
}
