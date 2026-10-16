// Menampilkan kartu & daftar dari data.js (Home, Panduan Usia, Kebutuhan Dasar, Tanda Bahaya).
if($('homeCats'))$('homeCats').innerHTML=CATS.map(c=>`<div class="card"><div class="e">${pic(c.img,c.e,'ico')}</div><h3>${c.n}</h3></div>`).join('');

if($('dasarGrid'))$('dasarGrid').innerHTML=CATS.map(c=>`<div class="card"><div class="e">${pic(c.img,c.e,'ico')}</div><h3>${c.n}</h3><p>${c.d}</p><button class="btn sm" onclick="this.nextElementSibling.classList.toggle('on')">Lihat Detail</button><div class="detail">${c.det}</div></div>`).join('');

if($('dg'))$('dg').innerHTML=DANGER.map(d=>`<div class="card"><div class="e">${pic(d[2],d[0],'ico')}</div>${d[1]}</div>`).join('');

if($('ages'))$('ages').innerHTML=AGES.map((a,i)=>`<div class="age ${a[0]}"><h3>${a[2]}</h3><div>${a[3]}</div><div class="e">${pic(a[5],a[1],'char')}</div><button class="btn" onclick="showAge(${i})">Lihat Panduan →</button></div>`).join('');

function showAge(i){
  const a=AGES[i],g=$('guide');
  g.hidden=false;
  g.innerHTML=`<h3 style="color:var(--blue)">${pic(a[5],a[1],'mini')} ${a[2]} (${a[3]})</h3><ul>${a[4].map(x=>`<li>${x}</li>`).join('')}</ul>`;
  g.scrollIntoView({behavior:'smooth'});
}