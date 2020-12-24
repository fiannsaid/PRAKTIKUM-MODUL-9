function Buku(judulBuku, pengarang, penerbit, thTerbit){
  this.judulBuku = judulBuku;
  this.pengarang = pengarang;
  this.penerbit = penerbit;
  this.thTerbit = thTerbit;

  this.tampil = function(){
    console.log("Judul Buku : ", this.judulBuku)
    console.log("pengarang : ", this.pengarang)
    console.log("penerbit : ", this.penerbit)
    console.log("Tahun Terbit : ", this.thTerbit)
  }
}

const promt = require('promt-sync')()

let jmlBuku = prompt("Jumlah buku yang akan dimasukkan : ")

var arrayBuku = []

var buku = {}

for (let i=1; i<=jmlBuku; i++){
  console.log("\n")
  buku = new Buku(
    prompt(`Masukkan judul Buku ke-${i} : `),
    prompt(`Masukkan nama pengarang ke-${i} : `),
    prompt(`Masukkan nama penerbit ke-${i} : `),
    prompt(`Masukkan tahunterbit ke-${i} `)
  )

  arrayBuku.push(buku)
}

for(let i in arrayBuku){
console.log(`\nBuku ke-${index}`)
index++
arrayBuku[i].tampil()
}
