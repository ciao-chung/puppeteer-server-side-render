# Puppeteer Server Side Render

> A server side render service based on puppeteer

## Configuration

> static/config.json

**Example**

```json
{
  "allowOrigin": [
    "http://localhost:8081", "https://foo.bar"
  ],
  "cache": {
    "ttl": 60,
    "maxsize": 1000
  },
  "debug": true
}
```

* port(optional): **Number**, port of Node.js express app, default is 3000.
* host(optional): **String**, host of Node.js express app, default is 'localhost'.
* allowOrigin(required): **String/Array**, allow origin, you can set it as * if you don't want to limit any origin.
* cache(optional): **Object**, configure cache feature.
  * ttl(required): **Number**, time to life of cache(minutes), default is 1 minute.
  * maxsize(required): **Number**, maxsize of cache file on disk(Kilobyte), default is 1MB.
  * path(optional): **String**, cache file store path, default is 'cache'.
* debug(optional): **Boolean**, debug mode, it will open chrome without headless mode. 

## Start server

```bash
npm run start
```

## Client side

We provide a client side library(**Client/SSR.js**) to trigger server side render service

**Example**

```javascript
import SSR from 'SSR.js'

// when your all async data are ready and render
SSR.done()

// when your page is in error type
SSR.error()

// when you want to custom error status code in error page
SSR.error(403)
```

## Apache configuration

**Enable apache proxy/proxy_http modules**

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo service apache2 restart
```

**Setup domain**

```apacheconfig
<VirtualHost *:80>
    ServerName example.com
    ServerAlias www.example.com
    ProxyRequests Off
    ProxyPreserveHost On
    ProxyVia Full
    <Proxy *>
        Require all granted
    </Proxy>
    <Location />
        ProxyPass http://localhost:3000/
        ProxyPassReverse http://127.0.0.1:3000
    </Location>
</VirtualHost>
```

**Enable domain and restart apache**
```bash
sudo a2ensite example.com.conf
sudo service apache2 restart
```

## Manage service with PM2

[PM2](http://pm2.keymetrics.io) is an advanced Node.js process manager

**Installation**

```bash
sudo yarn global add pm2
```

**Management**

```bash
# start service
pm2 start app.js --name "ssr" --cwd==/path-to-ssr

# stop service
pm2 stop ssr

# delete service
pm2 delete ssr

# show status
pm2 status ssr

# show log
pm2 log ssr
```