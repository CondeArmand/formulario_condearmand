function formatarCep(input) {
    let cep = input.value.replace(/\D/g, '');
    if (cep.length >= 5) {
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    input.value = cep;
}