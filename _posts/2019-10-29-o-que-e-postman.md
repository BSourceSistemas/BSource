---
layout: post
comments: true
title: "O que é Postman?"
date: 2019-10-29 12:05:58
author: danielbueno
image: '/assets/img/POSTMAN.png'
description:
main-class: tecnologia
color: "#3c1de7"
tags: Development
categories: Tecnologia
twitter_text:
introduction: Uma poderosa ferramenta de auxílio, para desenvolvedores web.
---

O Postman é um aplicativo com a função de testar e desenvolver APIs em uma interface bastante simples e intuitiva. Ele nos permite simular requisições HTTP de forma rápida, armazenando-as para que possamos usá-las posteriormente.

Além disso, para cada requisição feita, o Postman analisa as respostas enviadas pela API e as exibe visualmente de forma muito agradável e fácil de entender, o que reduz consideravelmente o tempo necessário para o desenvolvimento e testes de sua aplicação

Sem contar que é possível passar as configurações de testes de uma API para a sua equipe toda. O aplicativo já é utilizado por mais de 5 milhões de desenvolvedores(as) e mais de 100.000 empresas para acessar 130.000.000 de APIs todos os meses. Ele possui alguns planos pagos, mas neste artigo focaremos no plano gratuito.

## Instalação

• Preciso ter o Chrome para conseguir instalar?

Não atualmente o POSTMAN conta com instalações nativas para Mac, Windows e Linux, basta realizar o download diretamente no <a href="https://www.getpostman.com/" target="_blank">site</a> do Postman

A instalação pode ser feita de duas formas:

• instalação nativa no seu computador

• Extensão do Google Chrome

• Qual a vantagem de instalar a versão nativa do Postman ao invés de seu complemento do Chrome?

Ele conta com recursos que não são disponíveis pelo complemento do Chrome:

• **Cookies** – permitem que você trabalhe com cookies diretamente;

• **Built-in proxy** – vêm com um proxy interno que você pode usar para capturar o tráfego da rede;

• **Menu bar** – uma barra de menu mais completa, onde é possível criar coleções, alterar para o histórico de requisições entre outras funcionalidades;

• **Restricted headers** – é possível enviar nos headers da requisição Origin e User-Agent personalizados;

• **POSTMAN Console** – tem um console embutido, que permite exibir os detalhes do pedido de rede para chamadas de API.

Algumas destas vantagens como o **POSTMAN** console é disponível para o aplicativo/extensão do chrome porém para isso é necessário a instalação de um outro plugin, e ainda realizar configurações para liberação do console para aplicativos/complementos do chrome.

Após a instalação do **POSTMAN** a tela inicial/usabilidade do **POSTMAN** será mostrada como na figura abaixo:

*Nesse caso troquei o layout padrão e estou usando o Dark theme*
<img src="https://i.ibb.co/1XBzNcG/POSTMAN.png" alt="POSTMAN" border="0">

O processo de simular requisições é muito simples. Basta escolher o tipo de requisição (GET, POST, PUT, PATCH, etc), como mostra a figura a seguir:

<img src="https://i.ibb.co/wgTzNYL/Postman-Requisicao.png" alt="Postman-Requisicao" border="0">

E depois informar a URL e clicar no botão **Send**.

<img src="https://i.ibb.co/x23knSN/Postmansend.png" alt="Postmansend" border="0">

Se a requisição tiver parâmetros é possível informar na URL, ou clicar com no botão Params e informar os valores nos campos key e value, por exemplo **url?param1=valor1&param2=valor2**.

**Guia das funções**

• **Authorization**: onde será possível informar o tipo de autenticação necessária e definir métodos.

• **Headers**: onde é passado os Headers (cabeçalhos) da requisição, principalmente usado para passar o **token** de autenticação. Basta somente informar os campos **key** e **value**.

• **Body**: onde é colocado o Body (corpo) da requisição. Essa aba somente é habilitada quando é usado tipos de requisições que permitem o envio de corpo, como por exemplo: o POST. O editor suporta os mais comuns formatos de encoding e a opção raw envia qualquer tipo de conteúdo, podendo escolher manualmente o content-type, como por exemplo o JSON, que serve para enviar objetos do tipo JSON.

<img src="https://i.ibb.co/JxnW0CR/Postman-Body.png" alt="Postman-Body" border="0">

perceba que se digitar algo que não seja formato com **JSON** ele aponta que há erro de sintaxe.

<img src="https://i.ibb.co/T4styp4/Postman-erro.png" alt="Postman-erro" border="0">

• **Pre-request Script:** são os scripts JavaScript para fins de teste que serão executados antes da requisição.

• **Tests**: onde é possível realizar validações e testes na request do valor retornado.

Para iniciarmos com o **POSTMAN** vamos usar a como exemplo uma requisição que retorna um usuario randomico.

<img src="https://i.ibb.co/ySyHkjd/postman-requisi-es.png" alt="postman-requisi-es" class="responsive1" border="0">

A resposta do serviço do POSTMAN irá nos retornar um json com atributo headers, e tendo uma propriedade com nosso header e valor. Também é possível observar na parte superior da resposta uma barra onde contém todas as informações referente a este request, conforme a **Figura abaixo**

<img src="https://i.ibb.co/ZmWVJrq/User-Radom.png" alt="User-Radom" border="0">

Agora iremos fazer uma requisição “POST” utilizando o exemplo “POST Request”, nesta requisição iremos alterar na guia body, o corpo da requisição que desejamos enviar e avaliar o seu retorno, conforme Figura abaixo.

<img src="https://i.ibb.co/S0ZgbxM/Postman-tela-body-post.png" alt="Postman-tela-body-post" border="0">

Na resposta, temos como foi enviado a informação para o serviço e depois uma propriedade com o tipo de dado da requisição e as informações enviadas, conforme

<img src="https://i.ibb.co/nLkFzby/Postmangetrequest.png" alt="Postmangetrequest" border="0">

Com este post Você adquiriu o conhecimento inicial do **POSTMAN**, e como fazer a comunicação dele com suas api’s ou de terceiros, espero ter ajudado e qualquer dúvidas deixe nos comentários, abraços e até a proxíma.

