module.exports = {
    type: "credentials",
    users: function(username) {
        return new Promise(function (resolve) {
            const { userExists } = require('passwd');
            userExists(username, function (err, response) {
                if (err) {
                    console.log('Error: Credential Check User', err);
                    resolve(null);
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
        });
    },
    authenticate: function(username,password) {
        return new Promise(function (resolve) {
            const { checkPassword } = require('passwd');
            checkPassword(username, password, function (err, response) {
                if (err) {
                    console.log('Error: Credential Authenticate User', err);
                    resolve(null);
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
        });
    },
    default: function() {
        return new Promise(function(resolve) {
            resolve({anonymous: true, permissions:"read"});
        });
    }

 }