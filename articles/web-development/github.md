# Belajar GitHub Dari Dasar Hingga Mahir

**Kategori:** Web Development

**Level:** Pemula â†’ Mahir

**Estimasi membaca:** Â±35 Menit

---

# Pendahuluan

GitHub adalah platform berbasis cloud yang digunakan untuk menyimpan repository Git secara online. Selain sebagai tempat penyimpanan kode, GitHub juga menyediakan berbagai fitur untuk kolaborasi, manajemen proyek, otomatisasi, dan distribusi perangkat lunak.

GitHub menjadi salah satu platform yang paling banyak digunakan oleh developer, perusahaan teknologi, komunitas open source, hingga lembaga pendidikan.

---

# Apa Itu GitHub?

GitHub adalah layanan hosting repository Git.

Dengan GitHub, Anda dapat:

- Menyimpan source code.
- Berkolaborasi dengan developer lain.
- Membuat dokumentasi.
- Melacak bug.
- Mengelola proyek.
- Membangun CI/CD.
- Membuat website menggunakan GitHub Pages.

GitHub bekerja bersama Git, tetapi keduanya memiliki fungsi yang berbeda.

---

# Git vs GitHub

| Git | GitHub |
|------|---------|
| Version Control System | Hosting Repository |
| Berjalan di komputer lokal | Berjalan di cloud |
| Mengelola riwayat kode | Menyimpan dan membagikan repository |
| Tidak membutuhkan internet | Membutuhkan internet untuk sinkronisasi |

Git dapat digunakan tanpa GitHub, tetapi GitHub membutuhkan Git untuk mengelola repository.

---

# Mengapa Menggunakan GitHub?

Beberapa alasan menggunakan GitHub:

- Backup kode secara online.
- Kolaborasi dengan tim.
- Mendukung proyek open source.
- Riwayat perubahan tersimpan.
- Integrasi dengan berbagai layanan.
- Banyak digunakan di industri.

---

# Membuat Akun GitHub

Langkah-langkah:

1. Buka situs GitHub.
2. Klik **Sign Up**.
3. Masukkan email.
4. Buat username.
5. Buat password yang kuat.
6. Verifikasi akun.
7. Login ke GitHub.

Setelah berhasil login, Anda dapat mulai membuat repository.

---

# Repository

Repository adalah tempat menyimpan seluruh file proyek beserta riwayat perubahannya.

Sebuah repository biasanya berisi:

- Source Code
- README
- LICENSE
- Dokumentasi
- Konfigurasi proyek

Repository dapat bersifat **Public** atau **Private**.

---

# Public Repository

Public Repository dapat dilihat oleh siapa saja.

Cocok digunakan untuk:

- Belajar
- Portofolio
- Open Source
- Dokumentasi

---

# Private Repository

Private Repository hanya dapat diakses oleh pengguna yang diberi izin.

Biasanya digunakan untuk:

- Proyek perusahaan
- Aplikasi internal
- Data yang belum siap dipublikasikan

---

# Membuat Repository Baru

Langkah-langkah:

1. Klik tombol **New Repository**.
2. Masukkan nama repository.
3. Tambahkan deskripsi (opsional).
4. Pilih Public atau Private.
5. Klik **Create Repository**.

Repository siap digunakan.

---

# Clone Repository

Setelah repository dibuat, salin ke komputer lokal.

```bash
git clone https://github.com/username/nama-repository.git
```

Git akan mengunduh seluruh isi repository beserta riwayat commit.

---

# Menghubungkan Repository Lokal

Jika proyek sudah ada di komputer:

```bash
git remote add origin https://github.com/username/nama-repository.git
```

Periksa remote:

```bash
git remote -v
```

---

# Push Pertama

Setelah membuat commit:

```bash
git push -u origin main
```

Opsi `-u` akan menghubungkan branch lokal dengan branch remote sehingga push berikutnya cukup menggunakan:

```bash
git push
```

---

# Pull Perubahan

Mengambil perubahan terbaru:

```bash
git pull origin main
```

Gunakan perintah ini secara rutin sebelum mulai bekerja agar repository lokal tetap sinkron.

