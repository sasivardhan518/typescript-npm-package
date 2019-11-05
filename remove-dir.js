var fs = require('fs');
var dirPath = process.argv[2] || './output';

console.log(process.argv);

var errorCount = 0
rmDir = function (dirPath) {
    try {
        var files = fs.readdirSync(dirPath);
    } catch (e) {
        errorCount++
        if (errorCount < 250) {
            rmDir(dirPath);
        }
    }
    if (files && files.length > 0) {
        for (var i = 0; i < files.length; i++) {
            var filePath = dirPath + '/' + files[i];
            if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
            else rmDir(filePath);
        }
    }
    try {
        fs.rmdirSync(dirPath);
    } catch (e) {}
}

rmDir(dirPath)