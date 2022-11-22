
const removeOptions = () => {
    const options = document.querySelector('.options');
    const nav = document.querySelector('.nav');
    const button = document.querySelector('.btn');
    button.classList.remove('btn-hide');
    nav.removeChild(options);
}

const optionsLogic = (e) => {
    //run if user clicks New List
    if (e.target.textContent == 'New Task') {
        removeOptions();
    }

    if (e.target.textContent == 'New List') {
        removeOptions();
    }

    if (e.target.textContent == 'View Lists') {
        removeOptions();
    }
}

export const options = (e) => {
    optionsLogic(e);
}