---

# Ringkasan

Pada bagian pertama ini kita telah mempelajari:

- Pengertian GitHub
- Perbedaan Git dan GitHub
- Membuat akun
- Repository
- Public & Private Repository
- Clone Repository
- Remote Repository
- Push pertama
- Pull perubahan

Materi ini menjadi dasar sebelum mempelajari Branch di GitHub, Fork, Pull Request, Issues, Releases, dan GitHub Pages pada bagian berikutnya.

---

# Branch di GitHub

GitHub mendukung penggunaan branch seperti Git.

Branch memungkinkan developer mengembangkan fitur baru tanpa mengubah branch utama.

Contoh:

```
main

â”œâ”€â”€ feature-login

â”œâ”€â”€ feature-dashboard

â””â”€â”€ feature-profile
```

Setelah selesai, branch dapat digabungkan melalui Pull Request.

---

# Membuat Branch Baru

Melalui GitHub:

1. Buka repository.
2. Klik menu Branch.
3. Ketik nama branch baru.
4. Tekan **Create Branch**.

Melalui Git:

```bash
git switch -c feature-login

git push -u origin feature-login
```

---

# Mengapa Menggunakan Branch?

Keuntungan menggunakan branch:

- Kode utama tetap stabil.
- Mudah mengembangkan fitur baru.
- Mempermudah kolaborasi.
- Memisahkan pekerjaan setiap developer.
- Mengurangi risiko kesalahan.

---

# Fork Repository

Fork adalah proses membuat salinan repository milik orang lain ke akun GitHub Anda.

Contoh:

```
Repository Asli

â†“

Fork

â†“

Repository Milik Anda
```

Fork sangat umum digunakan dalam proyek open source.

---

# Kapan Menggunakan Fork?

Fork biasanya digunakan ketika:

- Ingin berkontribusi pada proyek open source.
- Tidak memiliki izin langsung ke repository utama.
- Ingin bereksperimen tanpa memengaruhi proyek asli.

---

# Pull Request (PR)

Pull Request adalah permintaan untuk menggabungkan perubahan dari satu branch atau hasil fork ke repository tujuan.

Alur sederhananya:

```
Fork / Branch

â†“

Commit

â†“

Push

â†“

Pull Request

â†“

Review

â†“

Merge
```

Pull Request menjadi cara standar untuk mengusulkan perubahan di GitHub.

---

# Membuat Pull Request

Langkah-langkah:

1. Push perubahan ke GitHub.
2. Buka repository.
3. Klik **Compare & Pull Request**.
4. Isi judul dan deskripsi.
5. Klik **Create Pull Request**.

Reviewer kemudian dapat memeriksa perubahan tersebut.

---

# Isi Pull Request yang Baik

Sebuah Pull Request sebaiknya menjelaskan:

- Tujuan perubahan.
- Fitur yang ditambahkan.
- Bug yang diperbaiki.
- Cara menguji perubahan.
- Catatan tambahan jika diperlukan.

Deskripsi yang jelas akan mempermudah proses review.

---

# Code Review

Setelah Pull Request dibuat, maintainer atau anggota tim akan melakukan Code Review.

Hal-hal yang biasanya diperiksa:

- Struktur kode.
- Keterbacaan.
- Standar penulisan.
- Potensi bug.
- Keamanan.
- Performa.

Jika diperlukan, reviewer dapat meminta perubahan sebelum Pull Request disetujui.

---

# Merge Pull Request

Jika Pull Request telah disetujui:

1. Klik **Merge Pull Request**.
2. Konfirmasi proses merge.
3. Hapus branch jika sudah tidak digunakan.

Dengan demikian, perubahan akan masuk ke branch utama.

---

# Issues

Issues digunakan untuk mencatat:

- Bug
- Permintaan fitur
- Tugas
- Diskusi
- Perbaikan dokumentasi

Issues membantu tim mengelola pekerjaan secara lebih terstruktur.

---

# Membuat Issue

Langkah-langkah:

1. Masuk ke tab **Issues**.
2. Klik **New Issue**.
3. Beri judul yang jelas.
4. Tambahkan deskripsi.
5. Klik **Submit**.

