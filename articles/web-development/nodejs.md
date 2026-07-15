# Belajar Node.js Dari Dasar Hingga Mahir

**Kategori:** Web Development

**Level:** Pemula â†’ Mahir

**Estimasi membaca:** Â±30 Menit

---

# Pendahuluan

Node.js adalah runtime JavaScript yang memungkinkan kode JavaScript dijalankan di luar browser. Sebelum Node.js hadir, JavaScript hanya digunakan untuk membuat website menjadi interaktif di sisi frontend.

Dengan Node.js, JavaScript dapat digunakan untuk membangun:

- Backend Website
- REST API
- Real-time Chat
- Bot WhatsApp
- Discord Bot
- Telegram Bot
- CLI (Command Line Interface)
- Automation Script
- Microservices

Saat ini Node.js menjadi salah satu teknologi backend paling populer di dunia karena cepat, ringan, dan memiliki ekosistem package yang sangat besar melalui npm.

---

# Apa Itu Node.js?

Node.js dibangun menggunakan **Google V8 JavaScript Engine**, yaitu mesin JavaScript yang juga digunakan oleh browser Google Chrome.

Berbeda dengan browser, Node.js menyediakan akses ke sistem operasi sehingga program dapat:

- Membaca file.
- Menulis file.
- Membuat server.
- Mengakses database.
- Berkomunikasi melalui jaringan.
- Menjalankan proses di sistem operasi.

---

# Mengapa Belajar Node.js?

Beberapa alasan mengapa Node.js banyak digunakan:

- Menggunakan bahasa JavaScript.
- Sangat cepat karena menggunakan V8 Engine.
- Mendukung asynchronous programming.
- Memiliki jutaan package melalui npm.
- Cocok untuk aplikasi real-time.
- Digunakan oleh banyak perusahaan besar.

---

# Arsitektur Node.js

Node.js menggunakan:

- Single Thread
- Event Loop
- Non-Blocking I/O

Konsep tersebut memungkinkan Node.js menangani banyak permintaan secara efisien tanpa harus membuat thread baru untuk setiap koneksi.

---

# Single Thread

Node.js menggunakan satu thread utama untuk menjalankan JavaScript.

Meskipun hanya menggunakan satu thread utama, Node.js tetap mampu menangani banyak koneksi secara bersamaan karena sebagian besar operasi I/O dijalankan secara asynchronous.

---

# Event Loop

Event Loop adalah mekanisme yang memungkinkan Node.js memproses tugas asynchronous.

Alur sederhananya:

```
Request

â†“

Event Loop

â†“

Proses Async

â†“

Response
```

Dengan Event Loop, Node.js tidak perlu menunggu satu proses selesai sebelum mengerjakan proses lainnya.

---

# Non-Blocking I/O

Misalnya terdapat proses membaca file.

Node.js tidak akan menghentikan program sampai file selesai dibaca.

Sebaliknya, Node.js akan melanjutkan pekerjaan lain, kemudian menjalankan callback ketika proses membaca file selesai.

Hal inilah yang membuat Node.js sangat cepat untuk aplikasi dengan banyak aktivitas I/O.

---

# Instalasi Node.js

Unduh Node.js dari situs resminya sesuai sistem operasi yang digunakan.

Setelah instalasi selesai, buka Terminal atau Command Prompt.

Periksa versi Node.js:

```bash
node -v
```

Periksa versi npm:

```bash
npm -v
```

Jika kedua perintah tersebut menampilkan nomor versi, berarti instalasi berhasil.

---

# Menjalankan Program Pertama

Buat file:

```
app.js
```

Isi:

```javascript
console.log("Hello Node.js");
```

Jalankan menggunakan Terminal:

```bash
node app.js
```

Output:

```
Hello Node.js
```

---

# REPL

Node.js menyediakan REPL (Read Evaluate Print Loop).

Masuk ke REPL:

```bash
node
```

Contoh:

```javascript
> 5 + 5

10

> "Hello"

'Hello'
```

Keluar dari REPL:

```bash
.exit
```

---

# npm (Node Package Manager)

