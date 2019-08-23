const assert = require('assert');
const user = require('../models/user.model');
const mongoose = require('mongoose');

beforeEach("db connection", (done) => {
  let dev_db_url = 'mongodb+srv://thirdfort:thirdfort@thirdfort-4arht.mongodb.net/thirdfortTest?retryWrites=true&w=majority';
        let mongoDB = process.env.MONGODB_URI || dev_db_url;
        mongoose.connect(mongoDB);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
          console.log('We are connected to test database!');
          done();
        });
})
describe('Creating documents', () => {
    it('creates a user', (done) => {

        const usr = new user({ name: 'Pickachu', password: 'Ash' });
        usr.save() 
            .then(() => {
                assert(!usr.isNew);
                done();
            });
    });
});

describe('Reading documents', () => {
    it('finds user with the name of Pikachu', (done) => {
      const usr = new user({ name: 'Pickachu', password: 'Ash' });
      usr.save() 
          .then(() => {
              done();
          });
      user.findOne({ name: 'Pikachu' })
          .then((usrTest) => {

              assert(usrTest.name === 'poke'); 
              done();
          });
  })
});

