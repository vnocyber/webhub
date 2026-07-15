# Belajar Express.js Dari Dasar Hingga Mahir

**Kategori:** Web Development

**Level:** Pemula â†’ Mahir

**Estimasi membaca:** Â±30 Menit

---

# Pendahuluan

Express.js adalah framework web untuk Node.js yang digunakan untuk membangun aplikasi backend, REST API, dan website secara lebih cepat dan terstruktur.

Sebelum adanya Express, pengembang harus menggunakan module `http` bawaan Node.js untuk menangani request dan response secara manual. Meskipun memungkinkan, pendekatan tersebut membutuhkan lebih banyak kode.

Express menyederhanakan proses tersebut sehingga pengembang dapat lebih fokus pada logika aplikasi.

Saat ini Express merupakan framework Node.js yang paling banyak digunakan dan menjadi dasar dari banyak aplikasi web modern.

---

# Apa Itu Express.js?

Express adalah framework yang berjalan di atas Node.js.

Express menyediakan berbagai fitur seperti:

- Routing
- Middleware
- Request & Response Helper
- Static File
- Template Engine
- Error Handling

Dengan Express, proses pembuatan server menjadi jauh lebih sederhana dibanding menggunakan module `http` bawaan.

---

# Mengapa Menggunakan Express?

Beberapa alasan Express sangat populer:

- Mudah dipelajari
- Ringan
- Cepat
- Dokumentasi lengkap
- Komunitas besar
- Banyak middleware siap pakai
- Cocok untuk REST API

Framework ini juga menjadi dasar banyak framework lain seperti NestJS.

---

# Instalasi Express

Pastikan Node.js sudah terpasang.

Inisialisasi proyek:

```bash
npm init -y
```

Install Express:

```bash
npm install express
```

Versi singkat:

```bash
npm i express
```

---

# Membuat Server Pertama

Buat file:

```
app.js
```

Isi:

```javascript
const express = require("express");

const app = express();

app.listen(3000,()=>{

console.log("Server berjalan di port 3000");

});
```

Jalankan:

```bash
node app.js
```

---

# Route Pertama

Tambahkan route sederhana.

```javascript
app.get("/",(req,res)=>{

res.send("Hello Express");

});
```

Buka browser:

```
http://localhost:3000
```

Maka akan muncul:

```
Hello Express
```

---

# Routing

Routing menentukan apa yang harus dilakukan server ketika menerima request pada URL tertentu.

Contoh:

```javascript
app.get("/",(req,res)=>{

res.send("Home");

});

app.get("/about",(req,res)=>{

res.send("About");

});

app.get("/contact",(req,res)=>{

res.send("Contact");

});
```

---

# HTTP Method

Express mendukung berbagai HTTP Method.

Yang paling sering digunakan:

- GET
- POST
- PUT
- PATCH
- DELETE

Contoh:

```javascript
app.post("/users",(req,res)=>{

res.send("User berhasil ditambahkan");

});
```

---

# Request Object

Object `req` menyimpan informasi dari client.

Beberapa property yang sering digunakan:

```javascript
req.params

req.query

req.body

req.headers

req.method

req.url
```

---

# Response Object

Object `res` digunakan untuk mengirim jawaban ke client.

Beberapa method yang sering digunakan:

```javascript
res.send()

res.json()

res.status()

res.redirect()

res.download()

res.sendFile()
```

---

# Mengirim JSON

```javascript
app.get("/api",(req,res)=>{

res.json({

status:true,

message:"Hello API"

});

});
```

Express akan otomatis mengubah object JavaScript menjadi JSON.

---

# Status Code

Contoh:

```javascript
res.status(200).json({

message:"Berhasil"

});
```

Error:

```javascript
res.status(404).json({

message:"Data tidak ditemukan"

});
```

---

# Menjalankan Server

Secara umum aplikasi Express dijalankan menggunakan:

