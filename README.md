## PoC of the Cookie Syncing technique

### Usage

Add to /etc/hosts:

```
127.0.0.1 mysite.com mysite.co.uk
```

```bash
$ npm init
$ npm start
```

- Open http://mysite.com:8000 and http://mysite.co.uk:8000
- Verify both sites show the same browser ID