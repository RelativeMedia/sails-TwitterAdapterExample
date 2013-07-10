# Sails-TwitterExample
TwitterAdapter.js is mostly from the [sails-twitter](http://github.com/balderdashy/sails-twitter) repository, just modified slightly to work with 0.9x

Edit `/config/adapters.js` with your twitter API credentials.
run `sails lift` from the working directory
visit web browser at `localhost:1337/twitter/timeline/<screen_name>/<count>`

for example: `http://localhost:1337/twitter/timeline/gorelative/3`

Add additional routes and actions to the TwitterController for things other than timeline..

##Todo

- Need to update the TwitterAdapter.js file to not have to be accessed via `Twitter.adapter.find()` and hopefully just `Twitter.find()`
