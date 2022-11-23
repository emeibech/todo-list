import { list } from "../list/lists";

export const selectList = (e) => {
    document.querySelector('#active').removeAttribute('id', 'active');
    for(let i = 0; i < list.length; i++) {
        if(list[i].getIsActive() == true) {
            list[i].setActiveFalse();
        }
    }

    for(let i = 0; i < list.length; i++) {
        if (e.target.textContent == list[i].name) {
            list[i].setActiveTrue();
            e.target.setAttribute('id', 'active')
            
        }
    }
}