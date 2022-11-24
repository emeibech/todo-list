
const lineThrough = (e) => {
    e.target.classList.toggle('line-through')
}

export const crossOut = (e) => {
    if(e.target.localName == 'p') {
        setTimeout(lineThrough(e), 10)
    }
}