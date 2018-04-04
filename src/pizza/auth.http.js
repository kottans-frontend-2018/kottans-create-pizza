class AuthHTTP {
   constructor() {
        this.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjI4Nzk0NjIsInVzZXJuYW1lIjoibGVtcGl5IiwidXVpZCI6ImQxNjBmZTZjLTIwYTEtNDFkMS1hMzMxLTIzODNkNmExODVjZSIsInN0b3JlX2lkIjoxfQ.Nq9-PLlVI-PFkfDne8i_zMPbSk2Qswklf_6KoO_aVuo"
    }

    get(url) {
       return fetch(url, {
           method: 'GET',
           headers: new Headers({
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${this.token}`
           })
       }).then(
           response =>Promise.resolve(response.json()),
           response =>Promise.reject(response.statusCode)
        )
   }
}

export const AUTH_HTTP = new AuthHTTP();