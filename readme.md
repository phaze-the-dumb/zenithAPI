Installation:

```
npm i zenithmmo
```

Authenticating: 

```js
const zenith = require('zenithmmo');

let user = new zenith.Client('Username', 'Password');

user.login(() => {
    console.log('Logged In')
}, ( err ) => {
    console.log('An error occured: \n'+err)
})
```

If you entered your username and password correctly you should get a message saying "Logged In" in your console

Accessing Data:

You have to wait until you are logged in before you can access any data as it doesn't have the token.

```js
user.login(() => {
    console.log('Logged In')

    user.account.get(( data ) => {
        console.log(data)
    }, ( err ) => {
        console.error(err);
    })
})
```

There are 3 different types of data you can access at the moment

 - Account Data: `user.account.get`
 - Friend Data: `user.friends.get`
 - Character Data: `user.characters.get`

You can see an example in `test/example.js`

 - Hope this package helps you, Phaze :)