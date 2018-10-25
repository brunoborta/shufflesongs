<template>
    <li>
       <img :src="song.artworkUrl" />
       {{song.trackName}}
       {{song.artistName}}
    </li>
</template>

<script>
    export default {
        name: 'Song',
        props: {
            song: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    
</style>