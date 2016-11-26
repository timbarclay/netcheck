const isOnline = require("is-online");
const winston = require("winston");

winston.add(winston.transports.File, {filename: 'results.log'});
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
    level: "debug",
    json: false,
    colorize: true
});

function doCheck(){
    isOnline((err, online) => {
        winston.debug("Checking...");
        if(online) return;

        const date = new Date();
        winston.info("No internet access");
    });
}

winston.info("Service started");

setInterval(doCheck, 10000);