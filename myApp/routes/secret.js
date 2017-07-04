const fetch = require('node-fetch'),
      bodyParser = require('body-parser'),
      urlencodeParser = bodyParser.urlencoded({ extended: false }),
      mongo=require('mongoskin'),
      crypto=require('crypto'),
      express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log('Here in GET method of secret js..');
    var db=mongo.db("mongodb://127.0.0.1:27017/homework7", {native_parser:true});
    db.bind('homework7');
    db.homework7.findOne({},function(err, item) {
         var decipher = crypto.createDecipher('aes256','asaadsaad');
        var dec = decipher.update(item.message,'hex','binary');
        dec += decipher.final('binary');
        res.render('secret',{message:dec})
        console.log(dec);
        db.close();
   });
      
});

module.exports = router;
