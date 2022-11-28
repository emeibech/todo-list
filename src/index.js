import './styles.css';
import { def } from "./ui/default";
import { list } from "./list/lists";
import { populateStorage, createInstances } from "./localStorage/storage";

if (!localStorage.getItem('list')) {
    def();
  } else {
    createInstances();
  }