const panels = document.querySelectorAll('.panels .panel');

panels.forEach(panel => panel.addEventListener('click',toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend',toggleActive))

function toggleOpen(event) {
    panels.forEach(panel => {
        if(!this.classList.contains('open')) {
            panel.classList.remove('open');
        }
    });
    this.classList.toggle('open');
}

function toggleActive(e) {
    panels.forEach(panel => {
        if(!this.classList.contains('open-active')){
           panel.classList.remove('open-active'); 
        }
    });
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
