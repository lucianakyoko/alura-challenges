<p align="center">
  <img src="../.github/logo-alura-geek.png" alt="Logo Alura Geek" >
</p>

---

<p align="center">
  <a href="https://alura-geek-challenge.vercel.app/">Link</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre">Sobre</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-challenge">Challenge</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-login">Login</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sprints">Sprints</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-indo-alem">Indo além</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-preview">Preview</a> 
</p>

--- 

## 📌 Sobre
A empresa **AluraGeek** está precisando trazer mais clientes e aumentar suas vendas, para isso desejam implementar um e-commerce e levar a empresa ao próximo patamar, se tornar mais digital.

---

## 🚀 Challenge 
O site e o e-commerce deve conter os seguintes requisitos:

| DESCRICAO | CHECK |
| --- | --- |
| Uma página inicial que contenha um botão "iniciar sessão" e um buscador de produtos oferecidos pela empresa. | ✔️ |
| Um banner que contenha descontos, promoções, ou informações relevantes do momento | ✔️ |
| Uma galeria com as informações dos produtos como: a imagem, o nome do produto, o preço e um link que leva até a página de descrição do produto. | ✔️ |
| Uma página do produto que contenha a imagem, o nome, a descrição e o preço. | ✔️ |
| Um rodapé com formulário para contato e outras informações relevantes. | ✔️ |
| Menu administrador para eles conseguirem adicionar, editar, buscar ou eliminar produtos da loja. | ✔️ |
| É muito importante que o site seja responsivo para dar aos clientes a facilidade de comprar através de dispositivos mobiles. | ✔️ |
| Seguir fielmente o [layout](https://www.figma.com/file/fR9qvy3gU53s2q5efeMpy9/AluraGeek---Challenge?node-id=0%3A1) desenvolvido pelo designer. | ✔️ |


---

## 🔨 Tecnologias
As ferramentas e tecnologias eram de livre escolha. Eu escolhi desenvolver o projeto com:

<ul>
  <li>React</li>
  <li>Next.js</li>
  <li>NextAuth.js</li>
  <li>Styled-Components</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>Postman</li>
</ul>

---

## 🔐 Login
Para acessar a area protegida do site utilize o e-mail e senha abaixo:

```
E-mail: admin@email.com
Senha: aluraGeeks1234
```

---


## 🏃 Sprints
A cada semana do **Alura Challenges** nos foram disponibilizados um quadro no Trello para gerenciar o desenvolvimento do projeto.

<p align="center">
  ✔️ concluído &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  🔵 em desenvolvimento &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  ⚫ não iniciado 
</p>

| Semana | Sprint | Trello |Status |
| --- | --- | --- | --- |
| 01 | Criando minha loja: interface cliente | [link](https://trello.com/b/YahtquUC/challenge-front-end-semana-1) | ✔️ |
| 02 | Avançando no projeto: produtos e login | [link](https://trello.com/b/DelwGaI3/challenge-front-end-semana-2) | ✔️ |
| 03 | Gerenciando meus produtos: interface administrador/ Login | [link](https://trello.com/b/QDO2UzyY/challenge-front-end-semanas-3-e-4) | ✔️ |
| 04 | Fale conosco: envio de mensagem | [link](https://trello.com/b/QDO2UzyY/challenge-front-end-semanas-3-e-4) | ✔️ |

--- 

## 🚩 Indo alem

Para além do proposto pelo desafio, realizei as seguintes implementações:

  **Página do administrador:**
 - assim que o usuário logar na área administrativa, aparecerá um "toast notification" no topo da página.
 - ao clicar no ícone de edição, aparecerá um popup com os dados do produto a ser editado. O usuário poderá cancelar a ação, ou realizar a alteração que desejar e salvar no banco de dados.
 - ao clicar no ícone de lixeira, aparecerá um popup com imagem, nome e preço do produto. O usuário poderá cancelar a ação, ou confirmar a exclusão do produto no banco de dados.
 - para ambas as ações acima, é mostrado um loader indicando que a ação está sendo processada.
 - No Header da "Página do administrador", contém o número de mensagens não lidas. Ao clicar, é redirecionado para a página de mensagens.

 **Adicionar novo produto:**
  - O usuário poderá adicionar um produto com numa nova categoria. Esta categoria aparecerá na página Home  e terá um link próprio para "ver tudo", onde será direcionado para a página onde mostrará todos os produtos pertencente à categoria.
  - Uma pequena validação é feita no envio do formulário. Um popup com a mensagem de erro aparecerá caso o usuário não preencha todos os campos;
  - Ao preencher o formulário e clicar em "Adicionar produto", um loader aparecerá indicando que o produto está sendo adicionado.

 **Mensagens:**
  - Esta página recebe todas as mensagens recebidas pelo formulario "Fale Conosco", disponivel nos rodapes das páginas.
  - Ao clicar na mensagem, será exibido um popup com a mensagem completa. Nele, o usuário poderá marcar como lida ou deletar a mensagem. 
  - Para mensagens já visualizadas, o usuário poderá marcar como não lida.

--- 

## 🎮 Preview
<p align="center">
  <img src="../.github/AluraGeek.jpg" alt="Preview da página AluraGeek" width="80%"/>
</p>