/*
Base de Dados 
- Dias de jogos separados por json com data, dia da semana e jogos dentro de uma array por dia
- Os jogos estão em uma array agrupadas por array contendo time 1, time 2 e horário do jogo
*/

let gamesByDay = [
  {
    date: '20/11',
    weekday: 'domingo',
    games: [['catar', 'equador', '13:00']]
  },
  {
    date: '21/11',
    weekday: 'segunda',
    games: [
      ['inglaterra', 'ira', '10:00'],
      ['senegal', 'holanda', '13:00'],
      ['estadosUnidos', 'gales', '13:00']
    ]
  },
  {
    date: '22/11',
    weekday: 'terça',
    games: [
      ['argentina', 'arabiaSaudita', '07:00'],
      ['dinamarca', 'tunisia', '10:00'],
      ['mexico', 'polonia', '13:00'],
      ['franca', 'australia', '16:00']
    ]
  }
]

let delay = -0.5
// Função para criar o HTML de games
function createGame(game) {
  let team1 = game[0]
  let team2 = game[1]
  let time = game[2]

  return `
    <li>
      <img
        src="./assets/country-icons/icon-${team1}.svg"
        alt="${team1}"
      />
      <strong>${time}</strong>
      <img
        src="./assets/country-icons/icon-${team2}.svg"
        alt="${team2}"
      />
    </li>
  `
}

// Função para criar o card com os jogos do dia
function createCard(gamesDay) {
  let date = gamesDay.date
  let weekday = gamesDay.weekday
  let games = gamesDay.games

  let stringGames = ''
  delay += 0.5
  for (let pos in games) {
    stringGames += createGame(games[pos])
  }

  return `
    <div class="card" style="animation-delay: ${delay}s" >
      <h2>${date} <span>${weekday}</span></h2>
      <ul>
        ${stringGames}
      </ul>
    </div>
  `
}

function createAllCards(allGames) {
  let stringGames = '<div class="cards">'

  for (let pos in allGames) {
    stringGames += `
        ${createCard(allGames[pos])}
    `
  }
  stringGames += `</div>`
  return stringGames
}

//Retorno para criação de App
document.querySelector('#App').innerHTML = `
  <header>
    <img src="./assets/logo.svg" alt="Logo NLW #10 - Copa" />
    <h1>Calendário</h1>
  </header>
  <main>
    ${createAllCards(gamesByDay)}
  </main>
`
