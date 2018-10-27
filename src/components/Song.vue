<template>
    <li id="song">
        <img :src="song.artworkUrl" />
        <div class="description">
            <p class="title-rose">{{song.trackName}}</p>
            <p>{{song.artistName}} ({{song.primaryGenreName}})</p>
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
        border-bottom: 1px solid rgba(187,96,117,0.1);
        padding: 10px 0;
    }

    #song img {
        width: 10%;
        height: auto;
        border-radius: 5px;
    }

    #song:first-child {
        padding-top: 0;
    }

    #song:last-child {
        border: 0;
        padding-bottom: 0;
    }

    .description {
        padding-left: 1em;
    }

    p {
        margin: 0;
        font-size: 0.725em;
    }

    p.title-rose {
        font-size: 0.85em;
    }

</style>