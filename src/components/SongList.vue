<template>
    <div id="songList">
        <div v-if="shuffledSongs.length">
            <div class="flex playlist-title">
                <h1>{{myPlaylist}}</h1>
                <button @click="reShuffle"><i class="fas fa-random fa-2x"></i></button>
            </div>
            <ul v-if="shuffledSongs.length">
                <Song
                    v-for="song in shuffledSongs"
                    :key="song.id"
                    :song="song"
                />
            </ul>
        </div>
        <i v-else class="fas fa-spinner fa-spin fa-3x"></i>
	</div>
</template>

<script>
    import Song from './Song.vue';

    export default {
        name: 'SongList',
        components: {
            Song
        },
        data() {
            return {
                songs: [],
                shuffledSongs: [],
                listSize: 6,
                myPlaylist: "My Playlist"
            }
        },
        methods: {
            shuffle(songsFromAPI, shuffledSongsArray, size) {
                if(shuffledSongsArray.length >= size) { // Recursive finish
                    return shuffledSongsArray;
                }
                const indexRecordShuffled = Math.floor(Math.random() * songsFromAPI.length);
                const shuffledArraySize = shuffledSongsArray.length;
                const lastShuffledRecord = shuffledSongsArray[shuffledArraySize-1] || null;
                const currentRecord = songsFromAPI[indexRecordShuffled];
                // Add to the shuffled array if it is empty or if the record shuffled is from a different artist
                if(!lastShuffledRecord || (!!lastShuffledRecord && currentRecord.artistId !== lastShuffledRecord.artistId)) {
                    songsFromAPI.splice(indexRecordShuffled, 1);
                    // Excludes the artist record
                    if(currentRecord.wrapperType !== "artist") {
                        shuffledSongsArray.push(currentRecord);
                    }
                }
                return this.shuffle(songsFromAPI, shuffledSongsArray, size);
            },
            reShuffle() {
                this.shuffledSongs = this.shuffle([...this.songs], [], this.listSize);
            },
        },
        mounted() {
            fetch(`${process.env.VUE_APP_SONGS_URL}`)
            .then(response => {
                response.text().then(result => {
                    this.songs = JSON.parse(result).results;
                    this.shuffledSongs = this.shuffle([...this.songs], [], this.listSize);
                });
            });
        }
    }
</script>

<style scoped>
    #songList {
        display: flex;
        align-items: center;
        height: 100%;
    }
    ul {
        background-color: #372638;
        -webkit-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        -moz-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        align-self: center;
        padding: 10px 0 10px 10px;
    }

    @media only screen and (max-device-width: 450px) {
        ul {
            width: 75vw;
        }
    }

    @media only screen and (min-device-width: 451px) and (max-device-width: 850px) {
        ul {
            width: 50vw;
        }
    }

    @media only screen and (min-device-width: 851px) {
        ul {
            width: 35vw;
        }
    }

    .fa-spinner {
        justify-content: center;
        align-self: center;
    }
    .playlist-title {
        justify-content: space-between;
    }
    h1 {
        font-size: 2.25em;
        margin: 0;
    }
    button {
        background-color: #bb6075;
        border-radius: 100%;
        border: 0;
        color: white;
        padding: 10px;
        -webkit-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        -moz-box-shadow: 3px 0 10px 4px rgba(37,26,38,0.4);
        box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        cursor: pointer;
    }
</style>