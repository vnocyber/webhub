# Memahami OWASP Top 10 (2021)

**Kategori:** Cyber Community

**Level:** Menengah â†’ Lanjutan

**Estimasi membaca:** Â±70 Menit

---

# Pendahuluan

OWASP Top 10 adalah daftar kategori risiko keamanan aplikasi web yang disusun oleh Open Worldwide Application Security Project (OWASP).

Daftar ini digunakan oleh developer, security engineer, auditor, dan organisasi di seluruh dunia sebagai acuan untuk meningkatkan keamanan aplikasi.

OWASP Top 10 bukan daftar seluruh kerentanan yang ada, melainkan sepuluh kategori risiko yang paling umum dan memiliki dampak besar terhadap keamanan aplikasi.

---

# Apa Itu OWASP?

OWASP (Open Worldwide Application Security Project) adalah komunitas terbuka yang berfokus pada peningkatan keamanan perangkat lunak.

OWASP menyediakan berbagai sumber belajar seperti:

- Cheat Sheet
- Web Security Testing Guide (WSTG)
- Application Security Verification Standard (ASVS)
- Top 10
- Dependency Check
- Juice Shop

Seluruh materi tersebut tersedia untuk dipelajari secara gratis.

---

# Mengapa OWASP Top 10 Penting?

OWASP Top 10 membantu tim pengembang untuk:

- Mengenali risiko keamanan.
- Memprioritaskan perbaikan.
- Membangun aplikasi yang lebih aman.
- Mengurangi kemungkinan terjadinya insiden keamanan.
- Meningkatkan kualitas proses pengembangan.

Daftar ini juga sering dijadikan referensi dalam audit keamanan aplikasi.

---

# OWASP Top 10 (2021)

Berikut adalah sepuluh kategori risiko pada OWASP Top 10 edisi 2021:

```text
A01 - Broken Access Control

A02 - Cryptographic Failures

A03 - Injection

A04 - Insecure Design

A05 - Security Misconfiguration

A06 - Vulnerable and Outdated Components

A07 - Identification and Authentication Failures

A08 - Software and Data Integrity Failures

A09 - Security Logging and Monitoring Failures

A10 - Server-Side Request Forgery (SSRF)
```

Setiap kategori membahas jenis risiko, bukan satu kerentanan tertentu.

---

# Cara Menggunakan OWASP Top 10

OWASP Top 10 dapat digunakan untuk:

- Belajar keamanan aplikasi.
- Membuat checklist keamanan.
- Code Review.
- Security Testing.
- Pelatihan developer.
- Audit aplikasi.

Daftar ini membantu mengidentifikasi area yang perlu mendapat perhatian lebih selama pengembangan.

---

# A01 - Broken Access Control

Broken Access Control terjadi ketika pengguna dapat mengakses sumber daya atau melakukan tindakan yang seharusnya tidak diizinkan.

Contoh dampaknya:

- Pengguna melihat data milik pengguna lain.
- Pengguna biasa memperoleh akses ke fitur administrator.
- Penghapusan atau perubahan data tanpa izin.

Kontrol akses yang benar merupakan salah satu aspek paling penting dalam keamanan aplikasi.

---

# Prinsip Access Control

Access Control terdiri dari tiga komponen utama:

```text
Authentication

â†“

Authorization

â†“

Permission
```

Ketiganya harus bekerja bersama untuk memastikan setiap pengguna hanya dapat melakukan tindakan yang sesuai dengan hak aksesnya.

---

# Role-Based Access Control (RBAC)

RBAC membagi hak akses berdasarkan peran (role).

Contoh:

```text
Admin

â†“

Mengelola seluruh sistem

------------------------

Editor

â†“

Mengelola konten

------------------------

User

â†“

Mengelola data miliknya sendiri
```

Model ini mempermudah pengelolaan izin pada aplikasi.

---

# Prinsip Least Privilege

Setiap akun sebaiknya hanya diberikan hak akses yang benar-benar diperlukan.

Keuntungan:

- Mengurangi dampak jika akun disalahgunakan.
- Membatasi akses terhadap data sensitif.
- Mempermudah pengelolaan izin.

Prinsip ini sebaiknya diterapkan pada pengguna maupun layanan aplikasi.

---

