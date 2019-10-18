const chai = require('chai');
const chaiHttp = require('chai-http');

const { app } = require('../index')


chai.use(chaiHttp);
chai.should();


describe("General tests", () => {
    describe("GET /", () => {
        it("should return ok true", (done) => {
             chai.request(app)
                 .get('/')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.eql({ ok: true });
                     done();
                  });
         });

         it("should return ok false", (done) => {
            chai.request(app)
                .get('/notok')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.eql({ ok: false });
                    done();
                 });
        });

    });
});