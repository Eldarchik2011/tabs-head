let tablist = document.querySelector('#tablist');
let tabcontent = document.querySelectorAll('.tabcontent');
let tabbtns = document.querySelectorAll('.tabbtn');

//getComputedStyle // lets us to get value of any css style, even from css file
tablist.addEventListener('click', (event)=>{
    let targetbtn = event.target;
    // dataset - 
    let datalang = targetbtn.dataset.lang;
    for(let tab of tabcontent)  {
        tab.classList.remove('active');
        
    }
    for(let tab of tabcontent)  {
       if(tab.id == datalang)
        tab.classList.add('active')
        for(let btn of tabbtns) {
            btn.classList.remove('active')
        }
        targetbtn.classList.add('active')
    }


})