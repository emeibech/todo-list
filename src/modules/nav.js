

export const nav = () => {
    const btn = document.querySelector('.btn');
    const wrapper = document.createElement('div');
    wrapper.classList.add('options');
    const btn1 = document.createElement('button');
    btn1.textContent = 'New Task';
    const btn2 = document.createElement('button');
    btn2.textContent = 'Edit List';
    const btn3 = document.createElement('button');
    btn3.textContent = 'New List';
    wrapper.append(btn1, btn2, btn3);
    btn.appendChild(wrapper);
}