# hacktiv8-press

## Deskripsi

Program ini menggunakan express js, dan database dengan mongo db

## Langkah - langkah :

- install dependencies untuk server

- running server node app.js

```sh

{
  "name": "hacktiv8-press",
  "version": "0.0.1",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.2",
    "cors": "^2.8.3",
    "express": "^4.15.3",
    "jsonwebtoken": "^7.4.1",
    "mongoose": "^4.9.10",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0"
  }
}

```

- jalankan file index dengan live-server yang ada di folder client


## Routing Server

### ARTIKEL

|       ROUTE        |  AKSI  |                DESKRIPSI                 |
| ------------------ | ------ | ---------------------------------------- |
| /articles           | POST   | Menambahkan posting artikel              |
| /articles           | GET    | Mendapatkan semua artikel                |
| /articles/:id       | PATCH  | Mengubah artikel berdasarkan id          |
| /articles/:id       | DELETE | Menghapus artikel berdasarkan id         |
| /articles/:author   | GET    | Mendapatkan artikel berdasarkan author   |
| /articles/:category | GET    | Mendapatkan artikel berdasarkan category |

### Author

|      ROUTE      |  AKSI  |            DESKRIPSI            |
| --------------- | ------ | ------------------------------- |
| /authors/signup | POST   | Menambahkan author              |
| /authors        | GET    | Mendapatkan semua author        |
| /authors/:id    | PATCH  | Mengubah author berdasarkan id  |
| /authors/:id    | DELETE | Menghapus author berdasarkan id |
| /authors/signin | POST   | Signin                          |
