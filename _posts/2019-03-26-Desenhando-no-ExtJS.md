---
layout: post
comments: true
title: "Criando desenhos com ExtJS"
date: 2019-03-26 13:12:15
image: '/assets/img/Tutorial.gif'
description: Deixe sua aplicação web interativa
main-class: 'Tutorial'
color: '#EB7728'
tags:
- ExtJS
- Tutorial
categories: 'Tutorial'
twitter_text:
introduction: Deixando sua aplicação web mais interativa
---

Olá pessoal tudo certo?

Muitos de vocês já devem estar familiarizados com o pacote Sencha Charting que vem com o Sencha Ext JS . Ele permite que você crie rapidamente ótimas visualizações, como gráficos de colunas 3D ou gráficos de pizza 3D . Muitas vezes, os gráficos não são suficientes para sua aplicação web, um desenho interativo pode ser a solução para a sua aplicação procura.
É claro que você pode usar o HTML5 Canvas ou o SVG diretamente, mas eles geralmente levam a problemas em plataformas que não são suportadas. Lidar com problemas entre navegadores, diferenças entre telas regulares e de retina, animações, etc., não é uma tarefa fácil.
O Ext JS Charts vem com um pacote de desenho que permite criar gráficos e animações arbitrários sem se preocupar com qual tecnologia um navegador em particular usa para renderizar seus desenhos. Seleciona automaticamente o renderizador mais apropriado (Canvas, SVG ou VML), dependendo do seu navegador. Sob o capô, o pacote de desenho segue o HTML5 Canvas como o modelo de API subjacente. Chamadas de API do Canvas são traduzidas automaticamente para SVG ou VML, se esses mecanismos forem necessários.

 Nesse artigo abordaremos o básico sobre os recursos do pacote de desenho que vem com os Gráficos do Sencha e como eles foram implementados, para que você não tenha que lidar com problemas de compatibilidade entre navegadores.

