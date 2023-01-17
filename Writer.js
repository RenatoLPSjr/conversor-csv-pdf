const fs = require("fs");
const { finished } = require("stream");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filename, data) {
        try{
            await this.writer(filename, data);
            return true;
        }catch(err){
            return false;
        }
        
    }
}

module.exports = Writer;