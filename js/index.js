// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// };

document.getElementById('save_lincoln').addEventListener("click", saveLincoln(document.getElementById('interval').value))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  // the fadeout function from jquery in the below line still needs replacing
  document.getElementById('foreground').fadeOut(interval);
};
