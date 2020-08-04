const entidadCtrl = {};

const pool = require('../database');

entidadCtrl.renderAddEntidad = (req, res) => {
    res.render('entidades/add');
};

entidadCtrl.addEntidad = async (req, res) => {
    const { nombre } = req.body;
    const newEntidad = {
        nombre
    };
    await pool.query('INSERT INTO entidad set ?', [newEntidad]);
    req.flash('success', 'Entidad Guardado Correctamente');
    res.redirect('/entidades');
}

entidadCtrl.renderEntidad = async (req, res) => {
    const entidad = await pool.query('SELECT * FROM entidad');
    res.render('entidades/list', { entidad });
}

entidadCtrl.deleteEntidad = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM entidad WHERE Id = ?', [id]);
    req.flash('success', 'Entidad Removido correctamente');
    res.redirect('/entidades');
};

entidadCtrl.renderEditEntidad = async (req, res) => {
    const { id } = req.params;
    const entidad = await pool.query('SELECT * FROM entidad WHERE id = ?', [id]);
    res.render('entidades/edit', {entidad: entidad[0]});
};

entidadCtrl.editEntidad = async (req,res) => {
    const { id } = req.params;
    const { nombre } = req.body; 
    const newEntidad = {
        nombre
    };
    await pool.query('UPDATE entidad set ? WHERE id = ?', [newEntidad, id]);
    req.flash('success', 'Entidad Editato Correctamente');
    res.redirect('/entidades');
}

module.exports = entidadCtrl;