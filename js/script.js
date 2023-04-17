const botao = document.getElementById('btn-1');

//Recuperar um item especifico com 
//a função querySelector(parâmetro)
// const seletor = document.querySelector("li[value='item-15]")
// console.log(seletor)

//Recuperar uma lista de elementos com a função
//querySelectorAll
const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{
    if (item.textContent == 'Item-15') {
    let meuitem = item;
    console.log(`Itens selecionados : ${item.textContent}`);
    meuItem.textContent = 'Tá feito!'
}
})