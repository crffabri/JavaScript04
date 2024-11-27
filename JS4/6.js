let ideias = [16, 48, 23, 22, 45, 8, 12];
let maiorIdade = ideias.filter(idade => 18);
maiorIdade.forEach(idade => {
    console.log(`Sua idade é: ${idade}`);
})