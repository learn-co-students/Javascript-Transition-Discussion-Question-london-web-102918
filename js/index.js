// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }


let saveLincoln = document.getElementById('save_lincoln')

saveLincoln.addEventListener('click', function(event) {
  let timeout = document.getElementById('interval').value
  let foregroundImage = document.getElementById('foreground')
    setTimeout(function() {foregroundImage.style.display = 'none';}, timeout)
});
