---
layout: post
title:  "Ext JS, o que é? Aonde aprender?"
date:   2018-11-01 17:05:20 -0200
image: '/assets/img/BSOURCE-img.png'
description: 'Introdução ao Ext JS'
tags: 
- iniciante
- extjs
main-class: 'iniciante'
color: '#55780d'
categories: Dicas
twitter_text: 'Put your twitter description here.'
introduction: 'Saiba mais sobre esse framework java script fantástico, saiba sua historia e recomendações para o inicio de seu aprendizado em Ext JS'
---

Olá pessoal.

Estou aqui para apresentar o Ext JS e compartilhar um pouco sobre recomendações para facilitar o aprendizado desse framework fantástico.

### **Afinal o que é Ext JS?**

Para aqueles que não conhecem, Ext JS é um framework de aplicações Java Script puro que funciona em qualquer Browser, desde do IE6 para até a mais recente versão do Chrome. 
Ele permite que você criar as melhores aplicações multiplataformas usando nada além de um Browser, e tem uma API fenomenal.

### **Versões do Ext JS**

#### **Ext JS 1.1**
Originalmente construído como uma extensão da biblioteca complementar da YUI por Jack Slocum em 15 de abril de 2007, essa versão não mantinha dependências em bibliotecas externas, tornando seu uso opcional.
Atualmente Ext JS pode ser usado como um único script (com todas as classes e componentes em um arquivo) ou construindo o aplicativo pelo Sencha Cmd).

#### **Ext JS 2**

Em 4 de dezembro de 2007 foi lançada a versão 2.0, na qual não mantinha nenhuma compatibilidade com a versão anterior, e vinha com a primeira documentação API (Também deixa de depender do YUI, Prototype e jquery).
Ainda no lançamento dessa versão, é disponibilizado um guia de migração para versão atual.
Ponto marcante da versão é a disponibilidade de interfaces gráficas muito próximas as de aplicações desktop.

#### **Ext JS 3**

Em 6 de julho de 2009 é lançada a versão 3.0. Essa versão adicionou suporte a REST e a criação do Ext.Direct (similar ao SignalR da Microsoft).
Foram disponibilizados os componentes de gráficos em Flash e o componente ListView elementos foram adicionados aos componentes padrões de exibição.
Essa é a primeira versão do framework que já é compatível com a versão anterior.
#### **Ext JS 4**
Em 26 de abril de 2011 é lançado a versão 4.0 com um sistema de classe inteiramente revisado, com uma nova estrutura de pacote acesso a dados.
Controladores que fornecem uma solução global que permite aplicar todo aplicativo lógico.
Ext JS agora suporta versões especificas de browser para a maioria de seus componentes, isso foi um grande avanço em relação ao Ext JS 3.
Agora qualquer componente pode ser facilmente arrastável (drag-and-drop) pela nova Ext.util.ComponentDragger class.
A toolbar se tornou uma first-class container o que facilita a adição de novos componentes e customizar seu layout está bem mais simples do que no Ext JS 3.
Os gráficos em Flash são trocados por gráficos em SVG.
Capacidade de colocar a barra de guias à esquerda ou à direita de seus painéis de guias.
Criada a opção de desenvolver aplicações na arquitetura MVC (Muito obrigado Sencha!)
#### **Ext JS 5**
Em 2 de junho de 2014 é lançado a versão 5.0 do framework Ext JS.
Ext JS 5 adicionou suporte a uma alternativa popular ao MVC: MVVM (Model-View-ViewModel). Uma das maiores atrações para MVVM e a vinculação de dados. Não precisando gravar todo o código para conectar a camada do model à exibição e atualizar o model quando a exibição é modificada. 
Foi implementado o roteamento, que permite implementar “links diretos” em seu aplicativo. Isso é conseguido traduzindo a URL do seu aplicativo em ações e métodos do controlador.
Novo pacote de gráficos otimizados para toque, Sencha Touch 2.1, um pacote de gráficos aprimorado para funcionar tanto no Ext JS quanto no Sencha Touch. Isso trouxe muitos novos recursos e excelente desempenho em tablets.
Este novo pacote de gráficos trouxe muitos novos recursos para o Ext JS 5, incluindo:

•	Série de castiçal e OHLC

•	Interações Pan, Zoom e Crosshair

•	Floating Axes

•	Multiple Axes

•	Suporte para SVG e HTML Canvas

•	Melhor performance

•	Maior personalização

Painéis de abas
Permissão para controlar muitos outros aspectos dos painéis de guias, como alinhamento de ícones e rotação de texto. Você pode até configurar a barra de abas para se juntar ao cabeçalho do painel para economizar espaço.
Suporte
Suporte mutuo da aplicação para rodar em Browsers tanto de Desktop, quanto e browsers de tablets e smartphones. 
O Ext JS 5 suporta navegadores modernos e antigos, incluindo: Safari 6+, Firefox, IE8 +, Chrome e Opera 12+. Na plataforma móvel, o Ext JS 5 suporta o Safari no iOS 6 e 7, o Chrome no Android 4.1+ e os dispositivos de tela de toque do Windows 8 (como laptops Surface e touchscreen) executando o IE10 +.
Importante: A partir da versão Ext JS 5, você não pode comprar licenças para menos de 5 desenvolvedores.

