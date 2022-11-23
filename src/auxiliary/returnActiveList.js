import { list } from "../list/lists";

export const returnActiveList = () => {
    for(let i = 0; i < list.length; i++) {
        if(list[i].getIsActive() == true) {
            return list[i]
        }
    }
}