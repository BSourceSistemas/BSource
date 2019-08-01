---
layout: post
comments: true
title: "Usando notificações por push pra aplicações Web"
date: 2019-03-15 12:35:54
image: "/assets/img/SenchaCMD.png"
description: "Melhore seus app Web"
main-class: cmd
color: "#2da0c3"
tags:
  - Tutorial
  - ExtJS
  - CMD
categories: Dicas
twitter_text:
introduction: "Adicionando notificações nativas que melhoram sua aplicação web"
author: danielbueno
---

Olá Pessoal tudo certo?

Hoje irei trazer um artigo de autoria da Sencha sobre como melhorar sua aplicação web através de notificações push e Webpush e seus conceitos, espero que ele ajude vocês com suas futuras aplicações web.

## Protocolo de notificações por push da Web

O protocolo Web Push Notifications é relativamente novo. Ele permite que os aplicativos da Web funcionem como aplicativos nativos e recebam mensagens enviadas de um servidor a qualquer momento, mesmo quando o aplicativo da Web não está ativo ou não está carregado no momento em um navegador. Isso permite envolver os usuários com notificações urgentes e relevantes quando eles não estiverem usando seu aplicativo e motivá-los a retornar ao aplicativo.

<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img1_zj2pdm.png" alt="web-push" class="responsive1"/>

Isso deixa claro o valor comercial da implementação de notificações por push da Web em seus aplicativos da Web. Aumenta o engajamento do usuário. O valor geral do seu aplicativo também aumenta, porque as notificações por push tornam seu aplicativo mais útil para seus usuários. Isso melhora a usabilidade dos aplicativos da Web e nos aproxima do desenvolvimento de um único aplicativo da Web para todas as plataformas, em vez de precisarmos desenvolver um aplicativo nativo para cada plataforma.

## Web Push vs Sockets da Web

Antes de entrar nos detalhes da tecnologia, gostaria de falar um pouco sobre as diferenças entre Web Push e Web Sockets. Primeiro, aqui está o que eles têm em comum. Os Web Push e Web Sockets são projetados para implementar comunicação em tempo real entre o aplicativo da Web e o servidor de aplicativos e para enviar dados e atualizações em tempo real do servidor de aplicativos para o seu aplicativo da Web.

Aqui estão as diferenças:

• Os Web Sockets só podem ser usados ​​quando uma página da Web é carregada e ativa. Mas o oposto ocorre com as notificações por push da Web, que podem ser usadas a qualquer momento, inclusive quando o aplicativo está ativo, inativo ou não carregado, e quando o navegador não está ativo ou está fechado.

• Os dados enviados usando o Web Push devem ser criptografados e há um limite de tamanho por mensagem (não deve ser maior que 4Kb). Há também um limite de contagem para o número de mensagens que você pode enviar (o valor limite exato depende do navegador). Alguns navegadores (por exemplo, o Chrome) também podem exigir que uma notificação seja exibida ao usuário sempre que uma mensagem é recebida. Você não tem nenhuma dessas limitações quando usa Web Sockets: você pode enviar qualquer número de mensagens não criptografadas de qualquer tamanho e tratá-las como quiser; e você pode exibir uma notificação ou atualizar silenciosamente os dados em seu aplicativo ou até mesmo não fazer nada.

• A regra geral é usar o Web Sockets para enviar atualizações de dados comuns para seu aplicativo da Web quando um usuário estiver interagindo com o aplicativo. Use as notificações por push da Web para enviar mensagens urgentes e importantes a um usuário que precisam ser recebidas imediatamente, independentemente de o usuário estar ou não trabalhando com seu aplicativo no momento.

## Conceitos Técnicos

Vamos para os detalhes técnicos da tecnologia. Eu gostaria de explicar os detalhes usando um jogo com regras especiais, jogadores e rodadas. Vou começar descrevendo os jogadores do jogo. Existem 5 jogadores envolvidos neste jogo chamados Web Push Notifications:

• Aplicação Web

• Service Worker

• Navegador

• Application Service

• Push Server

Push é um serviço implementado pelo fornecedor do navegador; é uma ponte de comunicação entre o seu servidor de aplicativos e um navegador. Ele é responsável por entregar mensagens do seu servidor de aplicativos para o navegador.

## Usando um jogo para demonstrar Notificações por Push da Web

