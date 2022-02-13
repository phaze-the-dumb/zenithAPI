const zenith = require('../index.js');

let user = new zenith.Client('Username', 'Password');

user.login(() => {
    console.log('Logged In');

    user.account.get(( data ) => {
        console.log(data)
    }, ( err ) => {
        console.error(err);
    })

    user.characters.get(( data ) => {
        console.log(data)
    }, ( err ) => {
        console.error(err);
    })

    user.friends.get(( data ) => {
        console.log(data)
    }, ( err ) => {
        console.error(err);
    })
})