Issue yang baik memudahkan tim memahami masalah yang dilaporkan.

---

# Labels

Labels digunakan untuk mengelompokkan Issue atau Pull Request.

Contoh label:

- bug
- enhancement
- documentation
- question
- help wanted
- good first issue

Penggunaan label memudahkan proses penyaringan dan pencarian.

---

# Milestones

Milestone digunakan untuk mengelompokkan beberapa Issue atau Pull Request ke dalam target tertentu.

Contoh:

```
Versi 1.0

â”œâ”€â”€ Login

â”œâ”€â”€ Dashboard

â””â”€â”€ API
```

Dengan Milestone, perkembangan proyek lebih mudah dipantau.

---

# Assignees

Assignee adalah orang yang bertanggung jawab mengerjakan suatu Issue atau Pull Request.

Satu Issue dapat memiliki satu atau lebih assignee sesuai kebutuhan proyek.

---

# Notifications

GitHub akan memberikan notifikasi ketika terjadi aktivitas seperti:

- Pull Request baru.
- Review.
- Commit.
- Issue baru.
- Mention (`@username`).

Notifikasi membantu anggota tim tetap mengikuti perkembangan proyek.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- Branch di GitHub
- Fork Repository
- Pull Request
- Code Review
- Merge Pull Request
- Issues
- Labels
- Milestones
- Assignees
- Notifications

Fitur-fitur tersebut menjadi dasar kolaborasi modern di GitHub. Pada bagian berikutnya kita akan mempelajari **GitHub Releases**, **GitHub Pages**, **GitHub Actions**, serta cara melakukan otomatisasi proses build dan deployment.

---

# GitHub Releases

GitHub Releases digunakan untuk mendistribusikan versi resmi dari sebuah aplikasi.

Release biasanya dibuat setelah fitur selesai dikembangkan dan siap digunakan oleh pengguna.

Contoh:

```
v1.0.0

v1.1.0

v2.0.0
```

Release memudahkan pengguna mengunduh versi tertentu tanpa harus membuka seluruh repository.

---

# Manfaat Releases

Beberapa keuntungan menggunakan Releases:

- Menandai versi aplikasi.
- Menyediakan file installer.
- Menampilkan changelog.
- Mempermudah proses download.
- Menjadi dokumentasi perkembangan proyek.

---

# Membuat Release

Langkah-langkah:

1. Buka repository.
2. Masuk ke menu **Releases**.
3. Klik **Create a new release**.
4. Pilih atau buat Tag.
5. Isi Judul Release.
6. Tambahkan catatan perubahan.
7. Klik **Publish Release**.

---

# Tag pada Release

Setiap Release biasanya menggunakan Git Tag.

Contoh:

```
v1.0.0

v1.0.1

v1.1.0

v2.0.0
```

Versi tersebut membantu pengguna mengetahui perkembangan aplikasi.

---

# Semantic Versioning

Sebagian besar proyek menggunakan format:

```
MAJOR.MINOR.PATCH
```

Contoh:

```
1.0.0
```

Penjelasan:

- **MAJOR** â†’ Perubahan besar yang tidak kompatibel.
- **MINOR** â†’ Penambahan fitur baru.
- **PATCH** â†’ Perbaikan bug.

Contoh:

```
1.0.0

â†“

1.0.1

â†“

1.1.0

â†“

2.0.0
```

---

# Changelog

Changelog adalah daftar perubahan pada setiap Release.

Contoh:

```
## v1.2.0

- Menambahkan fitur login
- Memperbaiki bug dashboard
- Mengoptimalkan performa database
```

Changelog membantu pengguna memahami apa saja yang berubah pada setiap versi.

---

# GitHub Pages

GitHub Pages adalah layanan hosting gratis dari GitHub untuk website statis.

Website dapat dibuat menggunakan:

- HTML
- CSS
- JavaScript

Tanpa memerlukan server sendiri.

---

# Kegunaan GitHub Pages

GitHub Pages sering digunakan untuk:

- Portofolio.
- Dokumentasi.
- Blog.
- Landing Page.
- Website proyek.

