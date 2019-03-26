---
layout: post
comments: true
title: "Dicas de suporte"
date: 2019-03-26 17:07:37
image: '/assets/img/Tips.jpg'
description: 'Detalhes fazem a diferença'
main-class: 'dicas'
color: '#637a91'
tags:
- Dicarápida
- ExTJS
- Iniciante
categories:
twitter_text:
introduction:
---
Olá pessoal tudo certo?

No artigo de hoje iremos abortadas algumas dicas básicas pra você iniciante em ExtJS

## Usando o Font Awesome

O Ext JS 6 vem com o novo tema Triton que usa ícones de fonte do Font Awesome para imagens de fundo. Mas, você sabia que poderia usar esses mesmos ícones (e muitos outros da extensa biblioteca Font Awesome) em seus componentes implementando as configurações `iconCls` e` glyph`?
### Ao usar o tema Triton

Ao usar o tema Triton
Você pode definir o ícone usando Font Awesome em componentes com a configuração `iconCls` como **Ext.panel.Panel** , **Ext.menu.Item** ,**Ext.button.Button** , etc. Basta usar a seguinte sintaxe:

{% highlight ruby %}
	// use 'x-fa' para adicionar defina a família de fontes para Font Awesome 
	// e use “fa- {iconName}” para definir o próprio ícone 
	iconCls: 'x-fa fa-star' // o ícone será o Ícone de estrela da fonte impressionante
{% endhighlight %}

Para componentes com uma configuração 'glyph', você pode usar a seguinte sintaxe:

{% highlight ruby %}
glyph: 'xf005 @ FontAwesome' // usando o unicode “f0005” para Star
{% endhighlight %}

Todos os ícones do Font Awesome podem ser encontrados no site do <a href="https://fontawesome.com/cheatsheet?from=io" target="_blank">font awesome</a>

**Nota**: As configurações `glyph` e` iconCls` são exclusivas. A configuração `glyph` foi adicionada no Ext JS 4.2 para contornar a falta de suporte para pseudo-elementos no IE6 e 7. Recomendamos usar o` iconCls` sobre o `glyph` daqui para frente, porque todos os navegadores suportados no Ext JS 5+ (IE 8 +) tem suporte a pseudo elementos. A maioria das fontes de ícones modernas é acompanhada por um conjunto de regras CSS que aplicam o ícone a um elemento usando um <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank">pseudoelemento</a>

Para o componente **Ext.Img**.Você pode envolver o elemento ` ` com um `

`usando a configuração` autoEl` juntamente com `cls` ou` glyph`:

{% highlight ruby %}
	Ext. create ( { 
               xtype :  'imagem' , 
               autoEl :  'div' , 
               cls :  'x-fa fa-star' , 
	       // glifo: 'xf005 @ FontAwesome', 
               alt :  'estrela' , 
               style :  { 
                        fontSize :  '36px' , 
                        lineHeight :  '36px' 
               } , 
               height :  36 , 
               width :  36 
         }) ;
{% endhighlight %}

**Nota**: Para a configuração `image`, você usará` cls` ao invés de `iconCls`.

### Quando não estiver usando o tema triton

Se você não estiver usando o tema Triton, mas ainda quiser usar os ícones do tipo Font Awesome em seus componentes, poderá incluir o pacote Font Awesome em seu aplicativo gerado pelo Sencha Cmd. Para fazer isso, edite o arquivo `{appRoot} / app.json` requer o array como mostrado abaixo:

"requires": [
               "font-awesome"
        ],
Você pode, então, definir a configuração `iconCls` nos componentes diretamente como você pode usar ao usar o tema Triton.

### Ícones de Pictos

Você também pode requerer o conjunto de fontes do ícone Pictos disponível no SDK, exigindo-o também no arquivo `app.json`:

"requires": [
               "font-pictos"
        ],

Once required, you can use the following syntax for `iconCls` configs in order to use
icons from the Pictos library.

 // pictos- {iconName} é usado para definir um ícone com nome do 
        iconCls dos pictogramas: 'pictos pictos-home'

## Outra opção para salvar dados da associação

Ao usar associações em seu aplicativo Ext JS 5, há várias maneiras de abordar como salvar dados associados. Se você preferir salvar cada instância de modelo individual separadamente, criar uma implementação personalizada de Ext.data.writer.Writer ou usar Ext.data.Session para criar lotes, o Ext JS oferece a você uma grande flexibilidade para trabalhar com seus dados da maneira mais adequada. atende às necessidades da sua aplicação.

