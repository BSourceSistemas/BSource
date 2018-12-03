---
layout: post
comments: true
title: "Introdução ao Sencha Cmd"
date: 2018-11-21 11:22:19
image: '/assets/img/BSOURCE-img.png'
description:
main-class: cmd
color: '#2da0c3'
tags: 
- tutorial
- extjs
- iniciante
categories: Guiabasico
twitter_text:
introduction: 'Aqui você vera um guia basico sobre Sencha Cmd.'
---

Olá Pessoal 
Nesse breve artigo abordaremos o uso do Sencha Cmd, desde o processo de instalação e seus comandos.

### Introdução ao Sencha Cmd

O Sencha Cmd é uma ferramenta de linha de comando que possui todos os recursos necessários para criar, testar e publicar aplicações Sencha ExtJS e Sencha Touch.

### Licença

O Sencha Cmd é licenciado comercialmente de maneira gratuita. Para saber mais acesse <a href="http://www.sencha.com/legal/sencha-tools-software-license-agreement" target="blank">Termos da Licença</a>


### Recursos do Sencha Cmd 
O Sencha Cmd possui diversos recursos que trabalham em conjunto com o ExtJS e o Sencha Frameworks, vou listar abaixo alguns de seus principais recursos:

•<b>Servidor Web</b>: Gera um Servidor Web para seu açocar os arquivos do localhost.

•<b>Compilador JS</b>: Um compilador javaScript compatível com o framework que entende a semântica dos frameworks Sencha e pode produzir construções de base mínimas a partir de sua fonte.

•<b>Gerenciador de Packages</b>: Sistema de gerenciamento de packages para facilitar a integração de packages, criados por outros ou do repositorio do Sencha Package.

•<b>Ferramentas que geram código</b>: São usadas para gerar aplicativos inteiros e estende-los com novos componentes MVC.

### Compatibilidade

Sencha Cmd tem suporte a partir da versões do Sencha ExtJS 4.1 e Sencha Touch 2.1. Alguns Recursos do Sencha Cmd precisam do suporte de dramework que só estão disponiveis nessas versões ou nas versões anteriores. Alguns comandos podem ser usados por versões mais antigas do sencha frameworks ou javascript em geral.

### Setup

O instalador do sencha cmd inclui todo o necessario para você criar aplicações em ExtJS, faça o download do sencha Cmd aqui:

• <a href="https://www.sencha.com/products/sencha-cmd/" target="_blank">Sencha Cmd</a>

### Uso de versões mais antigas

Se você estiver usando uma versão mais antiga do que a 4.1 do extjs ou a 2.1 do sencha touch, será necessário a verificação da opção "Extensão de bússola" no instalador:

