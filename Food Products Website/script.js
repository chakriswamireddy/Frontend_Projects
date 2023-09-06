document.addEventListener("DOMContentLoaded", function () {
//   fieldBox1 = document.getElementById("field-box1");
  fieldsBox = document.getElementsByClassName("fields-box");

  function loadFields() {
   

    noOfBoxes = 14;

    for (let i = 0; i < noOfBoxes; i++) {
      const fieldset = document.createElement("fieldset");
      
      // fieldset.innerHTML = '<legend>Field</legend>';

    //   fieldBox1.appendChild(fieldset);

      for (let j =0 ; j < fieldsBox.length; j++) {

          fieldsBox[j].appendChild(fieldset)
          console.log(j)
      }
    }
    

  }

  function fillFields() {

    const fieldsets = document.querySelectorAll('fieldset');
   

    for (let k=0 ; k<fieldsets.length ; k++) {

        const input = document.createElement("input");
        input.type = "text";

        const legend = document.createElement("legend");

        legend.innerText = "Field";

        if (k==0) {
            legend.innerText = "Truck Number";
            input.value = "HR29 BD 2345"
        }

        // console.log(fieldsets[k])
        fieldsets[k].appendChild(input)
        fieldsets[k].appendChild(legend)
    }
  }

  // calling function
  loadFields();
  fillFields();


  //cloning the container1 

  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  const clonedSection = container1.cloneNode(true);
  container2.appendChild(clonedSection);


});

