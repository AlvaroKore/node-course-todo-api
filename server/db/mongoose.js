var mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://alvaro:dsm@ds123331.mlab.com:23331/todoapp');


mongoose.Promise = global.Promise


module.exports = {mongoose}
