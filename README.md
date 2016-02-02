# ses-email-sender
Send emails using Amazons SES services via NodeJS + Nodemailer



##Installation
`npm install ses-email-sender`

##Usage
```javascript

//Initialize the library (only required once)
var email = require('ses-email-sender')({
	AWSAccessKeyID: "<YOUR_AWS_KEY_ID>",
	AWSSecretKey: "<YOUR_AWS_SECRET_KEY>",
	ServiceUrl: "<YOUR_AWS_SERVICE_URL>", (optional, defaults to 'https://email.us-west-2.amazonaws.com')
	port: "<SES_PORT>" (optional, defaults to 587)
})

//How to send an email
//This is actually just feeding this data into a Nodemailer object, so anything that can be done there, can be done here. see:  https://github.com/andris9/Nodemailer
email({
	from: "Jane Doe <Jane.Doe@email.com>", // sender address
	to: "John Doe <John.Dow@email.com>", // list of receivers, can be semicolon seperated
	subject: "Lets eat at Maccas tonight", // Subject line
	attachments: [], //optional, see: https://github.com/andris9/Nodemailer#attachments
	html: "Hey, wanna grab some cheeseburgz from MacDonalds tonight?" // HTML message to send
})

```