Website akan memiliki alamat seperti:

```
https://username.github.io/repository
```

---

# Mengaktifkan GitHub Pages

Langkah-langkah:

1. Masuk ke **Settings** repository.
2. Pilih menu **Pages**.
3. Tentukan branch yang akan digunakan.
4. Simpan pengaturan.

Setelah beberapa saat, website akan tersedia melalui URL GitHub Pages.

---

# Struktur Website

Contoh sederhana:

```
project/

â”œâ”€â”€ index.html

â”œâ”€â”€ about.html

â”œâ”€â”€ assets/

â”‚   â”œâ”€â”€ css/

â”‚   â”œâ”€â”€ js/

â”‚   â””â”€â”€ img/
```

File `index.html` akan menjadi halaman utama.

---

# Custom Domain

GitHub Pages juga mendukung penggunaan domain sendiri.

Contoh:

```
learncybervano.com
```

Dengan melakukan konfigurasi DNS yang sesuai, website dapat diakses menggunakan domain tersebut.

---

# GitHub Actions

GitHub Actions adalah layanan otomatisasi bawaan GitHub.

Actions dapat menjalankan berbagai tugas secara otomatis ketika terjadi suatu peristiwa, misalnya:

- Push.
- Pull Request.
- Release.
- Schedule.

---

# Workflow GitHub Actions

Alur sederhana:

```
Push

â†“

GitHub Actions

â†“

Install Dependency

â†“

Testing

â†“

Build

â†“

Deploy
```

Dengan workflow ini, proses pengujian dan deployment dapat dilakukan secara otomatis.

---

# File Workflow

Workflow disimpan pada folder:

```
.github/

â””â”€â”€ workflows/

    â””â”€â”€ ci.yml
```

GitHub akan membaca file tersebut setiap kali workflow dijalankan.

---

# Contoh Workflow Sederhana

```yaml
name: Node.js CI

on:

  push:

    branches:

      - main

jobs:

  build:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4

        with:

          node-version: 20

      - run: npm install

      - run: npm test
```

Workflow tersebut akan berjalan setiap kali ada push ke branch `main`.

---

# Marketplace

GitHub menyediakan Marketplace yang berisi ribuan Action siap pakai.

Contohnya:

- Deploy ke Vercel.
- Deploy ke Netlify.
- Docker Build.
- ESLint.
- CodeQL.
- Firebase Deployment.

Marketplace membantu mempercepat pembuatan workflow tanpa harus membuat semuanya dari awal.

---

# Secrets

Secrets digunakan untuk menyimpan data sensitif seperti:

- API Key.
- Access Token.
- Password.
- Secret Key.

Nilai tersebut dapat digunakan oleh GitHub Actions tanpa ditampilkan secara langsung di repository.

---

# Artifact

Artifact adalah hasil build yang dapat disimpan setelah workflow selesai.

Contoh:

- File ZIP.
- Hasil Build.
- Laporan Testing.
- Coverage Report.

Artifact dapat diunduh kembali kapan saja sesuai kebijakan penyimpanan GitHub.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- GitHub Releases
- Semantic Versioning
- Changelog
- GitHub Pages
- Custom Domain
- GitHub Actions
- Workflow
- Marketplace
- Secrets
- Artifact

Dengan memahami fitur-fitur tersebut, Anda dapat memanfaatkan GitHub tidak hanya sebagai tempat penyimpanan kode, tetapi juga sebagai platform untuk distribusi aplikasi, hosting website statis, serta otomatisasi proses build dan deployment. Pada bagian berikutnya kita akan membahas **GitHub Projects**, **Discussions**, **Security**, **Insights**, dan berbagai fitur manajemen proyek yang tersedia di GitHub.

---

# GitHub Projects

GitHub Projects adalah fitur manajemen proyek yang membantu tim mengatur pekerjaan secara terstruktur.

Projects dapat digunakan untuk:

- Mengelola tugas.
- Memantau progres.
- Mengatur prioritas.
- Berkolaborasi dengan anggota tim.

Projects cocok digunakan untuk proyek kecil maupun besar.

---

# Tampilan Kanban Board

