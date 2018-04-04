import {AUTH_HTTP} from './authHttp.service'

const USER_SERVICE_URL = 'https:/pizza-tele.ga/api/v1/user'

class UserService {
    constructor() {
        this.myUser = null;
    }

    getMyInfo() {
        debugger
        return AUTH_HTTP.get(`${USER_SERVICE_URL}/my_info`)
            .then(res => {
                
                return res
            })
    }
}

export const USER_SERVICE = new UserService();
