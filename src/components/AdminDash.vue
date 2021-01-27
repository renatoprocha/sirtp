<template>
  <div id="appe">
    <h1 id="estilo">Menu admin</h1>
    <div id="nave">
      <router-link to="/admin">Gerir produtos</router-link> <br>
      <router-link to="/about">Gerir clientes</router-link> <br>
      <router-link to="/signup">Informações loja</router-link> <br>
      <router-link to="/login">Opções</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>


#estilo{
    color: black;
}

#appe {
  height: 375px;
  width: 200px;
  text-align: left;
  color: #502c2f;
  background-color:rgb(101, 141, 228);
}

#nave {
  padding: 30px;
  line-height: 75px;
}

#nave a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
}

#nave a.router-link-exact-active {
  color: #42b983;
}
</style>