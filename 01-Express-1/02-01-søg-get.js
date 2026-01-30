async function beregn() {
  const x = document.getElementById("x").value;
  const y = document.getElementById("y").value;

  // Fetch GET med query string
  const res = await fetch(`/mult?x=${x}&y=${y}`);

  if (res.ok) {
    const tal = parseFloat(await res.text());
    document.getElementById("resultat").textContent = tal;
  } else {
    document.getElementById("resultat").textContent = "Fejl i input!";
  }
}
