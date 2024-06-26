const icon_1 = document.getElementsByClassName('togler')[0];
const copied_List = document.getElementsByClassName('list-copy')[0];
console.log(copied_List);
console.log(icon_1);


icon_1.addEventListener('click', () => {
    

    icon_1.classList.toggle('fa-xmark');
    copied_List.classList.toggle('copied');



});