# Deny by Default

Akses sebaiknya ditolak secara default.

Alurnya:

```text
Request

â†“

Cek Permission

â†“

Diizinkan?

â†“

Ya â†’ Akses

Tidak â†’ Ditolak
```

Pendekatan ini lebih aman dibandingkan memberikan akses secara otomatis.

---

# Best Practice Access Control

Beberapa praktik yang direkomendasikan:

- Verifikasi hak akses pada setiap permintaan.
- Jangan mengandalkan pemeriksaan di sisi client.
- Gunakan Role-Based Access Control (RBAC).
- Terapkan Principle of Least Privilege.
- Lakukan pengujian terhadap mekanisme otorisasi.

---

# Ringkasan

Pada bagian pertama ini kita telah mempelajari:

- Pengertian OWASP
- Tujuan OWASP Top 10
- Daftar OWASP Top 10 (2021)
- A01 - Broken Access Control
- Authentication
- Authorization
- Permission
- Role-Based Access Control (RBAC)
- Principle of Least Privilege
- Deny by Default

Materi ini menjadi dasar sebelum mempelajari kategori berikutnya, yaitu **A02 - Cryptographic Failures** dan **A03 - Injection**, yang membahas pentingnya perlindungan data serta risiko akibat pemrosesan input yang tidak aman.

---

# A02 - Cryptographic Failures

Cryptographic Failures adalah kategori risiko yang berkaitan dengan kesalahan dalam melindungi data sensitif menggunakan teknik kriptografi.

Kategori ini sebelumnya dikenal sebagai **Sensitive Data Exposure** pada OWASP Top 10 edisi 2017.

Kesalahan dalam penggunaan kriptografi dapat menyebabkan informasi penting terbaca oleh pihak yang tidak berwenang.

---

# Data Sensitif

Data sensitif adalah informasi yang harus dilindungi.

Contohnya:

- Password
- Nomor Kartu Kredit
- Token Login
- API Key
- Informasi Identitas
- Data Medis
- Data Keuangan

Data seperti ini memerlukan perlindungan yang memadai selama penyimpanan maupun transmisi.

---

# Enkripsi

Enkripsi adalah proses mengubah data menjadi bentuk yang tidak dapat dipahami tanpa kunci yang sesuai.

Konsep sederhana:

```text
Plaintext

â†“

Encryption

â†“

Ciphertext

â†“

Decryption

â†“

Plaintext
```

Enkripsi membantu menjaga kerahasiaan data.

---

# Encryption at Rest

Encryption at Rest berarti data dienkripsi saat disimpan.

Contohnya:

- Database
- Backup
- Hard Disk
- Cloud Storage

Jika media penyimpanan hilang atau dicuri, data tetap lebih terlindungi.

---

# Encryption in Transit

Encryption in Transit berarti data dienkripsi saat dikirim melalui jaringan.

Contohnya:

```text
Browser

â†“

HTTPS (TLS)

â†“

Server
```

Pendekatan ini membantu melindungi komunikasi dari penyadapan.

---

# Hashing

Hashing digunakan untuk menghasilkan representasi tetap dari suatu data.

Hash bersifat satu arah sehingga tidak dirancang untuk dikembalikan ke bentuk semula.

Contoh penggunaan:

- Password
- Integrity Check
- Checksum

---

# Password Hashing

Password tidak boleh disimpan dalam bentuk teks biasa.

Alur yang benar:

```text
Password

â†“

Hash Function

â†“

Hash Database
```

Saat login, aplikasi membandingkan hash dari password yang dimasukkan dengan hash yang telah tersimpan.

---

# Algoritma yang Direkomendasikan

Untuk penyimpanan password, algoritma yang umum direkomendasikan adalah:

- Argon2
- bcrypt
- scrypt

Algoritma tersebut dirancang agar proses penebakan password menjadi lebih sulit.

---

# TLS

Transport Layer Security (TLS) melindungi komunikasi antara client dan server.

TLS digunakan pada:

- HTTPS
- Email
- API
- VPN

Pastikan menggunakan versi TLS yang masih didukung dan konfigurasi yang sesuai.

---

# Manajemen Secret

Secret merupakan informasi yang harus dijaga kerahasiaannya.

Contoh:

