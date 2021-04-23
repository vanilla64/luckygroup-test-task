export class Api{
  constructor(url) {
    this._url = url
  }

  getCards(pageNum, limit) {
    return fetch(`${this._url}/photos?_page=${pageNum}&_limit=${limit}`)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Ошибка: ${res.status}`)
      })
  }
}
