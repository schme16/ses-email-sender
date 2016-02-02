var nodemailer = require('nodemailer'),
	htmlToText = require('nodemailer-html-to-text').htmlToText,
	sesTransport = require('nodemailer-ses-transport'),
	transporter,
	noop = function () {},
	queueHandler = function queueHandler () {
		var t = queue.shift();
		if (t) transporter.sendMail(t.data, function (err, res) {
            if (err) console.error(err, t);
			t.callback(err);
        });
	},
	queue = [];

	setInterval(queueHandler, 200)

 
module.exports = function init (aws, force) {
	if (!aws.ServiceUrl) aws.ServiceUrl = 'https://email.us-west-2.amazonaws.com'
	if (!aws.ServiceUrl) aws.ServiceUrl = '587'

	transporter = (!!force ? nodemailer.createTransport(sesTransport(aws)) : transporter || nodemailer.createTransport(sesTransport(aws)))
	transporter.use('compile', htmlToText())
	return function addToQueue(a) {
		var callback = a.callback || noop;
		queue.push({data: a, callback: callback});
	};
}
