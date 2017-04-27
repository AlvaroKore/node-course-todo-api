const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id  = "590136824aac565631e5443ar"
//
// if(!ObjectId.isValid(id)){
//     console.log('Id not valid')
// }
//
// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos ', todos)
// })
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// })
//
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo by id ', todo)
// }).catch((e) => {
//     console.log(e)
// })

var id = "58ffdb87506f05e34235c064"

User.findById(id).then((user) => {
    if(!user){
        return console.log('user not found')
    }

    console.log('User by Id: ', user)

}).catch((e) => {
    console.log("Invalid id ", e)
})
