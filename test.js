
//Initialize the library (only required once)
var email = require('./index.js')({
		AWSAccessKeyID: process.env.AWSAccessKeyID,
		AWSSecretKey: process.env.AWSSecretKey
	})

//How to send an email
email({
	from: "schme16@gmail.com", // sender address
	to: "shane.gadsby@usq.edu.au", // list of receivers, can be semicolon seperated
	subject: "Lets eat at Maccas tonight", // Subject line
	html: "Hey Shane, lets go eat at MacDonalds tonight!", // HTML message to send
	ics: {
		'organizerName':'Shazza',
		'organizerEmail':'schme16@gmail.com',
		'attendeeName':'Shane Gadsby',
		'attendeeEmail':'shane.gadsby@usq.edu.au',
		'body':'This is gonna be delish!',
		'subject':'Want to get Maccas for dinner tonight?',
		'location':'Maccas',
		'start': new Date(),
		'end': new Date(),
		'currentTime': new Date()
	}
})