#### **Ext JS 6**
Em 1 de julho de 2015 e lançada a versão 6.0 do framework Ext JS, com ele o Sencha introduz uma estrutura única para criar aplicativos que são executados em todos os tipos de dispositivos, de telefones a tablets e desktops, produzindo uma experiência de usuário ideal ao escrever menos código.
Toolkits (um pacote que contém apenas os elementos visuais do framework) existem dois toolkits o clássico e o moderno.
Os elementos visuais do Ext JS estão agora contidos no kit de ferramentas clássico do Ext JS 6, enquanto os elementos visuais do Sencha Touch agora estão contidos no kit de ferramentas modern.
As aplicações podem simplesmente escolher o seu kit de ferramentas e adicionar isto ao seu <code>“app.json”</code>:


{% highlight ruby %}
 “toolkit”:'classic' // ou 'modern'
 {% endhighlight %}

#### **Gráficos**

Os maiores novos recursos no pacote de gráficos são os aprimoramentos da série de torta 3D ('pie3d'). Agora ele suporta rótulos, legendas, realces, dicas de ferramentas, chanfros e melhorias no sombreamento com nível configurável de efeito 3D.

![Pizza 3D](https://docs.sencha.com/extjs/6.0.2/guides/whats_new/images/3dchart.png)


Os vários controladores deslizantes no novo exemplo Charts KitchenSink permitem que você jogue com cada um deles e veja como eles alteram a aparência do gráfico.
Exportador 
O pacote exportador contém classes que você pode usar para criar documentos do Excel e plugin exportador que permite que os dados do grid sejam exportados para o Excel. O exporter pacote que continha classes com Capacidade de gerar documentos XML do Excel com todos os dados de que você precisa.
Suporte ao leitor de tela (acessibilidade). 
## **Aonde posso aprender?** 
Conheça o site da Sencha: O site da Sencha é bem completo com documentações, fórum para tirar dúvidas, exemplos de código fonte etc.
Página principal do ExtJS: <https://www.sencha.com/products/extjs/#overview> – Tem vários links nessa página, você pode usar algum deles como referência.
Exemplos e Demos: <https://examples.sencha.com/extjs/>	 - Essa página dá uma boa base ao desenvolvimento.

**Documentação:** A documentação é ótima e o layout é amigável, mas funciona apenas para consultas online (modo de consulta offline é um assunto a ser tratado em breve em outro post).

**Tutoriais:** <https://www.sencha.com/blog/category/tutorials/> - Os tutoriais são excelentes tendo muito conteúdo para se aproveitar.

**Blogs:** <https://www.sencha.com/blog/> - Não deixe de conferir esse blog e muito completo.
<https://wemersonjanuario.com.br/blog/> - Um blog de um MVP Sencha vale a pena conferir.

**Fóruns:** <https://www.sencha.com/forum/>  - O fórum da Sencha é ótimo e os profissionais que dão suporte para a comunidade são excelentes. 
<http://forum.extjs.com.br/>	- O fórum da comunidade brasileira também é bem ativo com muitos usuários com lastro para dar suporte e tirar dúvidas que podem estar travando seu projeto.

**Livros:**  Existem poucos livros sobre Ext Js no mercado, mas são livros muito bons!
Para começar a aprender Ext JS recomendo: Learning Ext JS 3.2 e/ou Ext JS in Action
Ext JS Essentials, Ext Js 4 First Look. 
Depois que tiver um pouco de experiência leia: Ext JS 3.0 Cookbook.

**Cursos:** Uma super indicação são os cursos de Ext JS 4 ministrados de maneira gratuita pela Loiane Groner pra quem não a conhece ela trabalha como Gerente de Desenvolvimento de Projetos no Citibank (maior instituição financeira do mundo), em São Paulo. Possui mais de 10 anos de experiência em Ti. Autora do livro Ext JS 4 First Look, publicado e lançado mundialmente em inglês em janeiro/2012 aqui estão algumas de suas condecorações: Google Developer Expert, Microsoft MVP, Oracle Developer Champion.

Segue o link - 
<https://loiane.com/2011/11/curso-de-extjs-4-gratuito/>.  
Espero que essas indicações ajudem no seu processo de aprendizagem, se você tem alguma boa referência de fonte de aprendizado ExtJS (livros, Blogs, Videos) que não foi citada aqui, por favor deixe nos comentários . Bons estudos e aguardem que mais posts sobre Ext JS estão por vir.  



