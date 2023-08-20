window.addEventListener('DOMContentLoaded', (event) => {
	const backgroundColorSelect = document.getElementById('background-color');
  
	const storedBackgroundColor = localStorage.getItem('background-color');
  
	if (storedBackgroundColor) {
	  document.body.classList.add(storedBackgroundColor);
	  backgroundColorSelect.value = storedBackgroundColor;
	}
  
	backgroundColorSelect.addEventListener('change', function() {
	  const value = this.value;
	  document.body.classList.remove('light', 'dark');
	  document.body.classList.add(value);
  
	  localStorage.setItem('background-color', value);
	});
  });
  