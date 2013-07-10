# Sails-TwitterExample
TwitterAdapter.js is mostly from the [sails-twitter](http://github.com/balderdashy/sails-twitter) repository, just modified slightly to work with 0.9x and a few of my own goodies.

Edit `/config/adapters.js` with your twitter API credentials.
run `sails lift` from the working directory

##Examples
Here are a few things you can do so far.. You can pass get parameters or use a simplified version accessible via URLs.

###pull a users timeline with limit..
**syntax** `localhost:1337/twitter/timeline/<screen_name>/<count>`

- for example: `http://localhost:1337/twitter/timeline/gorelative/3`
- or via GET PARAMS: `http://localhost:1337/twitter/timeline?screen_name=gorelative&count=20&exclude_replies=1`

###Search for tweets..
**syntax** `localhost:1337/twitter/search/<query>/<count>`

- for example: `http://localhost:1337/twitter/search/bananas/3`
- or via GET PARAMS: `http://localhost:1337/twitter/search/@nettuts/10`
- or via GET PARAMS: `http://localhost:1337/twitter/search?q=banana since:2013-07-06 until:2013-07-07&count=10`

##Todo

- Update documentation
- Perform some simple validations
