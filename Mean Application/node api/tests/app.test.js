

 const chai = require('chai');  
const expect = require('chai').expect;

  chai.use(require('chai-http'));

  const app = require('../app.js'); // Our app

  describe('Mean app Testing', function() {  
 this.timeout(5000); // How long to wait for a response (ms)



//GET all student details
 it('should return all student details', function() {
    
    chai.request(app)
     .get('/mean/students')
     .then(function(res) {
       expect(res).to.have.status(200);
       expect(res).to.be.json;
     
    //    expect(res).body.SUCCESS.name.should.equal('name');
    //    expect(res.body).to.be.an('object');
    //    expect(res.body.results).to.be.an('array');
     });
 });

 
 it('should return Not Found', function() {
   return chai.request(app)
     .get('/INVALID_PATH')
     .then(function(res) {
       throw new Error('Path exists!');
     })
     .catch(function(err) {
       expect(err).to.have.status(404);
    
     });
 });

//  // POST - Add new student details
 it('details posted', function() {
  return chai.request(app)
  .post('/mean/student')
    
    .then(function(res) {
 
        expect(res).to.have.status(200);
        
        expect(res).to.be.json;
      
     });
 });

//  POST - Bad Request
//  it('Whether form', function() {
//    return chai.request(app)
//      .get('/api/student')
//      .type('form')
     
//      .then(function(res) {
//        throw new Error('Invalid content type!');
//      })
//      .catch(function(err) {
//        expect(err).to.have.status(404);
//      });
//     });


 });
