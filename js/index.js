// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.querySelector('#save_lincoln').addEventListener('click', function (event) {
  saveLincoln(parseInt(document.querySelector('#interval').value))
})

function saveLincoln (interval) {
  if (isNaN(interval)) {
    interval = 10000
  }
  let fg = document.querySelector('#foreground')
  let fadeEffect = setInterval(function () {
    if (!fg.style.opacity) {
      fg.style.opacity = 1
    }
    if (fg.style.opacity < 0.1) {
      clearInterval(fadeEffect)
    } else {
      fg.style.opacity -= 0.1
    }
  }, interval)
}
