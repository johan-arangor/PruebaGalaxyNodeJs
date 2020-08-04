const express = require('express');
const router = express.Router();

const { renderAddEntidad, addEntidad, renderEntidad, deleteEntidad, editEntidad, renderEditEntidad } = require('../controllers/entidades.controller')

// Routes
router.get('/add', renderAddEntidad);
router.post('/add', addEntidad);
router.get('/', renderEntidad);
router.get('/delete/:id', deleteEntidad);
router.get('/edit/:id', renderEditEntidad);
router.post('/edit/:id', editEntidad);

module.exports = router;