let produto = "Smartphone"
let preco = 1570.00
let metodoPagamento = "A vista no Debito"

if (metodoPagamento === "A vista no Debito") {
    let desconto = preco * 10 / 100
    let precoFinal = preco - desconto
    console.log("O preço final do " + produto + " é: R$ " + precoFinal.toFixed(2))
}
else if (metodoPagamento === "A vista no Dinheiro" || metodoPagamento === "A vista no Pix") {
    let desconto = preco * 15 / 100
    let precoFinal = preco - desconto
    console.log("O preço final do " + produto + " é: R$ " + precoFinal.toFixed(2))
}
else if (metodoPagamento === "Em até 2x no Cartão") {
    console.log("O preço final do " + produto + " é: R$ " + preco.toFixed(2))
}
else if (metodoPagamento === "Acima de 2x no Cartão") {
    let juros = preco * 10 / 100
    let precoFinal = preco + juros
    console.log("O preço final do " + produto + " é: R$ " + precoFinal.toFixed(2))
}