- API Key
- JWT Secret
- Private Key
- Database Password

Secret sebaiknya disimpan menggunakan mekanisme pengelolaan secret atau environment variable, bukan ditulis langsung pada source code.

---

# Best Practice Cryptography

Beberapa praktik yang direkomendasikan:

- Gunakan HTTPS.
- Simpan password menggunakan algoritma hashing yang kuat.
- Lindungi secret dengan baik.
- Perbarui konfigurasi kriptografi secara berkala.
- Gunakan library kriptografi yang terpercaya.

---

# A03 - Injection

Injection adalah kategori risiko ketika aplikasi memproses input yang tidak divalidasi dengan benar sehingga dapat memengaruhi cara sistem bekerja.

Injection dapat terjadi pada berbagai jenis interpreter atau layanan yang memproses input.

Pencegahan utamanya adalah validasi input dan penggunaan mekanisme pemrosesan data yang aman.

---

# Jenis Injection

Beberapa contoh kategori Injection:

- SQL Injection
- NoSQL Injection
- LDAP Injection
- OS Command Injection
- XPath Injection

Walaupun mekanismenya berbeda, prinsip pencegahannya memiliki banyak kesamaan.

---

# Input Validation

Input dari pengguna tidak boleh langsung diproses tanpa pemeriksaan.

Lakukan validasi terhadap:

- Format
- Panjang
- Tipe data
- Nilai yang diperbolehkan

Validasi harus dilakukan di sisi server.

---

# Parameterized Query

Saat berinteraksi dengan database, gunakan parameterized query atau prepared statement yang disediakan oleh library atau framework.

Keuntungan:

- Memisahkan data dari perintah.
- Mengurangi risiko Injection.
- Kode lebih mudah dipelihara.

Pendekatan ini merupakan praktik yang direkomendasikan pada aplikasi modern.

---

# ORM (Object Relational Mapping)

ORM membantu aplikasi berinteraksi dengan database melalui objek.

Contoh ORM:

- Prisma
- Sequelize
- TypeORM
- Hibernate

Walaupun ORM dapat membantu mengurangi risiko tertentu, developer tetap perlu melakukan validasi input dan mengikuti praktik pengembangan yang aman.

---

# Principle of Validation

Urutan yang disarankan:

```text
Input

â†“

Validation

â†“

Sanitization

â†“

Business Logic

â†“

Database
```

Dengan memvalidasi data sejak awal, aplikasi dapat mengurangi berbagai risiko keamanan.

---

# Error Handling

Saat terjadi kesalahan pada proses database atau layanan lainnya:

- Jangan tampilkan detail internal kepada pengguna.
- Catat informasi teknis pada log server.
- Berikan pesan yang mudah dipahami pengguna.

Hal ini membantu mengurangi kebocoran informasi.

---

# Best Practice Injection Prevention

Beberapa praktik yang direkomendasikan:

- Gunakan parameterized query.
- Validasi seluruh input.
- Terapkan prinsip least privilege pada database.
- Hindari menyusun query secara manual menggunakan input pengguna.
- Gunakan ORM bila sesuai.
- Lakukan code review dan security testing.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- A02 - Cryptographic Failures
- Data Sensitif
- Encryption
- Encryption at Rest
- Encryption in Transit
- Hashing
- Password Hashing
- TLS
- Secret Management
- A03 - Injection
- Input Validation
- Parameterized Query
- ORM
- Error Handling
- Best Practice Injection Prevention

Materi ini memberikan dasar mengenai perlindungan data dan pencegahan risiko akibat pemrosesan input yang tidak aman. Pada bagian berikutnya kita akan membahas **A04 - Insecure Design** dan **A05 - Security Misconfiguration**, dua kategori yang berkaitan dengan desain aplikasi dan konfigurasi sistem yang aman.

---

# A04 - Insecure Design

Insecure Design adalah kategori risiko yang muncul karena kelemahan pada tahap perancangan aplikasi.

Berbeda dengan bug pada implementasi, Insecure Design terjadi ketika mekanisme keamanan tidak dirancang sejak awal.

Keamanan sebaiknya menjadi bagian dari proses desain aplikasi, bukan ditambahkan setelah aplikasi selesai dibuat.

---

# Penyebab Insecure Design

