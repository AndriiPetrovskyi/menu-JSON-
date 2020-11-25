import './styles.css';
import template from './template/template.hbs';
import menu from './data/menu.json';


const refs = {
    toggleTheme: document.querySelector('.theme-switch__control'),
    listMenu: document.querySelector('.js-menu')
}

refs.toggleTheme.addEventListener('click', e => {
    console.dir(e.target.checked)
    e.target.checked ?
    document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme');
    
})

const markup = template(menu);

refs.listMenu.insertAdjacentHTML("beforeend", markup);