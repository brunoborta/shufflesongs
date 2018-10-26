<template>
    <li id="song">
        <img :src="song.artworkUrl" />
        <div>
            <p>{{song.trackName}}</p>
            <p>{{song.artistName}}</p>
        </div>
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
    #song {
        display: flex;
        justify-content: left;
        align-items: center;
        width: 100%;
    }

    #song img {
        width: 20%;
    }


</style>