---
layout: default
permalink: /newsletter
---

<hr><br>

<section class="formularioBS" itemprop="formularioBS;">
    <div class="center">
        <img src="https://i.ibb.co/prnzMNG/bsource-contato-newslater22.png" align= "middle" alt="BSourceimg" style="margin:0 auto; margin-top: 0px;"><br>
    </div>
      <form accept-charset="UTF-8" action="https://formkeep.com/f/4416f269695a" method="POST" 
      target="_blank" class="formularioBS" style="width: 100%; max-width: 600px;margin-left: 0px; margin: auto;"> 
     <label for="name" style="color: white;">Nome</label>
     <input type="text" id="name" name="name" placeholder="Luis Fernando"><br>
     <label  for="email" style=" color: white;">Email</label>
      <input type="email" id="email" name="email" placeholder="luis@gmail.com"><br>
        <label for="range" style=" color: white;">Qual a chance de você recomendar o nosso blog a um amigo?</label>
        <input type="range" id="range" name="range" min="0" max="10">
        <br><br>
         <input type="hidden" name="subscribe" value="no">
      
   <div class="linha">
            <div class="botoes"> 
        <label for="checkbox" style="color: white;"><input type="checkbox" id="checkbox" name="subscribe" value="yes" checked>Desejo receber notificações de novos conteúdos
        </label><br><br>
    
     
        <input type="hidden" name="utf8" value="✓">

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

<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
Vue.use(VeeValidate);

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
    