
async function loadMatches() {
  const response = await fetch('matches.json');
  const matches = await response.json();
  const container = document.getElementById('matches-container');
  container.innerHTML = "";

  matches.forEach(match => {
    const div = document.createElement('div');
    div.className = 'match';
    div.innerHTML = `
      <h2>${match.home_team} - ${match.away_team}</h2>
      <p>Skor: ${match.score} | Dakika: ${match.minute}'</p>
      <p>Şut: ${match.shots} | Korner: ${match.corners}</p>
      <div class="prediction">Tefo Tahmini: ${match.prediction}</div>
    `;
    container.appendChild(div);
  });
}

loadMatches();
setInterval(loadMatches, 30000);
