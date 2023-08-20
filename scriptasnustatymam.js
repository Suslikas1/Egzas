var colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('change', function() {
  var color = colorPicker.value;

  var header = document.getElementById('header');
  header.style.backgroundColor = color;
});