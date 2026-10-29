# Plano de Atualização das Capas Oficiais

Para integrar as imagens oficiais sem comprometer a funcionalidade atual:

## 1. Atualização da Configuração (`src/config.ts`)
- Substituir as URLs de placeholders atuais pelas URLs diretas das imagens fornecidas (convertidas para o formato de acesso direto `i.imgur.com/<ID>.png`).
- Manter a estrutura de dados atual.

## 2. Validação Visual e Técnica
- Garantir que todas as capas mantenham o formato 16:9 através do `object-fit: cover` já implementado.
- Verificar se o carregamento das novas imagens não afeta o comportamento do carrossel (`embla-carousel`).
- Testar a responsividade em dispositivos mobile para confirmar que as capas estão legíveis e corretas.

## 3. Verificação Final
- Confirmar que as imagens carregam sem erros.
- Garantir que a navegação e a abertura das aulas continuam funcionando normalmente.
