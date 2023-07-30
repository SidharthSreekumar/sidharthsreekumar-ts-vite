import './scss/style.scss';

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
};
