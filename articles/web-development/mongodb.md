# Belajar MongoDB Dari Dasar Hingga Mahir

**Kategori:** Web Development

**Level:** Pemula â†’ Mahir

**Estimasi membaca:** Â±35 Menit

---

# Pendahuluan

MongoDB adalah database **NoSQL** yang digunakan untuk menyimpan data dalam bentuk dokumen (document). Berbeda dengan database relasional seperti MySQL atau PostgreSQL yang menggunakan tabel, MongoDB menggunakan koleksi (collection) yang berisi dokumen berformat BSON (Binary JSON).

MongoDB menjadi salah satu database paling populer dalam pengembangan aplikasi modern karena fleksibel, cepat, dan mudah digunakan bersama Node.js.

MongoDB sering digunakan pada:

- Website
- REST API
- Aplikasi Mobile
- Dashboard
- Sistem IoT
- Chat Application
- E-Commerce
- Content Management System (CMS)

---

# Apa Itu Database?

Database adalah tempat untuk menyimpan data secara terstruktur sehingga data dapat:

- Ditambah
- Dibaca
- Diubah
- Dihapus

Contoh data:

- User
- Artikel
- Produk
- Pesanan
- Komentar
- Kategori

Tanpa database, aplikasi tidak dapat menyimpan informasi secara permanen.

---

# Apa Itu MongoDB?

MongoDB merupakan database NoSQL berbasis dokumen.

Contoh dokumen:

```json
{
  "_id":"64ab123",
  "nama":"Vano",
  "umur":20,
  "email":"vano@example.com"
}
```

Setiap dokumen menyerupai object JavaScript sehingga sangat cocok digunakan bersama Node.js.

---

# MongoDB vs SQL

| MongoDB | SQL |
|----------|-----|
| Database | Database |
| Collection | Table |
| Document | Row |
| Field | Column |

MongoDB lebih fleksibel karena setiap dokumen tidak harus memiliki struktur yang sama.

---

# Kelebihan MongoDB

Beberapa keunggulan MongoDB:

- Fleksibel
- Cepat
- Mudah dikembangkan
- Cocok untuk data JSON
- Mudah diskalakan
- Banyak digunakan di industri

---

# Instalasi MongoDB

MongoDB dapat dipasang secara lokal atau menggunakan layanan cloud.

Pilihan yang umum digunakan:

- MongoDB Community Server
- MongoDB Atlas

MongoDB Atlas memungkinkan database diakses melalui internet tanpa perlu mengelola server sendiri.

---

# MongoDB Atlas

MongoDB Atlas adalah layanan database cloud resmi dari MongoDB.

Keunggulannya:

- Gratis untuk belajar
- Mudah digunakan
- Backup otomatis
- Keamanan lebih baik
- Dapat diakses dari mana saja

---

# MongoDB Compass

MongoDB Compass adalah aplikasi GUI resmi MongoDB.

Compass memungkinkan pengguna:

- Melihat Collection
- Menambah Data
- Mengubah Data
- Menghapus Data
- Menjalankan Query

Tanpa harus menggunakan terminal.

---

# Mongo Shell

MongoDB juga menyediakan shell interaktif.

Masuk ke shell:

```bash
mongosh
```

Melihat daftar database:

```javascript
show dbs
```

---

# Membuat Database

Gunakan:

```javascript
use learnCyber
```

Jika database belum ada, MongoDB akan membuatnya saat data pertama disimpan.

---

# Membuat Collection

```javascript
db.createCollection("users")
```

Melihat daftar collection:

```javascript
show collections
```

---

# Menambahkan Dokumen

```javascript
db.users.insertOne({

nama:"Vano",

umur:20

})
```

---

# Menambahkan Banyak Dokumen

```javascript
db.users.insertMany([

{

nama:"Andi"

},

{

nama:"Budi"

}

]);
```

---

# Melihat Data

```javascript
db.users.find()
```

MongoDB akan menampilkan seluruh dokumen dalam collection tersebut.

