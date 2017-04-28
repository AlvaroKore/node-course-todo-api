var mongoose = require('mongoose')

var URI = "mongodb://localhost:27017/TodoApp"

if(process.env.PORT){
    URI = "mongodb://alvaro:dsm@ds123331.mlab.com:23331/todoapp"
}


mongoose.connect(URI);


mongoose.Promise = global.Promise


module.exports = {mongoose}
