---
layout: minimal
title: Contato
description: Duvidas? Fale conosco.
permalink: /contato/
---
<div class="row">
  <div class="col-12 text-center">
    <h1>Fale conosco.</h1>
  </div>
</div>
<form action="https://formspree.io/media@bsource.com.br" method="POST" target="_blank"  class="offset-1 col-10">
  <input type="hidden" name="_subject" value="Novo contato!" /> 
  <input type="hidden" name="_next" value="https://blog.bsource.com.br/leads" /> 
  <input type="hidden" name="_language" value="pt" /> 
  <div class="form-group">
    <label for="txtNome">Seu Nome:</label>
    <input type="text" 
           id="txtNome" 
           name="name"
           placeholder="Nome" 
           data-vv-id="_jgffphqqw" 
           aria-required="true" 
           aria-invalid="false"  
           class="form-control"/>
  </div>
  <div class="form-group">
    <label for="txtEmail">Seu E-mail</label>
    <input type="email" 
           class="form-control" 
           id="txtEmail" 
           name="_replyto"
           data-vv-id="_owa60l0p5"
           placeholder="nome@seudominio.com.br"
           aria-required="true" ria-invalid="false"/>
  </div>
  <div class="form-group">
    <label for="txtMensagem">Sua mensagem</label>
    <textarea name="mensagem" 
              onkeyup="adjust_textarea(this)" 
              placeholder="Sua mensagem" 
              class="form-control" 
              id="txtMensagem"
              data-vv-id="_oubcr77fc" 
              aria-required="true" 
              rows="7"
              aria-invalid="false"></textarea>
  </div>
  <button type="submit" class="btn btn-primary btn-block mb-2">Enviar</button>
</form>