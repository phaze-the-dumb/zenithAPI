const axios = require('axios');
const fs = require('fs');

let cacheData = null;

let defaultErrorCallback = ( err ) => {
    throw new error(err);
}

let fetch = ( done, rerror = defaultErrorCallback ) => {
    const payload = {
        sessionId: fs.readFileSync('cache/token.txt').toString()
    };
    
    const options = {
        headers: {
            Accept: 'application/json',
            auth: 'Bearer fab1f50a-a92a-4bae-95df-3dad3cbd0fc1'
        }
    };

    axios.post("https://skywave.zenithmmo.com/api/info/me", payload, options).then((res) => {
        cacheData = res.data;
        done(res.data);

        setTimeout(() => {
            cacheData = null;
        }, 60000)
    }).catch((error) => {
        rerror(error)
    });
}

let read = () => {
    return cacheData;
}

let get = ( done, rerror = defaultErrorCallback ) => {
    if(cacheData === null){
        fetch(done, rerror);
    } else{
        done(read());
    }
}

module.exports = { fetch, get, read };