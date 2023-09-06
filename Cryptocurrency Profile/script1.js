let empBar = document.getElementById('emp-bar');

empBar.addEventListener('change',function() {
    let empVal = document.getElementById('emp-val')
    empVal.innerText = empBar.value ; 
    console.log(empBar.value);
})

// function empBarChange() {
//     let empVal = document.getElementById('emp-val');
//     empVal.innerText = "hello";
//     console.log("good")
// }


let ageBar = document.getElementById('age-bar');

ageBar.addEventListener('change', function() {
    let ageVal = document.getElementById('age-val')
    ageVal.innerText = ageBar.value ; 
    console.log(ageBar.value);
} )


document.addEventListener('scroll', ()=> {
    const updateBtn = document.getElementById('update-btn');
    
    if (window.scrollY + window.innerHeight >= (document.documentElement.scrollHeight)/1.15) {
        console.log("reached last page");
        updateBtn.classList.add('camedown');
    }
    else{
        updateBtn.classList.remove('camedown')
    }
})