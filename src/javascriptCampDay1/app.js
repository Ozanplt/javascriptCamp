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

let sayi1= 10;
sayi1 = "Engin Demiroğ"
let student = {id:1,name: "Engin"}
console.log(student)

function save(puan=10,ogrenci){
    console.log(ogrenci.name+ " : " + puan)
}

save(undefined,student);

let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]
console.log(students)

let students2 = [student,{id:2, name:"Halit"},"Ankara",{city:"İstanbul"}]
console.log(students2)