Beberapa penyebab yang umum:

- Tidak melakukan Threat Modeling.
- Tidak mempertimbangkan risiko keamanan.
- Tidak menerapkan prinsip keamanan sejak awal.
- Tidak memiliki kebutuhan keamanan yang jelas.
- Kurangnya dokumentasi desain.

Perancangan yang baik membantu mengurangi berbagai risiko sebelum aplikasi dikembangkan.

---

# Security by Design

Security by Design berarti keamanan menjadi bagian dari proses desain sistem.

Langkah-langkah yang dapat dilakukan:

- Identifikasi aset penting.
- Tentukan kebutuhan keamanan.
- Rancang mekanisme autentikasi.
- Rancang mekanisme otorisasi.
- Tentukan strategi logging.
- Tentukan strategi backup.

Dengan pendekatan ini, keamanan tidak bergantung pada satu fitur saja.

---

# Threat Modeling

Threat Modeling membantu mengidentifikasi ancaman sebelum aplikasi dibangun.

Tahapan sederhana:

```text
Asset

â†“

Threat

â†“

Risk

â†“

Mitigation
```

Melalui proses ini, tim dapat menentukan prioritas perlindungan terhadap aset yang paling penting.

---

# Principle of Least Privilege

Setiap pengguna maupun layanan hanya diberikan hak akses yang benar-benar diperlukan.

Contoh:

```text
Database User

â†“

Hanya membaca data tertentu

------------------------

Administrator

â†“

Akses penuh
```

Pendekatan ini mengurangi dampak jika terjadi penyalahgunaan akun.

---

# Defense in Depth

Defense in Depth adalah strategi menggunakan beberapa lapisan keamanan.

Contoh:

```text
Firewall

â†“

Authentication

â†“

Authorization

â†“

Input Validation

â†“

Database Security

â†“

Logging
```

Jika satu lapisan gagal, lapisan lainnya tetap memberikan perlindungan.

---

# Fail Secure

Sistem sebaiknya berada dalam kondisi aman ketika terjadi kesalahan.

Contoh:

```text
Permission Error

â†“

Access Denied
```

Lebih baik menolak akses daripada memberikan akses secara tidak sengaja.

---

# Secure Default Configuration

Konfigurasi bawaan aplikasi sebaiknya sudah aman.

Contohnya:

- HTTPS aktif.
- Debug mode nonaktif.
- Password bawaan diganti.
- Hak akses minimum diterapkan.

---

# Business Logic

Business Logic adalah aturan yang mengatur cara kerja aplikasi.

Contohnya:

- Maksimum jumlah transaksi.
- Batas percobaan login.
- Validasi umur pengguna.
- Pembatasan perubahan data.

Business Logic yang baik membantu mencegah penyalahgunaan fitur aplikasi.

---

# Best Practice Insecure Design

Beberapa praktik yang direkomendasikan:

- Lakukan Threat Modeling.
- Terapkan Security by Design.
- Gunakan Defense in Depth.
- Terapkan Least Privilege.
- Dokumentasikan kebutuhan keamanan.
- Lakukan Security Review sejak tahap desain.

---

# A05 - Security Misconfiguration

Security Misconfiguration terjadi ketika konfigurasi aplikasi, server, database, atau layanan lainnya tidak diterapkan dengan benar.

Kesalahan konfigurasi merupakan salah satu penyebab umum insiden keamanan.

---

# Contoh Security Misconfiguration

Beberapa contoh:

- Debug Mode aktif pada production.
- Directory Listing aktif.
- Password bawaan belum diganti.
- Permission file terlalu longgar.
- Port yang tidak diperlukan tetap terbuka.
- Informasi versi aplikasi ditampilkan ke publik.

Konfigurasi yang tidak tepat dapat meningkatkan risiko terhadap aplikasi.

---

# Default Configuration

Konfigurasi bawaan sering kali dibuat untuk memudahkan proses instalasi, bukan untuk keamanan.

Karena itu, setelah instalasi:

- Ubah password bawaan.
- Nonaktifkan akun yang tidak diperlukan.
- Hapus layanan yang tidak digunakan.
- Tutup port yang tidak dibutuhkan.

---

# Hardening

