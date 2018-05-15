import Promise from 'promise'
import 'whatwg-fetch'

const encodeParams = (obj) => {
  let r = '?'
  let params = []
  for (let key in obj) {
    params.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
  }
  return r + params.join('&&')
}

class APIS {
  constructor () {
    this.urlOffset = '/iclass/api'
    this.createModel()
  }

  createModel () {
    const userApi = '/users/'
    this.User = {
      login: this.postData.bind(this, `${userApi}login`),
      create: this.postData.bind(this, `${userApi}new`),
      update: this.postData.bind(this, `${userApi}update`),
      updateAbsence: this.postData.bind(this, `${userApi}updateAbsence`),
      delete: this.getData.bind(this, `${userApi}delete`),
      all: this.getData.bind(this, `${userApi}`)
    }

    const courseApi = '/courses/'
    this.Course = {
      create: this.postData.bind(this, `${courseApi}new`),
      all: this.getData.bind(this, courseApi),
      update: this.postData.bind(this, `${courseApi}update`),
      delete: this.getData.bind(this, `${courseApi}delete`)
    }
  }

  getData (target, obj) {
    return new Promise((resolve, reject) => {
      let url = `${this.urlOffset}${target}`
      if (obj) {
        url += encodeParams(obj)
      }
      fetch(url)
        .then((data) => {
          if (data.status === 200 || data.status === 304) {
            resolve(data.json())
          }
          reject(`err with http code:${data.status}`)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  postData (target, obj) {
    return new Promise((resolve, reject) => {
      let url = `${this.urlOffset}${target}`
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      })
        .then((data) => {
          if (data.status === 200 || data.status === 304) {
            resolve(data.json())
          }
          reject(`err with http code:${data.status}`)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default new APIS()
