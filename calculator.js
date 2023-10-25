let symbol = prompt("Masukan Symbol Berikut (+, -, *, /, **, %)");
let angka1 = prompt("Masukan Angka");
let angka2 = prompt("Masukan Angka Ke 2");
let hasil = "";

if(angka1) {
    angka1 = parseInt(angka1)
}

if(angka2) {
    angka2 = parseInt(angka2)
}

if(symbol == "+"){
    if(isNaN(angka1)){
        document.write("ERROR")
    }else if(isNaN(angka2)){
        document.write("ERROR")
    }else{
        hasil = angka1 + angka2
        document.write(`Hasil :  ${hasil}`);
    }
}else if(symbol == "-"){
    if(isNaN(angka1)){
        document.write("ERROR")
    }else if(isNaN(angka2)){
        document.write("ERROR")
    }else{
         hasil = angka1 - angka2
        document.write(`Hasil :  ${hasil}`);   
    }

}else if(symbol == "*"){
    if(isNaN(angka1)){
        document.write("ERROR")
    }else if(isNaN(angka2)){
        document.write("ERROR")
    }else{
        hasil = angka1 * angka2
        document.write(`Hasil :  ${hasil}`);
    }
 
}else if(symbol == "/"){
    if(isNaN(angka1)){
        document.write("ERROR")
    }else if(isNaN(angka2)){
        document.write("ERROR")
    }else{
        hasil = angka1 / angka2
        document.write(`Hasil :  ${hasil}`);
    }
}else if(symbol == "**"){
    if(isNaN(angka1)){
        document.write("ERROR")
    }else if(isNaN(angka2)){
        document.write("ERROR")
    }else{
        hasil = angka1 ** angka2
        document.write(`Hasil :  ${hasil}`)
    }
    
}else{
    document.write("EROR")
} 