Hardening adalah proses meningkatkan keamanan sistem dengan mengurangi area yang dapat menjadi target serangan.

Contoh:

- Menonaktifkan service yang tidak digunakan.
- Memperbarui sistem.
- Mengaktifkan firewall.
- Menggunakan HTTPS.
- Membatasi akses administrator.

Hardening membantu mengurangi attack surface.

---

# Debug Mode

Mode debug berguna saat pengembangan.

Namun pada lingkungan produksi:

```text
Development

â†“

Debug ON

------------------------

Production

â†“

Debug OFF
```

Debug mode dapat menampilkan informasi internal yang sebaiknya tidak diketahui pengguna.

---

# File Permission

Permission file harus diatur sesuai kebutuhan.

Prinsipnya:

- Berikan hak akses seminimal mungkin.
- Hindari memberikan izin menulis kepada semua pengguna.
- Pisahkan file konfigurasi dari file publik.

---

# Environment Configuration

Konfigurasi aplikasi sebaiknya dipisahkan dari source code.

Contoh:

```text
.env

â†“

Database URL

JWT Secret

API Key

Mail Password
```

Informasi sensitif tidak boleh dimasukkan langsung ke dalam kode program.

---

# Server Hardening Checklist

Beberapa langkah dasar:

- HTTPS aktif.
- Firewall aktif.
- Sistem diperbarui.
- Directory listing dinonaktifkan.
- Error detail disembunyikan.
- Backup berjalan.
- Monitoring aktif.

Checklist ini dapat digunakan sebelum aplikasi dipublikasikan.

---

# Best Practice Security Misconfiguration

Praktik yang direkomendasikan:

- Gunakan konfigurasi yang aman secara default.
- Periksa konfigurasi secara berkala.
- Terapkan prinsip least privilege.
- Dokumentasikan perubahan konfigurasi.
- Lakukan audit keamanan sebelum deployment.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- A04 - Insecure Design
- Security by Design
- Threat Modeling
- Defense in Depth
- Least Privilege
- Business Logic
- A05 - Security Misconfiguration
- Hardening
- Debug Mode
- File Permission
- Environment Configuration
- Server Hardening Checklist

Materi ini memberikan dasar mengenai pentingnya desain yang aman serta konfigurasi sistem yang tepat. Pada bagian berikutnya kita akan membahas **A06 - Vulnerable and Outdated Components**, **A07 - Identification and Authentication Failures**, serta **A08 - Software and Data Integrity Failures**.

---

# A06 - Vulnerable and Outdated Components

Kategori ini membahas risiko penggunaan komponen perangkat lunak yang memiliki kerentanan atau sudah tidak lagi diperbarui.

Komponen tersebut dapat berupa:

- Framework
- Library
- Package
- Plugin
- Sistem Operasi
- Web Server
- Database

Komponen yang tidak dikelola dengan baik dapat meningkatkan risiko keamanan aplikasi.

---

# Mengapa Dependency Penting?

Aplikasi modern jarang dibuat sepenuhnya dari nol.

Sebagian besar aplikasi menggunakan banyak dependency.

Contohnya:

```text
Application

â†“

Framework

â†“

Library

â†“

Package

â†“

Operating System
```

Keamanan aplikasi juga bergantung pada keamanan komponen-komponen tersebut.

---

# Risiko Komponen Usang

Beberapa risiko yang dapat muncul:

- Bug yang belum diperbaiki.
- Kerentanan yang telah diketahui publik.
- Tidak lagi mendapat pembaruan keamanan.
- Ketidakcocokan dengan standar keamanan terbaru.

Melakukan pembaruan secara berkala membantu mengurangi risiko tersebut.

---

# Dependency Management

Pengelolaan dependency meliputi:

- Memilih sumber yang tepercaya.
- Memperbarui versi secara berkala.
- Menghapus dependency yang tidak digunakan.
- Mendokumentasikan perubahan.

Dependency yang tidak diperlukan sebaiknya tidak disertakan dalam aplikasi.

---

# Software Bill of Materials (SBOM)

SBOM adalah daftar seluruh komponen perangkat lunak yang digunakan dalam sebuah aplikasi.

Contohnya meliputi:

- Nama package.
- Versi.
- Vendor.
- Lisensi.

