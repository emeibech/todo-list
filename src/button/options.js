

const removeOptions = () => {
    const options = document.querySelector('.options');
    const btn = document.querySelector('.btn');
    btn.removeChild(options);
}

const optionsLogic = (e) => {
    //run if user clicks New List
    if (e.target.textContent == 'New List') {
        removeOptions();
    }
}

export const options = (e) => {
    optionsLogic(e);
}