npm adalah package manager bawaan Node.js.

npm digunakan untuk:

- Menginstal package.
- Menghapus package.
- Memperbarui package.
- Mengelola dependency proyek.

---

# Membuat Project Baru

Masuk ke folder proyek.

Kemudian jalankan:

```bash
npm init
```

Atau lebih cepat:

```bash
npm init -y
```

Perintah tersebut akan membuat file:

```
package.json
```

---

# package.json

Contoh sederhana:

```json
{
  "name": "learn-node",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```

File ini menyimpan informasi proyek beserta daftar dependency yang digunakan.

---

# Menginstal Package

Contoh menginstal Express:

```bash
npm install express
```

Versi singkat:

```bash
npm i express
```

Package akan disimpan pada folder:

```
node_modules/
```

Dan otomatis ditambahkan ke dalam `package.json`.

---

# Menjalankan Script

Jika pada `package.json` terdapat:

```json
"scripts": {
  "start": "node index.js"
}
```

Maka jalankan dengan:

```bash
npm start
```

---

# Ringkasan

Pada bagian pertama ini kita telah mempelajari:

- Pengertian Node.js
- Cara kerja Node.js
- Event Loop
- Non-Blocking I/O
- Instalasi
- REPL
- npm
- package.json
- node_modules
- Menjalankan program pertama

Materi ini menjadi dasar sebelum mempelajari module bawaan Node.js, sistem file, HTTP Server, Express.js, dan pembuatan REST API pada bagian berikutnya.

---

# Module pada Node.js

Module adalah bagian kode yang dapat digunakan kembali (*reusable*). Hampir seluruh fitur Node.js dibangun menggunakan konsep module.

Node.js memiliki tiga jenis module:

- Core Module
- Local Module
- Third Party Module

---

# Core Module

Core Module adalah module bawaan Node.js sehingga tidak perlu diinstal menggunakan npm.

Beberapa Core Module yang sering digunakan:

- fs
- path
- os
- http
- events
- crypto
- stream
- url

Contoh:

```javascript
const fs = require("fs");
```

---

# Local Module

Local Module adalah file JavaScript yang kita buat sendiri.

Misalnya:

```
project/

â”‚

â”œâ”€â”€ app.js

â””â”€â”€ math.js
```

math.js

```javascript
function tambah(a,b){

return a+b;

}

module.exports = tambah;
```

app.js

```javascript
const tambah = require("./math");

console.log(

tambah(5,10)

);
```

---

# Third Party Module

Module yang berasal dari npm.

Contoh:

```bash
npm install express
```

Kemudian digunakan:

```javascript
const express = require("express");
```

---

# CommonJS

Secara bawaan, Node.js menggunakan sistem module CommonJS.

Export:

```javascript
module.exports = data;
```

Import:

```javascript
const data = require("./data");
```

---

# ES Module

JavaScript modern juga mendukung ES Module.

Export:

```javascript
export const nama = "Vano";
```

Import:

```javascript
import { nama } from "./app.js";
```

Untuk menggunakan ES Module, tambahkan pada `package.json`:

```json
"type":"module"
```

---

# File System (FS)

Module `fs` digunakan untuk membaca, membuat, mengubah, dan menghapus file maupun folder.

---

# Membaca File

```javascript
const fs = require("fs");

fs.readFile(

"data.txt",

"utf8",

(err,data)=>{

if(err){

console.log(err);

return;

}

console.log(data);

});
```

---

# Menulis File

```javascript
fs.writeFile(

"data.txt",

"Halo Dunia",

(err)=>{

if(err) throw err;

console.log("Berhasil");

});
```

Jika file belum ada, Node.js akan membuatnya secara otomatis.

---

# Menambah Isi File

```javascript
fs.appendFile(

"log.txt",

"Data baru\n",

()=>{}

);
```

---

# Menghapus File

```javascript
fs.unlink(

"data.txt",

()=>{}

);
```

---

# Membuat Folder

```javascript
fs.mkdir(

"assets",

()=>{}

);
```

---

# Membaca Folder

```javascript
fs.readdir(

".",

(err,files)=>{

console.log(files);

});
```

