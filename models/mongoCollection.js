var connection = require('./mongoConnection.js');

let dbConnectPromise;

function getCollection(collectionName) {
    if (!dbConnectPromise) {
        dbConnectPromise = connection.connect();
    }

    return dbConnectPromise.then((db) => {
        return db.collection(collectionName);
    }).catch((err) => {
        console.log(err);
        return err;
        // res.render('error', {error:err});
    });
}

exports.getUserCollection = getCollection('users');
exports.getLostCollection = getCollection('losts');
exports.getFoundCollection = getCollection('found');