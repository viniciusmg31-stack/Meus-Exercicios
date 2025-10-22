
    // calcular imc e fazer classificação 
    let nome = prompt("Informe seu nome:");
    let peso = parseFloat(prompt(nome + ", informe seu peso em kg:"));
    let altura = parseFloat(prompt(nome + ", informe sua altura em metros:"));

    let imc = peso / (altura * altura);

    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    alert(nome + ", seu IMC é " + imc.toFixed(2) + " (" + classificacao + ").");

  
