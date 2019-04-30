<template>
  <div id="app">
   <header >
      <router-link to="/">Home</router-link> |  
      <router-link to="/blog">Blog</router-link> | 
      <router-link to="/about">About</router-link> | 
      <router-link to="/contact">Contact</router-link> | 

   </header>
    <main >
       <router-view/>
    </main>
    
    <footer >
    </footer>
  </div>
</template>