SBOM membantu organisasi memahami komponen yang digunakan dan mempermudah proses audit keamanan.

---

# Best Practice A06

Beberapa praktik yang direkomendasikan:

- Gunakan library dari sumber tepercaya.
- Perbarui dependency secara berkala.
- Hapus package yang tidak digunakan.
- Lakukan dependency scanning.
- Ikuti pembaruan keamanan dari vendor.

---

# A07 - Identification and Authentication Failures

Kategori ini berkaitan dengan kelemahan dalam proses identifikasi dan autentikasi pengguna.

Jika autentikasi tidak diterapkan dengan baik, akun pengguna dapat lebih mudah disalahgunakan.

---

# Identification

Identification adalah proses mengenali identitas pengguna.

Contoh:

```text
Username

Email

Nomor Telepon
```

Tahap ini menjawab pertanyaan:

> "Siapa pengguna yang ingin masuk?"

---

# Authentication

Authentication bertujuan membuktikan bahwa pengguna benar-benar adalah pihak yang berhak menggunakan identitas tersebut.

Contoh metode:

- Password.
- OTP.
- Authenticator App.
- Passkey.
- Multi-Factor Authentication (MFA).

---

# Authorization

Setelah autentikasi berhasil, aplikasi menentukan hak akses pengguna.

Contoh:

```text
Login

â†“

Authentication

â†“

Authorization

â†“

Dashboard Sesuai Role
```

Autentikasi dan otorisasi memiliki fungsi yang berbeda namun saling melengkapi.

---

# Password Policy

Password yang baik sebaiknya:

- Memiliki panjang yang memadai.
- Sulit ditebak.
- Tidak menggunakan informasi pribadi.
- Tidak digunakan ulang di banyak layanan.

Kebijakan password membantu meningkatkan keamanan akun.

---

# Multi-Factor Authentication (MFA)

MFA menambahkan lapisan keamanan setelah password.

Contoh:

```text
Password

â†“

OTP

â†“

Login Berhasil
```

Dengan MFA, risiko penyalahgunaan akun dapat dikurangi meskipun password diketahui pihak lain.

---

# Session Management

Session harus dikelola dengan aman.

Praktik yang disarankan:

- Session ID acak.
- Session timeout.
- Logout menghapus session.
- Cookie menggunakan atribut keamanan yang sesuai.
- Gunakan HTTPS.

---

# Best Practice A07

Praktik yang direkomendasikan:

- Gunakan password hashing yang kuat.
- Terapkan MFA bila memungkinkan.
- Batasi percobaan login.
- Kelola session dengan aman.
- Terapkan prinsip least privilege.

---

# A08 - Software and Data Integrity Failures

Kategori ini berkaitan dengan kegagalan memastikan integritas perangkat lunak maupun data.

Integritas berarti perangkat lunak dan data tidak berubah tanpa otorisasi.

---

# Integritas Data

Data harus tetap:

- Akurat.
- Konsisten.
- Tidak dimodifikasi tanpa izin.

Integritas penting untuk menjaga kepercayaan terhadap aplikasi.

---

# Integritas Software

Perangkat lunak yang digunakan dalam proses build dan deployment juga harus dapat dipercaya.

Contohnya:

```text
Source Code

â†“

Build

â†“

Testing

â†“

Deployment
```

Setiap tahap sebaiknya memiliki mekanisme verifikasi yang sesuai.

---

# CI/CD Security

Pada proses Continuous Integration dan Continuous Deployment (CI/CD), beberapa praktik yang disarankan:

- Lindungi pipeline.
- Batasi hak akses.
- Gunakan secret management.
- Verifikasi artefak build.
- Catat aktivitas penting.

Pipeline yang aman membantu menjaga integritas proses pengembangan.

---

# Digital Signature

Digital Signature digunakan untuk membantu memverifikasi keaslian file atau perangkat lunak.

Manfaatnya:

- Membantu memastikan asal file.
- Membantu mendeteksi perubahan yang tidak sah.
- Meningkatkan kepercayaan terhadap distribusi perangkat lunak.

---

# Best Practice A08

Beberapa praktik yang direkomendasikan:

