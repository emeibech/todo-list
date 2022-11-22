import { listTitle } from "./listTitle";
import { tasks } from "./tasks";
import { button } from "./button";

export const def = () => {
    const parent = document.querySelector('.wrapper')
    listTitle(parent);
    tasks(parent);
    button(parent);
}