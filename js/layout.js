// Menu atas & footer dipakai semua halaman. Ubah di sini sekali, semua halaman ikut berubah.
(function(){
  const cur=document.body.dataset.page;
  $('nav').innerHTML='<a class="logo" href="index.html" style="padding:0">🐻 Perawatan Anak</a>'+
    PAGES.map(p=>`<a href="${p[0]}" class="${p[2]===cur?'on':''}">${p[1]}</a>`).join('');
  $('footer').innerHTML='© 2026 Perawatan Anak · Bersifat edukatif, bukan pengganti diagnosis medis.';
})();
