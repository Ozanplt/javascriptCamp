console.log("Merhaba Kodlama.io");

// JS Type safe değildir(bir değişkene farklı veri tipleri atanamaz)
let dollarYesterday = 9.3;
let dollarToday = 8.9;

const euroDun =11 ;
//euroDun = 12; const sabit olduğu için 'r'dir ve tekrar yazılamaz. bunu yapamıyoruz.

let konutKredileri = ["Komut kredisi","emlak konut kredisi","kamu konut kredisi","özel konut kredisi"];
console.log("<ul>")
for (let i = 0; i< konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")
{/* <ul>
    <li>Komut kredisi</li>
    <li>emlak konut kredisi</li>
    <li>kamu konut kredisi</li>
</ul> */}

console.log(konutKredileri);