```javascript
const PORT = 3000;

app.listen(PORT,()=>{

console.log(

`Server berjalan pada port ${PORT}`

);
});
```

Pada aplikasi nyata, nilai port biasanya diambil dari Environment Variable.

---

# Ringkasan

Pada bagian pertama ini kita telah mempelajari:

- Pengertian Express.js
- Instalasi
- Membuat server
- Routing
- HTTP Method
- Request
- Response
- JSON Response
- Status Code

Materi ini menjadi dasar sebelum mempelajari middleware, parameter URL, request body, static file, template engine, dan REST API pada bagian berikutnya.

---

# Middleware

Middleware adalah function yang dijalankan di antara proses request dan response.

Setiap request yang masuk dapat melewati satu atau beberapa middleware sebelum mencapai route utama.

Middleware dapat digunakan untuk:

- Logging
- Authentication
- Validasi
- Parsing Body
- Error Handling

Alur sederhananya:

```
Client

â†“

Middleware

â†“

Route

â†“

Response
```

---

# Membuat Middleware

Contoh sederhana:

```javascript
app.use((req,res,next)=>{

console.log("Ada request baru");

next();

});
```

Fungsi `next()` digunakan agar Express melanjutkan proses ke middleware atau route berikutnya.

Jika `next()` tidak dipanggil, request akan berhenti pada middleware tersebut.

---

# Middleware Khusus Route

Middleware juga dapat digunakan hanya pada route tertentu.

```javascript
function cekLogin(req,res,next){

console.log("Memeriksa login...");

next();

}

app.get(

"/dashboard",

cekLogin,

(req,res)=>{

res.send("Dashboard");

}

);
```

---

# Express.json()

Agar Express dapat membaca data JSON dari client.

```javascript
app.use(

express.json()

);
```

Contoh request:

```json
{

"nama":"Vano"

}
```

Mengakses data:

```javascript
app.post(

"/user",

(req,res)=>{

console.log(req.body);

res.send("OK");

});
```

---

# Express.urlencoded()

Digunakan untuk membaca data dari form HTML.

```javascript
app.use(

express.urlencoded({

extended:true

})

);
```

---

# Route Parameters

Route Parameter digunakan untuk mengambil nilai langsung dari URL.

Contoh:

```javascript
app.get(

"/user/:id",

(req,res)=>{

res.send(req.params.id);

});
```

URL:

```
/user/10
```

Hasil:

```
10
```

---

# Multiple Parameters

```javascript
app.get(

"/user/:id/post/:post",

(req,res)=>{

res.json(req.params);

});
```

URL:

```
/user/5/post/20
```

Hasil:

```json
{

"id":"5",

"post":"20"

}
```

---

# Query Parameter

Query digunakan untuk mengirim data tambahan melalui URL.

URL:

```
/search?keyword=nodejs&page=1
```

Mengaksesnya:

```javascript
app.get(

"/search",

(req,res)=>{

console.log(

req.query.keyword

);

console.log(

req.query.page

);

});
```

---

# Perbedaan Params dan Query

### Params

Digunakan untuk mengidentifikasi resource.

```
/user/10
```

### Query

Digunakan untuk filter, pencarian, atau pengaturan tambahan.

```
/search?keyword=express
```

---

# Request Body

Request Body biasanya digunakan pada method:

- POST
- PUT
- PATCH

Contoh:

```javascript
app.post(

"/register",

(req,res)=>{

console.log(req.body);

});
```

---

# Mengirim JSON

```javascript
app.post(

"/user",

(req,res)=>{

const data=req.body;

res.json({

status:true,

data

});

});
```

---

# Response JSON

Mengirim response menggunakan JSON.

```javascript
res.json({

status:true,

message:"Berhasil"

});
```

JSON adalah format yang paling umum digunakan pada REST API.

---

# Static Files

Express dapat menampilkan file statis seperti:

- CSS
- JavaScript
- Gambar
- Font

Contoh:

```javascript
app.use(

express.static("public")

);
```