GitHub Projects menggunakan konsep Kanban.

Contoh:

```text
To Do

â†“

In Progress

â†“

Review

â†“

Done
```

Setiap tugas direpresentasikan sebagai sebuah kartu (Card) yang dapat dipindahkan sesuai progres pengerjaan.

---

# Membuat Project

Langkah-langkah:

1. Masuk ke repository.
2. Pilih tab **Projects**.
3. Klik **New Project**.
4. Pilih template.
5. Beri nama project.
6. Simpan.

Project siap digunakan untuk mengelola pekerjaan.

---

# Menambahkan Task

Task dapat dibuat secara manual atau berasal dari:

- Issues
- Pull Request

Dengan begitu seluruh pekerjaan tetap terhubung dengan repository.

---

# Custom Fields

GitHub Projects mendukung field tambahan seperti:

- Status
- Priority
- Sprint
- Due Date
- Assignee

Field tersebut membantu pengelolaan proyek menjadi lebih terstruktur.

---

# GitHub Discussions

GitHub Discussions adalah forum diskusi yang tersedia di dalam repository.

Discussions digunakan untuk:

- Tanya jawab.
- Berbagi ide.
- Diskusi fitur.
- Pengumuman.
- Dukungan komunitas.

Berbeda dengan Issues, Discussions tidak selalu berhubungan dengan bug atau tugas.

---

# Kategori Discussion

Contoh kategori:

- General
- Ideas
- Q&A
- Announcements
- Show and Tell

Kategori memudahkan anggota komunitas menemukan topik yang relevan.

---

# GitHub Wiki

Wiki adalah tempat dokumentasi proyek.

Biasanya berisi:

- Panduan instalasi.
- Dokumentasi API.
- Struktur proyek.
- Tutorial penggunaan.
- FAQ.

Wiki membantu pengguna memahami proyek tanpa harus membaca seluruh kode.

---

# README vs Wiki

| README | Wiki |
|---------|------|
| Ringkasan proyek | Dokumentasi lengkap |
| Ditampilkan di halaman utama | Memiliki halaman terpisah |
| Lebih singkat | Lebih rinci |

Keduanya saling melengkapi dalam penyajian dokumentasi.

---

# Security

GitHub menyediakan berbagai fitur keamanan untuk melindungi repository.

Contohnya:

- Dependabot
- Secret Scanning
- Code Scanning
- Security Advisories

Fitur-fitur ini membantu mengurangi risiko kerentanan pada proyek.

---

# Dependabot

Dependabot memeriksa dependency yang digunakan.

Jika ditemukan versi yang memiliki celah keamanan, GitHub akan memberikan notifikasi dan dapat membuat Pull Request untuk memperbarui dependency tersebut.

Keuntungannya:

- Dependency tetap terbaru.
- Risiko keamanan berkurang.
- Pembaruan lebih mudah dikelola.

---

# Secret Scanning

Secret Scanning mendeteksi informasi sensitif yang tidak sengaja diunggah ke repository.

Contohnya:

- API Key
- Access Token
- Password
- Private Key

Jika ditemukan, GitHub akan memberikan peringatan agar informasi tersebut segera diamankan.

---

# Code Scanning

Code Scanning menganalisis source code untuk menemukan potensi masalah.

Contoh yang dapat dideteksi:

- Kesalahan pemrograman.
- Kerentanan keamanan.
- Pola kode yang berisiko.

Fitur ini membantu meningkatkan kualitas dan keamanan aplikasi.

---

# Security Advisories

Security Advisories digunakan untuk melaporkan dan mengelola kerentanan keamanan pada proyek.

Jika ditemukan celah keamanan, maintainer dapat:

- Mendokumentasikan masalah.
- Menyiapkan perbaikan.
- Merilis pembaruan.
- Memberikan informasi kepada pengguna.

---

# Insights

Insights menyediakan statistik mengenai repository.

Beberapa informasi yang tersedia:

- Jumlah commit.
- Aktivitas kontributor.
- Grafik kontribusi.
- Riwayat branch.
- Statistik lalu lintas repository.

Insights membantu maintainer memahami perkembangan proyek.

