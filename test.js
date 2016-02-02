
//Initialize the library (only required once)
var email = require('./index.js')({
	AWSAccessKeyID: process.env.AWSAccessKeyID,
	AWSSecretKey: process.env.AWSSecretKey
})

//How to send an email
email({
	from: "schme16@gmail.com", // sender address
	to: "schme16@gmail.com", // list of receivers, can be semicolon seperated
	subject: "Lets eat at Maccas tonight", // Subject line
	html: "Hey Shane, lets go eat at MacDonalds tonight!" // HTML message to send
})