---
layout: post
comments: true
title: "Anúncio do Sencha ExtJS 6.7 e Tooling"
date: 2019-03-01 12:18:13
image: '/assets/img/colorpicker.png'
description: 'Nova versão do Sencha ExtJS'
main-class: 'notícias'
color: '#B31917'
tags:
- notícias
- extjs
categories: Informação
twitter_text:
introduction: Saiba mais sobre a mais nova versão do Sencha ExtJS
---

Olá pessoal tudo certo?

Nesse post falaremos mais sobre a nova versão do Sencha ExtJS que está indo pra sua versão 6.7, essa versão traz com ela aprimoramentos do kit de ferramentas Modern entre eles suporte a filtragem de grid, bloqueio de grid, rolagem virtual para grid infinito, chip de material, multiseleção de combobox e no colorpicker. O kit de ferramentas do ExtJS 6.7 também inclui aprimoramentos no kit de ferramentas Classic como aprimoramento de componentes para grid, calendário, painel, gráficos, window, combobox, tabs e dashboard. O jetBrains, Eclipse e Visual Studio puglins agora suportam as últimas versões de IDE.

## Destaques do Sencha ExtJS 6.7

Novos recursos modernos nesta versão incluem:

•**Filtro no Grid**: exibe facilmente registros do grid que atendem a vários critérios de texto, boolean, data, filtros de números.

•**Grid de bloqueio**: Semelhante ao Excel, bloqueia colunas na região esquerda ou direita.

•**Chip**: Material design inspirado em compactação de componentes com miniatura e texto.

•**Combobox**: Combobox com capacidade de selecionar vários chips.

•**Seleção do Combobox**: Selecione facilmente vários valores no campo de seleção.

•**Color picker**: Bonito com opções de HSVA e RGB.

**Ext atualizações de ferramentas JS nesta versão incluem**:

•**ExtGen** - Novos modelos de open tooling para suportar Ext JS 6.7

•**Sencha Cmd** - Controle aprimorado sobre opções de compactação de aplicativos

•**JetBrains IDE Plugin** - suportando as últimas versões 2018+

•**Plugin do Eclipse IDE** - suporte ao mais recente Eclipse Neon, Oxygen e Photon

•**4 Exemplos de ExtJS** - suporte ao Ext JS 6.7 e open tooling

•**Plugin do Visual Studio IDE** - suportando o Visual Studio 2017

### Experimente o ExtJS 6.7

•   Baixe a versão de <a href="https://www.sencha.com/products/extjs/evaluate/" target="blank">avaliação</a>gratuita por 30 dias do Sencha ExtJS 6.7 com ferramentas open tooling

•   Leia os primeiros <a href= "http://docs.sencha.com/extjs/6.7.0/guides/getting_started/open_tooling.html" target="blank">primeiros passos com open tooling</a>

•   Veja os <a href= "https://examples.sencha.com/extjs/6.7.0/" target="blank">exemplos</a> em ExtJS em qualquer dispositivo

•   Os clientes podem usar seu login do <a href= "https://support.sencha.com/#login" target="blank">Portal de suporte</a> * para obter acesso ao framework Ext JS, ao cmd e a todos os pacotes do Ext JS npm

### O que há de novo no Sencha Ext JS 6.7
Filtragem de Grid
Ext Modern 6.7 O Modern Grid fornece filtragem de grid, para que os usuários finais possam exibir registros de grid que atendam aos critérios especificados. Além do filtro de texto, o filtro da coluna de grid suporta os seguintes filtros de grid:

1.Filtro de grid de texto que limita os resultados aos valores correspondentes ao texto específico.

2.Filtro de grid boolean que limita os resultados a valores correspondentes a verdadeiro ou falso.

3 Filtro de grid de data que limita os resultados a valores que correspondem a restrições de data específicas.

4.Filtro de grid numérica que limita os resultados a valores que correspondem a restrições numéricas específicas.

5.É fornecido um exemplo do Kitchensink que mostra todos os recursos do plug-in do filtro de grid, incluindo a capacidade de gerenciar todos os filtros globalmente.

