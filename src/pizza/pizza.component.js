import {Component} from '../component.js'
import {APP_ROUTER} from '../routing';
import {PIZZA_DATA} from './pizza-data';
import {PIZZA_DRAW} from './pizza.draw';
import {DOMAIN} from '../constants';


export class PizzaComponent extends Component {
    constructor(conf) {
        super(conf)
    }

    startCreation() {
        const node = document.querySelector("[data-pizza]")
        let html = `
            <form id='create'>
                <label>
                    Pizza Name: 
                    <input type='text' name='name' required min='3' max='24'>
                </label>
                <label for='size'>Size:
                    <label>
                        30
                        <input type='radio' name='size' value='30'>
                    </label>
                    <label>
                        45
                        <input type='radio' name='size' value='45'>
                    </label>
                    <label>
                        60
                        <input type='radio' name='size' value='60'>
                    </label>
                </label>
                <label>Ingredients: </label>
                <div class='check-holder'>
                    ${PIZZA_DATA.ingredients.reduce((html, ingr) => {
                        html += 
                        `
                            <label title='${ingr.name}'>
                                <img src='${DOMAIN}/${ingr.image_url}' alt='${ingr.name}'>
                                <input type='checkbox' name='${ingr.name}'>
                            </label>
                        `
                        return html
                    }, "")}
                <div>
                <div class='check-holder'>
                    ${PIZZA_DATA.tags.reduce((html, tag) => {
                        html += 
                        `
                            <label title='${tag.name}'>
                                ${tag.name}
                                <input type='checkbox' name='${tag.name}'>
                            </label>
                        `
                        return html
                    }, "")}
                <div>
            </form>
        `
        
        node.insertAdjacentHTML('beforeend', html)
        this.onEvent('change', '#create', e => {
            console.log('change', e)
        })
    }

    onInit() {
        let canvasHost = document.querySelector('[canvas-pizza]')
        Promise.all([PIZZA_DATA.getIngredients(), PIZZA_DATA.getTags()])
            .then((data) => {
                this.startCreation()
                PIZZA_DRAW.init({
                    host: canvasHost,
                    ingredients: PIZZA_DATA.ingredients
                })
        })
        
    }

    onDestroy() {
        console.log("PizzaComponent", "Destroy")
    }
}
