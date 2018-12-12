saveLincoln.addEventListener('click', function(event) {
 let timeout = document.getElementById('interval').value
 let foregroundImage = document.getElementById('foreground')
   setTimeout(function() {foregroundImage.style.display = 'none';}, timeout)
});
