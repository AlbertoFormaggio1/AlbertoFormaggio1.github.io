let progressBar = document.querySelector('.progress-bar');
let timeline = document.querySelector('.timeline');

function updateProgressBar(){
    progressBar.style.height = `${getScrollPercentage()}%`;
    let scrollPerc = getScrollPercentage();
    let list_elements = document.getElementsByClassName('list-item');
    for(let i=0; i < list_elements.length; i++){
        let elem = list_elements[i];
        let child = elem.getElementsByClassName('time')[0];
        let offsetTop = ((child.offsetTop + elem.offsetTop) - timeline.offsetTop) / timeline.scrollHeight * 100;
        if(offsetTop > scrollPerc){
            elem.classList.add('liste-not-active');
            elem.classList.remove('liste-active');
        }
        else{
            elem.classList.add('liste-active');
            elem.classList.remove('liste-not-active');
        }
    }
    requestAnimationFrame(updateProgressBar);
}

function getScrollPercentage(){
    let top = ((window.scrollY - timeline.offsetTop - 200) / (timeline.scrollHeight)) * 100;
    if(top < 0)
        return 0;
    if(top > 100)
        return 100;
    return top;
}

updateProgressBar();