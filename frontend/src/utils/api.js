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
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }).then(this._handleOriginalResponse)
      }

    setUserAvatar(item) {
        return fetch(`${this._url}/users/me/avatar`, {
          method: 'PATCH',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
          body: JSON.stringify({
            avatar: item.avatar
          })
        }).then(this._handleOriginalResponse)
      }

    getCards() {
        return fetch(`${this._url}/cards`, {
          method: 'GET',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }).then(this._handleOriginalResponse)
      }

      postCard(item) {
        return fetch(`${this._url}/cards`, {
          method: 'POST',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
          body: JSON.stringify({
            name: item.name,
            link: item.link
          })
        }).then(this._handleOriginalResponse)
      }

    deleteCard(id) {
        return fetch(`${this._url}/cards/${id}`, {
          method: 'DELETE',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }).then(this._handleOriginalResponse)
      }

    setLike(id) {
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: 'PUT',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }).then(this._handleOriginalResponse)
      }

    deleteLike(id) {
        return fetch(`${this._url}/cards/likes/${id}/likes`, {
          method: 'DELETE',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
        }).then(this._handleOriginalResponse)
      }

      changeLikeCardStatus(id, cardLiked) {
        return fetch(`${this._url}/cards/${id}/likes`, {
          method: cardLiked ? 'DELETE' : 'PUT',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
          credentials: 'include',
        })
        .then(res => this.handleOriginalResponse(res));
      }

    setUserInfo(item) {
        return fetch(`${this._url}/users/me`, {
          method: 'PATCH',
          credentials: 'include',
          headers: { ...this._headers, 'authorization': `Bearer ${localStorage.getItem('jwt')}` },
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
  }
});

export default api;