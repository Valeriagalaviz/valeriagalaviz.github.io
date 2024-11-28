var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Desarrolladora Frontend Jr.')
  .pauseFor(2500)
  .deleteAll()
  .typeString('¡Si lo puedes imaginar, lo puedes crear!')
  .pauseFor(2500)
//   Nuúmero de caracteres que se borraran
  .deleteChars(6)
  .typeString('<strong>programar</strong>!')
  .pauseFor(2500)
  .start();