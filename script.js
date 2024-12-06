let currentVisibleDiv = null;  // Variável para rastrear qual div está visível

function toggleDiv(id) {
    const contentDiv = document.getElementById(id);

    // Se a div clicada for a mesma que já está visível, não fazer nada
    if (currentVisibleDiv === contentDiv) {
        return;
    }

    // Ocultar a div atualmente visível
    if (currentVisibleDiv) {
        currentVisibleDiv.style.display = "none";
    }

    // Mostrar a nova div clicada
    contentDiv.style.display = "block";

    // Atualizar a variável para referir a div visível
    currentVisibleDiv = contentDiv;
}