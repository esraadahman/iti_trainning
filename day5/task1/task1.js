function takeArray() {
  var length = document.getElementById('length').value;
  var label = document.getElementById('label');
  var arrayInputs = document.getElementById('arrayInputs');
  var array = [];

  arrayInputs.innerHTML = '';

  if (length > 0) {
    for (let i = 0; i < length; i++) {
      label.textContent = `Enter element ${i + 1}:`;
      
  
      arrayInputs.innerHTML += `<br>
        <input type="number" id="element${i}" placeholder="Element ${i + 1}">
        <br>
      `;
    }

    arrayInputs.innerHTML += `<br>
      <button onclick="submitArray(${length})">Submit Array</button>
    `;
  }
}

function submitArray(length) {
  var array = [];

  for (let i = 0; i < length; i++) {
    var element = document.getElementById(`element${i}`).value;
    array.push(element);
  }

  array.sort(function (a, b) {
    return a - b;
  });
  if (array.length > 2) {
    displayArray(array[1], array[length - 2]);
  }
  else if(array.length == 2) {
    displayArray(array[0], array[length - 1]);
  }
  else {
        displayArray(array[0], array[0]);
  }
}



function displayArray(a,b) {
  var outputContainer = document.getElementById('arrayoutput');
  outputContainer.innerHTML = `<p>Secound smallest element ${a} </p> <br> <p>Secound biggest element element ${b} </p>`;
}

