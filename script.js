 // write your JavaScript here
let accordionItems = document.querySelectorAll('.accordion-item');
console.log(accordionItems);

accordionItems.forEach((accordionItem) => { 
    let accordionElement = accordionItem.querySelector('.accordion');
    let panelElement = accordionItem.querySelector('.panel');

    accordionElement.addEventListener('click', () => {
        accordionElement.classList.toggle('active');
        panelElement.classList.toggle('active');
    })
});