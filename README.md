# 🎓 HaloGuru — Bimbingan Belajar SD

HaloGuru adalah website bimbingan belajar yang dirancang khusus untuk membantu siswa jenjang Sekolah Dasar (SD) belajar dengan lebih **nyaman**, **menyenangkan**, dan **sesuai dengan kebutuhan** setiap anak. Website ini dibuat sebagai proyek Ujian Akhir Semester Mata Kuliah Pemrograman Web.

🔗 **Live Demo**: [https://haloguru.netlify.app/](https://haloguru.netlify.app/)

---

## ✨ Fitur Interaktif

Website ini dilengkapi dengan berbagai fitur interaktif untuk meningkatkan pengalaman pengguna:

- **🌙 Dark / Light Mode** — Toggle tema gelap dan terang secara instan.
- **📊 Tabel Perbandingan Program** — Membandingkan durasi, materi, dan harga antar program belajar (Matematika, Bahasa Indonesia, Inggris, Sempoa).
- **📰 Filter & Pencarian Berita** — Cari artikel berdasarkan kata kunci atau kategori.
- **📄 Paginasi Berita** — Menampilkan 3 berita per halaman untuk navigasi yang lebih rapi.
- **🔊 Text-to-Speech (Audio)** — Dengarkan ringkasan berita dengan fitur speech synthesis bawaan browser.
- **📹 Video Pengenalan** — Pemutar video interaktif untuk mengenal lebih dekat HaloGuru.
- **🎵 Pemutar Audio** — Putar backsound atau musik latar (terintegrasi di footer dan halaman daftar).
- **📝 Formulir Pendaftaran** — Dilengkapi:
  - Validasi real-time (nama, nomor WhatsApp, dll.).
  - Pratinjau data sebelum submit.
  - Checkbox persetujuan wajib.
  - **Netlify Forms** — Data pendaftaran tersimpan otomatis di dashboard Netlify.
- **❓ FAQ Accordion** — Pertanyaan yang sering diajukan dengan efek expand/collapse.
- **📬 Newsletter** — Simulasi form berlangganan newsletter.
- **📊 Visitor Counter (LibreCounter)** — Melacak jumlah pengunjung, sumber trafik, dan statistik lainnya.
- **📱 Responsif** — Tampilan optimal di desktop, tablet, dan ponsel.
- **⬆️ Back to Top** — Tombol navigasi cepat ke atas halaman.

---

## 🧰 Teknologi yang Digunakan

| Teknologi | Keterangan |
|-----------|------------|
| **HTML5** | Struktur halaman dan konten semantik |
| **CSS3** | Styling, animasi, dark mode, dan layout responsive (Flexbox & Grid) |
| **JavaScript (Vanilla)** | Interaktivitas (tab, filter, form, TTS, dark mode, dll.) |
| **Google Fonts** | Font Poppins & Open Sans untuk tipografi |
| **Netlify** | Hosting dan deployment otomatis + Netlify Forms |
| **LibreCounter** | Visitor counter & statistik pengunjung (tanpa cookie) |

---

## 📁 Struktur Folder Proyek
haloguru/
├── index.html # Halaman utama (semua konten)
├── style.css # Semua styling CSS
├── script.js # Semua logika JavaScript
├── README.md # Dokumentasi proyek
├── images/ # Gambar-gambar pendukung
│ ├── logo-haloguru.png
│ ├── haloguru.png
│ ├── matematika.png
│ ├── indonesia.png
│ ├── sempoa.png
│ ├── berita-belajar.png
│ ├── berita-matematika.png
│ └── berita-membaca.png
├── videos/ # Video pengenalan
│ └── video-haloguru.mp4
└── audio/ # Audio / backsound
└── haloguru.mp3