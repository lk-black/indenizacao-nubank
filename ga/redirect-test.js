#!/usr/bin/env node

/**
 * Versão Node.js do sistema de redirecionamento
 * Para testar a lógica sem navegador
 */

// Mock do localStorage para Node.js
const localStorage = {
  data: {},
  getItem: function(key) {
    return this.data[key] || null;
  },
  setItem: function(key, value) {
    this.data[key] = value;
  }
};

// Mock do URLSearchParams para Node.js
class MockURLSearchParams {
  constructor(search = '') {
    this.params = new Map();
    if (search.startsWith('?')) search = search.slice(1);
    if (search) {
      search.split('&').forEach(param => {
        const [key, value] = param.split('=');
        if (key) this.params.set(decodeURIComponent(key), decodeURIComponent(value || ''));
      });
    }
  }
  
  has(key) { return this.params.has(key); }
  get(key) { return this.params.get(key); }
  entries() { return this.params.entries(); }
}

// Função para obter o número de vezes que o usuário visitou a página
function getVisitCount() {
  return parseInt(localStorage.getItem('visitCount')) || 0;
}

// Função para obter parâmetros UTM da URL atual
function getUTMParameters(searchString = '') {
  const urlParams = new MockURLSearchParams(searchString);
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

// Função para determinar a próxima página baseada no número de visitas
function getNextPage(visitCount) {
  switch (visitCount) {
    case 0: return '../up1/index.html';
    case 1: return '../up2/index.html';
    case 2: return '../up3/index.html';
    case 3: return '../up4/index.html';
    case 4: return '../up5/index.html';
    case 5: return '../up6/index.html';
    case 6: return '../up7/index.html';
    case 7: return '../up8/index.html';
    case 8: return '../up9/index.html';
    case 9: return '../up10/index.html';
    case 10: return '../up11/index.html';
    default: return '../up11/index.html'; // Fallback para visitas > 10
  }
}

// Função principal de redirecionamento (versão de teste)
function simulateRedirect(currentSearch = '') {
  const visitCount = getVisitCount();
  const nextPage = getNextPage(visitCount);
  
  console.log(`Visita número: ${visitCount}`);
  console.log(`Próxima página: ${nextPage}`);
  
  // Incrementa o número de visitas
  localStorage.setItem('visitCount', visitCount + 1);
  
  // Obtém os parâmetros UTM
  const utmParams = getUTMParameters(currentSearch);
  
  const finalUrl = nextPage + utmParams;
  console.log(`URL final: ${finalUrl}`);
  
  return {
    visitCount,
    nextPage,
    utmParams,
    finalUrl
  };
}

// Função para resetar o contador (útil para testes)
function resetVisitCount() {
  localStorage.setItem('visitCount', '0');
  console.log('Contador de visitas resetado');
}

// Se executado diretamente no Node.js
if (require.main === module) {
  console.log('=== Teste do Sistema de Redirecionamento ===\n');
  
  // Exemplo com parâmetros UTM
  console.log('Simulando visitas com UTM parameters...');
  const utmExample = '?utm_source=google&utm_medium=cpc&utm_campaign=test';
  
  for (let i = 0; i < 5; i++) {
    console.log(`\n--- Simulação ${i + 1} ---`);
    simulateRedirect(utmExample);
  }
  
  console.log('\n=== Reset do contador ===');
  resetVisitCount();
}

module.exports = {
  getVisitCount,
  getUTMParameters,
  getNextPage,
  simulateRedirect,
  resetVisitCount
};
