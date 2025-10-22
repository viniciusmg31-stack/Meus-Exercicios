function classificarNumero(numero) {
  if (numero > 0) {
    console.log(`O número ${numero} é positivo.`);
  } else if (numero < 0) {
    console.log(`O número ${numero} é negativo.`);
  } else {
    console.log("O número é zero.");
  }
}

classificarNumero(6); 
classificarNumero(-2);
classificarNumero(0);     

