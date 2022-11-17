

export const nav = () => {
    const btn = document.querySelector('.btn');
    const wrapper = document.createElement('div');
    wrapper.classList.add('options')
    const p1 = document.createElement('p');
    p1.textContent = 'New Task';
    const p2 = document.createElement('p');
    p2.textContent = 'Edit List';
    const p3 = document.createElement('p');
    p3.textContent = 'New List';
    wrapper.append(p1, p2, p3);
    btn.appendChild(wrapper);
}