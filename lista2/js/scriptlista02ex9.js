let mes = "fevereiro".toLowerCase();

switch(mes) {
    case "janeiro": case "março": case "maio": case "julho":
    case "agosto": case "outubro": case "dezembro":
        console.log("31 dias");
        break;

    case "abril": case "junho": case "setembro": case "novembro":
        console.log("30 dias");
        break;

    case "fevereiro":
        console.log("28 ou 29 dias");
        break;

    default:
        console.log("Mês inválido");
}