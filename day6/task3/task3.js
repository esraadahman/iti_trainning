    

var s=  document.getElementById('success1') ;
var er = document.getElementById('error1');
var l1 = document.getElementById('labeltext');
var ic = document.getElementById('label_icon');
var st =  document.getElementById('label_subtext') ;
function showAlert(x) {
      if (x === 'success') {
        s.style.backgroundColor = " rgb(182, 173, 173)";
        
        l1.textContent = "Success";
        l1.style.color = "green";
        ic.textContent = "☑";
        ic.style.color = "green";
        st.textContent = "this is success message";
        st.style.color = "green";
      } else if (x === 'error') {
            s.style.backgroundColor = " rgb(182, 173, 173)";
        l1.textContent = "Error";
        l1.style.color = "red";
        ic.textContent = "☒";
        ic.style.color = "red";
        st.textContent = "this is error message";
        st.style.color = "red";
      }
    }