---

# Path Module

Module `path` digunakan untuk mengelola lokasi file.

```javascript
const path = require("path");
```

---

# Nama File

```javascript
console.log(

path.basename(__filename)

);
```

---

# Nama Folder

```javascript
console.log(

__dirname

);
```

---

# Extension File

```javascript
console.log(

path.extname("index.js")

);
```

Hasil:

```
.js
```

---

# Menggabungkan Path

```javascript
path.join(

__dirname,

"assets",

"img"

);
```

Cara ini lebih aman dibandingkan menulis path secara manual karena menyesuaikan sistem operasi yang digunakan.

---

# OS Module

Module `os` digunakan untuk memperoleh informasi sistem operasi.

```javascript
const os = require("os");
```

---

# Nama Sistem Operasi

```javascript
console.log(

os.platform()

);
```

---

# Arsitektur CPU

```javascript
console.log(

os.arch()

);
```

---

# Informasi Memori

```javascript
console.log(

os.totalmem()

);
```

---

# Nama Host

```javascript
console.log(

os.hostname()

);
```

---

# Events Module

Node.js memiliki EventEmitter.

```javascript
const EventEmitter =

require("events");
```

---

# Membuat Event

```javascript
const event =

new EventEmitter();

event.on(

"login",

()=>{

console.log(

"User Login"

);

});

event.emit("login");
```

Event sangat berguna untuk membangun aplikasi yang responsif terhadap berbagai aksi.

---

# Buffer

Buffer digunakan untuk menyimpan data biner.

Contoh:

```javascript
const buffer =

Buffer.from("Hello");

console.log(buffer);
```

Buffer sering digunakan saat memproses file, stream, atau komunikasi jaringan.

---

# Stream

Stream memungkinkan data diproses sedikit demi sedikit tanpa harus memuat seluruh isi ke memori.

Jenis stream:

- Readable
- Writable
- Duplex
- Transform

Stream sangat bermanfaat ketika bekerja dengan file berukuran besar atau proses transfer data.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Core Module
- Local Module
- Third Party Module
- CommonJS
- ES Module
- File System
- Path
- OS
- EventEmitter
- Buffer
- Stream

Module bawaan Node.js menyediakan berbagai kemampuan penting untuk membangun aplikasi backend, mulai dari membaca file hingga berkomunikasi dengan sistem operasi. Pada bagian berikutnya kita akan mulai membuat **HTTP Server**, memahami **Request dan Response**, mengenal **Routing**, dan mempelajari dasar **Express.js** sebagai framework backend yang paling populer di ekosistem Node.js.

---

# HTTP Server

Salah satu kemampuan utama Node.js adalah membuat HTTP Server tanpa memerlukan framework tambahan.

HTTP Server digunakan untuk menerima request dari client (browser) dan mengirimkan response.

Node.js menyediakan module bawaan bernama **http**.

```javascript
const http = require("http");
```

---

# Membuat Server Pertama

Contoh sederhana:

```javascript
const http = require("http");

const server = http.createServer((req,res)=>{

res.end("Hello Node.js");

});

server.listen(3000,()=>{

console.log("Server berjalan...");

});
```

Jalankan:

```bash
node app.js
```

Buka browser:

```
http://localhost:3000
```

Maka akan muncul:

```
Hello Node.js
```

---

# Request dan Response

Setiap HTTP Server memiliki dua object utama.

```javascript
(req,res)
```

### Request (req)

Berisi informasi permintaan dari client.

Misalnya:

- URL
- Method
- Header
- Body

### Response (res)

Digunakan untuk mengirim jawaban kembali ke client.

---

# Mengirim Response

```javascript
res.end("Halo Dunia");
```

---

# Status Code

Response memiliki status code.

Contoh:

```javascript
res.statusCode = 200;

res.end("Berhasil");
```

Beberapa status code yang sering digunakan:

| Status | Arti |
|---------|------|
|200|OK|
|201|Created|
|400|Bad Request|
|401|Unauthorized|
|403|Forbidden|
|404|Not Found|
|500|Internal Server Error|