Struktur:

```text
public/

â”‚

â”œâ”€â”€ css/

â”œâ”€â”€ js/

â””â”€â”€ img/
```

Semua file di dalam folder `public` dapat diakses langsung melalui browser.

---

# Mengirim File

```javascript
res.sendFile(

__dirname + "/index.html"

);
```

Method ini sering digunakan untuk mengirim file HTML secara langsung.

---

# Redirect

Mengalihkan pengguna ke halaman lain.

```javascript
res.redirect("/login");
```

---

# Download File

```javascript
res.download("laporan.pdf");
```

Browser akan mengunduh file tersebut.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Middleware
- `next()`
- `express.json()`
- `express.urlencoded()`
- Route Parameters
- Query Parameters
- Request Body
- Response JSON
- Static Files
- `sendFile()`
- `redirect()`
- `download()`

Konsep-konsep tersebut merupakan fondasi penting dalam membangun aplikasi Express yang mampu menerima data dari pengguna, mengelola file statis, serta mengatur alur request dan response dengan lebih fleksibel. Pada bagian berikutnya kita akan membahas **Express Router, REST API, CRUD, Template Engine, dan struktur route yang lebih rapi**.

---

# Express Router

Ketika aplikasi semakin besar, menaruh semua route dalam satu file akan membuat kode sulit dibaca.

Express menyediakan **Router** agar route dapat dipisahkan ke dalam file yang berbeda.

Contoh struktur:

```text
project/

â”‚

â”œâ”€â”€ app.js

â”œâ”€â”€ routes/

â”‚   â”œâ”€â”€ user.js

â”‚   â”œâ”€â”€ article.js

â”‚   â””â”€â”€ auth.js

â””â”€â”€ controllers/
```

Dengan cara ini, setiap route memiliki tanggung jawab yang jelas.

---

# Membuat Router

Buat file:

```
routes/user.js
```

Isi:

```javascript
const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{

res.send("Daftar User");

});

module.exports = router;
```

---

# Menggunakan Router

Pada file `app.js`:

```javascript
const express = require("express");

const app = express();

const userRoute = require("./routes/user");

app.use("/users",userRoute);

app.listen(3000);
```

Jika membuka:

```
/users
```

Maka Express akan menjalankan route pada `user.js`.

---

# REST API

REST API adalah arsitektur yang menggunakan HTTP sebagai media komunikasi antara client dan server.

Biasanya data dikirim menggunakan format **JSON**.

Contoh endpoint:

```
GET /users
```

Mengambil seluruh data user.

---

```
GET /users/1
```

Mengambil satu user.

---

```
POST /users
```

Menambahkan user baru.

---

```
PUT /users/1
```

Mengubah seluruh data user.

---

```
PATCH /users/1
```

Mengubah sebagian data user.

---

```
DELETE /users/1
```

Menghapus user.

---

# Membuat Data Sederhana

```javascript
const users=[

{

id:1,

nama:"Vano"

},

{

id:2,

nama:"Alex"

}

];
```

---

# GET Semua Data

```javascript
router.get("/",(req,res)=>{

res.json(users);

});
```

---

# GET Berdasarkan ID

```javascript
router.get("/:id",(req,res)=>{

const user = users.find(

u=>u.id==req.params.id

);

res.json(user);

});
```

---

# POST Data

```javascript
router.post("/",(req,res)=>{

users.push(req.body);

res.status(201).json({

message:"User ditambahkan"

});

});
```

---

# PUT Data

```javascript
router.put("/:id",(req,res)=>{

res.json({

message:"User diperbarui"

});

});
```

---

# DELETE Data

```javascript
router.delete("/:id",(req,res)=>{

res.json({

message:"User dihapus"

});

});
```

---

# CRUD

CRUD adalah operasi dasar dalam pengelolaan data.

| Operasi | HTTP Method |
|---------|-------------|
| Create | POST |
| Read | GET |
| Update | PUT / PATCH |
| Delete | DELETE |

