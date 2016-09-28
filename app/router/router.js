var Ticket = require('../models/ticket.model');
var TicketController = require('../controllers/ticket.controller');

module.exports = function(app){

  app.get('/api/tickets', TicketController.GetTicket);
  
  app.post('/api/tickets', TicketController.PostTicket);

  app.put('/api/tickets/:ticket_id', TicketController.UpdateTicket);

  app.delete('/api/tickets/:ticket_id', TicketController.DeleteTicket);

}