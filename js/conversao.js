var div = document.getElementById("resp");

function converterTemperatura(){
    let celsius = parseFloat(document.getElementById("celsius").value);

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    let text = `<p>${celsius} °C = ${fahrenheit} °F</p>`;
    text += `<p>${celsius} °C = ${kelvin} °K</p>`;

    div.innerHTML = text;
}

function limpar(){
    document.getElementById("celsius").value = "";
    document.getElementById("celsius").focus();

    div.innerHTML = "";
}