- Gunakan sumber software yang tepercaya.
- Lindungi pipeline CI/CD.
- Kelola secret dengan aman.
- Verifikasi integritas file.
- Lakukan audit secara berkala.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- A06 - Vulnerable and Outdated Components
- Dependency Management
- SBOM
- A07 - Identification and Authentication Failures
- Authentication
- Authorization
- Password Policy
- MFA
- Session Management
- A08 - Software and Data Integrity Failures
- CI/CD Security
- Digital Signature

Materi ini memberikan pemahaman mengenai pentingnya menjaga komponen aplikasi tetap aman, menerapkan autentikasi yang kuat, serta memastikan integritas perangkat lunak dan data selama proses pengembangan maupun deployment.

---

# A09 - Security Logging and Monitoring Failures

Kategori ini membahas kegagalan aplikasi dalam mencatat dan memantau aktivitas penting yang berkaitan dengan keamanan.

Tanpa logging dan monitoring yang memadai, insiden keamanan dapat terlambat diketahui atau sulit diselidiki.

---

# Mengapa Logging Penting?

Logging membantu tim untuk:

- Mengetahui aktivitas pengguna.
- Mendeteksi kesalahan aplikasi.
- Melakukan audit.
- Menyelidiki insiden keamanan.
- Memenuhi kebutuhan kepatuhan (compliance).

Log yang baik menjadi sumber informasi penting ketika terjadi masalah.

---

# Aktivitas yang Sebaiknya Dicatat

Beberapa contoh aktivitas yang penting untuk dicatat:

- Login berhasil.
- Login gagal.
- Logout.
- Perubahan password.
- Perubahan role.
- Akses ke halaman administrator.
- Perubahan konfigurasi.
- Aktivitas API penting.

Informasi sensitif seperti password atau secret tidak boleh disimpan di dalam log.

---

# Monitoring

Monitoring dilakukan untuk mengawasi kondisi aplikasi secara terus-menerus.

Contoh yang dipantau:

- Status server.
- Response time.
- Error rate.
- Penggunaan CPU.
- Penggunaan RAM.
- Aktivitas login.
- Lonjakan lalu lintas.

Monitoring membantu mendeteksi masalah lebih cepat.

---

# Alerting

Monitoring akan lebih efektif jika dilengkapi dengan sistem peringatan (alert).

Contoh kondisi yang dapat memicu alert:

- Banyak login gagal dalam waktu singkat.
- Server tidak dapat diakses.
- Penggunaan CPU sangat tinggi.
- Lonjakan error pada aplikasi.

Alert membantu tim segera melakukan investigasi.

---

# Audit Log

Audit Log digunakan untuk mencatat aktivitas penting yang berkaitan dengan keamanan.

Contohnya:

```text
Admin Login

â†“

Mengubah Role User

â†“

Menyimpan Perubahan

â†“

Logout
```

Audit Log membantu mengetahui siapa melakukan apa dan kapan tindakan tersebut terjadi.

---

# Best Practice A09

Beberapa praktik yang direkomendasikan:

- Catat aktivitas penting.
- Jangan menyimpan password atau secret dalam log.
- Lindungi akses ke log.
- Lakukan monitoring secara berkelanjutan.
- Terapkan alert untuk aktivitas yang mencurigakan.
- Simpan log sesuai kebijakan organisasi.

---

# A10 - Server-Side Request Forgery (SSRF)

Server-Side Request Forgery (SSRF) terjadi ketika aplikasi di sisi server melakukan permintaan (request) ke alamat yang tidak semestinya akibat menerima input yang tidak dikendalikan dengan baik.

Risiko ini dapat memungkinkan server mengakses sumber daya internal yang seharusnya tidak dapat dijangkau oleh pengguna secara langsung.

---

# Cara Kerja SSRF (Konsep)

Ilustrasi sederhana:

```text
User

â†“

Aplikasi Web

â†“

Server Mengirim Request

â†“

Layanan Tujuan
```

Jika aplikasi tidak memvalidasi tujuan request dengan benar, server dapat diarahkan menuju alamat yang tidak diinginkan.

---

# Risiko SSRF

Beberapa dampak yang mungkin terjadi:

- Akses ke layanan internal.
- Pengungkapan informasi internal.
- Penyalahgunaan layanan yang hanya dapat diakses dari jaringan internal.