---

# Contributors

Tab Contributors menampilkan daftar orang yang telah berkontribusi pada repository.

Informasi yang ditampilkan meliputi:

- Nama kontributor.
- Jumlah commit.
- Grafik kontribusi.

Fitur ini memberikan apresiasi terhadap kontribusi setiap anggota tim.

---

# Traffic

GitHub juga menyediakan statistik kunjungan repository.

Beberapa data yang dapat dilihat:

- Jumlah pengunjung.
- Jumlah clone.
- Referensi pengunjung.
- Aktivitas dalam beberapa hari terakhir.

Data ini berguna untuk mengetahui tingkat ketertarikan terhadap proyek.

---

# Ringkasan

Pada bagian ini kita telah mempelajari:

- GitHub Projects
- Kanban Board
- Task Management
- Discussions
- Wiki
- README vs Wiki
- Dependabot
- Secret Scanning
- Code Scanning
- Security Advisories
- Insights
- Contributors
- Traffic

Dengan memanfaatkan fitur-fitur tersebut, GitHub dapat digunakan bukan hanya sebagai tempat menyimpan kode, tetapi juga sebagai pusat kolaborasi, dokumentasi, manajemen proyek, dan peningkatan keamanan aplikasi. Pada bagian terakhir kita akan membahas **Best Practice**, **berkontribusi pada proyek open source**, **etika kolaborasi**, **roadmap pembelajaran**, serta **kesimpulan**.

---

# Best Practice Menggunakan GitHub

GitHub akan lebih bermanfaat jika digunakan dengan kebiasaan yang baik. Repository yang rapi dan terorganisir akan lebih mudah dipahami, dipelihara, dan dikembangkan oleh tim.

Berikut beberapa praktik terbaik yang direkomendasikan.

---

# Buat Repository yang Rapi

Gunakan nama repository yang jelas.

Contoh:

```
learn-cyber-with-vano

portfolio-website

node-rest-api
```

Hindari nama yang terlalu umum seperti:

```
test

project

baru

123
```

Nama repository yang baik memudahkan orang lain memahami isi proyek.

---

# Lengkapi README.md

Setiap repository sebaiknya memiliki file `README.md`.

Isi yang disarankan:

- Nama proyek.
- Deskripsi singkat.
- Fitur.
- Cara instalasi.
- Cara menjalankan aplikasi.
- Struktur folder.
- Teknologi yang digunakan.
- Lisensi.
- Informasi kontributor.

README yang baik membantu pengguna memahami proyek tanpa harus membaca seluruh source code.

---

# Gunakan LICENSE

Tambahkan file `LICENSE` agar pengguna mengetahui aturan penggunaan proyek.

Beberapa lisensi populer:

- MIT License
- Apache License 2.0
- GNU GPL
- BSD License

Jika proyek bersifat open source, penggunaan lisensi sangat disarankan.

---

# Gunakan .gitignore

Pastikan file yang tidak diperlukan tidak ikut diunggah ke repository.

Contoh:

```text
node_modules/
.env
dist/
build/
coverage/
*.log
```

Selain menjaga repository tetap bersih, hal ini juga membantu melindungi data sensitif.

---

# Gunakan Branch untuk Pengembangan

Jangan mengembangkan fitur langsung pada branch `main`.

Contoh:

```text
main

â†“

feature-login

â†“

feature-profile

â†“

feature-dashboard
```

Setelah selesai, buat Pull Request untuk proses peninjauan sebelum digabungkan.

---

# Tulis Commit yang Jelas

Gunakan pesan commit yang mudah dipahami.

Contoh:

```text
feat: menambahkan halaman artikel

fix: memperbaiki validasi login

docs: memperbarui README

refactor: merapikan struktur controller
```

Pesan commit yang baik mempermudah melihat riwayat perubahan proyek.

---

# Berkontribusi pada Open Source

GitHub merupakan rumah bagi jutaan proyek open source.

Cara mulai berkontribusi:

1. Cari proyek yang menarik.
2. Baca dokumentasi.
3. Fork repository.
4. Buat branch baru.
5. Lakukan perubahan.
6. Push ke repository Anda.
7. Buat Pull Request.

