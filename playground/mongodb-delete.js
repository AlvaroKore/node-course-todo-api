//./mongod --dbpath ~/mongo-data
// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err)
    }
    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'})
    //     .then((result) => {
    //         console.log(result)
    //     })

    // //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'})
    //     .then((result) => {
    //         console.log(result)
    //     })

    // //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false })
    //     .then((result) => {
    //         console.log(result)
    //     })
    //

    // db.collection('Users').deleteMany({
    //     name: 'alvaritokore'
    // })
    // .then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndDelete(
        {
            _id: new ObjectID('58fe8ac5a59ce559878dee51')
        })
        .then((result) => {
            console.log(result)
        })
    db.close()
})
