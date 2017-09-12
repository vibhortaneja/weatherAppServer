let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser')

let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/weatherdata');
let db = mongoose.connection;

let Data = require('../model/data');


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

/*router.get('/', (req, res) => {
    Data.find((err, books) => {
        res.json(books);
    });
});*/
/*
router.post('/', (req, res) => {
    var weatherdata = new Data();
    weatherdata.city = req.body.city
    weatherdata.country = req.body.country
    weatherdata.date = req.body.date
    weatherdata.maxtemp = req.body.maxtemp
    weatherdata.mintemp = req.body.mintemp
    weatherdata.condition = req.body.condition

    weatherdata.save((err, weather) => {
        if (err) {
            res.send('fail to add');
        } else {
            res.json(weather)
        }
    })
})
*/
//Find All Employees
router.get('/find', (req, res) => {

 Data.find((err, emp) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
  
     res.json(emp)
    }
  });
})

router.post('/insert', function(req, res, next) {
    Data.create(req.body).then(function(data) {
        res.send(data)
    })

})

router.get('/findByDate/:date', (req, res) => {
  Data.findOne({date: req.params.date}, (err, we) => {
    if(err)
      res.send("error has occured while finding")
    else
    {
      res.json(we)
    }
  });
})

//Find Employee By Id and Update
router.put('/update/:date', (req, res) => {
  Data.update({
      date: req.params.date
  }, { $set:
      {min: req.body.min,
    max: req.body.max,
    condition: req.body.condition}},
      {upsert: true},
      (err, empp) => {
          if(err)
              throw err
          else
          {
              res.json(empp)
          }
  })
})




//Delete Employee By Id
router.delete('/delete/:date', (req, res) => {
  Data.remove({
      date: req.params.date
  }, (err, empp) => {
          if(err)
        throw err
              //
          else
          {
              res.json(empp)
          }
  })
})

module.exports = router;

/*





*/