const express = require('express');
const router = express.Router();

const { renderAddContrato, addContrato, renderContratos, deleteContrato, editContrato, renderEditContrato } = require('../controllers/contratos.controller')

// Routes
router.get('/add', renderAddContrato);
router.post('/add', addContrato);
router.get('/', renderContratos);
router.get('/delete/:id', deleteContrato);
router.get('/edit/:id', renderEditContrato);
router.post('/edit/:id', editContrato);

module.exports = router;