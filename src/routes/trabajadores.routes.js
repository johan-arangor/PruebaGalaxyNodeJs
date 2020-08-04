const express = require('express');
const router = express.Router();

const { renderAddTrabajador, addTrabajador, renderTrabajador, deleteTrabajador, editTrabajador, renderEditTrabajador } = require('../controllers/trabajadores.controller')

// Routes
router.get('/add', renderAddTrabajador);
router.post('/add', addTrabajador);
router.get('/', renderTrabajador);
router.get('/delete/:id', deleteTrabajador);
router.get('/edit/:id', renderEditTrabajador);
router.post('/edit/:id', editTrabajador);

module.exports = router;