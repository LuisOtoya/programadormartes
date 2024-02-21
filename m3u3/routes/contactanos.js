var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/formulario', function(req, res,) {
    res.render('formulario');
});

router.post('formulario', (req, res) => {
    const nombre = req.body.nombre;
    const email =req.body.email;
    res.send('¡Formulario enviado con exito!');
});

module.exports = router;

