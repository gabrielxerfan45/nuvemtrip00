document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const origem = document.getElementById('origem').value;
  const destino = document.getElementById('destino').value;
  const data = document.getElementById('data').value;
  const results = document.getElementById('results');

  // Simulação de resultados (você pode integrar com APIs reais no futuro)
  results.innerHTML = `
    <h2 style="color:#90caf9">Resultados encontrados</h2>
    <ul style="list-style:none;padding:0;">
      <li>
        <strong>Viação Azul</strong><br>
        Preço: <span style="color:#222;">R$ 120,00</span><br>
        Horário: 10:00
      </li>
      <li style="margin-top:1rem;">
        <strong>Viação Branco</strong><br>
        Preço: <span style="color:#222;">R$ 135,00</span><br>
        Horário: 13:30
      </li>
    </ul>
    <hr>
    <span style="font-size:0.95rem;color:#90caf9;">Origem: <b>${origem}</b> &rarr; Destino: <b>${destino}</b> em <b>${data}</b></span>
    <br><br>
    <span style="color:#888;font-size:0.9rem;">(Em breve: resultados reais de passagem!)</span>
  `;

  showToast("Busca realizada com sucesso!");
});

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}
