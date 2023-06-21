var strr = "";


function handleClick(btn) {

    value = btn.value;
    var calculateArea = document.getElementById('calculateArea');

    if (value == "AC") {
        strr="";
        console.log("cleared")
        // result.innerHTML = strr;

        
    }
    else if (value=="DEL") {
        strr = strr.slice(0,-1);
        console.log(strr)
        console.log("last item deleted")
       
    }

    else {
        strr=strr+ value;
        console.log(strr);
        
    }
    calculateArea.innerHTML =  strr;
    

}

function calculate() {
    var res = "12*2+4+65*2/34*23" ;
    var res2 = eval(strr);
    strr= String(res2)
    console.log(res2);
    var result = document.getElementById('result');
    
    result.innerHTML = res2;

}


