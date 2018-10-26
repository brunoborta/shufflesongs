<template>
    <div class="navbar">
        <div class="logo flex minilogo">
            <i class="fas fa-random box"></i>
            <p class="logo-title"> shuffle<span class="title-rose">songs</span></p>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
    .navbar {
        width: 100vw;
        -webkit-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        -moz-box-shadow: 3px 0 10px 4px rgba(37,26,38,0.4);
        box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        display: flex;
    }
    .box {
        border-radius: 5px;
    }
    .minilogo {
        align-items: center;
        margin-left: 2em;
    }
    .minilogo p {
        font-weight: 500;
    }

</style>