---

# Ringkasan

Pada bagian pertama ini kita telah mempelajari:

- Pengertian Database
- MongoDB
- NoSQL
- Document
- Collection
- MongoDB Atlas
- MongoDB Compass
- Mongo Shell
- Membuat Database
- Membuat Collection
- Insert Data
- Melihat Data

Materi ini menjadi dasar sebelum mempelajari query, filter, update, delete, indexing, dan integrasi MongoDB dengan Node.js menggunakan Mongoose.

---

# Query pada MongoDB

Setelah data berhasil disimpan, langkah berikutnya adalah mengambil data menggunakan **MongoDB Query Language (MQL)**.

MQL adalah bahasa query yang digunakan MongoDB untuk mencari, memfilter, memperbarui, dan menghapus data.

---

# Menampilkan Semua Data

```javascript
db.users.find()
```

Perintah tersebut akan menampilkan seluruh dokumen dalam collection `users`.

---

# Menampilkan Satu Data

```javascript
db.users.findOne()
```

MongoDB hanya akan mengembalikan satu dokumen pertama yang ditemukan.

---

# Mencari Berdasarkan Field

Misalnya mencari user bernama Vano.

```javascript
db.users.find({

nama:"Vano"

})
```

Hasilnya hanya dokumen yang memiliki nilai `nama` sama dengan `"Vano"`.

---

# Mencari Berdasarkan ID

```javascript
db.users.findOne({

_id:ObjectId("64ab123456789")

})
```

Karena `_id` bertipe `ObjectId`, pencarian harus menggunakan fungsi `ObjectId()`.

---

# Projection

Projection digunakan untuk memilih field yang ingin ditampilkan.

```javascript
db.users.find(

{},

{

nama:1,

umur:1

}

)
```

MongoDB hanya akan menampilkan field `nama` dan `umur`.

---

# Menyembunyikan Field

```javascript
db.users.find(

{},

{

password:0

}

)
```

Field `password` tidak akan ditampilkan.

---

# Operator Perbandingan

MongoDB menyediakan berbagai operator.

| Operator | Fungsi |
|----------|--------|
| `$eq` | Sama dengan |
| `$ne` | Tidak sama |
| `$gt` | Lebih besar |
| `$gte` | Lebih besar atau sama |
| `$lt` | Lebih kecil |
| `$lte` | Lebih kecil atau sama |

---

# Lebih Besar Dari

```javascript
db.users.find({

umur:{

$gt:18

}

})
```

Menampilkan user yang berumur lebih dari 18 tahun.

---

# Lebih Kecil Dari

```javascript
db.users.find({

umur:{

$lt:25

}

})
```

---

# Tidak Sama Dengan

```javascript
db.users.find({

nama:{

$ne:"Vano"

}

})
```

---

# Operator Logika

MongoDB juga mendukung operator logika.

Beberapa di antaranya:

- `$and`
- `$or`
- `$not`
- `$nor`

---

# Operator OR

```javascript
db.users.find({

$or:[

{

nama:"Vano"

},

{

umur:20

}

]

})
```

---

# Operator AND

```javascript
db.users.find({

$and:[

{

nama:"Vano"

},

{

umur:20

}

]

})
```

---

# Sorting

Mengurutkan data.

Naik:

```javascript
db.users.find().sort({

umur:1

})
```

Turun:

```javascript
db.users.find().sort({

umur:-1

})
```

---

# Limit

Membatasi jumlah data.

```javascript
db.users.find().limit(5)
```

---

# Skip

Melewati sejumlah data.

```javascript
db.users.find()

.skip(10)
```

Biasanya digunakan bersama `limit()` untuk membuat pagination.

---

# Pagination

Contoh:

```javascript
db.users.find()

.skip(10)

.limit(10)
```

Artinya:

- Lewati 10 data pertama.
- Ambil 10 data berikutnya.

---

# Menghitung Data

```javascript
db.users.countDocuments()
```

Menghitung seluruh dokumen dalam collection.

