---
layout: post
comments: true
title: "Como animar seus componentes ExtJS"
date: 2019-03-15 17:51:23
image: '/assets/img/Tutorial.gif'
description: Deixe seu aplicativo mais amigável através de animações
main-class: 'Tutorial'
color: '#EB7728'
tags:
- ExtJS
- Tutorial
categories: 'Tutorial'
twitter_text:
introduction: Deixe seu aplicativo mais amigável através de animações
--- 

Olá Pessoal, tudo certo?

No post de hoje irei demonstrar um exemplo de animação para nosso aplicativo, para torná-lo mais amigável ou dar uma aparência mais sofisticada dependendo de como a animação é apresentada.

Aqui eu mostrarei como usar os eventos **show** e **beforeclose** do componente Window para demonstrar um efeito de animação fade-in/fade-out

## Fragmento de código

{% highlight ruby %}
Ext.create('Ext.Window', {
    title: "Window",
    width: 400,
    height: 300,
    html: "<div id='example'>Hello</div> ",
    listeners: {
        show: function (win) {
            var el = win.getEl();
 
            el.setOpacity(0);
            el.fadeIn({
                duration: 2000
            });
        },
        beforeclose: function (win) {
            if (!win.shouldClose) {
                win.getEl().fadeOut({
                    duration: 2000,
                    callback: function () {
                        win.shouldClose = true;
                        win.close();
                    }
                });
            }
            return win.shouldClose ? true : false;
        }
    }}).show();
{% endhighlight %}
## Entendendo o código

No Window **show**, pegamos o elemento do componente usando **win.getEI()** porque Element(Ext.dom.Element)é a classe que contém todos os métodos de animação, onde você pode chamar **element.animate(config)** e esta propiedade  config deve ser uma configuração válida para Ext.fx.Anim.

O ExtJS fornece algumas configurações predefinidas, como: fadeIn, fadeOut, frame, ghost, slideIn, slideOut,etc.

No **beforeclose** retornamos false inicialmente, impedindo que a janela feche (porque shouldClose é false), então executamos nossa animação e adicionamos um retorno de chamada que é executado quando a animação termina para definir shouldClose como true e depois fechar a janela com êxito. 
Isso funciona porque retornar **false** dentro de um **beforeclose** listener impede que ele feche, e retornando **true** permite que ele feche.

Nota: Você poderia usar o mesmo conceito para exibir uma mensagem de confirmação (Ext.Msg.confirm) para verificar se o usuário realmente deseja fechar a janela, por exemplo.

## Resultado Final 

<img src="https://www.sencha.com/wp-content/uploads/2018/10/image1.gif" alt="" width="483" height="442" class="aligncenter size-full wp-image-30915">


Espero que você ache essa dica útil, tenha um bom dia e até a próxima.