Hampir semua aplikasi web menggunakan konsep CRUD.

---

# Template Engine

Selain membuat API, Express juga dapat menghasilkan halaman HTML menggunakan **Template Engine**.

Beberapa template engine populer:

- EJS
- Pug
- Handlebars

---

# Install EJS

```bash
npm install ejs
```

---

# Konfigurasi EJS

```javascript
app.set(

"view engine",

"ejs"

);
```

---

# Folder Views

Struktur:

```text
views/

â”‚

â”œâ”€â”€ index.ejs

â”œâ”€â”€ about.ejs

â””â”€â”€ contact.ejs
```

---

# Render Halaman

```javascript
app.get("/",(req,res)=>{

res.render("index");

});
```

Express akan mencari file:

```
views/index.ejs
```

---

# Mengirim Data ke View

```javascript
app.get("/",(req,res)=>{

res.render(

"index",

{

nama:"Vano"

}

);

});
```

Pada file `index.ejs`:

```html
<h1><%= nama %></h1>
```

Output:

```
Vano
```

---

# Struktur REST API

Contoh struktur sederhana:

```text
src/

â”‚

â”œâ”€â”€ routes/

â”œâ”€â”€ controllers/

â”œâ”€â”€ models/

â”œâ”€â”€ middleware/

â”œâ”€â”€ config/

â”œâ”€â”€ services/

â””â”€â”€ app.js
```

Dengan struktur ini, kode menjadi lebih mudah dikembangkan dan dipelihara.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Express Router
- REST API
- Endpoint
- CRUD
- JSON Response
- Route Modular
- Template Engine
- EJS
- Render View
- Mengirim Data ke View
- Struktur REST API

Materi ini merupakan dasar dalam membangun aplikasi backend modern menggunakan Express. Dengan memisahkan route dan menerapkan konsep CRUD, aplikasi akan lebih terstruktur, mudah dipelihara, dan siap dikembangkan menjadi sistem yang lebih besar seperti CMS, e-commerce, atau layanan API.

---

# Arsitektur MVC

Seiring berkembangnya aplikasi, menulis seluruh kode dalam satu file akan membuat proyek sulit dipelihara.

Salah satu pola yang paling banyak digunakan adalah **MVC (Model - View - Controller)**.

MVC membagi aplikasi menjadi tiga bagian utama:

- Model
- View
- Controller

Diagram sederhana:

```
Browser

â†“

Routes

â†“

Controller

â†“

Model

â†“

Database

â†“

Controller

â†“

Response
```

Dengan pola ini, setiap bagian memiliki tugas yang jelas sehingga kode lebih mudah dipahami dan dikembangkan.

---

# Model

Model bertanggung jawab mengelola data.

Tugas Model:

- Mengambil data
- Menambah data
- Mengubah data
- Menghapus data

Contoh sederhana:

```javascript
const users=[];

module.exports=users;
```

Pada aplikasi nyata, Model biasanya berkomunikasi langsung dengan database seperti MongoDB atau MySQL.

---

# Controller

Controller berisi logika aplikasi.

Contoh:

```javascript
exports.getUsers=(req,res)=>{

res.json({

message:"Daftar User"

});

};
```

Controller menerima request dari Route, memprosesnya, lalu mengirim response.

---

# Routes

Routes menentukan endpoint yang dapat diakses client.

```javascript
const router=require("express").Router();

const userController=

require("../controllers/userController");

router.get(

"/",

userController.getUsers

);

module.exports=router;
```

---

# Struktur MVC

Contoh struktur proyek:

```text
src/

â”‚

â”œâ”€â”€ app.js

â”œâ”€â”€ routes/

â”œâ”€â”€ controllers/

â”œâ”€â”€ models/

â”œâ”€â”€ middleware/

â”œâ”€â”€ config/

â”œâ”€â”€ services/

â”œâ”€â”€ utils/

â””â”€â”€ public/
```

