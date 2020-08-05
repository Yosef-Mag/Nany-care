let mongoose = require("mongoose");
let Users = require('../models/user');


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp)
/*
  * Test the /ret endpoint
  */
 describe('/GET test', () => {
  it(' test ret endpoint', (done) => {
    chai.request(server)
        .get('/ret')
        .end((err, res) => {
          res.status.should.be.equal(200);
          //console.log(res.body)
          done();
        });
  });
});

// describe('/map test', () => {
//   it('it should test map endpoint', (done) => {
//     chai.request(server)
//         .post('/select')
//         .end((err, res) => {
//           res.status.should.be.equal(200);
//           //console.log(res.body)
//               //  res.body.should.be.a([]);
//               // res.body.length.should.be.eql(0);
//           done();
//         });
//   });
// });
