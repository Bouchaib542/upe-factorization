# UPE Factorization: Narrow and Wide Gap Modes

**Author:** Bahbouhi Bouchaib  
**Affiliation:** Independent Scientist, Nantes, France  

---

## Abstract
This paper introduces the **UPE (Unité de Prédiction d'Écarts)** algorithm, a research prototype designed to explore new approaches to integer factorization.  
The method relies on scanning *prediction rings* around √N in order to identify potential prime factors of a biprime number N. Two complementary modes are proposed:

1. **UPE-Narrow** — optimized for numbers whose factors are located close to √N.  
2. **UPE-Wide** — optimized for numbers whose factors exhibit larger gaps around √N.

The algorithm combines small prime sieving, wheel factorization modulo 30, and ring expansion. Although UPE is still experimental, preliminary results show successful factorizations of 17–18 digit biprimes. This work aims to provide both a pedagogical and exploratory framework, complementing classical methods such as Fermat’s difference of squares and Pollard–Rho.

---

## 1. Introduction
Integer factorization remains a central problem in computational number theory, with applications in cryptography (RSA), algorithm design, and the study of prime gaps.  
Classical algorithms include trial division, Fermat’s method, Pollard–Rho, and elliptic curve factorization.  

The **UPE algorithm** introduces a different perspective: instead of relying solely on random walks or algebraic curves, it predicts *candidate factors* by scanning structured neighborhoods around √N. The goal is not to replace established methods, but to enrich the toolbox of factorization techniques with a method that is both **visualizable** and **tunable**.

---

## 2. Methods

### 2.1 UPE-Narrow
- Parameters: `B` (small factor sieve limit), `T` (radius of a ring), `K` (number of rings).  
- Candidates are generated around √N at distances up to `K × T`.  
- Wheel factorization mod 30 reduces candidates to residues {±1, ±7, ±11, ±13}.  
- Best suited when p and q are close to √N.

### 2.2 UPE-Wide
- Starts with radius `T`, then expands geometrically (T, 2T, 4T, …).  
- Designed for larger gaps between p and q.  
- Ensures coverage of distant factors with fewer rings.

### 2.3 Auto-Tuning
An approximate gap prediction is given by:
\[
\delta_{\text{target}} \approx \sqrt{N} \cdot \frac{\log \log N}{\log N}.
\]
This value guides the choice of `T` and `K`.

---

## 3. Results

### Case 1
\[
N = 999100008180000007
\]  
Factors successfully recovered:
\[
p = 970000007, \quad q = 1030000001.
\]

### Case 2
\[
N = 1000000016000000063
\]  
Factors successfully recovered:
\[
p = 1000000007, \quad q = 1000000009.
\]

In both cases, UPE-Narrow or UPE-Wide identified the factors once the effective search radius exceeded the actual gap between p and q.

---

## 4. Discussion
The UPE algorithm is still **experimental** and should not be considered a replacement for production-grade methods.  
However, it highlights several interesting aspects:

- **Visualization**: the concept of rings and gaps provides an intuitive picture of how factors distribute around √N.  
- **Gap classification**: distinguishing between narrow-gap and wide-gap cases improves efficiency.  
- **Complementarity**: UPE can serve as a pedagogical bridge between trial division, Fermat’s difference of squares, and Pollard–Rho.  

Future work will focus on:
- Improving auto-tuning heuristics.  
- Extending the method to larger integers beyond 64-bit.  
- Combining UPE with classical algorithms for hybrid strategies.

---

## References
1. G.H. Hardy and J.E. Littlewood, *Some Problems of 'Partitio Numerorum'*, Acta Math., 1923.  
2. H. Cramér, *On the order of magnitude of the difference between consecutive prime numbers*, Acta Arithmetica, 1936.  
3. R. Brent, *An Improved Monte Carlo Factorization Algorithm*, BIT Numerical Mathematics, 1980.  
4. D. Knuth, *The Art of Computer Programming, Vol. 2: Seminumerical Algorithms*, Addison-Wesley.  

---

## Author Note
This repository is research-oriented and maintained by **Bahbouhi Bouchaib**, Independent Scientist based in Nantes, France.