Struktur ini umum digunakan pada proyek Express berskala menengah hingga besar.

---

# Error Handling

Kesalahan dapat terjadi karena berbagai alasan, seperti input tidak valid atau kegagalan koneksi database.

Express mendukung middleware khusus untuk menangani error.

```javascript
app.use((err,req,res,next)=>{

res.status(500).json({

status:false,

message:err.message

});

});
```

Dengan pendekatan ini, seluruh error dapat ditangani di satu tempat.

---

# Custom Error

Kita juga dapat membuat error sendiri.

```javascript
if(!user){

throw new Error(

"User tidak ditemukan"

);

}
```

Cara ini mempermudah proses debugging dan penanganan kesalahan.

---

# Authentication

Authentication adalah proses memverifikasi identitas pengguna.

Contohnya:

- Login
- Logout
- Register

Authentication memastikan hanya pengguna yang memiliki izin yang dapat mengakses fitur tertentu.

---

# Authorization

Authorization berbeda dengan Authentication.

Authentication menjawab:

```
Siapa pengguna?
```

Authorization menjawab:

```
Apa yang boleh dilakukan pengguna?
```

Sebagai contoh:

- Admin dapat menghapus data.
- User biasa hanya dapat melihat data.

---

# JSON Web Token (JWT)

JWT adalah metode autentikasi berbasis token.

Proses sederhananya:

```
Login

â†“

Server

â†“

JWT

â†“

Client

â†“

Request berikutnya

â†“

Token Diverifikasi

â†“

Akses Diberikan
```

JWT banyak digunakan pada REST API karena tidak memerlukan penyimpanan sesi di server.

---

# Install JWT

```bash
npm install jsonwebtoken
```

---

# Membuat Token

```javascript
const jwt=require(

"jsonwebtoken"

);

const token=jwt.sign(

{

id:1

},

"SECRET_KEY",

{

expiresIn:"1h"

}

);
```

---

# Verifikasi Token

```javascript
const data=

jwt.verify(

token,

"SECRET_KEY"

);
```

Jika token valid, server dapat mengizinkan akses ke resource yang diminta.

---

# Middleware Authentication

Contoh sederhana:

```javascript
function auth(

req,res,next

){

const token=

req.headers.authorization;

if(!token){

return res.status(401).json({

message:"Unauthorized"

});

}

next();

}
```

Middleware ini dapat dipasang pada route yang membutuhkan autentikasi.

---

# Upload File

Express sering digunakan untuk menerima upload file.

Package yang paling populer adalah **Multer**.

Install:

```bash
npm install multer
```

---

# Konfigurasi Multer

```javascript
const multer=

require("multer");

const upload=

multer({

dest:"uploads/"

});
```

Folder `uploads/` akan digunakan untuk menyimpan file yang diterima.

---

# Upload Single File

```javascript
app.post(

"/upload",

upload.single("image"),

(req,res)=>{

res.json({

message:"Upload berhasil"

});

});
```

Nama `"image"` harus sesuai dengan nama field pada form HTML.

---

# Validasi Input

Sebelum menyimpan data ke database, lakukan validasi.

Contoh yang perlu divalidasi:

- Email
- Password
- Username
- Nomor Telepon
- URL
- Tanggal

Validasi membantu mencegah data yang tidak valid masuk ke sistem.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Arsitektur MVC
- Model
- Controller
- Routes
- Error Handling
- Custom Error
- Authentication
- Authorization
- JSON Web Token (JWT)
- Middleware Authentication
- Upload File dengan Multer
- Validasi Input

Semua konsep tersebut merupakan fondasi penting dalam membangun aplikasi Express yang aman, terstruktur, dan mudah dikembangkan. Pada bagian terakhir kita akan membahas **Best Practice, keamanan aplikasi, deployment, optimasi performa, roadmap belajar, dan kesimpulan** sehingga artikel Express.js menjadi panduan yang lengkap.