Kontribusi tidak harus berupa kode. Anda juga dapat membantu memperbaiki dokumentasi, melaporkan bug, atau memberikan saran.

---

# Etika Kolaborasi

Saat bekerja dengan developer lain:

- Gunakan bahasa yang sopan.
- Hargai masukan dari reviewer.
- Berikan kritik yang membangun.
- Hindari konflik yang tidak perlu.
- Jelaskan alasan setiap perubahan.

Kolaborasi yang baik akan menciptakan lingkungan pengembangan yang sehat.

---

# Menjaga Keamanan Repository

Beberapa langkah yang perlu dilakukan:

- Aktifkan autentikasi dua faktor (2FA).
- Jangan menyimpan password atau API Key di repository.
- Perbarui dependency secara berkala.
- Tinjau Pull Request sebelum di-merge.
- Gunakan Branch Protection untuk melindungi branch utama.

Keamanan merupakan tanggung jawab seluruh anggota tim.

---

# Membangun Portofolio

GitHub dapat menjadi portofolio online bagi developer.

Beberapa proyek yang dapat ditampilkan:

- Website pribadi.
- REST API.
- Bot.
- Aplikasi mobile.
- Tools.
- Kontribusi open source.

Repository yang terdokumentasi dengan baik akan memberikan kesan profesional.

---

# Roadmap Setelah GitHub

Setelah menguasai Git dan GitHub, materi yang disarankan adalah:

```text
Git

â†“

GitHub

â†“

Responsive Web Design

â†“

REST API

â†“

Docker

â†“

Cloud Deployment

â†“

CI/CD

â†“

Microservices
```

Urutan ini membantu membangun kemampuan sebagai web developer secara bertahap.

---

# Kesalahan yang Sering Dilakukan Pemula

Beberapa kesalahan yang umum terjadi:

- Tidak membuat README.
- Mengunggah folder `node_modules`.
- Menyimpan file `.env` ke repository.
- Langsung bekerja di branch `main`.
- Menggunakan pesan commit yang tidak jelas.
- Tidak menggunakan Pull Request.
- Tidak memperbarui dependency.

Menghindari kesalahan tersebut akan membuat proyek lebih aman dan mudah dikelola.

---

# Kesimpulan

GitHub bukan hanya tempat menyimpan source code, tetapi juga platform kolaborasi yang mendukung pengembangan perangkat lunak modern.

Pada artikel ini kita telah mempelajari:

- Dasar GitHub.
- Repository.
- Branch.
- Fork.
- Pull Request.
- Issues.
- Releases.
- GitHub Pages.
- GitHub Actions.
- Projects.
- Discussions.
- Wiki.
- Security.
- Insights.
- Best Practice.

Dengan memahami seluruh fitur tersebut, Anda dapat membangun proyek secara lebih profesional, bekerja sama dalam tim, serta berkontribusi pada komunitas open source.

---

# Referensi Belajar

Sumber belajar yang direkomendasikan:

- Dokumentasi resmi GitHub.
- GitHub Skills.
- GitHub Docs.
- freeCodeCamp.
- The Odin Project.
- MDN Web Docs.

Selalu utamakan dokumentasi resmi karena berisi informasi terbaru dan paling akurat.

---

# Penutup

Selamat! ðŸŽ‰

Anda telah menyelesaikan materi **GitHub** dari dasar hingga tingkat lanjut. Kini Anda memahami cara menyimpan proyek secara online, berkolaborasi menggunakan Pull Request, mengelola Issues, membuat Releases, memanfaatkan GitHub Pages, hingga menggunakan GitHub Actions untuk otomatisasi.

Dengan selesainya materi **GitHub**, fondasi pengembangan web modern Anda semakin lengkap. Langkah berikutnya adalah mempelajari **Responsive Web Design**, yaitu teknik membuat website yang dapat menyesuaikan tampilannya pada berbagai ukuran layar seperti smartphone, tablet, dan desktop. Setelah seluruh materi Web Development selesai, kita akan memasuki seri **Cyber Community** dimulai dari **SQL**.
