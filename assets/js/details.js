function botaoclickado(x) {
    console.log(x);
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    
    let detalhes = document.getElementById('detalhes');
  
    function funcDetails(statsList) {
        let resultHTML = '<ol>';
  
        for (let i = 0; i < statsList.length; i++) {
            const stat = statsList[i];
            resultHTML += `<li>${stat.stat.name}: ${stat.base_stat}</li>`;
        }
  
        resultHTML += '</ol>';
        return resultHTML;
    }
  
    fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.stats)
        .then((statsList) => {
            let item = funcDetails(statsList);
            detalhes.innerHTML = item;
        })
        .catch((error) => console.log(error));
  };