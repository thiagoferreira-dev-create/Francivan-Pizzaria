# 🍕 Francivan Pizzaria

![Status](https://img.shields.io/badge/status-%20Finalizado-green)
![HTML](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS](https://img.shields.io/badge/CSS3-Styling-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Interactive-yellow)

Projeto de uma plataforma web para uma pizzaria local, desenvolvido com foco em **experiência do usuário, conversão, pedidos online e presença digital**.

O projeto foi pensado para representar uma solução moderna para pequenos negócios que desejam fortalecer sua presença online e facilitar o processo de pedidos, sem depender obrigatoriamente de grandes marketplaces.

---

## 📋 Sobre o projeto

A **Francivan Pizzaria** é uma pizzaria localizada em Maracanaú - CE.

O projeto consiste em uma experiência web dividida entre uma **landing page institucional** e uma **área interativa de pedidos**, permitindo que o cliente:

* Conheça a pizzaria;
* Consulte informações como localização e horário de funcionamento;
* Visualize avaliações;
* Acesse o cardápio;
* Adicione produtos ao carrinho;
* Controle quantidades;
* Visualize o valor estimado do pedido;
* Finalize o pedido através do WhatsApp.

A proposta é criar uma experiência visual moderna e profissional, inspirada em interfaces de produtos digitais e plataformas de delivery.

---

## 🚀 Demonstração

O projeto está disponível online e pode ser acessado através do link abaixo:

🌐 **[Acessar projeto online](https://francivan-pizzaria.vercel.app/)**

---

## 📸 Preview

<img width="1907" height="952" alt="image" src="https://github.com/user-attachments/assets/a7329993-9fc6-4891-9686-0c9f775cbc18" />


## ✨ Funcionalidades

### 🏠 Landing Page

A página inicial foi desenvolvida com foco em apresentação, credibilidade e conversão.

Principais seções:

* Hero section com chamada para ação;
* Apresentação da pizzaria;
* Destaques do negócio;
* Avaliações e prova social;
* Horários de funcionamento;
* Localização;
* Mapa integrado;
* Links para contato;
* Instagram;
* Botões de ação para pedido e telefone.

---

### 🍕 Cardápio Interativo

A página **Faça seu pedido** concentra a experiência de compra.

Funcionalidades:

* Visualização dos produtos;
* Organização por categorias;
* Pizzas com diferentes tamanhos;
* Sanduíches;
* Preços específicos para cada produto;
* Adição de produtos ao carrinho.

Categorias atuais:

```text
🍕 Pizzas
🥪 Sanduíches
```

---

### 🛒 Carrinho de Compras

O sistema de carrinho foi desenvolvido utilizando **JavaScript puro**.

Funcionalidades implementadas:

* Adicionar produtos;
* Aumentar quantidade;
* Diminuir quantidade;
* Remover produtos;
* Atualização automática do total;
* Contagem total de itens;
* Persistência do carrinho com `localStorage`;
* Layout responsivo;
* Carrinho lateral no desktop;
* Carrinho em formato drawer no mobile.

---

### 📱 Finalização via WhatsApp

Ao finalizar o pedido, o sistema gera automaticamente uma mensagem contendo os produtos adicionados ao carrinho.

Exemplo:

```text
Olá Francivan! Quero fazer este pedido:

1x Pizza Calabresa (Grande) — R$ 35,00
2x X-Burger — R$ 30,00

Total estimado: R$ 65,00

Pode confirmar disponibilidade, valor final e entrega?
```

O cliente é então redirecionado para o WhatsApp da pizzaria.

---

## 🧭 Fluxo da aplicação

```text
Home
  ↓
Landing Page
  ↓
Faça seu pedido
  ↓
Cardápio
  ↓
Adicionar produtos
  ↓
Carrinho
  ↓
WhatsApp
```

---

## 🛠️ Tecnologias utilizadas

O projeto foi desenvolvido sem frameworks, utilizando tecnologias fundamentais do desenvolvimento web.

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Google Fonts
* WhatsApp API

---

## 📁 Estrutura do projeto

```text
francivan-pizzaria/
│
├── index.html
├── pedido.html
│
├── css/
│   ├── styles.css
│   └── pedido.css
│
├── js/
│   ├── main.js
│   └── order.js
│
└── README.md
```

### Organização

**`index.html`**

Responsável pela página inicial e apresentação da pizzaria.

**`pedido.html`**

Página dedicada à experiência de pedido, contendo:

* Cardápio;
* Categorias;
* Produtos;
* Carrinho;
* Finalização.

**`styles.css`**

Contém os estilos globais e componentes utilizados na landing page.

**`pedido.css`**

Contém os estilos específicos da experiência de pedidos e carrinho.

**`main.js`**

Responsável pelas interações da página inicial.

**`order.js`**

Responsável por toda a lógica da área de pedidos:

* Produtos;
* Filtros;
* Carrinho;
* Quantidades;
* Total;
* LocalStorage;
* Integração com WhatsApp.

---

## 💻 Destaque técnico

A estrutura dos produtos é baseada em objetos JavaScript, permitindo que o cardápio seja renderizado dinamicamente.

Exemplo conceitual:

```javascript
const products = [
  {
    id: 1,
    category: "pizzas",
    name: "Calabresa",
    price: 35.00,
    description: "Pizza de calabresa",
  }
];
```

Essa abordagem facilita futuras evoluções, como:

* Integração com API;
* Banco de dados;
* Painel administrativo;
* Controle de estoque;
* Atualização dinâmica do cardápio.

---

## 📱 Responsividade

O projeto foi desenvolvido seguindo uma abordagem responsiva.

A interface se adapta para:

* Desktop;
* Tablet;
* Smartphones.

O carrinho também possui comportamentos diferentes conforme o tamanho da tela:

* **Desktop:** carrinho lateral;
* **Mobile:** carrinho em formato drawer.

---

## ⚡ Performance

O projeto utiliza uma arquitetura simples e leve.

Algumas decisões tomadas:

* JavaScript puro;
* Sem dependência de frameworks;
* Estrutura HTML semântica;
* CSS organizado por responsabilidade;
* Uso de `localStorage` para persistência local;
* Poucas dependências externas.

O objetivo é manter uma experiência rápida e com baixo custo de carregamento.

---

## 🎨 Decisões de UI/UX

A experiência foi projetada com foco em reduzir a quantidade de passos entre o interesse do usuário e a realização do pedido.

### Estratégia

```text
Gerar interesse
     ↓
Construir confiança
     ↓
Apresentar produtos
     ↓
Facilitar a escolha
     ↓
Organizar o pedido
     ↓
Finalizar pelo WhatsApp
```

A Home possui uma função mais institucional e comercial.

A página de pedidos possui uma função mais transacional.

Essa separação evita sobrecarregar a landing page e permite que cada página tenha um objetivo claro.

---


## 🎯 Objetivo do projeto

Este projeto foi desenvolvido como parte da construção do meu portfólio de desenvolvimento front-end.

O principal objetivo foi praticar conceitos como:

* Estruturação de páginas;
* Componentização conceitual;
* Design responsivo;
* Manipulação do DOM;
* Gerenciamento de estado com JavaScript;
* Persistência com LocalStorage;
* Lógica de carrinho de compras;
* Experiência de usuário;
* Arquitetura de projetos front-end.

---

## 👨‍💻 Autor

Desenvolvido por **Thiago Ferreira**.

Projeto criado com foco em evolução técnica, desenvolvimento de portfólio e aplicação prática de conceitos de desenvolvimento web.

---

⭐ Se você gostou do projeto, considere deixar uma estrela no repositório!
