


function celToFaren() {
    var checkbox = document.getElementById('checkbox');
    var temp = document.getElementById('tempc');
    let valueInCels = 27;

    checkbox.addEventListener('change', (event) => {

        const faren = (valueInCels*(9/5)+32);
        console.log(faren)
        if (event.target.checked) {
           
            temp.innerText = (faren);

        }
        else {
            temp.textContent =valueInCels;
        }
    }
    )
    
}