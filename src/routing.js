import {Router} from './router';
import {UserComponent} from './user/user.component';
import {PizzaComponent} from './pizza/pizza.component';
import {authGuard} from './auth.guard';
import {app} from './init'

export const APP_ROUTER = new Router(
    app.rootNode,
    [
        {
            path: "",
            redirectTo: "/pizza"
        },
        {
            id: "Pizza",
            path: "/pizza",
            component: PizzaComponent
        }
    ],
    app
)