![Grid Filters](https://www.sencha.com/wp-content/uploads/2019/02/kitchenSinkScreenshot1.png)

### Bloqueio de grid

Ext 6.7 O Modern Grid fornece Grid de Bloqueio , para que os usuários finais possam bloquear colunas ou “congelar o painel” similar ao Excel. O Grid de bloqueio fornece um menu de coluna que fornece aos usuários a capacidade de bloquear uma coluna do grid na região esquerda ou na região direita. O menu da coluna do gride de bloqueio mostrará o status atual de bloqueio.

![Bloqueio de grid](https://www.sencha.com/wp-content/uploads/2019/02/kitchenSinkScreenshot2.png)

### Chip / Tags

O Ext JS 6.7 fornece um material compacto Chip que pode ser usado em tarefas comuns de experiência do usuário, como fazer uma seleção, filtrar conteúdo e desencadear ações. A visualização do componente do chip com miniatura e texto pode ser criada como mostrado abaixo. Você pode configurar o displayTpl para fornecer diferentes exibições de chip para desktop vs mobile.

{%highlight ruby%}
chipView :  { 
                iconField :  'avatar' , 
                displayField :  'nome' , 
                platformConfig :  { 
                    '! phone' :  { 
                        displayTpl :  '{nome} ({email})' 
                    } 
                } 
            } ,

 {%endhighlight%}

![Fotousuarios](https://www.sencha.com/wp-content/uploads/2019/02/chiptags.png)

### Multiseleção de Combobox e Select

O Ext JS 6.7 fornece o Multiselect Combobox, para que os usuários finais possam ver vários valores selecionados como tags no combobox. Um comboBox padrão combina um campo de entrada de texto HTML tradicional e um campo de seleção. Se a configuração editável for verdadeira, o usuário poderá digitar livremente no campo e / ou escolher valores em uma lista de seleção suspensa. o combobox Multiselect também oferece a opção para “multiselect: true”, permitindo que os usuários finais selecionem vários valores em uma caixa de combinação. Os valores selecionados podem ser navegados usando as teclas de seta do teclado e podem ser excluídos com a tecla delete.

![Fotoemail](https://www.sencha.com/wp-content/uploads/2019/02/combobox.png)

ExtJS 6.7 também oferece uma **Seleção de multiplos itens**

![foto form](https://www.sencha.com/wp-content/uploads/2019/02/combobox2.png)

### Color Picker 

ExtJS 6.7 fornece o Color Picker, para que os usuários finais possam selecionar o selecionador de cores usando amostra de cor, campo de formulário ou seletor de cores. O seletor de cores fornece opções para selecionar cores usando HSVA ou RGB.

![foto colorpicker](https://www.sencha.com/wp-content/uploads/2019/02/colorpicker.png)

### Scroller Virtual
O Ext JS 6.7 fornece um scroller virtual que permite um intervalo de rolagem além do intervalo normal de rolagem do navegador. A rolagem virtual é usada por padrão para todas as listas e Grids infinitas. Isso permite um número de linhas muito maior que o intervalo de rolagem máximo normal do navegador.

{% highlight ruby %}
    scrollable: {
            type: 'virtual',
            infinite: true  // enable MAX_SAFE_INTEGER scroll
        },
 {% endhighlight %}
![foto scroller](https://www.sencha.com/wp-content/uploads/2019/02/virtualscroller.png)

## Novidades no ExtJS 6.7 Tolling 

### ExtGen Templates

O ExtGen 6.7 agora contém modelos atualizados para a criação de aplicativos de desktop e móveis que suportam a estrutura Ext JS 6.7. Os modelos permitem que você use o kit de ferramentas clássico e moderno. Você pode criar aplicativos de desktop e móveis usando apenas o Modern toolkit ou criar aplicativos universais com kits de ferramentas Clássicos e Modernos.

### Melhor compactação com Sencha Cmd

O Sencha Cmd 6.7 vem com um compilador de fechamento atualizado que aprimora seu controle sobre as opções de compactação. O Cmd 6.7 fornece opções para alterar facilmente os níveis de compactação para aprimorar a ofuscação de código e reduzir o tamanho do footprint para atender às suas necessidades. A API do compilador de fechamento fornece diferentes níveis de compactação e notas de lançamento incluem exemplos sobre o uso dessas opções.

### Suporte ao JetBrains 2018+IDE

Os plugins do JetBrain IDE são atualizados para suportar aplicativos gerados usando o ExtGen e disponíveis no
<a href = "https://plugins.jetbrains.com/plugin/7740-sencha-ext-js"target="blank">jetbrains</a> . O preenchimento de código, geração de código, navegação de código, inspeção de código, refatoração de código e pesquisa de documentação agora são suportados para aplicativos ExtGen. O plugin atualizado suporta os IDEs mais recentes do JetBrains, que incluem IntelliJ 2018+, WebStorm 2018+, PhpStorm 2018+, RubyMine 2018+ e PyCharm 2018+.

![Suporte ao jetbrains](https://www.sencha.com/wp-content/uploads/2019/02/jetBrainsIDE.png)

### Suporte ao Eclipse Latest IDE
Os plug-ins do Eclipse IDE agora suportam aplicativos gerados com o ExtGen e estão disponíveis<a href = "https://marketplace.eclipse.org/content/sencha-eclipse-plugin"target="blank"> no eclipse marketplace</a>. O plug-in do Eclipse agora suporta IDEs do Eclipse Neon, Oxygen e Photon. O preenchimento de código, geração de código, navegação de código e consulta de documentação agora são suportados para todos os novos IDEs do Eclipse.

![Suporte ao Eclipse Latest](https://www.sencha.com/wp-content/uploads/2019/02/eclipseIIDe.png)

### Suporte para o Visual Studio 2017

O plugin Sencha Visual Studio agora é suportado para o Visual Studio 2017 e está disponível no<a href ="https://marketplace.visualstudio.com/items?itemName=SenchaVisualStudioPlugin.SenchaExtension" target="blank"> mercado</a>.O Plug-in IDE do Visual Studio 2017 oferece suporte a uma experiência de conclusão de código consistente dentro do IDE para:

•   Nomes de configuração, método e propriedade para todas as classes Ext JS e de usuário

•   Propriedades de alias, como xtype, controller, viewModel e layout

•   Objetos de nomes e ouvintes de eventos

•   Métodos de controle nos ouvintes

•   Propriedades do ViewModel em configurações de ligação

Nota: Para ativar o suporte à conclusão de código Ext JS, você precisará desativar o serviço de linguagem JavaScript VS2017. 
O plug-in do Sencha Visual Studio que suporta 2015 continua disponível no <a href ="https://marketplace.visualstudio.com/items?itemName=SenchaVisualStudioPlugin.SenchaExtension" target="blank">mercado</a>.

![imagem visualcode](https://www.sencha.com/wp-content/uploads/2019/02/VisualStudio.png)

### Ext JS 6.7 Exemplos

O Ext JS 6.7 fornece vários exemplos que são construídos usando open tooling. Você pode usar esses aplicativos para começar rapidamente com o Ext JS 6.7 e abrir ferramentas:

Aplicação Stack Employee Directory (Coworkee) - 
<a href="https://github.com/sencha-extjs-examples/Coworkee-Open-Tooling"target="blank">Github Repo</a>

Aplicativo Progressive Web App (PWA) de pilha completa -  
<a href="https://github.com/sencha-extjs-examples/PWA-Open-Tooling"target="blank">Github Repo</a>

Aplicativo de Amostra de Tutorial Moderno -  
<a href="https://github.com/sencha-extjs-examples/ModernTutorial-Open-Tooling"target="blank">Github Repo</a>

Aplicativo de Amostra de Início Rápido -  
<a href="https://github.com/sencha-extjs-examples/QuickStart-Open-Tooling"target="blank">Github Repo</a>
Mais recursos e melhorias de desempenho.

O Ext JS 6.7 inclui atualizações e aprimoramentos para vários componentes, bem como correções de bugs no kit de ferramentas Modern e Classic. O kit de ferramentas Ext JS 6.7 Classic inclui vários aprimoramentos em Grid, calendário, painel, gráficos, janela, caixa de combinação, guias e painel. O Ext JS 6.7 suportou extensas fases de teste, incluindo testes automatizados com o Sencha Test, resultando em mais de mil casos de teste.

## Conclusão 

O ExtJS 6.7 nos oferece novas features fantásticas para que você crie ou transformar suas aplicações web,
nós da BSource estamos ansiosos para começar a utilizar essa nova versão e quanto a vocês?
deixe seu comentário sobre o que achou dessa nova versão do ExtJS.
