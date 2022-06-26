# Hoodie-Mart

This is pure test project.
There are node.js http server to provide Product Gallery items
and react application as a client.
It loads the gallery by react-query.
It holds shopping cart in react Context and save/load the cart items in the browser's local storage.
There is a single image for all items.
There is no footer because I didn't find it in the docs/requirements.
There is tailwind used for the styles.
There is no DB, the gallery items are hardcoded on the server side.

## run server on port 3001
```
cd packages/server
npm i
node index.js
```

## then run client on 3000 port in another shell
```
cd packages/client
npm i
npm start
```

## then open in browser
http://localhost:3000/

![Screenshot](/img/screenshot.png)
