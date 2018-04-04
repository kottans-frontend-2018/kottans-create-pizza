import {Component} from '../component.js'
import {USER_SERVICE} from '../store/user.service'


export class UserComponent extends Component {
    constructor(conf) {
        super(conf)
    }

    onInit() {
        const node = document.querySelector("[data-user]")
        let html = `
        <section>
            <h2>My info</h2>
            <ul>
                <li>
                    Info goes here
                </li>
            </ul>
        </section>`
        node.insertAdjacentHTML('beforeend', html)
        debugger
        USER_SERVICE.getMyInfo().then(data => console.log(res))
    }

    onDestroy() {
    }
}
