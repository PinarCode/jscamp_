console.log("Merhaba Kodlama.io")

let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 (bu işlemi yapamıyoruz.)

console.log(euroDun)

let konutKredileri = ["Konut kredisi","Emlak Konut Kredileri","Kamu Konut Kredileri","Özel Konut Kredileri"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){
    console.log("<li>"+konutKredileri[i]+"<li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut kredisi</li>
    <li>Kamu Konut kredisi</li>
</ul> */}

console.log(konutKredileri)