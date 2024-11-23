
function kazakh() {
    alert("Сәлем! Қалың қалай?");
}


function russian() {
    alert("Привет! Как дела?");
}


function english() {
    alert("Hello! How are you?");
}


function student() {
   
    let students = +prompt("Сіз студентсіз бе? (Иә/Жоқ):");

    if (students == "иә" || students == "да" || students == "yes") {
    
        let language = prompt("Қай тілде сөйлесеміз? (қазақша/орысша/ағылшынша):").trim().toLowerCase();

        if (language == "қазақша") {
            kazakh();
        } else if (language == "орысша") {
            russian();
        } else if (language == "ағылшынша") {
            english();
        } else {
            alert("Кешіріңіз, бұл тіл қолжетімді емес.");
        }
    } else {
        alert("Жақсы, сіз студент емессіз. Кездескенше!");
    }
}


student();
