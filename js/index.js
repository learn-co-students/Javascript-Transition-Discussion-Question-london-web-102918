// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

//$('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

document.querySelector('#save_lincoln').addEventListener('click', function(event) {
  // const intervalValue = document.querySelector('#interval').value
  // saveLincoln(parseInt(intervalValue))
  saveLincoln(parseInt(document.querySelector('#interval').value))
})


function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  let fg = document.querySelector("#foreground");
    let fadeEffect = setInterval(function () {
        if (!fg.style.opacity) {
            fg.style.opacity = 1;
        }
        if (fg.style.opacity < 0.1) {
            clearInterval(fadeEffect);
        } else {
            fg.style.opacity -= 0.1;
        }
    }, interval);
}