---

# Header

Header digunakan untuk memberi informasi tambahan pada response.

```javascript
res.setHeader(

"Content-Type",

"text/plain"

);
```

Jika mengirim JSON:

```javascript
res.setHeader(

"Content-Type",

"application/json"

);
```

---

# Mengirim JSON

```javascript
const data = {

nama:"Vano",

umur:20

};

res.end(

JSON.stringify(data)

);
```

JSON merupakan format data yang paling sering digunakan dalam REST API.

---

# Routing Sederhana

Kita dapat membuat halaman berbeda berdasarkan URL.

```javascript
const server = http.createServer((req,res)=>{

if(req.url==="/"){

res.end("Home");

}

else if(req.url==="/about"){

res.end("About");

}

else{

res.statusCode=404;

res.end("404");

}

});
```

---

# HTTP Method

Method menunjukkan jenis request.

Method yang paling sering digunakan:

- GET
- POST
- PUT
- PATCH
- DELETE

Contoh:

```javascript
console.log(

req.method

);
```

---

# GET

Digunakan untuk mengambil data.

```
GET /users
```

---

# POST

Digunakan untuk menambah data.

```
POST /users
```

---

# PUT

Digunakan untuk mengganti seluruh data.

```
PUT /users/1
```

---

# PATCH

Digunakan untuk memperbarui sebagian data.

```
PATCH /users/1
```

---

# DELETE

Digunakan untuk menghapus data.

```
DELETE /users/1
```

---

# REST API

REST API adalah cara komunikasi antara client dan server menggunakan HTTP.

Contoh endpoint:

```
GET

/api/articles
```

Mengambil seluruh artikel.

---

```
GET

/api/articles/1
```

Mengambil satu artikel.

---

```
POST

/api/articles
```

Menambah artikel.

---

```
PUT

/api/articles/1
```

Mengubah artikel.

---

```
DELETE

/api/articles/1
```

Menghapus artikel.

---

# Apa Itu Express.js?

Meskipun HTTP bawaan Node.js cukup kuat, penulisan kodenya akan menjadi panjang ketika aplikasi semakin besar.

Express.js hadir untuk menyederhanakan proses tersebut.

Install:

```bash
npm install express
```

---

# Membuat Server Express

```javascript
const express = require("express");

const app = express();

app.listen(3000,()=>{

console.log("Server berjalan");

});
```

Kode di atas jauh lebih ringkas dibandingkan menggunakan module `http`.

---

# Routing Express

```javascript
app.get("/",(req,res)=>{

res.send("Home");

});
```

Halaman About:

```javascript
app.get("/about",(req,res)=>{

res.send("About");

});
```

---

# Parameter URL

Express mendukung parameter dinamis.

```javascript
app.get(

"/user/:id",

(req,res)=>{

res.send(req.params.id);

});
```

Jika membuka:

```
/user/10
```

Hasil:

```
10
```

---

# Query Parameter

Contoh URL:

```
/search?keyword=nodejs
```

Mengambil nilainya:

```javascript
app.get(

"/search",

(req,res)=>{

res.send(

req.query.keyword

);

});
```

---

# Middleware

Middleware adalah function yang dijalankan sebelum request sampai ke route.

Contoh:

```javascript
app.use((req,res,next)=>{

console.log(

"Ada Request"

);

next();

});
```

Fungsi `next()` digunakan agar proses berlanjut ke middleware atau route berikutnya.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- HTTP Server
- Request
- Response
- Status Code
- Header
- JSON Response
- Routing
- HTTP Method
- REST API
- Express.js
- Route
- URL Parameter
- Query Parameter
- Middleware

Materi ini merupakan dasar dalam membangun backend menggunakan Node.js. Setelah memahami cara kerja HTTP dan Express, Anda sudah siap membuat REST API sederhana serta menghubungkannya dengan database pada tahap berikutnya.

---

# Environment Variables

Saat mengembangkan aplikasi, sering kali terdapat data yang tidak boleh ditulis langsung di dalam kode, seperti:

- API Key
- Database URL
- Password
- Secret Key
- Token