---

# Update Satu Data

```javascript
db.users.updateOne(

{

nama:"Vano"

},

{

$set:{

umur:21

}

}

)
```

---

# Update Banyak Data

```javascript
db.users.updateMany(

{},

{

$set:{

status:"Aktif"

}

}

)
```

---

# Mengganti Dokumen

```javascript
db.users.replaceOne(

{

nama:"Vano"

},

{

nama:"Vano",

umur:21

}

)
```

`replaceOne()` akan mengganti seluruh isi dokumen dengan data baru.

---

# Menghapus Satu Data

```javascript
db.users.deleteOne({

nama:"Vano"

})
```

---

# Menghapus Banyak Data

```javascript
db.users.deleteMany({

status:"Tidak Aktif"

})
```

Gunakan dengan hati-hati karena operasi ini tidak dapat dibatalkan.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Query Data
- `find()`
- `findOne()`
- Projection
- Comparison Operator
- Logical Operator
- Sorting
- Limit
- Skip
- Pagination
- `countDocuments()`
- `updateOne()`
- `updateMany()`
- `replaceOne()`
- `deleteOne()`
- `deleteMany()`

Dengan menguasai operasi-operasi tersebut, Anda sudah dapat melakukan pengelolaan data dasar (CRUD) menggunakan MongoDB. Pada bagian berikutnya kita akan mempelajari **operator lanjutan**, **Index**, **Aggregation Pipeline**, serta teknik optimasi query untuk meningkatkan performa database.

---

# Operator Lanjutan MongoDB

Selain operator dasar seperti `$eq`, `$gt`, dan `$lt`, MongoDB juga menyediakan berbagai operator lanjutan yang memudahkan proses pencarian data.

Operator ini sangat berguna ketika aplikasi mulai memiliki data dalam jumlah besar.

---

# Operator `$in`

Operator `$in` digunakan untuk mencari data yang nilainya terdapat dalam sebuah daftar.

Contoh:

```javascript
db.users.find({

nama:{

$in:[

"Vano",

"Andi",

"Budi"

]

}

});
```

MongoDB akan mengembalikan seluruh dokumen yang memiliki nama **Vano**, **Andi**, atau **Budi**.

---

# Operator `$nin`

Kebalikan dari `$in`.

```javascript
db.users.find({

nama:{

$nin:[

"Admin",

"Root"

]

}

});
```

---

# Operator `$exists`

Digunakan untuk memeriksa apakah sebuah field tersedia.

```javascript
db.users.find({

email:{

$exists:true

}

});
```

Field yang tidak memiliki `email` tidak akan ditampilkan.

---

# Operator `$regex`

MongoDB mendukung pencarian menggunakan Regular Expression.

Contoh:

```javascript
db.users.find({

nama:/va/i

});
```

Huruf **i** berarti pencarian tidak membedakan huruf besar dan kecil.

Contoh di atas akan menemukan:

- Vano
- vano
- VANO

---

# Text Search

MongoDB mendukung pencarian teks.

Membuat Text Index:

```javascript
db.articles.createIndex({

judul:"text",

isi:"text"

});
```

Melakukan pencarian:

```javascript
db.articles.find({

$text:{

$search:"mongodb"

}

});
```

---

# Index

Index berfungsi mempercepat proses pencarian data.

Tanpa Index:

```
Collection

â†“

Scan Semua Data

â†“

Hasil
```

Dengan Index:

```
Collection

â†“

Index

â†“

Hasil
```

Semakin besar jumlah data, semakin terasa manfaat penggunaan Index.

---

# Membuat Index

```javascript
db.users.createIndex({

email:1

});
```

---

# Index Descending

```javascript
db.users.createIndex({

umur:-1

});
```

---

# Compound Index

Index juga dapat dibuat pada beberapa field sekaligus.

```javascript
db.users.createIndex({

nama:1,

umur:-1

});
```

Compound Index sering digunakan pada aplikasi yang memiliki banyak proses pencarian.

---

