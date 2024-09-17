function lightCircle() {
  const number = parseInt(document.getElementById('numberInput').value);

  document.getElementById('label1').textContent = '';
  document.getElementById('label2').textContent = '';
  document.getElementById('label3').textContent = '';
  document.getElementById('label4').textContent = '';

  if (number === 1) {
    document.getElementById('label1').textContent = "Ready";
  } else if (number === 2) {
    document.getElementById('label2').textContent = "Steady";
  } else if (number === 3) {
    document.getElementById('label3').textContent = "Go";
  } else {
    document.getElementById('label4').textContent = "Enter a Number Between 1, 2, 3";
  }
}
