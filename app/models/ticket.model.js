var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = Schema({
  title: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  started_at: {
    type: Date,
    default: Date.now
  }
});

var TicketModel = mongoose.model('Ticket', TicketSchema);

module.exports = TicketModel;
