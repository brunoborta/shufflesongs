<template>
    <div class="logo flex">
        <div v-if="minilogo" class="logo flex">
            <i class="fas fa-random box"></i>    
            <p v-if="minilogo" class="logo-title"> shuffle<span class="title-rose">songs</span></p>
        </div>
        <div v-else class="logo flex">
            <i class="fas fa-random fa-2x box"></i>
            <h2 class="logo-title"> shuffle<span class="title-rose">songs</span></h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'logo',
    props: {
        minilogo: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>
.box {
    padding: 6px;
    border-radius: 5px;
    border: 1px solid #bb6075;
}

.logo-title {
    margin-left: 10px;
}

h2 {
  font-size: 1.75em;
}

.logo > * {
    cursor: pointer;
}

p {
    font-weight: 500;
}
</style>