Untuk itu digunakan **Environment Variables**.

---

# File .env

Buat file bernama:

```
.env
```

Contoh:

```env
PORT=3000

DB_HOST=localhost

DB_USER=root

DB_PASSWORD=password123

SECRET_KEY=mysecretkey
```

File `.env` sebaiknya **tidak diunggah ke GitHub**, karena dapat berisi informasi sensitif.

---

# dotenv

Package **dotenv** digunakan untuk membaca isi file `.env`.

Install:

```bash
npm install dotenv
```

Gunakan pada file utama:

```javascript
require("dotenv").config();
```

Mengakses variabel:

```javascript
console.log(process.env.PORT);
```

---

# process.env

Semua Environment Variable dapat diakses melalui:

```javascript
process.env
```

Contoh:

```javascript
const port = process.env.PORT;
```

---

# npm Scripts

Selain menjalankan:

```bash
node app.js
```

Kita dapat membuat script di `package.json`.

```json
"scripts":{

"start":"node app.js"

}
```

Jalankan:

```bash
npm start
```

---

# Script Development

Contoh:

```json
"scripts":{

"dev":"node app.js"

}
```

Menjalankan:

```bash
npm run dev
```

---

# Nodemon

Saat mengembangkan aplikasi, kita sering mengubah kode.

Tanpa Nodemon, server harus dihentikan dan dijalankan kembali setiap kali ada perubahan.

Install:

```bash
npm install --save-dev nodemon
```

Script:

```json
"scripts":{

"dev":"nodemon app.js"

}
```

Jalankan:

```bash
npm run dev
```

Server akan otomatis restart ketika file berubah.

---

# Error Handling

Error adalah hal yang pasti terjadi dalam pengembangan aplikasi.

JavaScript menyediakan:

```javascript
try{

console.log(data);

}catch(error){

console.log(error);

}
```

---

# Throw Error

Kita juga dapat membuat error sendiri.

```javascript
throw new Error(

"Data tidak ditemukan"

);
```

---

# Menangani Error Express

Contoh middleware:

```javascript
app.use((err,req,res,next)=>{

res.status(500).json({

message:err.message

});

});
```

Middleware ini digunakan sebagai penanganan error secara terpusat.

---

# Logging

Logging membantu mengetahui aktivitas aplikasi.

Contoh:

```javascript
console.log(

"Server berjalan"

);
```

Pada aplikasi besar biasanya digunakan package seperti:

- Morgan
- Winston
- Pino

---

# Async Function

Node.js sangat sering menggunakan asynchronous programming.

Contoh:

```javascript
async function getData(){

return "Halo";

}

getData()

.then(console.log);
```

---

# Promise

```javascript
const data = new Promise(

(resolve)=>{

resolve("Berhasil");

}

);
```

---

# Async Await

Cara modern:

```javascript
async function tampil(){

const data = await Promise.resolve(

"Node.js"

);

console.log(data);

}
```

---

# Debugging

Debugging digunakan untuk mencari penyebab error.

Cara paling sederhana:

```javascript
console.log(data);
```

Atau menggunakan debugger bawaan:

```javascript
debugger;
```

Developer Tools atau Visual Studio Code akan berhenti pada baris tersebut saat mode debugging aktif.

---

# Struktur Folder

Contoh struktur proyek sederhana:

```text
project/

â”‚

â”œâ”€â”€ app.js

â”œâ”€â”€ package.json

â”œâ”€â”€ .env

â”œâ”€â”€ node_modules/

â”œâ”€â”€ routes/

â”œâ”€â”€ controllers/

â”œâ”€â”€ models/

â”œâ”€â”€ middleware/

â”œâ”€â”€ public/

â””â”€â”€ views/
```

Memisahkan file berdasarkan fungsinya akan membuat proyek lebih mudah dikelola.

---

# package-lock.json

Selain `package.json`, npm juga membuat:

```
package-lock.json
```

Fungsinya:

- Mengunci versi package.
- Menjaga agar dependency tetap konsisten.
- Memastikan hasil instalasi sama di semua komputer.

