module.exports = {
    type: "credentials",
    users: function(username) {
        return new Promise(function (resolve) {
            var userList = [];
            const { userExists } = require('passwd');
            userExists(username, function (err, response) {
                if (err) {
                    console.log('Error: Credential Check User', err);
                } else {
                    if (response) {
                        resolve({
                            username: username,
                            permissions: "*"
                        });
                    } else {
                        resolve(null);
                    }
                }
            });
            resolve(null);
        })
    },
    /* 
        TODO: Need to tie this to the Group Membership 
    */
    authenticate: function(username,password) {
        return new Promise(function (resolve) {
            var userList = [];
            const { checkPassword } = require('passwd');
            checkPassword(username, password, function (err, response) {
                if (err) {
                    console.log('Error: Credential Authenticate User', err);
                } else {
                    if (response) {
                        resolve({
                            username: username,
                            permissions: "*"
                        });
                    } else {
                        resolve(null);
                    }
                }
            });
            resolve(null);
        })
    },
    default: function() {
        return new Promise(function(resolve) {
            resolve({anonymous: true, permissions:"read"});
        });
    }

 }