Usando um jogo, demonstrarei como você pode adicionar notificações push da Web aos seus aplicativos. As regras deste jogo são definidas por várias especificações fornecidas pelo World Wide Web Consortium e pela Internet Engineering Task Force:

• As comunicações entre o Navegador e o aplicativo da web ou o service worker associado a esse aplicativo são descritas na especificação do Push API.

• A exibição de diferentes tipos de notificações, bem como a manipulação de notificações, são descritas na especificação da API de Notificações.

• As comunicações entre o Application Server e o Push Server são definidas na especificação do Web Push Protocol.

• Há também especificações adicionais que descrevem a criptografia de mensagens push e a identificação do servidor de aplicativos que permitem ao servidor de aplicativos provar que tem permissão para enviar mensagens para o usuário.

<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img2-1024x485_ztjzgi.png" title="notificacoes" alt="web-push" class="responsive1"/>

## Rodadas de Jogo

O jogo foi dividido em 4 rodadas para exemplificar o conceito e o alvo de cada uma delas e como você pode implementar todas as etapas no seu applicatiovo

### 1º Rodada: Registro do Service Worker

As Notificações por Push Web exigem que o Service Worker lide com mensagens push, portanto, a primeira rodada será registrar seu service worker. Apenas o seu aplicativo da web e o navegador estão envolvidos nesta rodada. E esta rodada ocorre no carregamento da página.

O aplicativo da Web envia uma solicitação a um navegador para registrar um Service Worker e o navegador responde com o objeto SeviceWorkerRegistration se o Service Worker foi
registrado com êxito.

<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img3-1024x623_f0lwxt.png" title="registro" alt="ServiceWorker" class="responsive1"/>


Para implementar essa rodada, adicione o seguinte código ao seu aplicativo Web

{% highlight ruby %}
if ( 'serviceWorker' no navegador ) {
if ( 'PushManager' na window ) {
navigator. serviceWorker . register ( 'ServiceWorker.js' ) . then ( function ( registration ) {
// Inicializando
} )
. catch ( function ( ) {
// tratamento de erros
} ) ;
} else {
// tratamento de erros
}
} else {
// tratamento de erros
}

{% endhighlight %}

Primeiro, precisamos verificar se o navegador é compatível com Service Workers. Então, precisamos verificar se o navegador suporta notificações push da web. Como o suporte ao navegador está crescendo, é sempre uma boa ideia adicionar as duas verificações.

Se ambos forem suportados, nós registramos nosso service worker. Para esta etapa, chamamos o método navigator.serviceWorker.register () e passamos o caminho para o nosso arquivo do Service Worker como um parâmetro. Após essa etapa, o navegador baixará esse arquivo e o executará em um ambiente de trabalho de serviço. O arquivo do Service Worker é um arquivo JavaScript padrão, mas o navegador “dará acesso” às APIs do service worker, incluindo push. Se tudo funcionasse corretamente e não houvesse erros, a promessa retornada por register () será resolvida. Se houver algum tipo de erro, a promessa é rejeitada e precisamos lidar com esse caso, bem como quando o navegador não suporta os Trabalhadores do Serviço. Quando register () resolve, ele retorna um objeto ServiceWorkerRegistration que será usado na próxima rodada.

### 2ª Rodada: Subscription

A segunda rodada lida com a assinatura do Web Push Notifications. É quando você pergunta ao usuário se ele deseja receber notificações via Web do seu aplicativo e, se ele concordar, você o inscreve. Esta rodada envolve mais jogadores - aplicativos da Web, Navegador, servidor de aplicativos e Push Server e mais comunicações.

Esta rodada deve ser jogada quando um usuário estiver pronto para se inscrever. Você deve pedir a ele para assinar apenas quando tiver certeza de que é relevante e significativo para ele, porque você terá apenas uma chance de perguntar. Se o usuário bloquear a solicitação, o navegador não permitirá que você faça essa pergunta novamente mais tarde. A única maneira de desbloquear um aplicativo é alterá-lo nas configurações do navegador. E como você pode imaginar, quase nenhum usuário faz isso. Então, você precisa explicar ao usuário que tipo de notificações ele receberá e por quê. Você também pode se inscrever para o usuário usando uma mensagem personalizada na página, e quando o usuário clicar em sim, mostre a ele uma solicitação do navegador do sistema.

