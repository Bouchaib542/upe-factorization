# UPE Factorization

Experimental implementation of the **UPE (Unité de Prédiction d'Écarts)** algorithm for integer factorization.  
This repository combines:

1. **Calculator** — interactive demo in the browser (`index.html`, `script.js`, `upe.js`).  
2. **Paper** — research note written in Markdown (`papier.md`).  

---

## 🔢 Online Calculator

The UPE calculator runs entirely in the browser with **JavaScript BigInt**.  
It supports integers up to **2⁶⁴ − 1 ≈ 1.84×10¹⁹**.

👉 **[Try the calculator online (GitHub Pages)](https://YOUR-USERNAME.github.io/upe-factorization/)**  

*(replace `YOUR-USERNAME` with your GitHub username)*

### Usage
- Enter an integer `N`.  
- Adjust parameters:  
  - **B**: sieve limit for small factors.  
  - **T**: radius of each ring around √N.  
  - **K**: number of rings.  
- Choose mode:  
  - **UPE-Narrow** → factors close to √N.  
  - **UPE-Wide** → factors further apart.  
- Click **Factorize** and check the output.

### Example Inputs
- `999100008180000007` → factors `970000007 × 1030000001`  
- `1000000016000000063` → factors `1000000007 × 1000000009`

---

## 📄 Paper

The file [`papier.md`](./papier.md) contains a structured scientific note:  
- **Abstract, Methods, Results, Discussion, References**  
- Explains UPE-Narrow and UPE-Wide  
- Includes worked examples and theoretical background  

You can read it directly on GitHub or convert it to PDF/DOCX using [Pandoc](https://pandoc.org/).

---

## 📂 Repository Structure
