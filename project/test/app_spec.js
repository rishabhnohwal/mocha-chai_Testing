
var expect = require('chai').expect;
var request = require('request');


describe('Checking Contents & Status',()=>{
    describe('Main page',()=>{
        it('Main page content', (done)=>{
            request('http://localhost:5020',(error, response, body)=>{
                expect(body).to.equal('Hello, express');
                done();
            })
        });

        it('Main page status',(done)=>{
            request('http://localhost:5020',(error,response,body)=>{
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
    })

    describe('Login page',()=>{
        it('Login page content', (done)=>{
            request('http://localhost:5020/about',(error, response, body)=>{
                expect(body).to.equal('About Page');
                done();
            })
        });

        it('About page status',(done)=>{
            request('http://localhost:5020',(error,response,body)=>{
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
    })

    describe('About page',()=>{
        it('Login Page page content', (done)=>{
            request('http://localhost:5020/login',(error, response, body)=>{
                expect(body).to.equal('Login Page');
                done();
            })
        });

        it('Login page status',(done)=>{
            request('http://localhost:5020/login',(error,response,body)=>{
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
    })

})



