---
layout: post
comments: true
title: "Aprenda novas maneiras de melhorar seu Grid ExtJS"
date: 2019-04-17 14:29:08
image: '/assets/img/'
description: Aprimore seu grid com uso de plugins
main-class: "ExtJS"
color:
tags: ExtJS
categories: 
- ExtJS
- Tutorial
twitter_text:
introduction:
---

Olá pessoal tudo certo?

No artigo de hoje iremos apresentar o GridPlugins, vamos ver como eles podem melhorar o grid de sua aplicação ExtJS.

## Introdução

O Grid Panel é um dos componentes mais poderosos do framework Ext JS. Ele tem muitos recursos e plugins integrados que permitem aos desenvolvedores exibir dados de várias maneiras.

Um recurso interessante do Grid Panel é o recurso Agrupamento. Esse recurso permite agrupar os dados da loja e exibir resumos por grupo e por loja; no entanto, é limitado a apenas um nível de agrupamento.

O plugin Filters é outro recurso interessante. Você pode adicionar entradas de menu aos cabeçalhos do Grid para que o usuário final possa filtrar os dados do Grid. Isso pode ser muito útil. Percebemos que às vezes os usuários querem resultados mais rápidos com o mínimo de cliques, o que explicarei nesta postagem do blog, incluindo como o agrupamento e a filtragem podem ser aprimorados.

## O que é o GridPlugins?

<a href="https://www.mzsolutions.eu/" target="_blank">mzSolutions</a> , um parceiro da Sencha, cria poderosos componentes JavaScript para a estrutura Ext JS para ajudar a potencializar seus aplicativos de negócios da Web e móveis, incluindo <a href="https://www.mzsolutions.eu/grid-plugins.html" target="_blank">GridPlugins</a>.

O pacote GridPlugins contém plugins e funcionalidades que irão melhorar o painel Ext JS Grid 
(visite o site <a href="https://www.mzsolutions.eu/" target="_blank">mzSolutions</a> para saber como comprar GridPlugins). 

Para usar o pacote no seu aplicativo, você precisa incluí-lo em seu arquivo app.json como este:

{% highlight ruby %}
{ 
    "name" :  "YourApp" ,
 
    "requer" :  [ 
        "gridPlugins" 
    ] ,
 
    "id" :  "391a5ff6-2fd8-4e10-84d3-9114e1980e2d" 
}
{% endhighlight %}

Na versão atual, o pacote funciona apenas com o kit de ferramentas clássico em todas as versões 6.x do Ext JS. Uma versão moderna do kit de ferramentas estará disponível ainda este ano.

## Recurso MultiGrouping

O recurso do Grid MultiGrouping permite que o Painel do Grid exiba os dados da Loja agrupados por vários agrupadores. Aqui está um exemplo do que parece:

