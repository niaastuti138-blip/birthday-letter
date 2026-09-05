# BIRTHDAY LETTER — TEMPLATE

Template ini dibuat berdasarkan referensi video yang kamu kirim: nuansa scrapbook hitam-putih, kalender, menu ikon, letter, gift, songs, reasons, memories, dan birthday ending.

## 1. Yang perlu kamu ganti

Buka `script.js`.

Di bagian paling atas ada:

const DATA = {
   ...
};

Ganti:
- name = nama penerima
- birthdayDay = tanggal ulang tahun
- month = bulan
- year = tahun
- openingTitle = tulisan halaman pembuka
- openingSubtitle = tulisan kecil
- letter = isi surat
- memoryCaption = tulisan foto
- giftText = tulisan hadiah
- giftNote = catatan hadiah
- songs = judul, artis, dan nama file musik
- reasons = daftar alasan
- finalTitle = judul halaman terakhir
- finalMessage = pesan terakhir

## 2. Mengganti foto

Masuk ke folder `images`.

File yang dipakai:
- foto1.jpg
- foto2.jpg
- foto3.jpg
- foto4.jpg
- foto5.jpg

Ganti foto placeholder dengan foto kamu, tetapi pertahankan nama file tersebut agar tidak perlu mengubah kode.

Untuk gambar lagu:
- song1.jpg
- song2.jpg

## 3. Mengganti musik

Masuk ke folder `music`.

Masukkan:
- lagu1.mp3
- lagu2.mp3

Kalau ingin hanya satu lagu, kamu tetap bisa memakai lagu1.mp3 dan menghapus tombol lagu kedua dengan mengedit HTML.

Catatan: browser HP biasanya tidak mengizinkan musik otomatis sebelum pengguna menekan/berinteraksi dengan halaman. Template ini mencoba memutar musik setelah tombol Open ditekan.

## 4. Upload ke GitHub Pages dari HP

1. Login ke GitHub.
2. Buat repository baru, misalnya `birthday-letter`.
3. Upload semua isi folder ini ke repository.
4. Pastikan `index.html`, `style.css`, dan `script.js` berada di halaman utama repository.
5. Pastikan folder `images` dan `music` ikut ter-upload.
6. Buka Settings → Pages.
7. Pada Source pilih `Deploy from a branch`.
8. Branch: `main`.
9. Folder: `/ (root)`.
10. Save.
11. Tunggu sampai GitHub memberikan alamat website `https://username.github.io/birthday-letter/`.

## 5. Membuat QR Code

Setelah website sudah punya URL, masukkan URL tersebut ke pembuat QR Code pilihanmu. QR Code itu yang nanti dicetak.

## Penting

- Jangan ubah nama `index.html`, `style.css`, atau `script.js`.
- Nama foto harus sama persis jika kamu tidak mengubah bagian HTML.
- Nama musik harus sama dengan yang tertulis di `DATA.songs`.
- Untuk foto terbaik di HP, gunakan foto portrait/vertikal.