No entanto, há algumas novas adições no Ext JS 5 para Ext.data.writer.Writer que fornecem uma outra opção: allDataOptions e partialDataOptions .

Essas configurações permitem que você defina as opções que serão transmitidas para o método getData () de Ext.data.Model quando os dados do modelo estiverem sendo preparados para serem enviados ao servidor. allDataOptions é usado para registros phantom (novos) (ou quando writeAllFields : true), enquanto **partialDataOptions** é usado para todos os outros (ou quando writeAllFields: false).

Então, como isso nos ajuda com dados de associação?

Digamos que temos duas entidades, **usuário** e **endereço** :

{% highlight ruby %}
Ext. define ( 'User' ,  { 
    extend :  'Ext.data.Model' , 
    fields :  [ 'firstName' ,  'lastName' ,  'age' ,  { 
        name :  'addressId' , 
        reference :  'Address' , 
        unique :  true 
    } ] , 
    ... } ) ; 
Ext. define ( 'Address' , { 
    extend : 'Ext.data.Model'

   
    fields :  ['street' ,  'city' ,  'state' ,  'postalCode' ] 
} ) ;
{% endhighlight %}

Neste exemplo, o usuário tem uma associação de um-para-um com o endereço, portanto, sempre que salvarmos um usuário (seja criando um novo usuário ou salvando alterações em um existente), gostaríamos de enviar também todos os dados de endereço associados no mesmo pedido.

No Ext JS 4, uma maneira de abordar isso seria criar um Ext.data.writer.Writer personalizado que expande **getRecordData** () para chamar Ext.data.Model. **getAssociatedData** () e adiciona os dados da associação aos dados da solicitação. Embora isso ainda funcione bem no Ext JS 5, podemos aproveitar allDataOptions e partialDataOptions para realizar a mesma coisa, mas salve algumas linhas de código:

{% highlight ruby %}
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [...],
    proxy: {
        type: 'ajax',
        url: 'user.json’,
        writer: {
            type: 'json',
            allDataOptions: {
                persist: true,
                associated: true
            },
            partialDataOptions: {
                changes: false, 
                critical: true,
                associated: true
            }
        }
    }
});
{% endhighlight %}

Em nossa configuração allDataOptions, especificamos as opções que gostaríamos de usar durante o processo de preparação dos dados do nosso modelo de usuário recém-criado a serem enviados para o servidor:

persist: true -> Envia somente campos persistentes (isso é definido como true por padrão)
associated: true -> Incluir dados de associação
E o mesmo princípio se aplica para **partialDataOptions** , que será usado ao preparar os dados de um modelo de usuário existente para serem enviados ao servidor:

changes: true -> Incluir apenas campos modificados (padrão)
critical: true -> Sempre inclui campos "críticos", independentemente da alteração (padrão)
associated: true -> Incluir dados de associação
Claro, você pode ajustar essas configurações com base nas necessidades do seu aplicativo. No entanto, com isso, agora devemos ver que, quando criamos ou atualizamos um usuário em nosso aplicativo, a solicitação ao servidor também inclui dados de associação. Agradável!

Para mais informações, consulte este <a href="https://fiddle.sencha.com/#fiddle/ovk" target="_blank">exemplo</a> do <a href="https://fiddle.sencha.com/#fiddle/ovk" target="_blank">Fiddle</a> de criação e atualização de modelos de usuários e endereços.

## Usando IDs de modelo no Ext JS 5

No Ext JS 5, uma mudança bastante significativa foi introduzida em relação à geração de id. No Ext JS 4, o gerador de ID padrão **não** gerou automaticamente valores para o idProperty . Então, dê um exemplo simples de modelo de usuário:

{% highlight ruby %}
Ext.define('Fiddle.model.User', {
    extend: 'Ext.data.Model',
    fields: ['firstName', 'lastName', 'age'],
    proxy: {
        type: 'rest',
        url: 'user.json'
    }
});
// create a new User
var user = new Fiddle.model.User({
    firstName: 'John',
    lastName: 'Doe',
    age: 52
});
user.save();
When calling save(), 
{% endhighlight %}

Ao chamar save (), o pedido para o servidor seria algo como isto:

