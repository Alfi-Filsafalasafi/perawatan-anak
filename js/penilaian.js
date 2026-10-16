// Logika halaman Penilaian: form data anak -> pertanyaan -> hasil.
// Batas 'Terpenuhi' ada di showRes(): s/m>=0.7 (70%).
// assessment
let Q=[],ans=[],cur=0,child={};
function startQ(){const n=$('nama').value.trim(),u=$('usia').value,b=+$('bb').value,t=+$('tb').value;
 if(!n||!u||!b||!t){$('err1').textContent='Mohon lengkapi semua data anak.';return}
 $('err1').textContent='';child={n,u};Q=[];CATS.forEach((c,ci)=>c.q.forEach(q=>Q.push({ci,q})));ans=Array(Q.length).fill(null);cur=0;
 $('step1').hidden=true;$('step2').hidden=false;renderQ()}
function renderQ(){const q=Q[cur],c=CATS[q.ci];$('qcat').textContent=c.e+' '+c.n;$('qn').textContent=(cur+1)+'/'+Q.length;$('qbar').style.width=((cur+1)/Q.length*100)+'%';
 $('qtext').textContent=(cur%2+1)+'. '+q.q;$('err2').textContent='';
 $('qopts').innerHTML=OPTS.map((o,i)=>`<label class="opt ${ans[cur]===o[1]?'sel':''}"><input type="radio" name="o" ${ans[cur]===o[1]?'checked':''} onchange="pick(${o[1]})"> ${o[0]}</label>`).join('');
 $('qcats').innerHTML=CATS.map((x,i)=>`<div class="cat ${i===q.ci?'on':''}">${x.e} ${x.n}</div>`).join('');
 $('nextb').textContent=cur===Q.length-1?'Lihat Hasil ✓':'Lanjut →'}
function pick(v){ans[cur]=v;renderQ()}
function prevQ(){if(cur>0){cur--;renderQ()}else{$('step2').hidden=true;$('step1').hidden=false}}
function nextQ(){if(ans[cur]===null){$('err2').textContent='Silakan pilih salah satu jawaban.';return}
 if(cur<Q.length-1){cur++;renderQ()}else showRes()}
function showRes(){$('step2').hidden=true;$('step3').hidden=false;
 const rs=CATS.map((c,ci)=>{let s=0,m=0;Q.forEach((q,i)=>{if(q.ci===ci){s+=ans[i];m+=3}});return{c,ok:s/m>=0.7}});
 const bad=rs.filter(r=>!r.ok);
 $('rsub').textContent=`Berikut hasil penilaian kebutuhan perawatan dasar ${child.n} (${child.u}).`;
 const b=$('rban');b.className='ok-banner'+(bad.length?' warn':'');
 b.innerHTML=bad.length?`<span style="font-size:2rem">⚠️</span> Secara umum, ada ${bad.length} aspek perawatan yang perlu diperhatikan.`:`<span style="font-size:2rem">✅</span> Secara umum, kebutuhan perawatan anak Anda sudah baik.`;
 $('rres').innerHTML=rs.map(r=>`<div class="card"><div class="e">${r.c.e}</div><h3>${r.c.n}</h3><span class="tag ${r.ok?'ok':'warn'}">${r.ok?'✔ Terpenuhi':'! Perlu Diperhatikan'}</span></div>`).join('');
 $('rrec').innerHTML=(bad.length?bad.map(r=>`<li>${r.c.r}</li>`):['Pertahankan kebiasaan baik yang sudah dilakukan.']).map(x=>x).join('')+'<li>Konsultasikan ke tenaga kesehatan bila ada kekhawatiran.</li>'}
function resetQ(){$('step3').hidden=true;$('step1').hidden=false}
