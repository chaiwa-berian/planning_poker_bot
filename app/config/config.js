var config = {
  port: process.env.PORT || 2000,
  db: process.env.MONGOLAB_URI || 'mongodb://localhost/planningpokerapi',
  test_port: 2001, 
  test_db: 'mongodb://localhost/planningpokerapi_test'
}
module.exports = config;