{% highlight ruby %}
{ 
    age :  52 , 
    firstName :  "John" , 
    lastName :  "Doe" 
}
{% endhighlight %}

No Ext JS 5, no entanto, o gerador de ID padrão * gera * um valor para idProperty se nenhum for fornecido. Tomando o exemplo acima, isso produz um resultado ligeiramente diferente:

{% highlight ruby %}
{ 
    id :  "User-1" , 
    age :  52 , 
    firstName :  "John" , 
    lastName :  "Doe" 
}
{% endhighlight %}

Observe como o "id" (que é o idProperty padrão) agora está incluído na solicitação? Em alguns casos, os desenvolvedores podem ter confiado no comportamento do Ext JS 4 para determinar como lidar com solicitações de entrada em seu código do lado do servidor; nesse caso, essa alteração pode introduzir alguns conflitos para os aplicativos de criação no Ext JS 5.

Felizmente, há várias opções que você pode usar para trabalhar com (ou ligeiramente ao redor) essa alteração.

### Geradores de Id

A primeira (e geralmente a melhor) opção é usar um dos geradores id incluídos no Ext JS. Por exemplo, usar o gerador de ID Ext.data.identifier.Negative produzirá um número negativo sucessivo para o valor de id do lado do cliente. Como a maioria dos IDs baseados em inteiros do lado do servidor é positiva e sequencial, o ID negativo produzido por Ext JS é claramente reconhecível como provisional, o que deve permitir que qualquer código do lado do servidor determine facilmente a diferença entre os dados do modelo ExtJM fantasma e existente.

Usando nosso exemplo acima, o identificador negativo produzirá um resultado assim:

{% highlight ruby %}
{ 
    id :  - 1 , 
    age :  52 , 
    firstName :  "John" , 
    lastName :  "Doe" 
}
{% endhighlight %}

Exemplo: Usando um identificador negativo: https://fiddle.sencha.com/#fiddle/p03

É claro que, se um dos geradores de IDs incluídos não for suficiente, você poderá criar o seu próprio, estendendo o Ext.data.identifier.Generator.

### ClienteIdProperty

Se o uso de um gerador de ID não for viável para os requisitos do seu aplicativo, outra opção é usar a configuração clientIdProperty que foi adicionada ao Ext.data.writer.Writer . Usando essa configuração, você pode especificar um nome personalizado que será usado como a "chave" do valor idProperty ao criar um novo registro e enviar seus dados para o servidor:


{% highlight ruby %}
Ext. define ( 'User' ,  { 
    extend :  'Ext.data.Model' , 
    campos :  [ 'firstName' ,  'lastName' ,  'age' ] , 
    proxy :  { 
        tipo :  'rest' , 
        url :  'user.json' , 
        escritor :  { 
            tipo :  'json' , 
            clientIdProperty :  'userId' 
        } 
    } 
} )
{% endhighlight %}

Quando salvamos () a instância do usuário, os dados enviados para o servidor agora terão este formulário:

{% highlight ruby %}
{ 
    "userId" :  "Usuário-1" , 
    "nome" :  "João" , 
    "sobrenome" :  "Silva" , 
    "idade" :  52 
}
{% endhighlight %}

Para o código do servidor existente que dependia da ausência da propriedade "id" para identificar um novo registro, essa abordagem mantém o status quo e não requer uma modificação da lógica.

Exemplo: usando clientIdProperty: https://fiddle.sencha.com/#fiddle/p02

### Transformar()
Uma opção final seria especificar um método de **transformação** personalizado no escritor do seu proxy. transform () recebe dois argumentos - "data" e "request" - e espera apenas que você retorne o objeto de dados que deve ser enviado para o servidor:

{% highlight ruby %}
writer: {
    type: 'json',
    transform: function(data, request) {
        // do any data transformations here
        // ...
        // return the data object that should be sent to server
        return data;
    }
}
{% endhighlight %}

Usando transform (), você pode fazer qualquer processamento dos dados necessários (por exemplo, remover a propriedade "id") antes de a solicitação ser enviada ao servidor. Das três opções, isso fornece o maior controle sobre a forma e o conteúdo dos dados que são enviados para o servidor. No entanto, também apresenta o maior risco de erros de dados, por isso deve ser usado com cuidado.

Exemplo: usando transform (): https://fiddle.sencha.com/#fiddle/p05