### Sprite Simples

 Um sprite é um primitivo básico que representa um objeto gráfico que pode ser desenhado. Você pode criar uma imagem desejada combinando vários sprites. Existem muitos tipos diferentes de sprites disponíveis no pacote do Draw. Cada tipo de sprite possui vários atributos que definem como um sprite deve se parecer. Por exemplo, este é um sprite ret:
 {% highlight ruby %}
 {
    xtype: 'draw',
    width: 250,
    height: 250,
    sprites: [{
        type: 'rect',
        x: 50,
        y: 50,
        width: 100,
        height: 100,
        lineWidth: 4,
        strokeStyle: 'green',
        fillStyle: 'yellow'
    }]
}
 {% endhighlight %}

 ![desenho](https://cdn.sencha.com/img/20150813-draw-pkg-part1-img2.png)

 *Aqui, o type: 'rect'corresponde ao alias do sprite , e o resto das propriedades de configuração são atributos de sprite*

### O contêiner do sorteio

O empate xtype no nosso exemplo anterior corresponde à classe **Ext.draw.Container**.Este é o contêiner das superfícies de desenho instâncias do **Ext.draw.Surface** nas quais os sprites são renderizados.

Observe como usamos a configuração dos sprites e não a configuração de itens do contêiner de desenho para adicionar um sprite retângulo a ele. Isso ocorre porque os itens do contêiner de desenho são suas superfícies . E os sprites definidos na configuração dos sprites entram na superfície principal padrão . Você pode fazer um sprite ir para uma superfície diferente do padrão, se você usar a configuração de superfície do sprite (sim, isso não é um atributo). Por exemplo:

{% highlight ruby %}
{
    type: 'rect',
    surface: 'privateSurface',
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    ...
}
{% endhighlight %}

O código acima irá criar uma superfície com ID privateSurface e o sprite rect irá para ele, ao invés da superfície padrão 'main'. A configuração de superfície também pode ser uma instância de superfície real, o que significa que você adicionaria sprites por meio do método setSprites depois que o contêiner de desenho fosse instanciado.

Por favor, note que setSprites não irá remover sprites que já foram adicionados pela configuração inicial sprites ou por chamadas anteriores para setSprites . Ele adicionará apenas novos sprites. Isso ocorre porque a configuração dos sprites deve ser usada declarativamente. Se você precisar manipular sprites, você pode fazer isso usando métodos de superfície.

### Usando superfícies múltiplas

A capacidade de ter várias superfícies é útil por motivos de desempenho (e duração da bateria). Como as alterações nos atributos do sprite fazem com que toda a superfície (e todos os sprites) sejam renderizadas novamente, faz sentido agrupar os sprites por superfície, portanto, as alterações em um grupo de sprites só acionarão a superfície em que serão renderizadas novamente. O pacote Sencha Chart, que é construído sobre o pacote Draw, depende muito desse recurso. Se você tiver algo como uma interação de <a href="https://examples.sencha.com/extjs/6.0.0/examples/kitchensink/?charts=true#line-crosszoom" target="_blank">cross zoom</a> em seu gráfico, somente a superfície usada para renderizar o retângulo de zoom repinte à medida que você faz uma seleção arrastando sobre o gráfico, enquanto as superfícies de série e eixos não são repintadas.

Também podemos reescrever o exemplo acima de maneira imperativa para entender melhor o que está acontecendo:
{% highlight ruby %}

var drawContainer = new Ext.draw.Container({
    renderTo: document.body,
    width: 250,
    height: 250
});
 
var mainSurface = drawContainer.getSurface(); // --- getSurface('main')
 
mainSurface.add({ // add sprite to the surface
    type: 'rect',
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    lineWidth: 4,
    strokeStyle: 'green',
    fillStyle: 'yellow'
});
 
mainSurface.renderFrame(); // --- renderiza todos os sprites na superfície
 
{% endhighlight %}

### Modificando Atributos Sprite

Agora, vamos dar uma olhada em como podemos modificar os atributos de um sprite. Por exemplo, podemos fazer a nossa rect Sprite mais retangular do que é agora, tornando-a mais larga.

Primeiro, precisamos obter uma referência ao nosso sprite, e uma maneira de fazer isso seria obter os itens de configuração da superfície, que é uma matriz de todos os sprites que pertencem à superfície:

{% highlight ruby %}
var items = mainSurface. getItems ( ) , 
    rectSprite = itens [ 0 ] ;
{% endhighlight %}

Alternativamente, podemos usar o **método get** da superfície:

{% highlight ruby %}
var rectSprite = mainSurface. get ( 0 ) ;
{% endhighlight %}

Podemos atribuir um ID ao nosso sprite e usá-lo para buscá-lo:

{% highlight ruby %}
mainSurface. add ( { 
    type :  'rect' , 
    id :  'myRect' , 
    ... } ) ; var rectSprite = mainSurface. obter ( 'MyRect' ) ;
{% endhighlight %}

Agora podemos mudar a largura do sprite. É assim que nós fazemos:

{% highlight ruby %}
rectSprite. setAttributes ( { 
    width :  150 
} ) ; 
// --- Não esqueça de repintar a superfície depois de alterar os atributos do sprite 
mainSurface. renderFrame ( ) ;
{% endhighlight %}

**Abra em um fiddle**

Também podemos definir mais de um atributo de uma vez, que é a maneira recomendada e mais eficiente de fazer isso. Vamos agora mudar as cores do preenchimento e do traço:

{% highlight ruby %}
rectSprite. setAttributes ( { 
    fillStyle :  'rgba (255, 0, 0, .5)' , 
    strokeStyle :  'rgb (0, 0, 0)' 
} ) ;
{% endhighlight %}

Aqui, em vez de usar <a href="https://drafts.csswg.org/css-color-4/#named-colors" target="_blank">cores nomeadas</a>, usamos <a href="https://drafts.csswg.org/css-color-4/#rgb-functions" target="_blank">funções rgb</a> compatíveis com CSS para especificar nossos valores de cores

![imagem quadrado](https://cdn.sencha.com/img/20150813-draw-pkg-part1-img4.png)

### Conclusão

Como você pode ver, usar sprites não é muito diferente do que usar componentes. Os mesmos princípios de componentes são usados ​​com sprites. Em vez de lidar diretamente com HTML, a abordagem do tipo componente economiza seu tempo ao não precisar lidar diretamente com elementos SVG e chamadas de API do Canvas. Você simplesmente cria sprites e configura os atributos, e o pacote Draw cuida do resto.

![desenho animado](https://cdn.sencha.com/img/20150813-draw-pkg-part1-img5.gif)

Enquanto isso, espero que você se divirta experimentando diferentes tipos de sprites, como círculo , linha ou texto, que estão disponíveis no pacote de desenhos.