# Melihat Index

```javascript
db.users.getIndexes()
```

---

# Menghapus Index

```javascript
db.users.dropIndex(

"email_1"

);
```

---

# Aggregation

Aggregation digunakan untuk mengolah data.

Mirip seperti fungsi:

- GROUP BY
- SUM
- AVG
- COUNT

Pada database SQL.

---

# Aggregation Pipeline

Pipeline bekerja secara bertahap.

```
Collection

â†“

Match

â†“

Group

â†“

Sort

â†“

Output
```

Setiap tahap disebut **Stage**.

---

# Stage `$match`

Digunakan untuk melakukan filter.

```javascript
db.users.aggregate([

{

$match:{

umur:{

$gte:18

}

}

}

]);
```

---

# Stage `$group`

Mengelompokkan data.

```javascript
db.users.aggregate([

{

$group:{

_id:"$kota",

total:{

$sum:1

}

}

}

]);
```

Output:

```
Jakarta : 10

Bandung : 5

Surabaya : 8
```

---

# Stage `$sort`

Mengurutkan hasil.

```javascript
{

$sort:{

umur:-1

}

}
```

---

# Stage `$limit`

```javascript
{

$limit:5

}
```

---

# Stage `$skip`

```javascript
{

$skip:10

}
```

---

# Stage `$project`

Menampilkan field tertentu.

```javascript
{

$project:{

nama:1,

umur:1

}

}
```

---

# Aggregation Lengkap

```javascript
db.users.aggregate([

{

$match:{

umur:{

$gte:18

}

}

},

{

$sort:{

umur:-1

}

},

{

$limit:5

}

]);
```

Pipeline tersebut akan:

1. Memilih user berumur minimal 18 tahun.
2. Mengurutkan berdasarkan umur tertinggi.
3. Menampilkan lima data pertama.

---

# Distinct

Mengambil nilai unik.

```javascript
db.users.distinct(

"kota"

);
```

Jika terdapat banyak user dari kota yang sama, hasilnya hanya akan menampilkan setiap kota satu kali.

---

# Explain

Digunakan untuk melihat bagaimana MongoDB menjalankan sebuah query.

```javascript
db.users.find({

umur:20

}).explain();
```

Perintah ini membantu menganalisis apakah query sudah menggunakan Index atau masih melakukan Collection Scan.

---

# Optimasi Query

Beberapa cara meningkatkan performa MongoDB:

- Gunakan Index pada field yang sering dicari.
- Hindari mengambil seluruh field jika tidak diperlukan.
- Gunakan Projection.
- Gunakan Limit.
- Hindari query yang terlalu kompleks.
- Gunakan Aggregation bila diperlukan.

Optimasi query sangat penting ketika jumlah data telah mencapai ribuan bahkan jutaan dokumen.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- `$in`
- `$nin`
- `$exists`
- `$regex`
- Text Search
- Index
- Compound Index
- Aggregation
- `$match`
- `$group`
- `$sort`
- `$limit`
- `$skip`
- `$project`
- `distinct()`
- `explain()`
- Optimasi Query

Materi ini memberikan pemahaman tentang cara mengelola dan menganalisis data secara lebih efisien di MongoDB. Pada bagian berikutnya kita akan mempelajari **Mongoose**, membuat model, melakukan operasi CRUD melalui Node.js dan Express, serta memahami relasi data dalam aplikasi backend modern.

---

# Mongoose

Mongoose adalah Object Data Modeling (ODM) untuk MongoDB dan Node.js.

Mongoose mempermudah proses komunikasi antara aplikasi Node.js dengan MongoDB.

Keuntungan menggunakan Mongoose:

- Membuat Schema
- Validasi Data
- CRUD lebih mudah
- Middleware
- Relasi Data
- Query lebih sederhana

Sebagian besar aplikasi Express + MongoDB menggunakan Mongoose.

---

# Instalasi Mongoose

Install menggunakan npm.

```bash
npm install mongoose
```

Import:

