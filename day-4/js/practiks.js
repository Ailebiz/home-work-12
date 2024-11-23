let keriSan = 0;
let zhupSan = 0;
let taqSan = 0;

function esep() {
    let i = 1
    let san = +prompt("Неше сан енгізгіңіз келеді?")

    while(i <= san){
        let sandar = +prompt("Сан енгізіңіз (" + i + "/" + san + ")" )        
        

        if(isNaN(sandar)){ 
            alert("Қате. Тек сан енгізу керек!")
            continue;
        }
         else if(sandar<0){
           keriSan++;
        } else if(sandar % 2 == 0){
            zhupSan++;
        } else if (sandar % 2 !== 0){
            taqSan++;
        } 

        i++;
    } 
    alert ("Кері сандар саны: " + keriSan + '\n' + "Жұп сандар саны: " + zhupSan + '\n' + "Тақ сандар саны: " + taqSan)   
}


esep(); 
