const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory || fs.mkdirSync(logDirectory));

const accessLogStream = rfs.createStream('access.log', {
    interval : '1d',
    path : logDirectory,

})


const development = {
	mongodb : "Ecommerce_API_development",
	morgan : {
		mode : 'dev',
		options  : {stream : accessLogStream}
	}
}

const production = {
	mongodb : process.env.MONGODB,
	morgan : {
		mode : 'combined',
		options  : {stream : accessLogStream}
	}
}


module.exports = eval(process.env.EAPI_ENVIRONMENT) == undefined ? development : eval(process.env.EAPI_ENVIRONMENT);
