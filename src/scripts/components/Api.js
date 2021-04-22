export class Api{
  constructor(url) {
    this._url = url
  }

  getCards() {
    return fetch(`${this._url}/photos`)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
}
