const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function verDetalhes(pokemonId){
    window.location.href = `details.html?id=${pokemonId}` 
}


function loadPokemonItens(offset, limit){

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => ` 
        <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
            <button id="detail_btn" onclick="botaoclickado(${pokemon.number})">Detahes</button>
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                <ul id="resultContainer"></ul>            
                </ol>
            <img src="${pokemon.photo}"
                 alt="${pokemon.name}">
        </div>
    </li>

            `).join('')
        pokemonList.innerHTML += newHTML
    })
}

loadPokemonItens(offset, limit)
        
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    
    const qtdRecordNexPage = offset + limit

    if (qtdRecordNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadmoreButton.parentElement.removeChild(loadmoreButton)
    }
    else{
        loadPokemonItens(offset, limit)
    }
    
})