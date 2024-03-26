var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('ingresar');
});

router.post('/', (req, res) => {
  const usuario = req.body.firstname;
  const email = req.body.lastname;

  // Verificar las credenciales del usuario
  if (usuario === 'usuario_correcto' && email === 'email_correcto') {
    // Las credenciales son válidas, redirigir al usuario a la página de inicio de sesión exitosa
    res.redirect('/dashboard');
  } else {
    // Las credenciales son inválidas, mostrar un mensaje de error al usuario
    res.render('ingresar', { error: 'Credenciales inválidas' });
  }
});

module.exports = router;
