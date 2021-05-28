let mousecursor = document.querySelector(".cursor");
let links = document.querySelectorAll(".link li");

window.addEventListener('mousemove', cursor);

function cursor(e){
    mousecursor.style.top = e.pageY + 'px';
    mousecursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        mousecursor.classList.add("linkExpand");
    });
    link.addEventListener('mouseleave', () => {
        mousecursor.classList.remove("linkExpand");
    });
});