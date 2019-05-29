const { userExists, checkPassword } = require('passwd');

module.exports = {
    type: "credentials",
    users: function (username) {
        return new Promise((resolve, reject) => {
            try {
                userExists(username, function (err, response) {
                    if (err) {
                        throw new Error(err);
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
            } catch (e) {
                console.log('Error: Credential Check User', e);
                reject(e);
            }
        });
    },
    authenticate: function (username, password) {
        return new Promise((resolve, reject) => {
            try {
                checkPassword(username, password, function (err, response) {
                    if (err) {
                        throw new Error(err);
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
            } catch (e) {
                console.log('Error: Credential Authenticate User', e);
                reject(e);
            }
        });
    },
    default: function () {
        return new Promise((resolve, reject) => {
            try {
                resolve({ anonymous: true, permissions: "read" });
            } catch (e) {
                console.log('Error: Default User', e);
                reject(e);
            }
        });
    }
 }