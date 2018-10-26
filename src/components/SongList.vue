<template>
    <div id="songList">
        <ul v-if="shuffledSongs.length">
			<Song
				v-for="song in shuffledSongs"
				:key="song.id"
				:song="song"
			/>
		</ul>
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
                listSize: 6
            }
        },
        methods: {
            shuffle(songsFromAPI, shuffledSongsArray, size) {
                if(shuffledSongsArray.length >= size) { // Recursive finish
                    return shuffledSongsArray;
                }
                const indexRecordShuffled = Math.floor(Math.random() * songsFromAPI.length);
                // this.shuffledData
                const shuffledArraySize = shuffledSongsArray.length;
                const lastShuffledRecord = shuffledSongsArray[shuffledArraySize-1] || null;
                const currentRecord = songsFromAPI[indexRecordShuffled];
                // add to the shuffled array if it is empty or if the record shuffled is from a different artist
                if(!lastShuffledRecord || (!!lastShuffledRecord && currentRecord.artistId !== lastShuffledRecord.artistId)) {
                    songsFromAPI.splice(indexRecordShuffled, 1);
                    // Excludes the artist record
                    if(currentRecord.wrapperType !== "artist") {
                        shuffledSongsArray.push(currentRecord);
                    }
                }
                return this.shuffle(songsFromAPI, shuffledSongsArray, size);
            }
        },
        mounted() {
            fetch(`${process.env.VUE_APP_SONGS_URL}`)
            .then(response => {
                response.text().then(result => {
                    this.songs = JSON.parse(result).results;
                    this.shuffledSongs = this.shuffle([...this.songs], [], this.listSize);
                });
            })
        }
    }
</script>

<style scoped>
    #songList {
        height: 75vh;
        width: 50vw;
        background-color: #372638;
        -webkit-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        -moz-box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        box-shadow: 3px 3px 10px 4px rgba(37,26,38,0.4);
        display: flex;
        justify-content: center;
    }
</style>