```javascript
const mongoose = require("mongoose");
```

---

# Koneksi ke MongoDB

Contoh koneksi:

```javascript
const mongoose = require("mongoose");

mongoose.connect(

"mongodb://127.0.0.1:27017/learnCyber"

)

.then(()=>{

console.log("MongoDB Connected");

})

.catch((err)=>{

console.log(err);

});
```

Jika menggunakan MongoDB Atlas, gunakan Connection String yang diberikan oleh Atlas.

---

# Schema

Schema digunakan untuk menentukan struktur data.

Contoh:

```javascript
const userSchema = new mongoose.Schema({

nama:String,

email:String,

umur:Number

});
```

Schema membantu menjaga konsistensi data yang disimpan.

---

# Tipe Data Schema

Beberapa tipe data yang didukung:

```javascript
String

Number

Boolean

Date

Array

Object

ObjectId

Buffer

Mixed
```

---

# Model

Model dibuat berdasarkan Schema.

```javascript
const User = mongoose.model(

"User",

userSchema

);
```

Model digunakan untuk berinteraksi dengan collection di MongoDB.

---

# Membuat Dokumen

```javascript
const user = new User({

nama:"Vano",

email:"vano@example.com",

umur:20

});

user.save();
```

---

# Membuat Data Langsung

```javascript
await User.create({

nama:"Andi",

umur:22

});
```

Method `create()` akan membuat dan menyimpan data sekaligus.

---

# Mencari Data

Semua data:

```javascript
const users = await User.find();
```

Satu data:

```javascript
const user = await User.findOne({

nama:"Vano"

});
```

Berdasarkan ID:

```javascript
const user = await User.findById(id);
```

---

# Update Data

```javascript
await User.updateOne(

{

nama:"Vano"

},

{

umur:21

}

);
```

---

# Update Berdasarkan ID

```javascript
await User.findByIdAndUpdate(

id,

{

umur:21

}

);
```

---

# Menghapus Data

```javascript
await User.deleteOne({

nama:"Vano"

});
```

---

# Menghapus Berdasarkan ID

```javascript
await User.findByIdAndDelete(id);
```

---

# Validasi Schema

Contoh validasi sederhana:

```javascript
const userSchema = new mongoose.Schema({

nama:{

type:String,

required:true

},

email:{

type:String,

required:true

}

});
```

Jika field wajib tidak diisi, Mongoose akan menghasilkan error.

---

# Default Value

```javascript
status:{

type:String,

default:"Aktif"

}
```

Jika nilai tidak diberikan, Mongoose akan menggunakan nilai default.

---

# Unique

```javascript
email:{

type:String,

unique:true

}
```

Nilai email tidak boleh sama dengan dokumen lain.

---

# Timestamp

```javascript
{

timestamps:true

}
```

Mongoose akan otomatis membuat field:

```text
createdAt

updatedAt
```

---

# Relasi Data

MongoDB tidak menggunakan JOIN seperti SQL.

Sebagai gantinya digunakan ObjectId.

Contoh:

```javascript
const postSchema = new mongoose.Schema({

judul:String,

author:{

type:mongoose.Schema.Types.ObjectId,

ref:"User"

}

});
```

---

# Populate

Populate digunakan untuk mengambil data relasi.

```javascript
const post = await Post.find()

.populate("author");
```

Dengan Populate, data author akan otomatis ditampilkan.

---

# CRUD dengan Express

Contoh sederhana:

```javascript
app.get("/users",

async(req,res)=>{

const users=

await User.find();

res.json(users);

});
```

Menambah data:

```javascript
app.post("/users",

async(req,res)=>{

const user=

await User.create(

req.body

);

res.json(user);

});
```

---

# Struktur Folder

Contoh proyek:

```text
src/

â”‚

â”œâ”€â”€ app.js

â”œâ”€â”€ models/

â”‚   â”œâ”€â”€ User.js

â”‚   â””â”€â”€ Article.js

â”œâ”€â”€ routes/

â”œâ”€â”€ controllers/

â”œâ”€â”€ middleware/

â””â”€â”€ config/
```