O que acontece nesta rodada? Seu aplicativo da Web solicita ao navegador que assine o usuário para receber notificações por push da Web. Se o usuário concordar, o navegador enviará uma solicitação ao servidor de envio para gerar uma assinatura de envio. O Servidor de Envio responde ao navegador com um objeto de assinatura de envio que o navegador encaminha para seu aplicativo da web. Como a última etapa, seu aplicativo da web envia esse objeto de assinatura de envio para seu servidor de aplicativos por meio de uma chamada do Ajax, por exemplo. E o seu servidor de aplicativos o salva para usar na próxima rodada.


<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img4-1024x634_ue2bvh.png" title="appweb"  alt="Push" class="responsive1"/>

Seu WebApp é o principal dessa rodada, portanto, esse código deve ser adicionado ao seu WebApp

{% highlight ruby %}
navigator.serviceWorker.ready.then(function(registration) {
registration.pushManager.subscribe({
userVisibleOnly: true,
applicationServerKey: urlBase64ToUint8Array('...')
})
.then(function(subscription) {
// The subscription was successful
savePushSubscription(subscription);
})
.catch(function(e) {
//error handling
});
});
{% endhighlight %}

Quando o funcionário do serviço estiver pronto, poderemos assinar um usuário chamando o método registration.pushManager.subscribe () do objeto de registro do Service Worker que recebemos na rodada anterior. O navegador solicita permissão para mostrar notificações a um usuário. Se o usuário permitir, a promessa será resolvida com um objeto de assinatura. O objeto de assinatura contém informações necessárias para enviar uma notificação por push para um usuário. Agora, você precisará salvar este objeto em seu servidor de aplicativos. Eu não vou mais fundo neste processo - poderia ser apenas uma chamada Ajax padrão para o servidor, ou você poderia enviar este objeto como um JSON ou uma string e então o servidor precisaria salvar este objeto em um banco de dados. Eu não mostrarei este código, porque depende muito de como o seu servidor de aplicativos é implementado.

### Pedido de Permissão

Se o seu aplicativo da web não tiver permissões para mostrar notificações no momento de chamar o subscribe(), o navegador solicitará as permissões para você. Mas há outra opção - você pode solicitar permissões manualmente chamando o método Notification.requestPermission diretamente. Esse método retornará uma promessa que é resolvida com a permissão escolhida pelo usuário. Valores possíveis para isso são concedidos, negados ou padrão.

{% highlight ruby %}
Notification.requestPermission(function(result) {
if (result!== 'granted') {
//handle permissions deny
}
});
{% endhighlight %}

### Parâmetros de Assinatura

Vamos ver o objeto de parâmetro passado para o método de inscrição:

{% highlight ruby %}
reg. pushManagerpushManager.subscribe ( {
userVisibleOnly : true ,
applicationServerKey : new Uint8Array ( [ ... ] )
} ) ;
{% endhighlight %}

•userVisibleOnly: Se estiver definido como true, significa que cada mensagem de envio resultará na exibição de uma notificação para o usuário. Mensagens push silenciosas enviadas em segundo plano, quando o usuário não é notificado, não são permitidas neste caso. Atualmente, o Google Chrome permite que essa opção seja definida como verdadeira, pois o desenvolvedor poderia, em teoria, usar o modo silencioso para fazer coisas desagradáveis, como configurar o rastreamento geográfico oculto, por exemplo. O Firefox suporta um número limitado de mensagens push silenciosas. Pode haver alterações na especificação em relação a essa regra.

•applicationServerKey: É a parte pública de um par de chaves pública / privada que identifica seu servidor de aplicativos. O navegador enviará essa chave do servidor de aplicativos para o servidor de envio e será usado pelo servidor de envio para identificar se o aplicativo que está assinando um usuário é o mesmo aplicativo que está enviando mensagens para esse usuário. Vou explicar o processo de identificação em detalhes na próxima rodada.

### Objeto de assinatura

Vamos examinar o objeto PushSubscription que é retornado,resolvendo a promessa.Esse objeto PushSubscription está associado ao Service Worker que registramos na rodada anterior. Esta assinatura Push descreve a ponte de entrega para mensagens push

{% highlight ruby%}
interface PushSubscription {
readonly atribute endpoint ;
// "https: // {push_server_url} / {user_identifier}",
function getKey ( ) ;
// auth - autenticação secreta
// p256dh - chave para criptografar mensagens
} ;
{% endhighlight %}

