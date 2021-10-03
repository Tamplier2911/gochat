<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/"> Home</router-link>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav">
          <router-link to="/">Home</router-link>&nbsp;&nbsp;

          <router-link to="/about">About</router-link>&nbsp;&nbsp;

          <router-link to="/myinfo">Per Steen Olsen</router-link>&nbsp;&nbsp;

          <router-link to="/employee">Web API</router-link>&nbsp;&nbsp;

          <router-link to="/error">Secret</router-link>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>
