//./mongod --dbpath ~/mongo-data
// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server', err)
    }
    db.collection('Users').find({
        name: 'sammy'
     }).toArray().then((docs) => {
        console.log('Todos')
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to Fetch Todos ', err)
    })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`)
    //
    // }, (err) => {
    //     console.log('Unable to Fetch Todos ', err)
    // })
    // db.close()
})
