# Plano de Correção UI/UX - Área de Membros Dona Célia

Para atingir a experiência premium solicitada, o plano de execução seguirá estas etapas, garantindo que não recriemos o projeto do zero:

## 1. Ajuste de Navegação e Arquitetura
- **Remoção da aba "Aulas"**: Atualizar `Layout.tsx` para exibir apenas as 4 abas solicitadas (Início, Continuar, Conteúdos, Ajustes).
- **Unificação na Home**: Mover a lógica de listagem de módulos da antiga página `/lessons` para a página inicial (`DashboardPage.tsx`).
- **Limpeza de Rotas**: Atualizar `App.tsx` para refletir a nova navegação, garantindo que o acesso direto aos módulos continue funcional.

## 2. Reconstrução da Página Início (Home)
- **Seção A (Boas-vindas)**: Implementar saudação personalizada, texto de apoio e avatar no topo.
- **Seção B (Continuar)**: Card horizontal compacto integrado ao progresso real, exibindo a próxima aula (ou estado vazio).
- **Seção C (Módulos)**: Implementação do carrossel horizontal de alta fidelidade:
  - Uso de `scroll-snap` para deslize preciso.
  - Cards com 85% de largura, exibindo parcialmente o próximo item.
  - Capas 16:9 utilizando placeholders minimalistas (ícones em vinho).
- **Seção D (Progresso)**: Barra de progresso animada e textual abaixo do carrossel.
- **Seção E (Material de Apoio)**: Card estilizado para o "Checklist da Primeira Fantasia".

## 3. Melhoria Visual (Identidade & Placeholders)
- **Placeholders de Capa**: Criar uma função de placeholder baseada em SVGs minimalistas (ícones de costura em vinho sobre fundo rosa claro) para substituir todas as imagens aleatórias atuais.
- **Ajustes de UI**: Refinamento de espaçamentos (sistema de 8px), tipografia (moderna e legível) e sombras suaves para elevar a percepção de valor.

## 4. Refinamento de Funcionalidades
- **Navegação Direta**: Ajustar o roteamento para que o clique no card do módulo abra o player da aula correspondente sem páginas intermediárias.
- **Player de Vídeo**: Garantir que o player (16:9) seja o foco da página individual de aula, com controles de progresso e navegação clara (Voltar, Próxima/Anterior).

---
*Este plano foca na melhoria da estrutura existente, garantindo a performance, persistência de dados e a identidade visual da marca Dona Célia.*