Ele contém duas partes importantes:

•endpoint é um servidor de envio URl seguido por um identificador de usuário exclusivo. Essa URL é usada
pelo servidor de aplicativos para enviar mensagens ao servidor de envio.

•O método getKey retorna duas chaves: auth é um segredo de autenticação gerado pelo navegador e p256dh é uma chave P-256 ECDH pública que pode ser usada para criptografar mensagens push.

Ambas as chaves serão usadas pelo servidor de aplicativos para enviar dados de mensagens ao service worker. O endpoint define para onde enviar mensagens push e as chaves definem como criptografá-las. Você precisa enviar os dois valores para o seu servidor de aplicativos e cabe a você como você os envia.

3º Rodada: Mensagem Push

A terceira rodada está enviando mensagens push. Essa rodada ocorre quando algo urgente e relevante acontece e o usuário precisa saber. Por exemplo, se o voo do usuário está atrasado ou ele recebeu uma nova mensagem em um bate-papo.

Quais partes do jogo serão disputadas nesta rodada? O servidor de aplicativos envia uma mensagem de envio ao servidor de envio. O servidor de envio envia essa mensagem ao navegador quando o navegador está on-line. O navegador ativa o Service Worker associado à assinatura push usada para enviar esta mensagem. E o Service Worker manipula essa mensagem e mostra uma notificação ao usuário.

<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img5-1024x621_t5ahcd.png" title="Mensagem" alt="ServiceWorker" class="responsive1"/>

A primeira etapa dessa rodada é feita pelo servidor de aplicativos. O servidor de aplicativos solicita a entrega de uma mensagem de envio enviando uma solicitação HTTP POST ao servidor de envio usando a URL do servidor de envio e o identificador de usuário do terminal recebido do aplicativo da Web na rodada anterior. O conteúdo da mensagem push criptografada é incluído no corpo da solicitação. Essa solicitação deve usar o protocolo HTTPS. Este protocolo fornece proteção de confidencialidade e integridade de partes externas para assinaturas e envio de mensagens.

Quando o servidor de envio recebe essa solicitação, ele responde com uma resposta indicando que a mensagem de envio foi aceita e enfileira a mensagem. Essa mensagem permanecerá enfileirada até que o navegador fique on-line e o servidor de envio envie a mensagem.

Pedido POST

{% highlight ruby %}
POST / { user_identifier }
Host HTTP / 1.1 : { push_server_url }
TTL : 15
Content - Tipo : text / plain ; charset = utf8
Conteúdo - Comprimento : 36

{ encrypted_message }

{% endhighlight %}

O Application server pode adicionar alguns cabeçalhos adicionais a essa solicitação para informar ao servidor de envio como lidar com a mensagem:

•Prefer: O servidor de aplicativos pode incluir o campo de cabeçalho Preferir com a preferência "respond-async" para solicitar confirmação do servidor de envio quando uma mensagem for entregue e reconhecida pelo navegador.

Prefer respond-async

•Time-to-Live: O servidor de envio pode melhorar a confiabilidade da entrega de mensagens de envio, armazenando mensagens de envio por um período. Algumas mensagens push não são úteis depois de um determinado período. Portanto, essas mensagens não devem ser entregues. É por isso que o servidor de aplicativos DEVE incluir o campo de cabeçalho TTL (Time-To-Live) na solicitação de entrega da mensagem de envio. O campo de cabeçalho TTL contém um valor em segundos que sugere quanto tempo uma mensagem de envio deve ser enfileirada pelo servidor de envio. Quando o período de TTL terminar, o servidor de envio NÃO DEVE tentar entregar a mensagem de envio ao navegador.

TTL : 15

•Urgência: Para um dispositivo alimentado por bateria, geralmente é crítico evitar o consumo de recursos para receber mensagens triviais, portanto, é útil se um servidor de aplicativos puder definir a urgência de uma mensagem e se o navegador puder solicitar apenas mensagens de urgência específica. . O servidor de aplicativos PODERÁ incluir a urgência da mensagem na solicitação de entrega da mensagem de envio. Os valores possíveis são “muito baixo” / “baixo” / “normal” / “alto”.

Urgência: alta

