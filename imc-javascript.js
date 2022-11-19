function calcularImc(imc){
    return (imc);
}

let peso = 65;
let altura = 1.73;
const imc = peso / (altura * altura);

if (imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc >= 18.5 && imc < 24.9){
    console.log('Peso normal');
}else if(imc >= 25 && imc < 29.9){
    console.log('Excesso de peso');
}else if(imc >= 30){
    console.log('Obesidade');
}else if(imc >= 30.1 && imc < 34.9){
    console.log('Obesidade grau |');
}else if(imc >= 35 && imc < 39.9){
    console.log('Obesidade grau ||');
}else if(imc >= 40){
    console.log('Obesidade Mórbida');
}

