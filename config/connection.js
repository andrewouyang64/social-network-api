const { connect, connection } = require('mongoose');

connect('mongodb://localhost:2707/socialnetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
