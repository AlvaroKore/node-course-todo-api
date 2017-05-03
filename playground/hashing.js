const bcrypt = require('bcryptjs')
var password = '123abc!'

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash)
//     })
// })

var hashedPassword = '$2a$10$ldjzlp2LsUFcNWyA8HMPiu6IQUUnQh2BxWRIpgh0b9mEi/.mw8s6m'

bcrypt.compare('123aebc!', hashedPassword, (err, res) => {
    console.log(res)
})



/***/
// const jwt = require('jsonwebtoken')
//
// var data = {
//     id: 10
// }
//
// var token =  jwt.sign(data, '123abc')
// console.log(token)
//
// var decoded = jwt.verify(token, '123abc')
// console.log('decoded', decoded)

/******/

// const {SHA256}  = require('crypto-js')
//
// const message = 'hola mundo'
// const hash = SHA256(message).toString()
//
// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)
//
// var data = {
//     id: 4
// }
//
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString()
//
// // token.data.id = 5
// // token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// if(resultHash === token.hash){
//     console.log('data was not changed')
// }else {
//     console.log('Data was changed. do not trust')
// }
