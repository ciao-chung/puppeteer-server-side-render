import express from 'express'
import bodyParser from 'body-parser'
import UrlParser from 'url-parse'
import UrlRegex from 'url-regex'
import Crawler from 'Modules/Crawler/Crawler'

class App {
  async init(config) {
    this.config = config
    this.crawler = Crawler
    await this.crawler.init(this.config)

    this.app = express()
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({
      extended: true
    }))

    this.app.use((err, request, response, next) => {
      response.sendStatus(err.statusCode)
    })

    this._setupRoute()
    return this.app
  }

  _setupRoute() {
    this.app.get('/render',  (request, response) => this._handleRender(request, response))
    this.app.all('*', (request, response) => response.sendStatus(400))
    return this.app
  }

  async _handleRender(request, response) {
    const url = request.query.url
    if(!UrlRegex().test(url)) {
      response.status(400).send('Bad url')
      return
    }

    if(!this._isAllowOrigin(url)) {
      response.status(403).send('Origin not allow')
      return
    }

    log(`Start render: ${url}`)
    const result = await this.crawler.render(url)
    this._logResult(url, result)
    response.status(200).json(result)
  }

  _isValidUrl(text) {
    if(typeof text != 'string') return false
    return new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g).test(text)
  }

  _isAllowOrigin(url) {
    const origin = new UrlParser(url).origin
    log(origin, 'yellow')
    if(typeof this.config.allowOrigin == 'string') return this.config.allowOrigin == origin
    if(!Array.isArray(this.config.allowOrigin)) return false
    return this.config.allowOrigin.indexOf(origin) > -1
  }

  _logResult(url, result) {
    const color = result.type == 'PageError' ? 'red' : 'green'
    log(`${url}`, color)
    log(`Response: ${result.statusCode}, ${result.type}`, color)
    if(this.config.debug) {
      log(JSON.stringify(result), 'magenta')
    }
  }
}

export default new App()