---

# Best Practice Express.js

Membangun aplikasi Express bukan hanya membuat server berjalan, tetapi juga memastikan kode mudah dipelihara, aman, dan mudah dikembangkan.

Berikut beberapa praktik terbaik yang umum digunakan.

---

# Pisahkan Kode Berdasarkan Tugas

Hindari menulis semua kode di dalam `app.js`.

Gunakan struktur seperti berikut:

```text
src/

â”œâ”€â”€ app.js
â”œâ”€â”€ routes/
â”œâ”€â”€ controllers/
â”œâ”€â”€ models/
â”œâ”€â”€ middleware/
â”œâ”€â”€ config/
â”œâ”€â”€ services/
â”œâ”€â”€ utils/
â”œâ”€â”€ validators/
â””â”€â”€ public/
```

Dengan struktur tersebut setiap bagian memiliki tanggung jawab yang jelas.

---

# Gunakan Environment Variable

Jangan pernah menulis data sensitif langsung pada source code.

Kurang baik:

```javascript
const SECRET_KEY="123456";
```

Lebih baik:

```javascript
process.env.SECRET_KEY
```

Simpan data tersebut pada file `.env`.

---

# Gunakan Middleware

Middleware dapat digunakan untuk:

- Authentication
- Logging
- Validasi
- CORS
- Error Handling

Semakin sedikit kode yang diulang, semakin mudah aplikasi dipelihara.

---

# Validasi Semua Input

Jangan pernah langsung mempercayai data dari pengguna.

Contoh yang perlu divalidasi:

- Email
- Password
- Username
- Nomor Telepon
- URL
- ID

Validasi membantu mencegah data yang salah masuk ke sistem.

---

# Gunakan HTTP Status Code yang Tepat

Contoh:

```javascript
res.status(200).json(data);
```

Membuat data:

```javascript
res.status(201).json(data);
```

Data tidak ditemukan:

```javascript
res.status(404).json({

message:"Data tidak ditemukan"

});
```

Error server:

```javascript
res.status(500).json({

message:"Internal Server Error"

});
```

Status code yang benar memudahkan client memahami hasil request.

---

# Gunakan Helmet

Helmet membantu meningkatkan keamanan aplikasi dengan menambahkan berbagai HTTP Security Header.

Install:

```bash
npm install helmet
```

Gunakan:

```javascript
const helmet=require("helmet");

app.use(helmet());
```

---

# Gunakan CORS

CORS digunakan untuk mengatur website mana yang boleh mengakses API.

Install:

```bash
npm install cors
```

Gunakan:

```javascript
const cors=require("cors");

app.use(cors());
```

Pada aplikasi produksi, sebaiknya batasi origin yang diizinkan.

---

# Rate Limiting

Rate Limiting mencegah satu pengguna mengirim terlalu banyak request dalam waktu singkat.

Install:

```bash
npm install express-rate-limit
```

Contoh:

```javascript
const rateLimit=require(

"express-rate-limit"

);

const limiter=rateLimit({

windowMs:15*60*1000,

max:100

});

app.use(limiter);
```

---

# Logging

Catat aktivitas penting aplikasi.

Contohnya:

- Login
- Logout
- Error
- Request API

Package yang sering digunakan:

- Morgan
- Winston
- Pino

Logging mempermudah proses monitoring dan debugging.

---

# Deployment

Deployment adalah proses menjalankan aplikasi di server agar dapat diakses melalui internet.

Beberapa pilihan deployment:

- VPS
- Docker
- Railway
- Render
- Fly.io
- DigitalOcean
- AWS
- Google Cloud

Sebelum deployment pastikan:

- File `.env` telah dikonfigurasi.
- Dependency telah terinstal.
- Port menggunakan `process.env.PORT`.

---

# Performance

Beberapa cara meningkatkan performa aplikasi:

