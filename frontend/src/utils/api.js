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

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include'
        }).then(this._handleOriginalResponse)
      }

    setUserAvatar(item, token) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include',
          body: JSON.stringify({
            avatar: item.avatar
          })
        }).then(this._handleOriginalResponse)
      }

    getCards(token) {
        return fetch(`${this._url}/cards`, {
          method: 'GET',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include'
        }).then(this._handleOriginalResponse)
      }

      postCard(item, token) {
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include',
          body: JSON.stringify({
            name: item.name,
            link: item.link
          })
        }).then(this._handleOriginalResponse)
      }

    deleteCard(id, token) {
        return fetch(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include'
        }).then(this._handleOriginalResponse)
      }

    setLike(id, token) {
        return fetch(`${this._url}/cards/likes/${id}`, {
          method: 'PUT',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include'
        }).then(this._handleOriginalResponse)
      }

    deleteLike(id, token) {
        return fetch(`${this._url}/cards/likes/${id}`, {
          method: 'DELETE',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include'
        }).then(this._handleOriginalResponse)
      }

    setUserInfo(item, token) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: {
            ...this._headers,
            Authorization: `Bearer ${token}`
          },
          credentials: 'include',
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
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export default api;