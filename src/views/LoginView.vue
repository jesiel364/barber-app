<script>


</script>

<template>
  <div id="container" class='container'>

    <div class="text-light  p-5">
    <img class="img-fluid mx-auto" id='logo' src="/src/assets/barber.png" />
    <h1 id="logo-title" class="text-center text-light mt-3 ">YDA JEAN - BARBER SHOP</h1>
  <form>  <label id="label" class=' mt-5 mb-2'>Entre na sua conta</label>
    <div class="mx-auto">
      
        <!-- Email input -->
        <div class="field mb-3">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field mb-5">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Senha">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div id="bt" class="field mb-5">
          <p class="control">
            <RouterLink class="mx-auto m-3 mt-5" to="/servicos"> <button id='btLogin' class="btn btn-success text-center">
              Entrar
            </button></RouterLink>
          </p>
        </div>

        <!-- Register buttons -->
        <div class="text-center">
          <p>ou entre com:</p>
          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-facebook-f"></i>
          </button>

          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-google"></i>
          </button>

          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-twitter"></i>
          </button>

          <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-github"></i></button>
          
        </div>
      
    </div></form>
    </div>
  </div>
</template>

<style scoped>
@import "bulma/css/bulma.min.css";

#logo {
  width: 150px;
  height: 150px;
  
}

#label {
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
}

input {
  /* background-color: #282828; */
}

#container, form {
  max-width: 400px;
  margin: 0 auto;
  
}

#bt {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  /* background-color: #282828; */
  justify-content: center;

}

#btLogin{
  max-width: 300px;
}
</style>