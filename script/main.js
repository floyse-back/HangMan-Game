import { reloadPage } from "./utils/reloadpage.js";
import { addNumber,reloadSwitcher } from "./data/data.js";
import { styleReload } from "./utils/reloadpage.js";



reloadPage()




document.querySelector('span').addEventListener('click', () => {
    const num = addNumber();
    reloadSwitcher(styleReload(num))
})


