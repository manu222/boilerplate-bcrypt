'use strict';
const express                       = require('express');
const bodyParser                    = require('body-parser');
const fccTesting                    = require('./freeCodeCamp/fcctesting.js');
const app                           = express();
fccTesting(app);
const saltRounds                    = 12;
const myPlaintextPassword           = 'B@cOn!';
const someOtherPlaintextPassword    = 'pass123';
const bcrypt                        = require('bcrypt');




//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    if(err) {
        console.log(err);
    }else {
        console.log(hash);
        bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
            if(err) {
                console.log(err);
            }else {
                console.log(res);
            }
        });
    }
  });


//END_ASYNC


//END_ASYNC

//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);

var result = bcrypt.compareSync(myPlaintextPassword, hash);

console.log(result);

//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("✅ Listening on port:", PORT)
});
