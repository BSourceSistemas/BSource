---
layout: minimal
title: Contato
description: Duvidas? Fale conosco.
permalink: /contato/
---
<br>

<form action="https://formspree.io/media@bsource.com.br" method="POST" target="_blank" class="formularioBS" style="width: 100%; max-width: 600px;margin: auto;"> 
   <fieldset><input type="hidden" name="_subject" value="Novo contato!"> 
   <input type="hidden" name="_next" value="https://blog.bsource.com.br/leads"> 
   <input type="hidden" name="_language" value="pt"> 
   <input type="text" name="nome" placeholder="Seu nome" class="" data-vv-id="_jgffphqqw" aria-required="true" aria-invalid="false"> <!---->
    <input type="text" name="email" placeholder="Seu e-mail" class="" data-vv-id="_owa60l0p5" aria-required="true" aria-invalid="false"> <!----> 
    <textarea name="mensagem" onkeyup="adjust_textarea(this)" placeholder="Sua mensagem" class="" data-vv-id="_oubcr77fc" aria-required="true" aria-invalid="false"></textarea> 
    <!----> <button type="submit" class="btn btn-default" style="width: 600px;">Enviar</button>

<!--
<section class="formularioBS" itemprop="formularioBS;">
    <div class="center">
        <img src="/assets/img/logo-bsource.png" alt="BSourceimg" style="margin:0 auto; margin-top: 0px;"><br>
    </div>
    <br>
    <br>
    <br>
      <form accept-charset="UTF-8" action="https://formspree.io/media@bsource.com" method="POST" 
      target="_blank" class="formularioBS" style="width: 100%; max-width: 600px;margin-left: 0px; margin: auto;"> 
     <label for="name" style="color: black;">Nome</label>
     <input type="text" name="nome" placeholder="Seu Nome"><br>
     <label  for="email" style=" color: black;">Email</label>
      <input type="email" name="_replyto" placeholder="seuemail@gmail.com"><br>  
         <label for="subject">Comentários</label>
    <textarea id="subject" name="subject" placeholder="Motivo do contato" rows="5"></textarea><br><br>
        <br><br>
         <input type="hidden" name="subscribe" value="no">
      <!
   <div class="linha">
            <div class="botoes"> 
   </div>
        <input type="hidden" name="utf8" value="✓">
<!>
   <div class="linha">
            <div class="botoes">   
    <button type="submit" style="margin: auto ;
        margin-left: 25px;">Confirmar</button>
        <button type="reset" style=" margin:auto;
        margin-left: 5px;">Resetar os Campos</button>
    <script type="text/javascript">
function adjust_textarea(h) {
    h.style.height = "200px";
    h.style.height = (h.scrollHeight)+"px";
}
</script>
<!>
<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
Vue.use(VeeValidate);
<!>
new Vue({
  el: '#form',
  delimiters: ['${', '}'],
  methods: {
    validateBeforeSubmit: function () {
      this.$validator.validateAll();
      if (!this.errors.any()) {
        this.$refs.contact.submit();
      }
    }
  }
});
</script>
-->

