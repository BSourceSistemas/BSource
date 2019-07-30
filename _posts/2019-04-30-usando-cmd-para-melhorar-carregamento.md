---
layout: post
comments: true
title: "Carregue seu app rapidamente"
date: 2019-04-30 10:30:19
image: '/assets/img/SenchaCMD.png'
description: 'facilite o carregamento de dados'
main-class: cmd
color: '#2da0c3'
tags: 
- App
- ExtJS
- CMD
categories: Carregamentodedados
twitter_text:
introduction: 'Uma experiência de carregamento mais suave para o seu aplicativo corporativo'
---

Olá pessoal tudo certo?

Aplicações corporativas de grande escala podem ter milhares de linhas de código, e oferecer muitos recursos especializados para diferentes públicos. Embora esses aplicativos sejam cruciais para os negócios, eles também podem obter uma reputação de carregamento lento e oferecer baixo desempenho aos usuários, você pode dividir o aplicativo em aplicativos menores e mais focados,mas isso força os usuários a lembrar qual aplicativo faz o que eles precisam. Esse post tem o propósito de ajudar sua aplicação a obter um melhor desempenho no carregamento, uma abordagem melhor é manter tudo no mesmo aplicativo, mas melhorá-lo, de modo que diferentes funcionalidades só possam ser carregadas quando necessário.

## Pacote de carregamento dinâmico com Sencha Cmd 6.5

O Sencha Cmd 6 adicionou suporte para o carregamento dinâmico de pacotes, permitindo que os desenvolvedores controlem melhor o tempo de inicialização e o tamanho da rede de seus aplicativos. Os desenvolvedores ainda definem quais pacotes são usados ​​pelo aplicativo, mas o Sencha Cmd agora pode trabalhar com uma classe de carregador de pacotes dinâmica que gerencia as dependências no momento da criação, mas não força os aplicativos a carregar todos os pacotes na inicialização. Em vez disso, o desenvolvedor pode implementar a lógica que carrega pacotes - com todas as dependências necessárias carregadas automaticamente em um momento apropriado no fluxo de trabalho do aplicativo. Por exemplo, uma visualização de dados com muitos recursos pode ser carregada apenas em uma tela grande e quando o usuário ativa o menu ou a guia apropriada. Em dispositivos com telas pequenas, um pacote diferente pode ser carregado. O restante desta postagem usará um aplicativo de amostra simples para mostrar como você pode aproveitar o carregamento dinâmico de pacotes em seus próprios aplicativos.

## Exemplo de um aplicativo 

Esse <a href= "https://github.com/adwankar/extjs-dynamic-package-loader" target="_blank">app básico</a> esta disponível no GitHub.
Se você clonar o repositório, lá conterá tudo o que você precisa, exceto os bits do Ext JS. Siga as instruções no README do projeto, se quiser executá-lo você mesmo. Se você estiver adicionando o carregamento de pacotes dinâmicos ao seu próprio aplicativo, precisará começar com um pacote para adicionar. Provavelmente, o melhor lugar para começar é criar um novo pacote com o Sencha Cmd:

{% highlight ruby %}
sencha generate package -require NewDevCard
{% endhighlight %}

Onde o "NewDevCard" é o nome do pacote, e usamos a opção `-require` para evitar adicionar automaticamente o pacote à matriz de solicitações no `app.json` do projeto. Os pacotes incluídos na matriz de solicitações serão carregados automaticamente na inicialização, exatamente o que estamos tentando evitar. Em vez disso, adicionaremos nosso carregador de pacotes dinâmico à matriz de solicitações no `app.json` de nosso projeto:

{% highlight ruby %}
"requires": [
    "package-loader"
],
{% endhighlight %}

Agora, nós iremos adicionar o pacote ao array "uses":

{% highlight ruby %}
"uses": [
    "NewDevCard"
],
{% endhighlight %}

O  método `Ext.Package.load()` torna trivial o carregamento de pacotes quando você está preparado para eles. O carregador de pacotes processa os recursos JavaScript e CSS do pacote, além de carregar recursivamente todos os pacotes necessários.

Em nosso aplicativo de amostra, nós carregamos o pacote quando o usuário abre uma guia que usa o pacote. A maior parte do código vai para o controlador, que detalharemos abaixo. Na visão, nós adicionamos uma propriedade pkg ao objeto de configuração para o painel exibido na aba (de view / main / Devcards.js)

