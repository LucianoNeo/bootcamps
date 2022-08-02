# CASA VERDE 
Se trata de um projeto idealizado para o desafio #7daysOfCode de #REACTJS, que consiste em uma landing-page de uma loja de plantas, onde pode-se se inscrever numa newsletter e realizar compra dos itens disponíveis na loja.<br>

[day7.webm](https://user-images.githubusercontent.com/16579699/182494907-45cf6499-8064-44ac-be31-66e3d961e592.webm)

Projeto realizado a partir do design fornecido pela ALURA no figma:<br>
https://www.figma.com/file/0yOQR6fGtbdrmqeStiO0jf/7Days-React?node-id=1%3A2
<br>

## Detalhes técnicos:

- Desenvolvido com NextJS para poder utilizar os endpoints de backend, que foram necessários para enviar o email de confirmação de inscrição da Newsletter(utilizando a API do TWILLIO SENDGRID) e para realizar a consulta dos produtos que estão cadastrados na API.
- Para estilização foi utilizado styled-components.
- Seção de produtos possui ordenação por nome e preço além de um filtro de preço mínimo e máximo.
- Os produtos são filtrados do backend por disponíveis e indisponíveis, ambos são mostrados com cards diferentes para cada tipo.
- Adicionado responsividade ao final do projeto.

## Deploy na Vercel:
https://casaverdebyneo.vercel.app/