File ini sebaiknya ikut disimpan ke dalam repository Git.

---

# .gitignore

Folder `node_modules` tidak perlu diunggah ke GitHub.

Buat file:

```
.gitignore
```

Isi:

```text
node_modules

.env

logs
```

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Environment Variables
- File `.env`
- dotenv
- process.env
- npm Scripts
- Nodemon
- Error Handling
- Logging
- Async/Await
- Promise
- Debugging
- Struktur Folder
- package-lock.json
- .gitignore

Semua konsep tersebut merupakan bagian penting dalam membangun aplikasi Node.js yang aman, mudah dipelihara, dan siap dikembangkan bersama tim. Pada bagian terakhir kita akan membahas **Best Practice, arsitektur proyek, deployment, Node.js LTS, roadmap belajar, dan kesimpulan**.

---

# Best Practice Node.js

Menulis aplikasi Node.js bukan hanya membuat program berjalan, tetapi juga memastikan kode mudah dipahami, aman, dan mudah dikembangkan.

Berikut beberapa praktik terbaik yang digunakan oleh pengembang profesional.

---

# Gunakan Struktur Folder yang Rapi

Pisahkan file berdasarkan fungsinya.

Contoh:

```text
project/

â”‚

â”œâ”€â”€ app.js

â”œâ”€â”€ package.json

â”œâ”€â”€ .env

â”œâ”€â”€ src/

â”‚   â”œâ”€â”€ controllers/

â”‚   â”œâ”€â”€ routes/

â”‚   â”œâ”€â”€ models/

â”‚   â”œâ”€â”€ middleware/

â”‚   â”œâ”€â”€ services/

â”‚   â”œâ”€â”€ utils/

â”‚   â””â”€â”€ config/

â”œâ”€â”€ public/

â”œâ”€â”€ uploads/

â””â”€â”€ tests/
```

Dengan struktur seperti ini, proyek akan lebih mudah dipelihara ketika ukurannya semakin besar.

---

# Gunakan MVC

MVC merupakan salah satu arsitektur yang paling sering digunakan.

```
Client

â†“

Routes

â†“

Controller

â†“

Model

â†“

Database
```

Penjelasan:

- **Model** mengelola data.
- **View** menampilkan data (jika menggunakan template engine).
- **Controller** berisi logika aplikasi.

Pemisahan ini membuat kode lebih terstruktur.

---

# Gunakan Async/Await

Daripada menggunakan callback yang panjang:

```javascript
fs.readFile(...);
```

Lebih baik menggunakan:

```javascript
async function getData(){

try{

// proses

}catch(error){

console.log(error);

}

}
```

Kode menjadi lebih mudah dibaca dan dipelihara.

---

# Validasi Data

Selalu validasi data yang diterima dari pengguna.

Contoh yang perlu divalidasi:

- Email
- Password
- Nomor Telepon
- Username
- URL
- Tanggal

Validasi membantu mencegah data tidak valid masuk ke sistem.

---

# Jangan Menyimpan Data Rahasia di Kode

Kurang baik:

```javascript
const password = "admin123";
```

Lebih baik:

```javascript
process.env.DB_PASSWORD
```

Gunakan file `.env` untuk menyimpan data sensitif.

---

# Gunakan HTTP Status Code yang Tepat

Contoh:

```javascript
res.status(200).json(data);
```

Jika data berhasil dibuat:

```javascript
res.status(201).json(data);
```

Jika data tidak ditemukan:

```javascript
res.status(404).json({

message:"Data tidak ditemukan"

});
```

Penggunaan status code yang tepat memudahkan client memahami hasil dari request.

---

# Logging

Catat aktivitas penting aplikasi, misalnya:

- Server dijalankan.
- User login.
- Error.
- Request API.

Logging mempermudah proses monitoring dan debugging.

---

# Testing

Lakukan pengujian secara berkala untuk memastikan aplikasi berjalan sesuai harapan.

Beberapa jenis pengujian:

- Unit Test
- Integration Test
- End-to-End Test

Framework yang sering digunakan antara lain Jest dan Mocha.

---

# Deployment

