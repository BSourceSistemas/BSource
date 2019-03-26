---
layout: post
title: "Dicas de boas práticas em ExtJS"
date: 2018-11-14 21:31:05
image: '/assets/img/Tips.jpg'
description: "Detalhes fazem a diferença!"
main-class: 'dicas'
color: '#637a91'
tags:
- Dicarápida
- ExTJS
categories: Dicas 
twitter_text: "Melhore a performance do seu código"
introduction: "Saiba mais sobre práticas que irão te ajudar a organizar e aumentar a performance de seus projetos."

---

Olá pessoal tudo certo?

Recentemente contei um pouco sobre as versões de ExtJS e sugestões de cursos para auxiliar a aprendizagem de vocês, hoje a proposta será contar um pouco sobre como trabalhar de maneira eficiente utilizando as boas práticas que esse framework nos oferece, bom vamos lá.

### Seja organizado na sua estrutura de suas pastas 

Isso não afetara a performance do seu codigo mais fará ficar mais dificil seguir a estrutura do seu app, quando ele ficar maior, achar o codigo fonte e adicinar novos recursos a ele ficará muitos mais rapido e simples com uma estrutura organizada, veja os exemplos abaixo.

![Folder](https://cdn.sencha.com/img/20130702-top-10-ext/top-10-ext-01.png)
**todas as views estão em juntas ficando totalmente "bagunçado"**
![folder2](https://cdn.sencha.com/img/20130702-top-10-ext/top-10-ext-02.png)
<b>views organizadas por função lógica, ficando muito mais fácil para se trabalhar</b>.

### Aprenda a diferença entre classic e modern 

<b>Classic Tollkit</b>: o kit de ferramentas clássico é o novo nome para o ExtJS tradicional e destina-se ao uso em aplicativos de desktop. Ele fornece suporte tradicional a aplicativos ExtJS para a maioria dos navegadores de desktop, laptops e tablets habilitados para tela sensível ao toque.

<b>Modern Tollkit</b>: o kit de ferramentas moderno é o novo nome do Sencha Touch e destina-se ao uso para aplicativos móveis. Já que é melhor para um navegador cruzado e também para a experiência entre dispositivos. Ele estende o suporte a aplicativos HTML5 para todos os navegadores modernos de desktop para mobile. Evite ID’s 

### Evite o uso de ID's

Não é recomendado o uso de ID para os seus componentes, porque cada id deve ser único. É muito fácil acidentalmente usar o mesmo id mais de uma vez, o que causará identificações de DOM duplicadas (colisões de nomes).Em vez disso, deixe a estrutura lidar com a geração de ids para você. Com o ExtJS ComponentQuery, não há motivo para precisar especificar um id em um componente ExtJS. O Exemplo X mostra dois segmentos de código de um aplicativo em que há dois botões de salvamento diferentes criados, ambos identificados com um id de 'savebutton', causando uma colisão de nomes. Embora seja óbvio no código abaixo, pode ser difícil identificar colisões de nomes em um aplicativo grande.
{% highlight ruby %}
        // aqui definimos o primeiro botão salvar 
    xtype:'barra de ferramentas',
    itens:[{
        texto:'Salvar imagem',
        id:"salvar botão"
    }]

        // em outro lugar no código, temos outro componente com um id de 'savebutton'
    xtype:'toolbar',
    itens:[{
        text:'Save a Order',
        id:'savebutton'
    }]
{% endhighlight %}

Exemplo de mau uso X: atribuir um 'id' duplicado a um componente causara uma colisão de nomes.

Em vez disso, se você quiser identificar manualmente cada componente, basta substituir o 'id' por 'itemId', como mostrado no exemplo Y. Isso resolve o conflito de nomes e ainda podemos obter uma referência ao componente via itemId. Há muitas maneiras de recuperar uma referência a um componente via itemId. Alguns métodos são mostrados no exemplo Z.

{% highlight ruby %}
	xtype:'barra de ferramentas' , 
	itemId:'picturetoolbar' , 
	itens:[{ 
	    texto:'Salvar imagem' , 
	    itemId:'salvar o botão' 
	}]
 
	// em algum outro lugar do código, temos outro componente com um itemId de 'savebutton' 
	xtype:'toolbar' , 
	itemId:'ordertoolbar' , 
	itens:[{ 
	    text:'Save Order' , 
	    itemId:'savebutton'
	 }]
{% endhighlight %}

<b>Exemplo Y, boa prática: Crie items ID.</b>

{% highlight ruby %}

var pictureSaveButton = Ext.ComponentQuery.consulta ( '#picturetoolbar> #savebutton' ) [ 0 ] ;
 
	var orderSaveButton = Ext.ComponentQuery.consulta ( '#ordertoolbar> #savebutton' ) [ 0 ] ; 
 
	// assumindo que temos uma referência ao “picturetoolbar” como picToolbar 
	picToolbar. down ( '#savebutton' ) ;

{% endhighlight %}

<b>Exemplo Z, boa prática: refêrenciando componentes por itemId.</b>

### Tente não aninhar funções 

Poupe seus colegas de trabalho de perder tempo depurando, não defina funções dentro de funções. Você pode achar que está fazendo uma boa reutilização de código, mas está criando um pesadelo de escopo e organização.

### Evite o uso desnecessário de panels

Tente usar o componente Container sempre que puder invés de usar o Panel. O padrão do ExtJS é Panel, mas Container é um componente muito mais leve. Assegure-se de estar usando o Container em lugares que você não precisa da funcionalidade completa do Panel Component. veja exemplos aonde o panel e desnecessário e necessário abaixo:

{% highlight ruby %}

items :  [{ 
	    xtype : 'panel', 
	    titulo : 'My Cool Grid', 
	    layout : 'ajuste', 
	    itens :  [{ 
	        xtype : 'grid', 
	        loja : 'MyStore', 
	        colunas :  [{ ... }] 
	    }] 
	}]

{% endhighlight %}
**Exemplo 1: O 'panel' e desnecessário na aplicação**

{% highlight ruby %}

layout : 'ajuste', 
	itens :  [{ 
	    xtype :  'grid', 
	    titulo : 'My Cool Grid', 
	    loja :  'MyStore', 
	    colunas :  [{ ... }] 
	}]
{% endhighlight %}
Exemplo 2: A grid ja é um panel, use apenas as propiedades do painel diretamente no grid

### Nomeie seus xtypes com cautela 

Cuidado com os nomes duplicados! Uma boa regra é nomear seus xtypes da mesma forma que sua classe, incluindo namespaces, para que você possa rastrear a definição real da classe com muita facilidade.

### Não edite o código do Framework
Leia sobre ele, teste ele, aprenda sobre ele, mas não edite ele! Se você fazer mudanças na biblioteca principal, seja ela JS ou CSS, você está plantando uma bomba relógio em sua aplicação. Quando você for atualizar para uma versão mais nova todas essas mudanças serão perdidas e você terá que trafegar tentando descobrir onde estão os erros.
Se você quiser alterar o comportamento / aparência do framework, vá em frente, mas faça isso substituindo a classe (seja uma classe JS ou uma classe CSS) ou um método em um arquivo de script separado. Ao fazer isso, você pode removê-lo, se necessário, e acompanhá-lo quando se trata de revisar essas alterações quando novas versões são lançadas.

### Mantenha a documentação da API em mãos 
Sempre recorra ao uso da documentação quando se deparar com qualquer problema no seu projeto ou estiver tentando algo novo, parafraseando a profissional **Loiane Groner** “O doc API é seu melhor amigo". A documentação é clara e fácil de se navegar, então faça o uso dela, e lembrasse de verificar se a documentação é compatível com sua versão de ExtJS <a href="https://docs.sencha.com/." target="_blank">Documentação</a>.	

### Familiarizasse com o Sencha Cmd
Sencha Cmd é a fundação para o desenvolvimento das suas aplicações em Sencha. Oferecendo recursos abrangentes de gerenciamento do ciclo de vida de seu projeto desde a criação da estrutura inicial até a geração de construções. Um bom lugar para entender mais sobre é o <a href="https://docs.sencha.com/cmd/6.6.0/." target="_blank">Sencha Cmd</a>

### Aprenda sobre Binding
Binding no ExtJS é uma ferramenta essencial para aprender e aproveitar. Usando <a href="https://docs.sencha.com/extjs/6.2.0/guides/application_architecture/view_models_data_binding.html" target="_blank">binding</a> podemos criar um código muito mais claro que pode fazer muito mais.  

###  Use o Fashion

Sencha O Cmd versão 6 introduziu um novo recurso para o tema chamado “Live Update”. O Live Update usa o Fashion para compilar e injetar o CSS em sua página à medida que você cria em seu IDE. Esta é uma grande economia de tempo, já que você não precisa mais atualizar seu navegador para ver mudanças de estilo.A aplicação do seu aplicativo nunca foi tão fácil, e estender o Sass agora pode ser feito na mesma linguagem do framework, o Fashion se tornará especialmente útil à medida que o número de páginas na sua aplicação crescer!

### Conclusão 

Para quem está aprendendo uma nova tecnologia ter um direcionamento para um caminho correto e muito importante isso minimiza os possíveis erros que poderiam ocorrer e melhoram a performance do seu código. Se vocês usam alguma boa pratica que não foi citada nesse post, por favor deixe-nos um comentário que vamos adiciona-lo a lista.
obrigado pela leitura e até a próxima.