Dampak bergantung pada arsitektur aplikasi dan konfigurasi jaringan.

---

# Pencegahan SSRF

Beberapa praktik yang direkomendasikan:

- Validasi tujuan request.
- Gunakan allowlist untuk domain atau host yang diizinkan.
- Batasi akses server ke jaringan internal bila tidak diperlukan.
- Terapkan firewall dan segmentasi jaringan.
- Catat serta monitor request yang tidak biasa.

Pendekatan berlapis membantu mengurangi risiko SSRF.

---

# Checklist OWASP

Sebelum aplikasi dipublikasikan, pastikan:

- HTTPS telah diterapkan.
- Hak akses diverifikasi pada setiap request.
- Password disimpan menggunakan algoritma hashing yang kuat.
- Input divalidasi di sisi server.
- Session dikelola dengan aman.
- Security Header diterapkan.
- Dependency diperbarui.
- Secret tidak disimpan di source code.
- Logging dan monitoring aktif.
- Backup tersedia dan telah diuji proses pemulihannya.

Checklist ini dapat digunakan sebagai pemeriksaan awal sebelum deployment.

---

# Best Practice OWASP

Praktik terbaik yang direkomendasikan:

- Terapkan Security by Design.
- Lakukan Threat Modeling.
- Gunakan Defense in Depth.
- Terapkan Least Privilege.
- Perbarui dependency secara berkala.
- Lakukan Security Testing.
- Dokumentasikan konfigurasi keamanan.
- Lakukan Code Review secara rutin.

Keamanan merupakan proses yang terus berkembang seiring perubahan teknologi dan ancaman.

---

# OWASP dalam Dunia Profesional

OWASP Top 10 digunakan oleh berbagai profesi, seperti:

- Backend Developer.
- Full Stack Developer.
- Security Engineer.
- DevSecOps Engineer.
- Penetration Tester.
- Security Consultant.
- SOC Analyst.
- Cloud Engineer.

Memahami OWASP membantu meningkatkan kualitas dan keamanan aplikasi.

---

# Roadmap Setelah OWASP Top 10

Setelah memahami OWASP Top 10, materi yang disarankan adalah:

```text
OWASP Top 10

â†“

API Security

â†“

Cryptography

â†“

OSINT

â†“

Digital Forensics

â†“

Bug Bounty
```

Urutan tersebut membantu memperluas pemahaman mengenai keamanan aplikasi dan infrastruktur.

---

# Kesimpulan

OWASP Top 10 merupakan referensi penting bagi siapa saja yang membangun atau mengamankan aplikasi web.

Pada artikel ini kita telah mempelajari:

- A01 Broken Access Control.
- A02 Cryptographic Failures.
- A03 Injection.
- A04 Insecure Design.
- A05 Security Misconfiguration.
- A06 Vulnerable and Outdated Components.
- A07 Identification and Authentication Failures.
- A08 Software and Data Integrity Failures.
- A09 Security Logging and Monitoring Failures.
- A10 Server-Side Request Forgery (SSRF).

Dengan memahami setiap kategori risiko beserta praktik pencegahannya, developer dapat membangun aplikasi yang lebih aman dan lebih siap menghadapi ancaman keamanan modern.

---

# Referensi Belajar

Beberapa referensi yang direkomendasikan:

- OWASP Top 10.
- OWASP Cheat Sheet Series.
- OWASP Web Security Testing Guide (WSTG).
- OWASP ASVS.
- Mozilla Web Security Guidelines.
- NIST Secure Software Development Framework (SSDF).

Dokumentasi resmi tersebut merupakan sumber belajar yang baik untuk memperdalam pemahaman mengenai keamanan aplikasi.

---

# Penutup

Selamat! ðŸŽ‰

Anda telah menyelesaikan materi **OWASP Top 10 (2021)** dari dasar hingga tingkat lanjut. Kini Anda memahami sepuluh kategori risiko utama pada aplikasi web serta berbagai praktik terbaik untuk mencegahnya secara defensif.

Materi berikutnya dalam seri **Cyber Community** adalah **API Security**, yang akan membahas konsep REST API, autentikasi API, otorisasi, JWT, OAuth 2.0, API Gateway, Rate Limiting, API Security Testing, serta praktik terbaik dalam membangun API yang aman.
