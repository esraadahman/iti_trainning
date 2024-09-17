var cycling = true;
var timeoutId;

function clearLights() {
  document.getElementById('label1').textContent = '';
  document.getElementById('label2').textContent = '';
  document.getElementById('label3').textContent = '';
  document.getElementById('label4').textContent = '';

  document.getElementById('circle1').style.backgroundColor = 'gray';
  document.getElementById('circle2').style.backgroundColor = 'gray';
  document.getElementById('circle3').style.backgroundColor = 'gray';
}

function yellowlight() {
  clearLights(); 
  document.getElementById('label1').textContent = "Ready";
  document.getElementById('circle1').style.backgroundColor = "yellow";
}

function greenlight() {
  clearLights(); 
  document.getElementById('label2').textContent = "Steady";
  document.getElementById('circle2').style.backgroundColor = "green";
}

function redlight() {
  clearLights(); 
  document.getElementById('label3').textContent = "Go";
  document.getElementById('circle3').style.backgroundColor = "red";
}

function all() {
  var delay = 0;

  function cycleLights() {
    if (!cycling) return;

    timeoutId = setTimeout(() => {
      yellowlight();
    }, delay);

    delay += 1000;

    timeoutId = setTimeout(() => {
      greenlight();
    }, delay);

    delay += 1000;

    timeoutId = setTimeout(() => {
      redlight();
    }, delay);

    delay += 1000; 
    timeoutId = setTimeout(cycleLights, 3000);
  }

  cycleLights();
}

function stopCycle() {
  cycling = false;
  clearTimeout(timeoutId);
}

function resumeCycle() {
  cycling = true;
  all();
}


document.getElementById('circle1').addEventListener('mouseover', function() {
  stopCycle();
  yellowlight();
});

document.getElementById('circle2').addEventListener('mouseover', function() {
  stopCycle();
  greenlight();
});

document.getElementById('circle3').addEventListener('mouseover', function() {
  stopCycle();
  redlight();
});


document.getElementById('circle1').addEventListener('mouseleave', resumeCycle);
document.getElementById('circle2').addEventListener('mouseleave', resumeCycle);
document.getElementById('circle3').addEventListener('mouseleave', resumeCycle);

var p = document.getElementById('btn');
p.onclick = all;




