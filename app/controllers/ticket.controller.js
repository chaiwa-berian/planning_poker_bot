var Ticket = require('../models/ticket.model');

var TicketCtrl = {
  // Get all  tickets from the Database
  GetTicket: function(req, res){
    Ticket.find({}, function(err, tickets){
      if(err) {
        res.json({status: false, error: "Something went wrong"});
        return;
      }
      res.json({status: true, ticket: tickets});
    });
  },
  PostTicket: function(req, res){
      // console.log(req);
      var ticket = new Ticket(req.body);
       ticket.save(function(err, ticket){
        if(err) {
          res.json({status: false, error: "Something went wrong"});
          return;
        }
        res.json({status: true, message: "Ticket Saved!!", body: req.body});
      });
  },
  UpdateTicket: function(req, res){
      var completed = req.body.completed;
      Ticket.findById(req.params.id, function(err, ticket){
       ticket.completed = completed;
       ticket.save(function(err, ticket){
        if(err) {
          res.json({status: false, error: "Status not updated"});
        }
        res.json({status: true, message: "Status updated successfully"});
      });
      });
  },
  DeleteTicket: function(req, res){
    Ticket.remove({_id: req.params.id}, function(err, tickets){
      if(err) {
        res.json({status: false, error: "Deleting ticket is not successfull"});
        return;
      }
      res.json({status: true, message: "Ticket deleted successfully!!"});
    });
  }
}

module.exports = TicketCtrl;
