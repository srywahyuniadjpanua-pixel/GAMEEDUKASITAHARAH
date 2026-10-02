# PETUALANGAN TAHARAH - Game Edukasi Fikih

"Bersih Diri, Suci Hati, Menuju Ridha Ilahi"

## Deskripsi
Petualangan Taharah adalah game edukasi berbasis web yang dirancang khusus untuk pembelajaran Fikih di Madrasah Tsanawiyah (MTs) Kelas VII. Game ini mengintegrasikan materi Taharah (bersuci) ke dalam petualangan interaktif dengan sistem maps, mini-games, skor, badge, dan ujian akhir (Final Boss).

## Tujuan
Game ini bertujuan untuk membantu murid:
1. Memahami konsep taharah, hadas, dan najis.
2. Menganalisis dan menerapkan tata cara wudu, tayamum, dan mandi wajib sesuai syariat.
3. Belajar melalui simulasi dan studi kasus.
4. Membiasakan perilaku hidup bersih sebagai wujud ketaatan kepada Allah Swt. dan kepedulian terhadap lingkungan (Kurikulum Berbasis Cinta).

## Teknologi
Aplikasi ini dibangun menggunakan arsitektur Vanilla HTML/CSS/JS (tanpa build tool) agar mudah dijalankan dan didistribusikan di lingkungan sekolah (offline-friendly).
- **Core**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS
- **Audio**: Web Audio API (procedural generated audio, tanpa file mp3/wav eksternal)
- **Storage**: LocalStorage API
- **PDF Generation**: jsPDF (via CDN)
- **Aset**: CSS/SVG generated (bisa diganti dengan gambar)

## Cara Install & Menjalankan
Karena ini adalah aplikasi Vanilla berbasis client-side, Anda **tidak perlu** melakukan `npm install` atau proses build yang rumit.

1. Buka folder project.
2. Klik ganda pada file `index.html`.
3. Game akan terbuka di browser default Anda (disarankan Chrome, Edge, atau Firefox).

Jika Anda ingin menjalankannya melalui local server (misalnya agar module lebih aman):
- Gunakan ekstensi "Live Server" di VS Code, atau
- Gunakan Python: `python -m http.server 8000`, lalu buka `http://localhost:8000`

## Cara Build
Aplikasi ini tidak memerlukan proses build (seperti Webpack atau Vite). Seluruh file sudah siap pakai dan dapat langsung diunggah ke web hosting (seperti Vercel, Netlify, atau GitHub Pages) atau dibagikan ke siswa dalam bentuk folder Zip.

## Cara Mengganti Aset
1. Buka folder `assets/` (buat jika belum ada).
2. Lihat file `ASSET_SOURCES.md` untuk aturan aset.
3. Buka file `js/config.js`.
4. Pada bagian `CONFIG.characters` atau `CONFIG.maps`, Anda bisa menambahkan properti `image: 'assets/characters/nama-file.png'`.
5. Modifikasi `css/styles.css` pada bagian `.char-avatar` atau `.map-node-icon` untuk menggunakan `background-image: url(...)` menggantikan CSS art yang ada.

## Cara Mengganti Soal & Materi
Semua materi dan soal dipisahkan dari logika program utama.
1. Buka folder `js/data/`.
2. Untuk materi Wudu, buka `wudu.js`.
3. Untuk mengubah soal pada mini-game, cari properti `challenges` dalam file tersebut.
4. Untuk Final Boss, edit file `finalBoss.js`.
5. Anda dapat menambah atau mengurangi opsi, soal, dan penjelasan tanpa merusak UI.

## Cara Mengganti Identitas Pengembang
1. Buka file `js/config.js`.
2. Cari bagian `CONFIG.developer`:
```javascript
developer: {
  name: "[Nama Pengembang]",
  institution: "[Nama Instansi]",
  subject: "Fikih",
  level: "MTs Kelas VII",
  year: "2026/2027"
}
```
3. Ubah teks di dalam tanda kutip dengan data Anda sendiri.
4. Simpan file, dan data di halaman "Informasi Pengembang" akan otomatis berubah.
