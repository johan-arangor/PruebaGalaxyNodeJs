const contratoCtrl = {};

const pool = require('../database');

contratoCtrl.renderAddContrato = async (req, res) => {
    const Entidad = await pool.query('SELECT * FROM entidad');
    const Trabajador = await pool.query('SELECT Id, concat_ws(" ", PNombre, SNombre, PApellido, SApellido) AS Trabajador FROM trabajador');
    res.render('contratos/add',{Entidad, Trabajador});
};

contratoCtrl.addContrato = async (req, res) => {
    const { NumContrato, IdTrabajador, IdEntidad, Finicio, FFin} = req.body;
    const newContrato = {
        NumContrato,
        IdTrabajador,
        IdEntidad,
        Finicio,
        FFin
    };
    await pool.query('INSERT INTO contratos set ?', [newContrato]);
    req.flash('success', 'Contrato Guardado Correctamente');
    res.redirect('/contratos');
}

contratoCtrl.renderContratos = async (req, res) => {
    const contrato = await pool.query('SELECT co.Id, co.NumContrato, DATE_FORMAT(co.Finicio, "%M %d %Y") AS Fini, DATE_FORMAT(co.FFin, "%M %d %Y") AS Ffin, concat_ws(" " , tr.PNombre, tr.SNombre, tr.PApellido, tr.SApellido) AS Nombre, en.Nombre AS Entidad FROM contratos AS co INNER JOIN trabajador AS tr ON tr.Id = co.IdTrabajador INNER JOIN entidad AS en ON en.Id = co.IdEntidad');
    res.render('contratos/list', { contrato });
}

contratoCtrl.deleteContrato = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM contratos WHERE Id = ?', [id]);
    req.flash('success', 'Contrato Removido correctamente');
    res.redirect('/contratos');
};

contratoCtrl.renderEditContrato = async (req, res) => {
    const { id } = req.params;
    const contrato = await pool.query('SELECT Id, NumContrato, IdTrabajador, IdEntidad, DATE_FORMAT(Finicio, "%Y-%m-%d") AS Finicio, DATE_FORMAT(FFin, "%Y-%m-%d") AS FFin FROM contratos WHERE id = ?', [id]);
    const Entidad = await pool.query('SELECT * FROM entidad');
    const Trabajador = await pool.query('SELECT Id, concat_ws(" ", PNombre, SNombre, PApellido, SApellido) AS Trabajador FROM trabajador');
    res.render('contratos/edit', {contrato: contrato[0], Entidad, Trabajador});
};

contratoCtrl.editContrato = async (req,res) => {
    const { id } = req.params;
    const { NumContrato, IdTrabajador, IdEntidad, Finicio, FFin} = req.body;
    const newContrato = {
        NumContrato,
        IdTrabajador,
        IdEntidad,
        Finicio,
        FFin
    };
    await pool.query('UPDATE contratos set ? WHERE id = ?', [newContrato, id]);
    req.flash('success', 'Contrato Editato Correctamente');
    res.redirect('/contratos');
}

module.exports = contratoCtrl;