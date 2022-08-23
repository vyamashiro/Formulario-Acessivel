## Formulário Acessível
Formulário modelo para treino de técnicas de acessibilidades, tais como:
- Atalhos de navegação para seções específicas;
- WAI-ARIA para reconhecimento de leitores de tela;
- Adição de tabIndex="0" nos itens da navbar para que os itens sejam acessíveis através da tecla TAB.
- Aumento/diminuição do tamanho da fonte;
- Aumento/diminuição de contraste (em andamento).

### Como usar a aplicação ?
- Acesse o terminal, instale as dependências com o comando yarn e rode a aplicação com yarn start;
- Utilize um leitor de tela (ex.: NVDA) e use a tecla TAB para navegar entre os campos do formulário.

### Atalhos para seções do formulário de acordo com o browser.
Navegador / Sistema Operacional | Windows | Linux | Mac
------------------- | ------- | ----- | ----- 
Chrome              | Alt + tecla | Alt + tecla | Control + Alt + tecla
Firefox (versão 57+)| Alt + Shift + tecla | Alt + Shift + tecla | Control + Option + tecla ou Control + Alt + tecla
Safari              | Alt + tecla | N/A | Control + Alt + tecla
Edge                | Alt + tecla | N/A | N/A
Internet Explorer   | Alt + tecla | N/A | N/A
Opera (versão 15+)  | Alt + tecla | Alt + tecla | Control + Alt + tecla

### Leitores de tela indicado
- NVDA
- JAWS
- Orca para Linux
- NVDA para Windows
- VoiceOver para MacOS

### Plugins/Widgets para Libras
- vLibras: widget gratuito do governo federal para de um tradutor de libras digital.
https://vlibras.gov.br/doc/widget/installation/webpageintegration.html
- Hand Talk: plugin de libras da empresa Hand Talk.
https://docs.handtalk.me/br/5/tradutor-de-sites#comecando-tradutor-de-sites

### Principais dependências
- React
- Styled-Components
- ESLint

![image info](./print-screen.PNG)

<!-- 
Próximos passos
- Verificar se o yarn add eslint-plugin-jsx-a11y está funcionado
- Implementar contraste preto/branco
- Ajustar formulário para controlados
- Adicionar no rodapé uma tag address com um endereço fictício
- Ajustar responsividade
- Versão 2
- Aviso de envio do formulário
- Adicionar no rodapé um trecho de mídia social
- Tranformar a página em uma página de estudos de acessibilidade com:
-- Imagem acessível: usando as tags figure, img e figcaption
-- Vídeo acessível com legenda
-- Áudio acessível com texto
-- Leitor de libras (vLibras)
- Versão 3
-- Página de explicação sobre acessibilidade e a importância da semântica.
- Implementar busca por áudio (vide API do Google)
- Transformar a barra de acessibilidade em uma biblioteca react ou javascript ?
-->