![tab](https://www.sencha.com/wp-content/uploads/2019/04/group_summry_2.png)

E esta é a definição de classe:

{% highlight ruby %}
Ext. define ( 'KitchenSink.grid.Grouped' ,  { 
    estender :  'Ext.grid.Panel' , 
    xtype :  'k-grouped' ,
 
    requer :  [ 
        'KitchenSink.grid.GroupedController' , 
        'Ext.grid.feature.MultiGrouping' 
    ] ,
 
    título :  'Agrupamento básico' , 
    controlador :  'agrupado' ,
 
    store :  { 
        type :  'vendas' ,
 
        groupers :  [ 'pessoa' ,  'empresa' ] 
    } ,
 
    colunas :  [ 
        { texto :  'Empresa' ,   dataIndex :  'empresa' , editor :  'campo de texto ' , agrupável :  verdadeiro  } , 
        { texto :  'País' , dataIndex :  'país' , editor :  ' campo de texto ' , agrupável :  verdadeiro  } , 
        { text :  'Person' , dataIndex :  'person' , editor : 'textfield' , agrupável :  verdadeiro  } , 
        { text :  'Data' , dataIndex :  'date' , xtype :  'datecolumn' , formato :  'DMY'  } , 
        { text :  'Valor' , dataIndex :  'value' , xtype :  'numbercolumn' , editor :  'numberfield' , align :  'right'  } ,
        { text : 'Quantity' , dataIndex :  'quantity' , xtype :  'numercolumn' , editor :  'numberfield' , align :  'right'  } 
    ] ,
 
    recursos :  [ { 
        ftype :  'multigrouping' 
    } ] ,
 
    // mais configs 
} ) ;
{% endhighlight %}

No exemplo acima, você pode ver que o armazenamento do Grid foi configurado com dois agrupadores e algumas colunas de Grid são configuradas com a configuração `groupable` definida como` true`. Para as colunas agrupáveis, o menu de cabeçalho é aprimorado para permitir que os usuários alterem o agrupamento em tempo real:

![basic grouping2](https://www.sencha.com/wp-content/uploads/2019/04/basic_grouping_2.png)

Os usuários podem substituir o agrupamento completamente escolhendo "Agrupar por este campo" ou podem adicionar essa dimensão ao agrupamento existente escolhendo "Adicionar ao agrupamento". Há também a possibilidade de expandir ou recolher todos os grupos existentes no Grid.

## Recurso MultiGrounpingSummay

Resumos devem ser definidos no modelo Store como este:

{% highlight ruby %}
Ext. define ( 'KitchenSink.model.Sale' ,  { 
    extend :  'KitchenSink.model.Base' ,
 
    requer :  [ 
        'Ext.data.summary. *' 
    ] ,
 
    campos :  [ 
        { name :  'company' ,    tipo :  'string' } , 
        { name :  'country' ,    tipo :  'string' , resumo :  'count' } , 
        { name :  'person' ,     tipo :  'string' } , 
        { name :  'date' ,       tipo :  'date' , dateFormat :  'c' } ,
        {nome :  'valor' ,      tipo :  'float' , resumo :  'sum' } , 
        { name :  'quantity' ,   tipo :  'float' , resumo :  'sum' } , 
        { 
            name :  'year' , 
            calcular :  function ( dados ) { 
                retornar parseInt ( Ext. data . formato ( dados. data , "Y" ) ,  10 ) ; 
            } 
        } , { 
            Nome :  'mês' , 
            calcular :  função ( de dados ) { 
                retornar parseInt ( Ext. Data . Formato ( dados. Data ,  "m" ) ,  10 )  -  1 ; 
            } 
        } 
    ] 
} ) ;
 
Se você quiser ter resumos na Grid para todos os grupos gerados , use este recurso da seguinte maneira :
 
Ext. define ( 'KitchenSink.grid.Summary' ,  { 
    estender :  'Ext.grid.Panel' , 
    xtype :  'k-summary' ,
 
    requer :  [ 
        'KitchenSink.grid.SummaryController' , 
        'Ext.grid.feature.MultiGroupingSummary' 
    ] ,
 
    título :  «Agrupamento e resumos» , 
    controlador :  «resumo» ,
 
    store :  { 
        type :  'vendas' ,
 
        groupers :  [ 'pessoa' ,  'empresa' ] 
    } ,
 
    colunas :  [ 
        { texto :  'Empresa' ,   dataIndex :  'empresa' , editor :  'campo de texto ' , agrupável :  verdadeiro  } , 
        { texto :  'País' , dataIndex :  'país' , editor :  ' campo de texto ' , agrupável :  verdadeiro  } , 
        { text :  'Person' , dataIndex :  'person' , editor : 'textfield' , agrupável :  verdadeiro  } , 
        { text :  'Data' , dataIndex :  'date' , xtype :  'datecolumn' , formato :  'DMY'  } , 
        { text :  'Valor' , dataIndex :  'value' , xtype :  'numbercolumn' , editor :  'numberfield' , align :  'right' , summaryFormatter : 'number ("0,000.00")'  } , 
        { text :  'Quantity' , dataIndex :  'quantidade' , xtype :  'numercolumn' , editor :  'numberfield' , align :  'right' , summaryFormatter :  'number ("0,000") '  } 
    ] ,
 
    recursos :  [ { 
        ftype :  'multigroupingsummary' , 
        groupSummaryPosition :  'bottom' , 
        summaryPosition :  'docked' 
    } ] ,
 
    // mais configs 
} ) ;
{% endhighlight %}

Como você pode ver, você pode definir a posição dos resumos dos grupos e do resumo geral e ficará assim:

![ex](https://www.sencha.com/wp-content/uploads/2019/04/group_summry_1.png)

![ex1](https://www.sencha.com/wp-content/uploads/2019/04/group_summry_2.png)

Os resumos dos grupos podem ser exibidos na parte superior ou na parte inferior do grupo. O resumo geral pode ser o primeiro no Grid, o último no Grid ou encaixado na parte superior ou inferior do Grid.

Plugin GroupingPanel

Esse plug-in permite que seus usuários finais arrastem e soltem colunas do Grid na seção do painel de agrupamento que está visível acima do painel do Grid.

![all plugins](https://www.sencha.com/wp-content/uploads/2019/04/all_plugins.png)

![grouping panel](https://www.sencha.com/wp-content/uploads/2019/04/grouping_panel.png)

O usuário pode mover as dimensões no painel de agrupamento na ordem que deseja

{% highlight ruby %}
Ext. define ( 'KitchenSink.plugin.GroupingPanel' ,  { 
    estender :  'Ext.grid.Panel' , 
    xtype :  'k-groupingpanel' ,
 
    requer :  [ 
        'KitchenSink.plugin.GroupingPanelController' , 
        'Ext.grid.feature.MultiGrouping' , 
        'Ext.grid.plugin.GroupingPanel' 
    ] ,
 
    recursos :  [ { 
        ftype :  'multigrouping' 
    } ] ,
 
    plugins :  { 
        groupingpanel :  true 
    } ,
 
    // mais configs 
} ) ;
{% endhighlight %}

## Sumários de plugin 

Este plugin permitirá que seus usuários finais alterem a função de resumo nas colunas do Grid.

![grid](https://www.sencha.com/wp-content/uploads/2019/04/all_plugins_2.png)

As funções de resumo disponíveis em uma coluna do Grid são personalizáveis. Você precisa fornecer uma configuração para sua coluna do Grid, da seguinte maneira:

{% highlight ruby %}
{ 
     xtype :  'coluna' , 
     resumos :  { 
         sum :  true , 
         average :  true , 
         count :  false 
     } 
 }
{% endhighlight %}

Se você quiser ter sua própria função de resumo usada nessa coluna, então você precisa configurá-la assim:

{ 
     xtype :  'column' , 
     summaries :  { 
         calculateSomething :  true 
     } 
 }

 Em seguida, implemente uma classe para sua própria função de resumo, assim:

 {% highlight ruby %}
 Ext. define ( 'Ext.data.summary.CalculateSomething' ,  { 
     estender :  'Ext.data.summary.Base' , 
     alias :  'data.summary.calculateSomething' ,
 
     texto :  'Calcular algo' ,
 
     calcule :  function  ( registros , propriedade , raiz , begin , end )  { 
         // faça seu próprio cálculo aqui 
     } 
 } ) ;
 {% endhighlight %}

 Plugin FilterBar

 Este plug-in adicionará uma barra encaixada nos cabeçalhos da Grid e, dependendo da configuração das colunas do Grid, serão adicionados campos de filtro.

 ![barreira filtro](https://www.sencha.com/wp-content/uploads/2019/04/filter_bar_1.png)

{% highlight ruby %}
Ext.define('KitchenSink.plugin.FilterBar', {
    extend: 'Ext.grid.Panel',
    xtype: 'k-filterbar',
 
    requires: [
        'KitchenSink.plugin.FilterBarController',
        'Ext.grid.plugin.FilterBar'
    ],
 
    title: 'Filter bar',
    controller: 'filterbar',
 
    store: {
        type: 'sales',
 
        groupers: ['person', 'company'],
        filters: [{
            property: 'country',
            operator: '==',
            value: 'Belgium'
        }]
    },
 
    columns: [
        { text: 'Company',  dataIndex: 'company', editor: 'textfield', groupable: true, flex: 1, filter: {type: 'string'} },
        { text: 'Country', dataIndex: 'country', editor: 'textfield', groupable: true, flex: 1, filter: {type: 'list'} },
        { text: 'Person', dataIndex: 'person', editor: 'textfield', groupable: true },
        { text: 'Date', dataIndex: 'date', xtype: 'datecolumn', format: 'd.m.Y', filter: {type: 'date'} },
        { text: 'Value', dataIndex: 'value', xtype: 'numbercolumn', editor: 'numberfield', align: 'right', filter: {type: 'number'} },
        { text: 'Quantity', dataIndex: 'quantity', xtype: 'numbercolumn', editor: 'numberfield', align: 'right' },
        { text: 'Confirmed', dataIndex: 'confirmed', xtype: 'booleancolumn', align: 'center', trueText: 'Yes', falseText: 'No', filter: {type: 'boolean'} }
    ],
 
    features: [{
        ftype: 'multigrouping'
    }],
 
    plugins: {
        gridfilterbar: true
    }
 
});
{% endhighlight %}

## Recursos Adicionais

Se você quiser saber mais sobre o mzSolutions e seu produto comercial GridPlugins, siga estes links:

•<a href="http://examples.mzsolutions.eu/GridPlugins/KitchenSink/" target="_blank">Exemplos do KitchenSink</a>

•<a href="http://docs.mzsolutions.eu/GridPlugins/" target="_blank">Documentação do GridPlugins</a>

•<a href="https://www.mzsolutions.eu/grid-plugins.html" target="_blank">Site da mz</a>