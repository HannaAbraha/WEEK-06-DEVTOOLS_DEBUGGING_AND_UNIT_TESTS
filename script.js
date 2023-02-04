var expect = chai.expect;

describe('MyFunctions', function() {
    describe("averageArray", function () {
        it('get the sum of numbers in an array.', function() {
            var sum = averageeArray ([]);
            expect (sum).to.equal ();
        });
        it('should throw error if parameter is not a number', function(){
            expect(function(){
                averageArray('sjf');
            }).to.throw(Error);
        });
    });
});