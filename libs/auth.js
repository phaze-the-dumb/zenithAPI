const axios = require('axios');
const fs = require('fs');

let login = ( nameOrMail, pass, done, returnerror ) => {
    let token = fs.readFileSync('cache/token.txt').toString();

    if(token === ""){
        const payload = {
            usernameOrEmail: nameOrMail,
            password: pass
        };
        
        const options = {
            headers: {
                Accept: 'application/json',
                auth: 'Bearer fab1f50a-a92a-4bae-95df-3dad3cbd0fc1'
            }
        };
        
        axios.post("https://skywave.zenithmmo.com/api/auth/login", payload, options).then((response) => {
            done( token );
            fs.writeFileSync('cache/token.txt', response.data);
        }).catch((error) => {
            returnerror(error)
        });
    } else{
        done(token);
    }
}

module.exports = { login }