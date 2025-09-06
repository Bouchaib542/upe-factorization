import { upeNarrow, upeWide } from './upe.js';

const cases = [
  999100008180000007n,     // 970000007 × 1030000001
  1000000016000000063n,    // 1000000007 × 1000000009
];

for (const N of cases){
  const a = upeNarrow(N, 1000n, 1_000_000n, 40n);
  const b = upeWide(N,   1000n, 1_000_000n, 12n);
  console.log("N=", N.toString());
  console.log("narrow:", a ? a.map(x=>x.toString()) : "none");
  console.log("wide  :", b ? b.map(x=>x.toString()) : "none");
}
