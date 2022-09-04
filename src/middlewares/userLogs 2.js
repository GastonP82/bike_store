const fs = require('fs');

function registerLog(req, res, next){
    
    const log = `El usuario a la ruta: ${req, url}\n`;
    fs.appendFileSync('logs/userLogs.txt');

    next();

}
module.exports = registerLog;