•Tópico: Uma mensagem de envio que foi enfileirada pelo servidor de envio pode ser substituída por um novo conteúdo. Se o navegador estiver offline durante o tempo em que as mensagens push são enviadas, a atualização de uma mensagem push evita o envio de mensagens desatualizadas para o navegador. Somente as mensagens push que receberam um tópico podem ser substituídas. Uma mensagem de envio com um tópico substitui qualquer mensagem de envio pendente por um tópico idêntico.

Tópico: upd

### Criptografia de Mensagens

Uma mensagem Push onde não inclui nenhum dado.Nesse caso, a solicitação POST terá um corpo vazio, e o responsável pelo serviço pode precisar buscar alguns dados necessários antes de exibir uma notificação para o usuário. Ou o servidor de aplicativos pode enviar alguns dados chamados de carga útil juntamente com a mensagem de envio, para que o funcionário do serviço possa evitar fazer a solicitação extra. No entanto, todos os dados de carga útil devem ser criptografados. É um ponto importante. O HTTPS fornece comunicação segura entre o navegador e o servidor de aplicativos, porque você confia no servidor de aplicativos. No entanto, o navegador escolhe qual servidor de envio será usado para entregar os dados, para que você, como desenvolvedor do aplicativo, não possa controlá-lo. O HTTPS só pode garantir que ninguém possa ler ou modificar a mensagem em trânsito para o servidor de envio. Mas uma vez que o servidor de envio recebê-lo, pode, teoricamente, retransmitir os dados para terceiros ou modificá-los. Para se proteger contra esse problema, você deve criptografar os dados para garantir que um servidor de envio não possa ler ou modificar os dados de carga útil.

Você deve criptografar uma mensagem push usando curva elíptica Diffie-Hellman (ECDH) na curva P-256. O navegador gera um par de chaves ECDH e um segredo de autenticação que associa a cada assinatura criada. A chave pública ECDH e o segredo de autenticação são enviados ao Servidor de Aplicativos com outros detalhes da assinatura push e são usados ​​para criptografar os dados da mensagem.

É altamente recomendável que você use uma biblioteca para criptografar dados de carga útil e não a implemente manualmente. Embora você possa encontrar uma descrição detalhada do processo de criptografia no Web Push Protocol, o padrão pode ser alterado e, em seguida, você precisará ajustar e verificar sua implementação.

Aqui está a <a href="https://github.com/web-push-libs/web-push" target="blank">biblioteca de criptografia para o Node.js</a> desenvolvido pelo Google. Existem também bibliotecas para outros idiomas.

### Identificação voluntária do servidor de aplicativos

É aqui que o nosso applicationServerKey que enviamos para o método de assinatura na rodada anterior desempenha seu papel. O servidor de aplicativos precisa provar que tem permissão para enviar notificações ao usuário, e o servidor de envio precisa validar essa etapa.

Para fazer isso, o Servidor de Aplicativos adiciona um cabeçalho de Autorização, que contém informações assinadas com a chave privada, juntamente com sua chave pública - applicationServerKey - compartilhada com o Servidor de Envio quando o PushSubscription foi criado. Quando o servidor de envio recebe essa solicitação, ele valida essa assinatura, verifica se a solicitação foi assinada usando a chave privada associada ao applicationServerKey associado à PushSubscription que recebe a solicitação. Se a assinatura for válida, o servidor de envio saberá que é uma mensagem de envio válida do servidor de aplicativos autorizado. Ele fornece proteção de segurança que impede que qualquer outra pessoa envie mensagens para os usuários de um aplicativo.

POST / { USER_IDENTIFIER } HTTP / 1.1

host : { push_server_url }

TTL : 15

Conteúdo - Comprimento : 136

Autorização : Portador

eyJ0eXAi ... Crypto - Chave : p256ecdsa = BA1Hxzy ... { encrypted_message }

O cabeçalho de autorização contém um JSON Web Token (JWT). Este token é uma forma de enviar uma mensagem a terceiros, para que o destinatário possa validar quem a enviou. Inclui as seguintes reivindicações:

•A afirmação "aud" (Audiência) no token DEVE incluir a serialização unicode da origem da URL do servidor de envio. Isso liga o token a um servidor de envio específico.