![Setup-sencha cmd](https://docs.sencha.com/cmd/guides/images/whats_new_cmd_compass.png)

Para compilar temas e aplicativos que usam o Sass e necessario a instalação do Ruby. Ruby tem suas particularidades de acordo com o sistema operacional:

• <b>Windows</b>:Faça o download do <a href="http://rubyinstaller.org/downloads/" target="_blank">Ruby</a>.Escolha a versão de arquivo ".exe" e faça sua instalação.

• <b>Mac OS</b>: O ruby ja vem pré instalado.

No seu prompt de comando você pode verificar se o ruby foi instalado corretamente e sua versão usando o comando Ruby -v.

### Instalando o Sencha Cmd 

Para fazer a instalação basta digitar na sua ferramenta de linha de comando:

{% highlight ruby%}
    $ npm install -g sencha-cmd
{% endhighlight%}
E pronto o Sencha Cmd ja vai estar diponível em seu prompt de comando.

### Verificar a instalação do Sencha Cmd

Passos para verificar se o Sencha Cmd está funcionando corretamente:

 • Abra uma linha de comando 
 
 • Altere o diretório, para seu aplicativo
 
 • Digite o  commando: Sencha Cmd

 seu output será algo parecido com isso:

 {% highlight ruby %}
    Sencha Cmd v6.0.0.202
    ...
 {% endhighlight ruby %}

 o número que será mostrado no seu cmd deve ser o mesmo da versão que você instalou.


### Alterar o Caminho de Instalação 

Se você quiser alterar o caminho da instalação pode fazer isso especificá-lo usando o sinalizador "dir". Por exemplo:

{% highlight ruby %}
    sudo SenchaCmd-6.x.y.z-linux(-i386|-amd64).sh -q -dir "/opt"
{% endhighlight %}

<b>O seu novo caminho de instalação pode requerer mudanças de permissão</b>

### Como Atualizo meu Sencha Cmd?

Simples o sencha possui um recurso chamado <b>sencha upgrade</b> que faz isso por você. Para verificar se há novas atualizações para o Sencha Cmd digite em sua ferramenta de linha de comando:

{% highlight ruby %}
    sencha upgrade --check
{% endhighlight %}
Se você colocar o comando sem o <b>--check</b> o sencha cmd fara o download e instalação automatica para a versão mais recente disponivel.

{% highlight ruby %}
    sencha upgrade
{% endhighlight %}

### Principios Básicos de Comando

Os recursos do sencha cmd são armazenados em módulos e comandos:

{% highlight ruby %}
    sencha [category]   [command]   [options...]   [arguments...]
{% endhighlight %}
O recurso de ajuda está disponivel usando o comando <b>help</b>
{% highlight ruby %}
    sencha help [module] [action]
{% endhighlight %}
por exemplo, tente assim:
{% highlight ruby %}
    sencha help
{% endhighlight %}
Exibe a versão atual e os comandos de nível superior diponíveis, Por exemplo:

{% highlight ruby %}

Sencha Cmd v6.0.0.202
... 

Options
   --beta, -be - Enable beta package repositories
   --cwd, -cw - Sets the directory from which commands should execute
   --debug, -d - Sets log level to higher verbosity
   --info, -i - Sets log level to default
   --nologo, -n - Suppress the initial Sencha Cmd version display
   --plain, -pl - enables plain logging output (no highlighting)
   --quiet, -q - Sets log level to warnings and errors only
   --sdk-path, -sd - The location of the SDK to use for non-app commands
   --strict, -st - Treats warnings as errors, exiting with error if any warnings are present
   --time, -ti - Display the execution time after executing all commands

Categories
   app - Perform various application build processes
   compile - Compile sources to produce concatenated output and metadata
   cordova - Quick init Support for Cordova
   diag - Perform diagnostic operations on Sencha Cmd
   fs - Utility commands to work with files
   generate - Generates models, controllers, etc. or an entire application
   manager - Commands for interacting with Sencha Web Application Manager.
   manifest - Extract class metadata
   package - Manages local and remote packages
   phonegap - Quick init support for PhoneGap
   repository - Manage local repository and remote repository connections
   template - Commands for working with templates
   theme - Commands for low-level operations on themes
   web - Manages a simple HTTP file server

Commands
   ant - Invoke Ant with helpful properties back to Sencha Cmd
   audit - Search from the current folder for Ext JS frameworks and report their license
   build - Builds a project from a legacy JSB3 file.
   config - Load a properties file or sets a configuration property
   help - Displays help for commands
   js - Executes arbitrary JavaScript file(s)
   upgrade - Upgrades Sencha Cmd
   which - Displays the path to the current version of Sencha Cmd

  {% endhighlight %}

  <b>Atenção</b>:O Conteúdo exato depende da versão que você instalou.

 Saída detalhada

  Para reativar a saída detalhada inclua o <b>-info</b> um sinalizador que pode ser usado com qualquer comando Sencha que produza saída.

### Diretório atual 

 Em muitos casos, o Sencha Cmd requer que você defina um diretório atual específico. Ou precisa que você defina detalhes relevantes sobre o SDK do Sencha. O SDK(framework) pode ser determinado automaticamento pelo Sencha Cmd quando é executado a partir de uma pasta de aplicativos gerada ou, para poucos comandos, a partir de uma pasta extraida do SDK

<b>Importante</b> para os comandos a seguir, o Sencha Cmd precisa ser executado a partir da pasta do aplicativo ferado. Os comandos falharão se não forem executados a partir da pasta raiz do aplicativo.

{% highlight ruby %}
    * `sencha generate ...` (for commands other than `app`, `package` and `workspace`)
    * `sencha app ...`
{% endhighlight %}
Isso se aplica também aos packages. Ao executar comandos como <b>sencha package build</b>, o diretório atual deve ser a pasta do package desejado. 

### Feedback dos usuários

#### Problemas

 Se vocês tiverem algum problema ou questões sobre Sencha Cmd, por favor deixe seu comentario.



