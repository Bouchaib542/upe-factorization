# UPE Factorization

Experimental implementation of the **UPE (Unité de Prédiction d'Écarts)** algorithm for integer factorization.  
This project explores two complementary modes:

- **UPE-Narrow**: scanning concentric rings of radius *T* around √N, optimized for cases where the two prime factors p and q are close to √N.  
- **UPE-Wide**: expanding rings with radius doubling (T, 2T, 4T, …), designed for larger gaps between p and q.

---

## Features
- Written in **JavaScript (BigInt)**, runs directly in the browser.  
- Supports numbers up to **2⁶⁴ − 1 ≈ 1.84×10¹⁹**.  
- Uses a small prime sieve (≤ B) before UPE.  
- Wheel of size 30 for candidate reduction (only residues ±1, ±7, ±11, ±13).  
- Purely experimental — not intended as a production-grade factorizer.

---

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/upe-factorization.git
   cd upe-factorization
