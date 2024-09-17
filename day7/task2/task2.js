
function addNumbers(a) {
  try {
    if (a === "") {
      throw new Error("No parameters passed to the function.");
    } else if (isNaN(a)) {
      throw new Error("Parameter not a number.");
    } else {
      console.log("The number is:", a);
    }
  } catch (error) {
    console.log(error);
  }
}

function call() {
  var input1 = document.getElementById('input1').value;
  var array = input1.split(" ");
  array.forEach(element => {
    addNumbers((element));
  });
  
}

var p = document.getElementById("add");
p.onclick = call;


