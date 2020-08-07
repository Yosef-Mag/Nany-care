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
  it(' test ret endpoint - home page', (done) => {
    chai.request(server)
        .get('/ret')
        .end((err, res) => {
          res.status.should.be.to.equal(200);
          res.body.should.be.an('array')
          // console.log(res.body)

          done();
        });
  });
});

/*
  * Test the /profile endpoint
  */

 describe('/GET test ', () => {
  it(' test profile endpoint - profile page', (done) => {
    chai.request(server)
        .get('/profile')
        .end((err, res) => {
          res.status.should.be.to.equal(500);
          res.body.should.be.an('object')
          //console.log(res.status)

          done();
        });
  });
});

/*
  * Test the /POST route
  */
//  describe('/POST user', () => {
//   it('it should not POST a new user', (done) => {
//       let user = {
//           name: "hala",
//           email: "hello@hi.com",
//           password: 1234567,
//           phoneNumber: 071243
//       }
//     chai.request(server)
//         .post('/signup')
//         .send(user)
//         .end((err, res) => {
//           //console.log(res.body.name)
//                res.should.have.status(201);
//               res.body.should.be.a('object');
//               //res.body.should.have.property('errors');
//              // res.body.errors.should.have.property('name');
//              // res.body.errors.pages.should.have.property('email').eql('required');
//           done();
//         });
//   });

// });