{% highlight ruby %}
}, {
    // the contact tab using data from the developer record
    xtype: 'panel',
    pkg: 'NewDevCard',
    layout: 'fit',
    title: 'ContactFromPkg'
}
{% endhighlight %}

A propriedade `pkg` não tem nenhum significado especial. nós apenas codificamos o controlador para usar essa propriedade como uma indicação de que o painel usa um pacote carregado dinamicamente.

O controlador (view / main / MainViewController.js) contém a maior parte do código de manipulação de pacotes. Usamos o array requer para garantir que o carregador de pacotes esteja disponível:
{% highlight ruby %}
requires: [
    'Ext.Package'  //veio do "package-loader"
],
{% endhighlight %}

setamos um handler para as ativações de abas que asseguram que o pacote seja apropriadamente carregado

{% highlight ruby %}
onItemActivate: function(sender, value, oldValue, eOpts) {
 
    let tabpanel = sender;
    let tab = value;
    let pkg = tab.pkg;
 
    if (pkg) {
        if (Ext.Package.isLoaded(pkg)) {
            this.handlePackage(pkg);
        } else {
            tabpanel.setMasked({
                message: 'Loading Package...'
            });
 
            setTimeout(()=>{
                Ext.Package
                .load(pkg)
                .then(this.handlePackage.bind(this, pkg));
            }, 250);
        }
    }
}
{% endhighlight %}

se a aba que estamos ativando tem o conjunto de propriedades pkg, primeiro verificamos se o pacote especificado está carregado. Se não, nós mascaramos a aba e usamos `Ext.package.load ()` para carregar o pacote. Quando estiver disponível, usamos `this.handlePackage ()` para ativar o pacote carregado.

Primero, nós identificamos a aba correta e tiramos sua máscara. A menos que já tenhamos processado o pacote para a guia, adicionamos o xclass `MyApp.view.newdevcard.Main` na guia para ativar o código do pacote. Em termos de codificação, isso é 

Basicamente tudo o que é necessário:

•No `app.json`, require `package-loader` e `use` do pacote (NewDevCard)

•No controlador, require `package-loader` e adicione alguma logíca, então `Ext.package.load()` carregue o pacote no tempo apropriado

•Use o pacote recém carregado no app.

Agora só precisamos construir e empacotar o aplicativo. A maneira normal de fazer uma construção de desenvolvimento é com o `sencha app build --dev`. Isso inclui pacotes especificados no array `requires`, garantindo que tudo esteja incluído. Ao usar o carregamento dinâmico de pacotes, precisamos adicionar a opção `--uses` para garantir que os pacotes especificados na matriz "uses" também sejam incluídos na compilação.


O comando a seguir executará uma compilação de desenvolvimento completa do aplicativo, incluindo (mas não carregando automaticamente) todos os seus pacotes externos:

{% highlight ruby%}
sencha app build --dev --uses
{% endhighlight %}

O aplicativo e cada um dos pacotes de uso serão colocados em pacotes separados. Quando seu aplicativo for carregado, ele incluirá apenas seu código e o código de seus pacotes de requerimento. O JavaScript, o CSS e os recursos para os pacotes de uso estarão na pasta de criação do aplicativo, assim como imagens ou outros recursos.

Executando o servidor dev como de costume, com

{% highlight ruby %}
 sencha web start
{% endhighlight %}

irá servir automaticamente o aplicativo e lidar com dependências de ativos e usar pacotes conforme necessário. Em cenários de produção, você pode incluir os pacotes incluídos junto com seus outros recursos a serem servidos pelo seu servidor de produção.

## Veja em ação

Para ver o recurso de carregamento dinâmico em ação, tente ativar nosso aplicativo de exemplo e abra um perfil de desenvolvedor. Quando você abre a guia "CONTACTFROMPKG" pela primeira vez, o aplicativo carregará dinamicamente o pacote NewDevCard e exibirá as informações de contato do perfil.

<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564424154/packageloader_hli2qc.png" title= "load" alt="dinamico" class="responsive1"/>

Ao encapsular a funcionalidade em pacotes separados e aproveitar o carregamento dinâmico de pacotes, você pode melhorar significativamente a capacidade de resposta e a pegada do aplicativo. Seus usuários desfrutarão de uma experiência de usuário superior e não serão mais forçados a esperar que cada byte de seu aplicativo seja carregado quando eles realmente precisarem de apenas 20% dele. Você também economizará tempo durante o desenvolvimento e o teste, reduzindo os tempos de carregamento e permitindo que o Sencha Cmd carregue e assista de forma mais eficiente às compilações "dev".
