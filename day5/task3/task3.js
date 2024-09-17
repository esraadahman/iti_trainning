function turntext() {
  var inputtext = document.getElementById('text').value;
  var array = inputtext.split(" ");
  
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
  }
  
  var updatedText = array.join(" ");
  
  document.getElementById('showtext').textContent = updatedText;
}