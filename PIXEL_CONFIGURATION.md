# Configuração do Facebook Pixel - Correção de Discrepâncias

## Problema Identificado
Conversões aparecem no Gerenciador de Anúncios do Facebook, mas não na Hotmart, indicando que eventos estão sendo disparados incorretamente.

## Eventos Configurados (CORRETOS)

### ✅ PageView
- **Onde:** `index.html` (linha 20)
- **Quando:** Carregamento inicial da página
- **Status:** ✅ Correto - disparado apenas uma vez

### ✅ InitiateCheckout
- **Onde:** `App.tsx` - função `scrollToCheckout()` (linha 36)
- **Quando:** Usuário clica em qualquer botão "QUERO BOLSA" ou "QUERO MINHA VAGA AGORA"
- **Status:** ✅ Correto - indica apenas que o usuário INICIOU o checkout
- **IMPORTANTE:** Isso NÃO significa compra - apenas intenção

### ✅ ViewContent
- **Onde:** `App.tsx` - componente `CheckoutSection` (linha 707)
- **Quando:** Usuário visualiza 50% da seção de checkout
- **Status:** ✅ Correto - indica apenas visualização do checkout

## Eventos NÃO Configurados (CORRETO)

### ❌ Purchase (Compra)
- **Status:** ✅ NÃO está sendo disparado pelo nosso código
- **Onde deve ser disparado:** Pela Hotmart após confirmação de pagamento
- **Ação necessária:** Configurar na Hotmart para disparar após pagamento confirmado

### ❌ CompleteRegistration
- **Status:** ✅ NÃO está sendo disparado pelo nosso código
- **Onde deve ser disparado:** Pela Hotmart após conclusão do cadastro/pagamento

## Correções Implementadas

1. **Removido PageView duplicado** do `index.tsx`
   - Antes: PageView era disparado no HTML E no React (duplicado)
   - Agora: Apenas no HTML, React apenas como fallback sem disparar PageView

2. **Adicionados comentários explicativos** em todos os eventos
   - Deixa claro que InitiateCheckout NÃO é uma compra
   - Deixa claro que ViewContent NÃO é uma compra

3. **Melhorada a lógica do PixelLoader**
   - Verifica se o pixel já está carregado antes de inicializar
   - Evita duplicação de inicialização

## Como Configurar a Hotmart para Disparar Purchase

1. Acesse o painel da Hotmart
2. Vá em Configurações > Integrações > Facebook Pixel
3. Configure para disparar o evento `Purchase` apenas quando:
   - Pagamento for confirmado
   - Status da compra for "Aprovado"
   - NÃO disparar em "Aguardando pagamento" ou "Cancelado"

## Verificação

Para verificar se está correto:
1. Use a extensão "Facebook Pixel Helper" do Chrome
2. Navegue pela página
3. Você deve ver apenas:
   - ✅ PageView (ao carregar)
   - ✅ InitiateCheckout (ao clicar no botão)
   - ✅ ViewContent (ao ver o checkout)
   - ❌ NÃO deve ver Purchase ou CompleteRegistration

## Resumo

- ✅ PageView: 1 vez (no HTML)
- ✅ InitiateCheckout: Ao clicar no botão (não é compra)
- ✅ ViewContent: Ao ver checkout (não é compra)
- ❌ Purchase: Deve ser disparado pela Hotmart (não pelo nosso código)
- ❌ CompleteRegistration: Deve ser disparado pela Hotmart (não pelo nosso código)


