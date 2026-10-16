// Menampilkan kartu & daftar dari data.js (Home, Panduan Usia, Kebutuhan Dasar, Tanda Bahaya).
if($('homeCats'))$('homeCats').innerHTML=CATS.map(c=>`<div class="card"><div class="e">${c.e}</div><h3>${c.n}</h3></div>`).join('');
if($('dasarGrid'))$('dasarGrid').innerHTML=CATS.map((c,i)=>`<div class="card"><div class="e">${c.e}</div><h3>${c.n}</h3><p>${c.d}</p><button class="btn sm" onclick="this.nextElementSibling.classList.toggle('on')">Lihat Detail</button><div class="detail">${c.det}</div></div>`).join('');
if($('dg'))$('dg').innerHTML=DANGER.map(d=>`<div class="card"><div class="e">${d[0]}</div>${d[1]}</div>`).join('');
if($('ages'))$('ages').innerHTML=AGES.map((a,i)=>`<div class="age ${a[0]}"><h3>${a[2]}</h3><div>${a[3]}</div><div class="e">${a[1]}</div><button class="btn" onclick="showAge(${i})">Lihat Panduan →</button></div>`).join('');
function showAge(i){const a=AGES[i],g=$('guide');g.hidden=false;g.innerHTML=`<h3 style="color:var(--blue)">${a[1]} ${a[2]} (${a[3]})</h3><ul>${a[4].map(x=>`<li>${x}</li>`).join('')}</ul>`;g.scrollIntoView({behavior:'smooth'})}
