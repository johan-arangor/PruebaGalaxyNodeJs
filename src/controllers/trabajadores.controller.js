const trabajadorCtrl = {};

const pool = require('../database');

trabajadorCtrl.renderAddTrabajador = async (req, res) => {
    res.render('trabajadores/add');
};

trabajadorCtrl.addTrabajador = async (req, res) => {
    const { TDocumento, NDocumento, PNombre, SNombre, PApellido, SApellido, FNacimiento } = req.body;
    const newTrabajador = {
        TDocumento,
        NDocumento,
        PNombre,
        SNombre,
        PApellido,
        SApellido,
        FNacimiento
    };
    await pool.query('INSERT INTO trabajador set ?', [newTrabajador]);
    req.flash('success', 'Trabajador Guardado Correctamente');
    res.redirect('/trabajadores');
}

trabajadorCtrl.renderTrabajador = async (req, res) => {
    const trabajador = await pool.query('SELECT Id, TDocumento, NDocumento, concat_ws(" ", PNombre, SNombre, PApellido, SApellido) AS Nombre, DATE_FORMAT(FNacimiento, "%M %d %Y") AS FNacimiento, YEAR(CURDATE())-YEAR(FNacimiento) AS Edad FROM trabajador');
    res.render('trabajadores/list',{trabajador});
}

trabajadorCtrl.deleteTrabajador = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM trabajador WHERE Id = ?', [id]);
    req.flash('success', 'Trabajador Removido correctamente');
    res.redirect('/trabajadores');
};

trabajadorCtrl.renderEditTrabajador = async (req, res) => {
    const { id } = req.params;
    const trabajador = await pool.query('SELECT Id, TDocumento, NDocumento, PNombre, SNombre, PApellido, SApellido, DATE_FORMAT(FNacimiento, "%Y-%m-%d") AS FNacimiento FROM trabajador WHERE Id = ?', [id]);
    res.render('trabajadores/edit', {trabajador: trabajador[0]});
};

trabajadorCtrl.editTrabajador = async (req,res) => {
    const { id } = req.params;
    const { TDocumento, NDocumento, PNombre, SNombre, PApellido, SApellido, FNacimiento } = req.body;
    const newTrabajador = {
        TDocumento,
        NDocumento,
        PNombre,
        SNombre,
        PApellido,
        SApellido,
        FNacimiento
    };
    await pool.query('UPDATE trabajador set ? WHERE id = ?', [newTrabajador, id]);
    req.flash('success', 'Trabajador Editato Correctamente');
    res.redirect('/trabajadores');
}

module.exports = trabajadorCtrl;