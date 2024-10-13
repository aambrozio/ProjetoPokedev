
    // OBJETIVO - Quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
    // PASSO 1 - Precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
    // PASSO 2 - Identificar o evento de clique no elemento da listagem
    // PASSO 3 - Remover a classe aberto só de cartão que tá aberto
    // PASSO 4 - Ao clicar em um pokedev pegamos o id dessa pokedev pra saber qual cartão abrir
    // PASSO 5 - Remover a classe ativo que marca o pokdev selecionado na listagem 
    // PASSO 6 -  adicionar a classe ativo no pokedev selecionado na listagem.


    // PASSO 1 - Precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
    const listaSelecaoPokedev = document.querySelectorAll(".pokedev");
  
     // PASSO 2 - Identificar o evento de clique no elemento da listagem
     listaSelecaoPokedev.forEach(pokedev => {
        pokedev.addEventListener("click", () => {
            // PASSO 3 - Remover a classe aberto só de cartão que tá aberto
            const cartaoPokedevAberto = document.querySelector(".aberto");
            cartaoPokedevAberto.classList.remove("aberto");
   
            // PASSO 4 - Ao clicar em um pokedev pegamos o id dessa pokedev pra saber qual cartão abrir
            const idPokedevSelecionado = pokedev.attributes.id.value;
            const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
            const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
            cartaoPokedevParaAbrir.classList.add("aberto");

            // PASSO 5 - Remover a classe ativo que marca o pokdev selecionado na listagem 
            const pokdevAtivoNaListagem = document.querySelector(".ativo");
            pokdevAtivoNaListagem.classList.remove("ativo");

            // PASSO 6 -  adicionar a classe ativo no pokedev selecionado na listagem.
            const idPokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
            idPokedevSelecionadoNaListagem.classList.add("ativo");

        })
    })
    
