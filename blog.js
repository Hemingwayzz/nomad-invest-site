// Nomad Invest — blogi: piilota yläpalkki, kun selataan alaspäin, ja näytä
// se taas heti, kun selataan ylöspäin (tai ollaan lähellä sivun yläreunaa).
(function () {
  var header = document.querySelector('header.site');
  if (!header) return;

  var lastY = window.scrollY;
  var ticking = false;
  var threshold = 12; // ei reagoida ihan pieneen nykäisyyn
  var revealNear = 80; // pysyy aina näkyvissä lähellä yläreunaa

  function update() {
    var y = window.scrollY;
    var diff = y - lastY;

    if (y <= revealNear) {
      header.classList.remove('hide');
    } else if (diff > threshold) {
      header.classList.add('hide');
    } else if (diff < -threshold) {
      header.classList.remove('hide');
    }

    lastY = y;
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
