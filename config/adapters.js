// Configure installed adapters
// If you define an attribute in your model definition,
// it will override anything from this global config.
module.exports.adapters = {

	// If you leave the adapter config unspecified
	// in a model definition, 'default' will be used.
	'default': 'disk',

	// In-memory adapter for DEVELOPMENT ONLY
	memory: {
		module: 'sails-memory'
	},

	// Persistent adapter for DEVELOPMENT ONLY
	// (data IS preserved when the server shuts down)
	disk: {
		module: 'sails-disk'
	},

	//get these keys from your developer profile for twitter
	twitter: {
		consumer_key: 'foo',
		consumer_secret: 'bar',
		access_token: 'baz',
		access_token_secret: 'bang'
	}
};
