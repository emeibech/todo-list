export const removeChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}