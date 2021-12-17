class Api {
    constructor(options) {
        this._url = options.baseUrl;
        this._headers = options.headers;
    }

    _handleOriginalResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }

        return res.json();
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: this._headers,
          credentials: 'include',
          secure: true,
        }).then(this._handleOriginalResponse)
      }

    setUserAvatar(item) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          credentials: 'include',
          secure: true,
          body: JSON.stringify({
            avatar: item.avatar
          })
        }).then(this._handleOriginalResponse)
      }

    getCards() {
        return fetch(`${this._url}/cards`, {
          method: 'GET',
          headers: this._headers,
          credentials: 'include',
          secure: true,
        }).then(this._handleOriginalResponse)
      }

      postCard(item) {
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: this._headers,
          credentials: 'include',
          secure: true,
          body: JSON.stringify({
            name: item.name,
            link: item.link
          })
        }).then(this._handleOriginalResponse)
      }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          headers: this._headers,
          credentials: 'include',
          secure: true,
        }).then(this._handleOriginalResponse)
      }

    setLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
          method: 'PUT',
          headers: this._headers,
          credentials: 'include',
          secure: true,
        }).then(this._handleOriginalResponse)
      }

    deleteLike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
          method: 'DELETE',
          headers: this._headers,
          credentials: 'include',
          secure: true,
        }).then(this._handleOriginalResponse)
      }

    setUserInfo(item) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: this._headers,
          credentials: 'include',
          secure: true,
          body: JSON.stringify({
            name: item.firstname,
            about: item.job
          })
        }).then(this._handleOriginalResponse)
      }

      getInitialItem() {
        return Promise.all([this.getUserInfo(), this.getCards()]);
      }
}

const api = new Api({
  baseUrl: 'https://api.domainname.mesto.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
  }
});

export default api;