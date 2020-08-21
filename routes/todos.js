var express = require('express');
var router = express.Router();
const todosCtrl = require('../controllers/todos');

/* GET users listing. */
router.get('/', todosCtrl.index);
router.get('/:id', todosCtrl.show);
router.post('/addingList', todosCtrl.create)

module.exports = router;