Deployment adalah proses memindahkan aplikasi dari lingkungan pengembangan ke server agar dapat diakses oleh pengguna.

Beberapa pilihan deployment:

- VPS
- Cloud Server
- Docker
- Platform as a Service (PaaS)

Sebelum melakukan deployment, pastikan:

- Environment Variable sudah dikonfigurasi.
- Dependency telah terinstal.
- Port server sesuai dengan konfigurasi hosting.

---

# Node.js LTS

Node.js memiliki dua jenis rilis utama:

### Current

- Berisi fitur terbaru.
- Cocok untuk pengujian.
- Tidak selalu digunakan pada lingkungan produksi.

### LTS (Long Term Support)

- Lebih stabil.
- Mendapat pembaruan keamanan.
- Direkomendasikan untuk aplikasi produksi.

---

# Mengapa Banyak Proyek Menggunakan Node.js 20 LTS?

Node.js 20 LTS masih menjadi pilihan banyak pengembang karena:

- Stabil untuk aplikasi produksi.
- Mendapat pembaruan keamanan dalam jangka panjang.
- Kompatibel dengan banyak library dan framework.
- Banyak panel hosting serta layanan cloud telah mengoptimalkan dukungannya.

Untuk proyek yang mengutamakan kestabilan, menggunakan versi LTS merupakan pilihan yang lebih aman dibanding langsung beralih ke versi terbaru.

---

# Roadmap Belajar Node.js

Setelah memahami dasar Node.js, urutan belajar yang disarankan adalah:

```
Node.js Dasar

â†“

Express.js

â†“

REST API

â†“

MongoDB

â†“

Authentication

â†“

JWT

â†“

Upload File

â†“

Socket.IO

â†“

Testing

â†“

Docker

â†“

Deployment
```

Dengan mengikuti urutan tersebut, proses belajar akan lebih terarah.

---

# Kesalahan yang Sering Dilakukan Pemula

Beberapa kesalahan yang umum terjadi:

- Menyimpan password di dalam source code.
- Tidak menggunakan `.env`.
- Tidak menangani error.
- Tidak memvalidasi input pengguna.
- Menaruh semua kode dalam satu file.
- Tidak memahami asynchronous programming.
- Mengabaikan struktur folder.

Menghindari kesalahan-kesalahan ini akan membuat aplikasi lebih aman dan mudah dipelihara.

---

# Kesimpulan

Node.js memungkinkan JavaScript digunakan untuk membangun aplikasi backend yang cepat, ringan, dan efisien.

Pada artikel ini kita telah mempelajari:

- Pengertian Node.js
- Event Loop
- Non-Blocking I/O
- npm
- package.json
- Module
- File System
- HTTP Server
- Express Dasar
- Environment Variable
- Async/Await
- Error Handling
- MVC
- Deployment
- Best Practice

Dengan menguasai Node.js, Anda telah memiliki dasar yang kuat untuk membangun REST API, bot, sistem backend, maupun aplikasi real-time.

---

# Referensi Belajar

Beberapa referensi yang direkomendasikan:

- Dokumentasi resmi Node.js
- npm Documentation
- Express Documentation
- MDN Web Docs
- The Odin Project
- freeCodeCamp

Gunakan dokumentasi resmi sebagai referensi utama karena selalu diperbarui mengikuti perkembangan Node.js.

---

# Penutup

Selamat! ðŸŽ‰

Anda telah menyelesaikan materi dasar Node.js. Kini Anda memahami bagaimana JavaScript dapat dijalankan di luar browser untuk membangun server, API, dan berbagai layanan backend.

Langkah berikutnya adalah mempelajari **Express.js**, framework backend paling populer di ekosistem Node.js. Dengan Express, Anda akan belajar membuat routing yang lebih sederhana, middleware, REST API yang terstruktur, hingga membangun backend siap produksi.

Teruslah berlatih dengan membuat proyek nyata, seperti API sederhana, sistem autentikasi, atau aplikasi CRUD. Pengalaman membangun proyek akan memperkuat pemahaman Anda terhadap Node.js dan dunia backend.