•A reivindicação "exp" (Expiry) DEVE ser incluída com o tempo que o token expira. Isso limita o tempo em que um token é válido. Uma reivindicação “exp” NÃO DEVE demorar mais de 24 horas a partir da data da solicitação.

•Alegação "sub" (Assunto) no JWT. A afirmação "sub" DEVE incluir um URI de contato para o servidor de aplicativos como um "mailto:" (email) ou um "https:" URI.
Há um cabeçalho adicional "Crypto-Key" que inclui o ApplicationServerKey codificado por base64url.

### Manipulando a Mensagem Push

O Servidor de Aplicativos enviou uma mensagem de envio ao usuário, o Servidor de Envio validou-a e encaminhou-a para o navegador. O navegador acordou o Service Worker e enviou um evento push para ele. E o Service Worker manipulou esse evento e processou a mensagem push.

A última etapa dessa rodada é feita pelo Service Worker. Este código deve ser adicionado ao seu Service Worker:

{% highlight ruby %}
auto. addEventListener ( 'push' , function ( event ) {
var data = event. data . json ( ) ;

event. waitUntil ( self.registration . showNotification ( data. title , {
body : data. body ,
ícone : data. ícon ,
tag : data. tag
} ) ) ;
} ) ;
{% endhighlight %}

A função de ouvinte do evento de envio do Service Worker recebe um objeto de evento como um parâmetro. Este objeto de evento inclui dados da mensagem de envio como uma propriedade. E o manipulador mostra uma notificação com base nesses dados chamando um método showNotification. Você precisa passar um título de notificação e um objeto de configuração de notificação para o método. Esses objetos de configuração podem conter parâmetros diferentes que definem o texto Notification: body para notificação, ícone, imagem, vibração e outros.

dois pontos importantes:

•O Firefox permite que um número limitado (cota) de mensagens enviadas seja enviado para um aplicativo sem mostrar uma notificação, e o limite é atualizado sempre que o site é visitado. Mas o Chrome exige que todas as mensagens push mostrem uma notificação e, se você não exibir uma notificação, o Chrome mostrará uma notificação padrão.

•O método waitUntil informa ao navegador para manter o Service Worker em execução até que a promessa passada a esse método seja resolvida. Se você não adicionar esse método, o navegador desligará o Service Worker imediatamente e a notificação não será exibida.

### Manipulando o clique de notificação

O Service Worker precisa manipular um clique de Notificação.Uma das respostas mais comuns é fechar uma notificação e abrir uma janela / guia para um URL específico. Podemos fazer isso com a API clients.openWindow ().

{% highlight ruby %}
auto. addEventListener ( 'notificationclick' , function ( event ) {
event. notification . close ( ) ;
event. waitUntil ( clients. openWindow ( 'http://mywebsite.com' ) ) ;
} ) ;
{% endhighlight %}

### Notificações com ações

A notificação também pode conter ações - botões com algum texto. Você pode defini-los usando um parâmetro de ações do objeto de configuração de notificação. E, em seguida, no manipulador do notificationclick, você pode verificar qual botão foi clicado.

{% highlight ruby %}
self.registration.showNotification(data.title, {
body: data.body,
actions: [
{ action: 'ok', title: 'Yes' },
{ action: 'decline', title: 'No' }
]
});
…

self.addEventListener('notificationclick', function(event) {
if (event.action == 'ok') {
// do something
}
});
{% endhighlight %}

### Notificação ao Fechar

E a última coisa que lidar é um evento de notificação. Isso acontece quando um usuário não clica em nenhum botão de ação ou notificação, mas clica no botão Fechar. É um bom lugar para realizar alguns registros, por exemplo.

{% highlight ruby%}
self.addEventListener('notificationclose', function(event) {
//do something
});
{% endhighlight %}

Há uma exceção à regra para mostrar sempre uma notificação. Não é obrigatório mostrar uma Notificação quando o usuário estiver usando ativamente seu aplicativo. Mas e se você ainda quiser que o usuário saiba que um evento ocorreu? Uma abordagem é enviar uma mensagem do trabalhador de serviço para a página,assim a página da web pode mostrar ao usuário uma notificação ou atualização, informando-o do evento.

Para lidar com este caso, podemos verificar se qualquer cliente de janela está focado e enviar a mensagem para cada cliente usando o método postMessage. Esse método é uma maneira comum de organizar um canal de comunicação entre um Service Worker e a página. E se nenhuma janela do cliente estiver focada, podemos mostrar uma notificação normal.

