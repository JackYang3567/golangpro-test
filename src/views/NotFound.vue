<template>
   <div class="page-not-found">
        <div class="container">
            <div class="link-back">
                <router-link to="/"><i class="fas fa-times"></i></router-link>
            </div>
            <div class="content">
                <h2>404</h2>
                <h4>Page Not Found</h4>
                <h1>没找到请求的页面资源 {{this.$router.path}}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia magni, reprehenderit ex et ipsum, eius sunt non praesentium, atque quos dolor amet dolorem</p>
            </div>
        </div>
    </div>
</template>
