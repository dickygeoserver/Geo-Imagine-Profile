alert("Terimakasih, Selamat Datang di Website GeoImagine Solution.");
const firstName = prompt("Siapa nama anda?");
const address = prompt("Anda tinggal dimana?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: address,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Welcome my Brothers " + user.name.first + " di " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Bonjours " + user.name.first + " di " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Dozo, ohaiyou gozaimasu " + user.name.first + " di " + user.name.last + "!");
} else if (user.language === "Korea") {
    alert("Anyeonghaseyo, " + user.name.first + " di " + user.name.last + "!");
} else if (user.language === "Jawa") {
    alert("Maturnuwun nggih, " + user.name.first + " di " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " di " + user.name.last + "!");
}