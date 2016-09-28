var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

var Ticket = require('../../../app/models/ticket.model');

describe('Get all tickets', function(){
  it('should return all todos', function(done){
    var TicketMock = sinon.mock(Ticket);
    var expectedResult = {status: true, ticket: []};
    TicketMock.expects('find').yields(null, expectedResult);
    Ticket.find(function(err, result){
      TicketMock.verify();
      TicketMock.restore();
      expect(result.status).to.be.true;
      done();
    }); 
  });
});
