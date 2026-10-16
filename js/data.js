// DATA KONTEN - edit teks, pertanyaan, panduan, dan tanda bahaya di sini.
// Daftar menu: [file, label, id-halaman]
const PAGES=[['index.html','Home','home'],['tentang.html','Tentang Program','tentang'],['penilaian.html','Penilaian','penilaian'],['panduan-usia.html','Panduan Usia','usia'],['kebutuhan-dasar.html','Kebutuhan Dasar','dasar'],['tanda-bahaya.html','Tanda Bahaya','bahaya'],['kontak.html','Kontak','kontak']];
const $=id=>document.getElementById(id);

// ===== GAMBAR =====
// Semua gambar ada di folder img/. Kalau ekstensinya bukan png (misal webp/jpg), ganti di sini.
const EXT='png';
// Helper: kalau nama gambar kosong (null), otomatis pakai emoji sebagai pengganti
const pic=(name,fallback,cls='')=>name
  ? `<img class="${cls}" src="img/${name}.${EXT}" alt="" loading="lazy">`
  : fallback;

// Kategori: n=nama, e=emoji cadangan, img=nama file gambar, d=deskripsi, det=detail, q=pertanyaan penilaian, r=rekomendasi
const CATS=[
{n:'Nutrisi',e:'🍓',img:'nutrisi',d:'Memenuhi kebutuhan gizi sesuai usia anak.',det:'Berikan ASI/MPASI/makanan bergizi seimbang (karbohidrat, protein, sayur, buah), sesuai jadwal dan porsi usia.',q:['Apakah anak Anda mengonsumsi makanan bergizi setiap hari?','Apakah anak makan dengan jadwal yang teratur?'],r:'Pertahankan kebiasaan baik dan tambahkan variasi makanan bergizi seimbang.'},
{n:'Kebersihan',e:'🛁',img:'kebersihan',d:'Menjaga kebersihan diri dan lingkungan anak.',det:'Mandi 2x sehari, cuci tangan sebelum makan dan setelah BAB/BAK, jaga kuku bersih, ganti pakaian bila kotor.',q:['Apakah anak mandi dan berganti pakaian bersih setiap hari?','Apakah anak mencuci tangan sebelum makan dan setelah dari toilet?'],r:'Tingkatkan kebersihan diri anak, seperti mencuci tangan sebelum makan.'},
{n:'Tidur dan Istirahat',e:'🌙',img:'tidur',d:'Memenuhi waktu tidur yang cukup.',det:'Bayi 12–16 jam, batita 11–14 jam, prasekolah 10–13 jam, anak sekolah 9–12 jam per hari. Buat rutinitas tidur yang tenang.',q:['Apakah anak tidur cukup sesuai usianya?','Apakah anak memiliki jadwal tidur yang teratur?'],r:'Pertahankan pola tidur yang sudah baik.'},
{n:'Aktivitas dan Perkembangan',e:'🔤',img:'aktivitas',d:'Memberikan stimulasi sesuai usia anak.',det:'Ajak bermain, bernyanyi, membaca buku, dan bergerak aktif. Pantau kemampuan motorik, bahasa, dan sosial anak.',q:['Apakah anak diajak bermain atau belajar setiap hari?','Apakah anak aktif bergerak dan berinteraksi dengan orang lain?'],r:'Aktivitas stimulasi sesuai usia anak, seperti bermain dan berinteraksi, perlu ditingkatkan.'},
{n:'Keamanan',e:'🛡️',img:'keamanan',d:'Menciptakan lingkungan yang aman bagi anak.',det:'Singkirkan benda kecil/tajam, amankan stopkontak dan tangga, simpan obat & bahan kimia, awasi anak saat bermain.',q:['Apakah lingkungan rumah aman dari benda berbahaya?','Apakah anak selalu diawasi saat bermain?'],r:'Pertahankan lingkungan yang aman dan awasi anak saat beraktivitas.'}];

const OPTS=[['Selalu',3],['Sering',2],['Kadang-kadang',1],['Tidak pernah',0]];

// Panduan usia: [kelas-warna, emoji cadangan, nama, rentang usia, daftar tips, nama file gambar]
// Prasekolah belum ada gambar -> null. Kalau sudah ada (misal 3-5th.png), ganti null jadi '3-5th'
const AGES=[
['a1','👶','Bayi','0-12 bulan',['ASI eksklusif 6 bulan pertama, lalu MPASI bertahap','Imunisasi dasar lengkap sesuai jadwal','Tidur telentang di alas yang aman','Stimulasi dengan bicara, senyum, dan sentuhan'],'0-12bln'],
['a2','🧸','Batita','1-3 tahun',['Makan 3x sehari + 2x selingan bergizi','Latih berjalan, berbicara, dan toilet training','Awasi dari benda kecil, tangga, dan air','Batasi layar, perbanyak bermain'],'1-3th'],
['a3','🎒','Prasekolah','3-5 tahun',['Biasakan cuci tangan dan sikat gigi 2x sehari','Dorong bermain kreatif, menggambar, dan bercerita','Latih kemandirian makan dan berpakaian','Tidur 10-13 jam termasuk tidur siang'],'3-5th'],
['a4','📚','Anak Sekolah','6-12 tahun',['Sarapan bergizi sebelum sekolah','Aktivitas fisik minimal 60 menit per hari','Dampingi belajar dan pergaulan','Tidur cukup 9-12 jam dan batasi gawai'],'6-12th']];

// Tanda bahaya: [emoji cadangan, teks, nama file gambar]
const DANGER=[
['😮‍💨','Kesulitan bernapas','kesulitan-bernafas'],
['⚡','Kejang','kejang'],
['😴','Sangat lemas','sangat-lemas'],
['🥛','Tidak mau minum','tidak-mau-makan'],
['📉','Penurunan kesadaran','penurunan-kesadaran'],
['🌡️','Kondisi semakin memburuk','kondisi-memburuk']];