{% highlight ruby %}
if ( concentrado ) {
clientes. forEach ( function ( cliente ) {
cliente. postMessage ( {
message : data. message
} ) ;
} ) ;
} else {
return self. registro . showNotification ( dados. título , {
corpo : dados. mensagem
} ) ;
}
{% endhighlight %}

A terceira rodada é a rodada mais importante.Requer o maior esforço para implementar. Você precisa gerenciar toda a mensagem de envio do Application Server para o ServiceWorker e manipulá-los na implementação do ServiceWorker.

### 4ª Rodada: Desinscrição

A quarta rodada é a desinscrição das notificações por push da Web. Isso acontece quando um usuário não deseja mais receber notificações via Web do seu aplicativo. Esta rodada envolve os mesmos jogadores que a rodada de Assinaturas - Aplicativo da Web, Navegador, Servidor de Aplicativos e Push Server.

Todo o processo é semelhante ao processo de assinatura. Seu aplicativo da web pede ao navegador para cancelar a assinatura do usuário de receber notificações por push da Web. O navegador envia uma solicitação ao servidor de envio para remover a assinatura de envio. O Servidor de Envio responde ao navegador com a confirmação e o navegador encaminha essa confirmação para seu aplicativo da web. Como última etapa, seu aplicativo da web envia a confirmação para o servidor de aplicativos. E o servidor de aplicativos remove o registro de assinatura do banco de dados ou de outro armazenamento.

<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img6-1024x621_bl0xgv.png" title="assinatura" alt="ServiceWorker" class="responsive1"/>

Seu aplicativo da web é o player principal, e o código abaixo deve ser adicionado ao seu web App:

{% highlight ruby %}
cadastro. pushManager . getSubscription ( ) . then ( function ( subscription ) {
if ( assinatura ) {
return subscription. unsubscribe ( ) . then ( function (com sucesso ) {
removePushSubscription ( assinatura ) ;
}) . catch ( function ( e ) {
// tratamento de erros
}) ;
}
})
. catch ( function ( erro ) {
// tratamento de erros
})
{% endhighlight %}

Solicitamos um objeto Subscription de um pushManager, quando a promessa é resolvida, chamamos um método de cancelamento de assinatura do objeto de assinatura. E se a assinatura foi removida com sucesso do servidor de envio, chamamos um método que envia uma solicitação ao servidor de aplicativos para excluir essa assinatura.

### Rodada adicional: Expiração da Assinatura

Há também uma rodada adicional - vencimento da assinatura. Isso acontece quando a assinatura está prestes a expirar (o servidor fica sobrecarregado ou o usuário fica off-line por um longo período). Isso é altamente dependente do servidor, portanto, o comportamento exato é difícil de prever.


<img src="https://res.cloudinary.com/dkwsuycgn/image/upload/v1564426752/web-push-notifications-img7-1024x623_dg1s3f.png" title="expire" alt="ServiceWorker" class="responsive1"/>

Em qualquer caso, você pode lidar com essa situação observando o evento <a href="https://developer.mozilla.org/en-US/docs/Web/Events/pushsubscriptionchange" target="black"> pushsubscriptionchange</a> em seu Service Worker e fornecendo um manipulador de eventos; esse evento é acionado apenas neste caso específico.

{% highlight ruby %}
auto. addEventListener ( 'pushsubscriptionchange' ,
function ( record , newSubscription , oldSubscription ) {
removePushSubscription ( oldSubscription ) ;
savePushSubscription ( newSubscription ) ;
} ) ;
{% endhighlight %}

No manipulado de eventos, você precisa remover a assinatura antiga passada como um primeiro parâmetro do Application Server e salvar nova assinatura passada como um segundo paramêtro.

### Suporte

•**Browser**: Chrome, Firefox, Edge, Safari, Opera, IE

•**Desktop**: Chrome, Firefox, Edge, Safari, Opera.

•**Mobile**: Suporte ao Chrome, Firefox, Edge (beta), Opera

### Conclusão

A tecnologia Web Push Notification está pronta para ser usada amplamente. Ele ajuda você a se comunicar com seus usuários de maneira mais eficiente, envolve os usuários ao fornecer notificações urgentes e relevantes e torna os aplicativos da Web melhores em geral.
