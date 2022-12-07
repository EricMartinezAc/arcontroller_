"use strict";

module.exports = function ValideCookies(route, cookies, CambiarEstadoAlert) {
  if (route === 'inicio' && cookies.get('resp')) {
    CambiarEstadoAlert('block', 'Ya se encuentra una sesión activa', 'info');
    setTimeout(function () {
      window.location = '/';
    }, 5000);
  }

  if (route == 'App') {
    if (!cookies.get('resp') || cookies.get('email_' === 'undefined') || typeof cookies.get('email_') === 'undefined' || cookies.get('pswUser_') === undefined) {
      RestarApp(cookies, CambiarEstadoAlert);
    } else {
      console.log("Sesi\xF3n iniciada por ".concat(cookies.get('email_'), " en ").concat(cookies.get('area_')));
    }
  }
};

function RestarApp(cookies, CambiarEstadoAlert) {
  cookies.remove('resp', {
    path: '/',
    secure: true,
    sameSite: 'strict',
    maxAge: 36000
  });
  cookies.remove('email_', {
    path: '/',
    secure: true,
    sameSite: 'strict',
    maxAge: 36000
  });
  cookies.remove('product', {
    path: '/',
    secure: true,
    sameSite: 'strict',
    maxAge: 36000
  });
  cookies.remove('pswUser_', {
    path: '/',
    secure: true,
    sameSite: 'strict',
    maxAge: 36000
  });
  cookies.remove('area_', {
    path: '/',
    secure: true,
    sameSite: 'strict',
    maxAge: 36000
  });
  CambiarEstadoAlert('block', 'Cerrando App', 'error');
  console.log('app cerrada');
  setTimeout(function () {
    window.location = '/';
  }, 3000);
}