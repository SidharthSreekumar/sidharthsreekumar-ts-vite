import './scss/style.scss';
import WAVES from 'vanta/dist/vanta.waves.min';


window.onload = function () {
  const copyright = document.querySelector<HTMLSpanElement>('#copyright');
  // Changes skill icons on click
  document.querySelectorAll('.items .item').forEach((item, index) => {
    item.addEventListener('click', () => {
      document.querySelector('.item.selected')?.classList.remove('selected');
      item.classList.add('selected');
      document.querySelector('.items-details.show')?.classList.remove('show');
      document.querySelectorAll('.items-details')[index].classList.add('show');
    });
  });

  // Updating year in footer
  if (copyright)
  copyright.innerHTML = `Copyright&nbsp;&copy; ` + new Date().getFullYear();


  // Waves Background
  WAVES({
    el: '#wavesBackground',
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x151519,
    shininess: 10,
    waveHeight: 7.5,
    waveSpeed: 0.65,
  });
};