Pemisahan file akan memudahkan pengembangan aplikasi dalam jangka panjang.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Mongoose
- Koneksi Database
- Schema
- Model
- Validasi
- Default Value
- Unique
- Timestamp
- CRUD
- Populate
- Relasi Data
- Integrasi Express

Dengan Mongoose, proses pengelolaan database menjadi lebih mudah, aman, dan terstruktur. Pada bagian terakhir kita akan membahas **Best Practice**, **optimasi performa**, **backup database**, **keamanan MongoDB**, **deployment**, serta **kesimpulan** agar artikel MongoDB menjadi panduan yang lengkap.

---

# Best Practice MongoDB

Membangun aplikasi menggunakan MongoDB bukan hanya tentang menyimpan data, tetapi juga memastikan database tetap cepat, aman, dan mudah dipelihara seiring bertambahnya jumlah pengguna.

Berikut beberapa praktik terbaik yang umum digunakan.

---

# Rancang Schema dengan Baik

Sebelum membuat collection, tentukan terlebih dahulu struktur data yang akan digunakan.

Contoh dokumen User:

```json
{
  "_id": "...",
  "nama": "Vano",
  "email": "vano@example.com",
  "role": "admin",
  "createdAt": "...",
  "updatedAt": "..."
}
```

Schema yang baik akan mempermudah proses pengembangan dan mengurangi perubahan struktur di masa depan.

---

# Gunakan Validation

Pastikan setiap data yang masuk telah divalidasi.

Contoh:

```javascript
const userSchema = new mongoose.Schema({

nama:{

type:String,

required:true,

trim:true

},

email:{

type:String,

required:true,

lowercase:true,

unique:true

}

});
```

Validasi membantu menjaga kualitas data dalam database.

---

# Gunakan Index dengan Bijak

Index mempercepat proses pencarian data.

Gunakan Index pada field yang sering digunakan untuk:

- Login
- Search
- Filter
- Sorting

Namun, terlalu banyak Index juga dapat memperlambat proses insert dan update.

---

# Hindari Data Duplikat

Gunakan properti `unique` jika diperlukan.

```javascript
email:{

type:String,

unique:true

}
```

Dengan begitu MongoDB akan menolak data yang memiliki email sama.

---

# Gunakan Projection

Jangan mengambil seluruh field jika tidak diperlukan.

Kurang baik:

```javascript
User.find();
```

Lebih baik:

```javascript
User.find()

.select(

"nama email"

);
```

Hal ini dapat mengurangi penggunaan memori dan mempercepat pengiriman data.

---

# Pagination

Jika data berjumlah ribuan, jangan tampilkan semuanya sekaligus.

Gunakan:

```javascript
.skip()

.limit()
```

Contoh:

```javascript
User.find()

.skip(20)

.limit(10);
```

Pagination meningkatkan performa aplikasi dan pengalaman pengguna.

---

# Backup Database

Lakukan backup secara berkala agar data tetap aman.

Metode backup:

- Backup Manual
- Backup Otomatis
- Snapshot Server
- MongoDB Atlas Backup

Backup sangat penting untuk mengantisipasi kegagalan sistem atau kesalahan pengguna.

---

# Restore Database

MongoDB menyediakan proses restore untuk mengembalikan data hasil backup.

Sebelum melakukan restore, pastikan:

- Backup masih valid.
- Versi MongoDB sesuai.
- Database tujuan telah dipersiapkan.

---

# Keamanan Database

Beberapa langkah penting untuk meningkatkan keamanan:

- Gunakan Authentication.
- Batasi akses pengguna.
- Gunakan password yang kuat.
- Aktifkan Firewall.
- Gunakan koneksi terenkripsi (TLS/SSL).
- Jangan membuka database langsung ke internet tanpa perlindungan.

Keamanan merupakan aspek penting, terutama pada aplikasi yang menyimpan data pengguna.

---

