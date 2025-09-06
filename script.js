import { isqrt, upeNarrow, upeWide, autotune } from './upe.js';

const $ = s => document.querySelector(s);
function log(s){ $('#out').textContent += s + "\n"; }
function clearOut(){ $('#out').textContent = ""; }

window.addEventListener('DOMContentLoaded', ()=>{
  $('#go-narrow').onclick = ()=>{
    clearOut();
    const N = BigInt($('#nin').value.trim());
    const B = BigInt($('#B').value.trim());
    const T = BigInt($('#T').value.trim());
    const K = BigInt($('#K').value.trim());
    const t0 = performance.now();
    const res = upeNarrow(N, B, T, K);
    const t1 = performance.now();
    if (res){
      const [p,q] = res.sort((a,b)=> (a<b?-1:1));
      log(`N=${N}`);
      log(`p=${p}  q=${q}`);
      log(`check: ${p*q===N}`);
    }else{
      log('Aucun facteur dans la portée.');
    }
    log(`Temps: ${(t1-t0).toFixed(1)} ms`);
  };

  $('#go-wide').onclick = ()=>{
    clearOut();
    const N = BigInt($('#nin').value.trim());
    const B = BigInt($('#B').value.trim());
    const T = BigInt($('#T').value.trim());
    const K = BigInt($('#K').value.trim());
    const t0 = performance.now();
    const res = upeWide(N, B, T, K);
    const t1 = performance.now();
    if (res){
      const [p,q] = res.sort((a,b)=> (a<b?-1:1));
      log(`N=${N}`);
      log(`p=${p}  q=${q}`);
      log(`check: ${p*q===N}`);
    }else{
      log('Aucun facteur dans la portée.');
    }
    log(`Temps: ${(t1-t0).toFixed(1)} ms`);
  };

  $('#auto').onclick = ()=>{
    const N = BigInt($('#nin').value.trim());
    const {T,K} = autotune(N);
    $('#T').value = T.toString();
    $('#K').value = K.toString();
  };
});
