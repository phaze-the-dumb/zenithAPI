const auth = require('./auth.js');
const accData = require('./accountData.js');
const friData = require('./friendsData.js');
const charData = require('./characterData.js');

let defaultErrorCallback = ( err ) => {
    throw new error(err);
}

class Client{
    constructor(username, password){
        this.username = username;
        this.password = password;

        this.account = accData;
        this.friends = friData;
        this.characters = charData;
    }
    login(done, rerror = defaultErrorCallback){
        auth.login(this.username, this.password, () => {
            done();
        }, ( err ) => {
            rerror(err);
        })
    }
}

module.exports = { Client }