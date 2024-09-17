function twoParametersOnly(a, b) {
  try {
    if (arguments.length !== 2) {
      throw new Error("Function must accept exactly 2 parameters.");
    }
    var x = "You passed" + a + " and " + b;
    return x;
  }
  catch (error) {
    console.log(error);
  }
}

    console.log(twoParametersOnly(5, 10));  
    console.log(twoParametersOnly(5));      

