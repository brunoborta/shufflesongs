<template>
    <div class="navbar">
        <div class="logo flex minilogo">
            <Logo minilogo="true" />
        </div>
    </div>
</template>

<script>
    import Logo from './Logo.vue';

    export default {
        name: 'app',
        components: {
            Logo
        },
    }
</script>

<style scoped>
    .navbar {
        width: 100vw;
        -webkit-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        -moz-box-shadow: 3px 0 10px 4px rgba(37,26,38,0.4);
        box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        display: flex;
    }
    .minilogo {
        margin-left: 2em;
    }
</style>