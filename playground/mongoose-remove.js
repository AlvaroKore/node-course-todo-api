const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove("5902880f5bb399d9d215bfb3").then((todo) => {
    console.log(todo)
})
