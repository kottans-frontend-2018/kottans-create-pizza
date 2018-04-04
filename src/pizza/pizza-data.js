import {AUTH_HTTP} from './auth.http'
import {INGREDIENTS_URL, TAG_URL} from '../constants'

class PizzaDataService {
    constructor() {
        this.ingredients = [];
        this.tags = [];
    }
    getIngredients() {
        return AUTH_HTTP.get(INGREDIENTS_URL).then(
            data => {
                this.ingredients = data.results
                return data.results
            }
        )
    }
    getTags() {
        return AUTH_HTTP.get(TAG_URL).then(
            data => {
                this.tags = data.results
                return data.results
            }
        )
    }
}

export const PIZZA_DATA = new PizzaDataService();