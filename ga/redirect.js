/**
 * Sistema de Redirecionamento por Visitas
 * Mantém a funcionalidade original do index.html em JavaScript puro
 */

// Configuração do pixel ID
window.pixelId = "682f4a0b17362a4244bf5d3c";

// Função para carregar scripts externos
function loadExternalScripts() {
  // Script Utmify
  const utmifyScript = document.createElement("script");
  utmifyScript.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
  utmifyScript.setAttribute("data-utmify-prevent-xcod-sck", "");
  utmifyScript.setAttribute("data-utmify-prevent-subids", "");
  utmifyScript.async = true;
  utmifyScript.defer = true;
  document.head.appendChild(utmifyScript);

  // Script Pixel
  const pixelScript = document.createElement("script");
  pixelScript.setAttribute("async", "");
  pixelScript.setAttribute("defer", "");
  pixelScript.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  document.head.appendChild(pixelScript);
}

// Função para obter o número de vezes que o usuário visitou a página
function getVisitCount() {
  // Obtém o valor armazenado no local storage ou retorna 0 se não existir
  return parseInt(localStorage.getItem('visitCount')) || 0;
}

// Função para obter parâmetros UTM da URL atual
function getUTMParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams = [];
  
  // Lista de parâmetros UTM comuns
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  
  // Verifica cada parâmetro UTM
  utmKeys.forEach(key => {
    if (urlParams.has(key)) {
      utmParams.push(`${key}=${encodeURIComponent(urlParams.get(key))}`);
    }
  });
  
  // Verifica se há outros parâmetros que começam com 'utm_'
  for (const [key, value] of urlParams.entries()) {
    if (key.startsWith('utm_') && !utmKeys.includes(key)) {
      utmParams.push(`${key}=${encodeURIComponent(value)}`);
    }
  }
  
  // Retorna string de parâmetros UTM ou string vazia
  return utmParams.length > 0 ? '?' + utmParams.join('&') : '';
}

// Função para redirecionar com base no número de visitas
function redirectToPage() {
  const visitCount = getVisitCount();
  let nextPage;

  // Determina a página de redirecionamento com base no número de visitas
  switch (visitCount) {
    case 0: nextPage = '../up1/index.html'; break;
    case 1: nextPage = '../up2/index.html'; break;
    case 2: nextPage = '../up3/index.html'; break;
    case 3: nextPage = '../up4/index.html'; break;
    case 4: nextPage = '../up5/index.html'; break;
    case 5: nextPage = '../up6/index.html'; break;
    case 6: nextPage = '../up7/index.html'; break;
    case 7: nextPage = '../up8/index.html'; break;
    case 8: nextPage = '../up9/index.html'; break;
    case 9: nextPage = '../up10/index.html'; break;
    case 10: nextPage = '../up11/index.html'; break;
    default: nextPage = '../up11/index.html'; break; // Fallback para visitas > 10
  }
  
  // Incrementa o número de visitas
  localStorage.setItem('visitCount', visitCount + 1);
  
  // Obtém os parâmetros UTM
  const utmParams = getUTMParameters();
  
  // Redireciona para a próxima página com os parâmetros UTM
  window.location.href = nextPage + utmParams;
}

// Função principal de inicialização
function init() {
  // Carrega os scripts externos
  loadExternalScripts();
  
  // Chama a função de redirecionamento
  redirectToPage();
}

// Executa quando o DOM estiver carregado ou imediatamente se já estiver carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Exporta as funções para uso externo se necessário
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getVisitCount,
    getUTMParameters,
    redirectToPage,
    init
  };
}
