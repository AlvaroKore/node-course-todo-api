//./mongod --dbpath ~/mongo-data
// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err)
    }


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('58fe927ea59ce559878def61')
    },{
        $set: {
            name: 'alvaritokore'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    })
    .then((result) => {
        console.log(result)
    })

    db.close()
})