- Gunakan caching bila diperlukan.
- Hindari query database yang tidak efisien.
- Gunakan pagination untuk data yang besar.
- Kompres file menggunakan gzip.
- Optimalkan gambar dan aset statis.

Performa yang baik akan meningkatkan pengalaman pengguna.

---

# Dokumentasi API

Dokumentasi memudahkan developer lain menggunakan API.

Tools yang sering digunakan:

- Swagger
- OpenAPI Specification
- Postman

Dokumentasi yang baik menjelaskan endpoint, parameter, request body, response, dan contoh penggunaan.

---

# Struktur Proyek Produksi

Contoh struktur aplikasi Express yang lebih lengkap:

```text
project/

â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ config/
â”‚   â”œâ”€â”€ controllers/
â”‚   â”œâ”€â”€ middleware/
â”‚   â”œâ”€â”€ models/
â”‚   â”œâ”€â”€ routes/
â”‚   â”œâ”€â”€ services/
â”‚   â”œâ”€â”€ utils/
â”‚   â”œâ”€â”€ validators/
â”‚   â””â”€â”€ app.js
â”‚
â”œâ”€â”€ public/
â”œâ”€â”€ uploads/
â”œâ”€â”€ tests/
â”œâ”€â”€ .env
â”œâ”€â”€ .gitignore
â”œâ”€â”€ package.json
â””â”€â”€ README.md
```

Struktur ini memudahkan pengembangan dalam tim dan mempermudah proses pemeliharaan aplikasi.

---

# Roadmap Belajar Express.js

Setelah memahami Express.js, urutan belajar yang disarankan adalah:

```
Express Dasar

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

Validation

â†“

Socket.IO

â†“

Testing

â†“

Docker

â†“

Deployment

â†“

Microservices
```

Belajar secara bertahap akan membantu memahami konsep backend dengan lebih baik.

---

# Kesalahan yang Sering Dilakukan Pemula

Beberapa kesalahan yang sering terjadi:

- Semua route ditulis dalam satu file.
- Tidak menggunakan middleware.
- Tidak memvalidasi input.
- Tidak menangani error.
- Menyimpan password dalam source code.
- Tidak menggunakan Environment Variable.
- Tidak menerapkan struktur folder.

Menghindari kesalahan tersebut akan membuat aplikasi lebih aman dan mudah dikembangkan.

---

# Kesimpulan

Express.js adalah framework backend yang ringan, cepat, dan fleksibel. Framework ini mempermudah pembuatan server, REST API, serta aplikasi web dengan struktur yang lebih rapi dibanding menggunakan module `http` bawaan Node.js.

Pada artikel ini kita telah mempelajari:

- Dasar Express.js
- Routing
- Middleware
- Request & Response
- REST API
- CRUD
- Express Router
- MVC
- Authentication
- JWT
- Upload File
- Error Handling
- Security
- Deployment
- Best Practice

Dengan menguasai Express.js, Anda telah memiliki fondasi kuat untuk membangun backend modern menggunakan Node.js.

---

# Referensi Belajar

Sumber belajar yang direkomendasikan:

- Dokumentasi resmi Express.js
- Dokumentasi Node.js
- MDN Web Docs
- OpenAPI Specification
- freeCodeCamp
- The Odin Project

Gunakan dokumentasi resmi sebagai referensi utama agar selalu mengikuti perkembangan terbaru.

---

# Penutup

Selamat! ðŸŽ‰

Anda telah menyelesaikan materi Express.js dari dasar hingga praktik terbaik. Kini Anda memahami cara membangun server, mengelola routing, membuat REST API, menggunakan middleware, menangani autentikasi, hingga menyiapkan aplikasi untuk deployment.

Langkah selanjutnya adalah mempelajari **MongoDB**, database NoSQL yang sangat populer dan sering dipasangkan dengan Node.js serta Express. Setelah menguasai MongoDB, Anda dapat membangun aplikasi CRUD yang lengkap dengan penyimpanan data yang efisien dan skalabel.
