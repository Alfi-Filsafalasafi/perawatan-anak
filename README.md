# Perawatan Anak

Buka `index.html` di browser (tidak perlu server).

## Struktur
- `index.html`, `tentang.html`, `penilaian.html`, `panduan-usia.html`, `kebutuhan-dasar.html`, `tanda-bahaya.html`, `kontak.html` - satu file per halaman
- `css/style.css` - semua gaya & warna (variabel di `:root`)
- `js/data.js` - isi konten: kategori, pertanyaan, panduan usia, tanda bahaya, daftar menu
- `js/layout.js` - menu atas & footer (dipakai semua halaman)
- `js/render.js` - menampilkan kartu dari data.js
- `js/penilaian.js` - logika form, pertanyaan, dan hasil penilaian

## Tips ubah
- Ganti pertanyaan/rekomendasi: `js/data.js` (`q` dan `r`)
- Ganti email/IG/alamat: `kontak.html`
- Tambah halaman: salin salah satu file html, tambahkan ke `PAGES` di `data.js`