# Hindari Menyimpan Data Sensitif

Data seperti:

- Password
- Token
- Secret Key

Tidak boleh disimpan dalam bentuk teks biasa.

Gunakan algoritma hashing seperti **bcrypt** untuk password dan simpan secret pada **Environment Variable**.

---

# Monitoring

Pantau performa database secara berkala.

Beberapa hal yang perlu diperhatikan:

- Penggunaan CPU
- Penggunaan RAM
- Ukuran Database
- Jumlah Koneksi
- Waktu Query

Monitoring membantu mendeteksi masalah sebelum berdampak pada pengguna.

---

# Deployment MongoDB

Beberapa pilihan menjalankan MongoDB:

- MongoDB Atlas
- VPS
- Dedicated Server
- Docker
- Kubernetes

Untuk proyek pembelajaran, MongoDB Atlas merupakan pilihan yang mudah dan praktis.

---

# Integrasi dengan Express

Alur umum aplikasi:

```
Browser

â†“

Express

â†“

Controller

â†“

Model (Mongoose)

â†“

MongoDB

â†“

Response JSON
```

Pemisahan tanggung jawab ini membuat aplikasi lebih terstruktur dan mudah dikembangkan.

---

# Roadmap Belajar MongoDB

Setelah memahami dasar MongoDB, materi berikut yang disarankan adalah:

```
MongoDB Dasar

â†“

Mongoose

â†“

CRUD

â†“

Aggregation

â†“

Authentication

â†“

REST API

â†“

Upload File

â†“

Caching

â†“

Docker

â†“

Deployment

â†“

Microservices
```

Belajar secara bertahap akan membantu memahami ekosistem backend modern.

---

# Kesalahan yang Sering Dilakukan Pemula

Beberapa kesalahan yang sering terjadi:

- Tidak menggunakan validasi.
- Tidak membuat Index.
- Mengambil seluruh data tanpa pagination.
- Menyimpan password tanpa hashing.
- Tidak melakukan backup.
- Menulis query yang tidak efisien.
- Menyimpan seluruh logika database dalam satu file.

Menghindari kesalahan tersebut akan membuat aplikasi lebih aman, cepat, dan mudah dipelihara.

---

# Kesimpulan

MongoDB merupakan database NoSQL yang fleksibel dan sangat cocok digunakan bersama Node.js serta Express.js.

Pada artikel ini kita telah mempelajari:

- Dasar MongoDB
- Collection
- Document
- Query
- CRUD
- Filter
- Sorting
- Aggregation
- Index
- Mongoose
- Schema
- Model
- Populate
- Validasi
- Keamanan
- Deployment
- Best Practice

Dengan menguasai MongoDB, Anda telah memiliki kemampuan untuk membangun backend yang mampu menyimpan dan mengelola data secara efisien.

---

# Referensi Belajar

Beberapa referensi yang direkomendasikan:

- Dokumentasi resmi MongoDB
- Dokumentasi Mongoose
- MongoDB University
- MDN Web Docs
- freeCodeCamp
- The Odin Project

Dokumentasi resmi sebaiknya dijadikan sumber utama karena selalu diperbarui mengikuti perkembangan teknologi.

---

# Penutup

Selamat! ðŸŽ‰

Anda telah menyelesaikan materi MongoDB dari dasar hingga tingkat lanjutan. Kini Anda memahami cara menyimpan data, melakukan operasi CRUD, mengoptimalkan query, menggunakan Mongoose, membangun relasi antar dokumen, serta menerapkan praktik terbaik dalam pengelolaan database.

Dengan selesainya materi **JavaScript**, **Node.js**, **Express.js**, dan **MongoDB**, Anda telah menguasai fondasi utama pengembangan backend berbasis JavaScript. Langkah berikutnya adalah mempelajari **Git** untuk mengelola versi kode, kemudian **GitHub** untuk kolaborasi dan penyimpanan proyek, sebelum beralih ke materi keamanan siber pada kategori **Cyber Community**.
