const env = process.env.NODE_ENV || 'development'
console.log('env*****', env)

if (env  === 'development' || env === 'test' || env === 'production' ){
    var config = require('./config.json')
    var envConfig = config[env]

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key]
    })

}

// if(env === 'development'){
//     process.env.PORT = 3000
//     process.env.MONGODB_URI = "mongodb://localhost:27017/TodoApp"
// } else if (env === 'test') {
//     process.env.PORT = 3000
//     process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest"
//
// } else if (env === 'production') {
//     process.env.MONGODB_URI = "mongodb://alvaro:dsm@ds123331.mlab.com:23331/todoapp"
//
// }
