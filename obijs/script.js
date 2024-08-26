// Função para calcular a diferença de pressão
function calcularDiferencaDePressao(pressaoDesejada, pressaoLida) {
   
    if (pressaoDesejada < 1 || pressaoDesejada > 40 || pressaoLida < 1 || pressaoLida > 40) {
        console.log("Valores fora das restrições permitidas.");
        return;
    }
    

    const diferenca = pressaoDesejada - pressaoLida;
    
    console.log("Diferença entre a pressão desejada e a pressão lida: " + diferenca);
}


const N = 30;  
const M = 25; 


calcularDiferencaDePressao(N, M);