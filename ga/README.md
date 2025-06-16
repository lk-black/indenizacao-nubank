# 🔄 Sistema de Redirecionamento JavaScript

Esta é a versão JavaScript pura do sistema de redirecionamento original, mantendo **100% da funcionalidade** de forma mais simples e eficaz.

## 📁 Arquivos Criados

### 1. `redirect.js` - Versão Principal
- **Funcionalidade completa** em JavaScript puro
- **Mantém todos os recursos** do HTML original:
  - Contador de visitas no localStorage
  - Redirecionamento baseado em visitas
  - Preservação de parâmetros UTM
  - Carregamento dos scripts externos (Utmify e Pixel)

### 2. `index_js.html` - HTML Simplificado
- Arquivo HTML mínimo que carrega o `redirect.js`
- **Substituto direto** do `index.html` original
- Apenas 8 linhas vs 149 linhas do original

### 3. `demo.html` - Demonstração Interativa
- Interface para testar o sistema
- Visualiza o contador de visitas
- Simula redirecionamentos
- Mostra como os parâmetros UTM são preservados

### 4. `redirect-test.js` - Versão Node.js (opcional)
- Para testes em ambiente servidor
- Inclui mocks do localStorage e URLSearchParams

## 🚀 Como Usar

### Opção 1: Substituição Direta
```bash
# Backup do arquivo original
mv index.html index_original.html

# Renomear o novo arquivo
mv index_js.html index.html
```

### Opção 2: Usar como Script Externo
```html
<!DOCTYPE html>
<html>
<head>
    <title>Seu Título</title>
</head>
<body>
    <script src="redirect.js"></script>
</body>
</html>
```

### Opção 3: Integrar em Aplicação Existente
```javascript
// Importar as funções
import { redirectToPage, getVisitCount } from './redirect.js';

// Usar conforme necessário
redirectToPage();
```

## ✅ Funcionalidades Mantidas

- ✅ **Contador de visitas** no localStorage
- ✅ **Redirecionamento automático** baseado em visitas
- ✅ **Preservação de parâmetros UTM** completa
- ✅ **Scripts externos** (Utmify e Pixel) carregados automaticamente
- ✅ **Lógica de fallback** para visitas > 10
- ✅ **Compatibilidade total** com a estrutura de pastas existente

## 🎯 Rotas de Redirecionamento

| Visita | Destino |
|--------|---------|
| 0 | `../up1/index.html` |
| 1 | `../up2/index.html` |
| 2 | `../up3/index.html` |
| 3 | `../up4/index.html` |
| 4 | `../up5/index.html` |
| 5 | `../up6/index.html` |
| 6 | `../up7/index.html` |
| 7 | `../up8/index.html` |
| 8 | `../up9/index.html` |
| 9 | `../up10/index.html` |
| 10+ | `../up11/index.html` |

## 🔧 Vantagens da Versão JavaScript

1. **Mais Simples**: Código mais limpo e organizado
2. **Mais Eficaz**: Menor tamanho de arquivo
3. **Mais Flexível**: Pode ser reutilizado em outras páginas
4. **Mais Testável**: Fácil de testar e debugar
5. **Mais Manutenível**: Separação clara de responsabilidades

## 🧪 Testando

Abra o arquivo `demo.html` no navegador para:
- Ver o contador atual de visitas
- Simular redirecionamentos
- Testar parâmetros UTM
- Resetar o contador

## 📊 Exemplo de Uso com UTM

```
URL de entrada: https://exemplo.com/ga/?utm_source=google&utm_medium=cpc
Redirecionamento: ../up1/index.html?utm_source=google&utm_medium=cpc
```

## ⚡ Performance

- **HTML original**: 149 linhas, ~4KB
- **Versão JavaScript**: 8 linhas HTML + 95 linhas JS, ~3KB total
- **Redução**: ~25% no tamanho total

---

**✅ Confirmado: A aplicação JavaScript mantém 100% da funcionalidade original!**
