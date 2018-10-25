<template>
    <div>
        <ul v-if="songs.length">
			<Song
				v-for="song in songs"
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
                    console.log(response);
                    response.json();
                })
                .then(response => {
                    this.songs = response;
                    this.shuffledSongs = this.shuffle([...this.songs], [], this.listSize);
                });
            this.songs =  [
        {
            "artistName": "Charlie and the Chewie Humans",
            "id": 1171421960,
            "wrapperType": "artist",
            "artistType": "Artist",
            "primaryGenreName": "Metal"
        },
        {
            "wrapperType": "track",
            "id": 579273550,
            "trackExplicitness": "explicit",
            "trackCensoredName": "Bomb Secrets",
            "collectionId": 879273553,
            "trackName": "Bomb Secrets",
            "country": "USA",
            "primaryGenreName": "Metal",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fcharlie-and-the-chewy-humans-epithet.png?alt=media&token=6a1baa1d-dfe1-4cb4-8042-b11de7b26dce",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 1171421960,
            "trackTimeMillis": 207679,
            "collectionName": "Epithet",
            "artistName": "Charlie and the Chewie Humans"
        },
        {
            "country": "USA",
            "primaryGenreName": "Metal",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fcharlie-and-the-chewy-humans-epithet.png?alt=media&token=6a1baa1d-dfe1-4cb4-8042-b11de7b26dce",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 1171421960,
            "trackTimeMillis": 207679,
            "collectionName": "Epithet",
            "artistName": "Charlie and the Chewie Humans",
            "wrapperType": "track",
            "id": 579273551,
            "trackExplicitness": "explicit",
            "trackCensoredName": "Ghosts of Mine",
            "collectionId": 879273553,
            "trackName": "Ghosts of Mine"
        },
        {
            "trackName": "Heartbeat Fire",
            "country": "USA",
            "primaryGenreName": "Metal",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fcharlie-and-the-chewy-humans-epithet.png?alt=media&token=6a1baa1d-dfe1-4cb4-8042-b11de7b26dce",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 1171421960,
            "trackTimeMillis": 207679,
            "collectionName": "Epithet",
            "artistName": "Charlie and the Chewie Humans",
            "wrapperType": "track",
            "id": 579273552,
            "trackExplicitness": "explicit",
            "trackCensoredName": "Heartbeat Fire",
            "collectionId": 879273553
        },
        {
            "artistName": "Charlie and the Chewie Humans",
            "wrapperType": "track",
            "id": 579273553,
            "trackExplicitness": "explicit",
            "trackCensoredName": "Endless Glory",
            "collectionId": 879273553,
            "trackName": "Endless Glory",
            "country": "USA",
            "primaryGenreName": "Metal",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fcharlie-and-the-chewy-humans-epithet.png?alt=media&token=6a1baa1d-dfe1-4cb4-8042-b11de7b26dce",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 1171421960,
            "trackTimeMillis": 207679,
            "collectionName": "Epithet"
        },
        {
            "trackCensoredName": "Riot!",
            "collectionId": 879273553,
            "trackName": "Riot!",
            "country": "USA",
            "primaryGenreName": "Metal",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fcharlie-and-the-chewy-humans-epithet.png?alt=media&token=6a1baa1d-dfe1-4cb4-8042-b11de7b26dce",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 1171421960,
            "trackTimeMillis": 207679,
            "collectionName": "Epithet",
            "artistName": "Charlie and the Chewie Humans",
            "wrapperType": "track",
            "id": 579273554,
            "trackExplicitness": "explicit"
        },
        {
            "wrapperType": "artist",
            "artistType": "Artist",
            "primaryGenreName": "Rock",
            "artistName": "John Dollar",
            "id": 909253
        },
        {
            "country": "USA",
            "primaryGenreName": "Rock",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fjohn-dollar-antihero.png?alt=media&token=68b89bd6-87c4-4122-9998-dbd33f75f90c",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 909253,
            "trackTimeMillis": 207679,
            "collectionName": "Antihero",
            "artistName": "John Dollar",
            "wrapperType": "track",
            "id": 679273550,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Warmth of the Road",
            "collectionId": 879273553,
            "trackName": "Warmth of the Road"
        },
        {
            "id": 679273551,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Sound of his Demons",
            "collectionId": 879273553,
            "trackName": "Sound of his Demons",
            "country": "USA",
            "primaryGenreName": "Rock",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fjohn-dollar-antihero.png?alt=media&token=68b89bd6-87c4-4122-9998-dbd33f75f90c",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 909253,
            "trackTimeMillis": 207679,
            "collectionName": "Antihero",
            "artistName": "John Dollar",
            "wrapperType": "track"
        },
        {
            "collectionName": "Antihero",
            "artistName": "John Dollar",
            "wrapperType": "track",
            "id": 679273552,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Broken Vibrations",
            "collectionId": 879273553,
            "trackName": "Broken Vibrations",
            "country": "USA",
            "primaryGenreName": "Rock",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fjohn-dollar-antihero.png?alt=media&token=68b89bd6-87c4-4122-9998-dbd33f75f90c",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 909253,
            "trackTimeMillis": 207679
        },
        {
            "collectionName": "Antihero",
            "artistName": "John Dollar",
            "wrapperType": "track",
            "id": 679273553,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Journey of Eternity",
            "collectionId": 879273553,
            "trackName": "Journey of Eternity",
            "country": "USA",
            "primaryGenreName": "Rock",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fjohn-dollar-antihero.png?alt=media&token=68b89bd6-87c4-4122-9998-dbd33f75f90c",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 909253,
            "trackTimeMillis": 207679
        },
        {
            "collectionName": "Antihero",
            "artistName": "John Dollar",
            "wrapperType": "track",
            "id": 679273554,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Late Night Heaven",
            "collectionId": 879273553,
            "trackName": "Late Night Heaven",
            "country": "USA",
            "primaryGenreName": "Rock",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fjohn-dollar-antihero.png?alt=media&token=68b89bd6-87c4-4122-9998-dbd33f75f90c",
            "releaseDate": "2010-07-01T08:00:00Z",
            "artistId": 909253,
            "trackTimeMillis": 207679
        },
        {
            "wrapperType": "artist",
            "artistType": "Artist",
            "primaryGenreName": "Axé",
            "artistName": "Bloco TótiOQue",
            "id": 358714030
        },
        {
            "id": 779273550,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Praia dos Rumores",
            "collectionId": 879273553,
            "trackName": "Praia dos Rumores",
            "country": "BR",
            "primaryGenreName": "Axé",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fbloco-totioque-oxe-perda-nam.png?alt=media&token=83523399-83d2-4fb1-8a20-1d75dbb82568",
            "releaseDate": "2008-07-01T08:00:00Z",
            "artistId": 358714030,
            "trackTimeMillis": 207679,
            "collectionName": "Oxe, perda nam!",
            "artistName": "Bloco TótiOQue",
            "wrapperType": "track"
        },
        {
            "country": "BR",
            "primaryGenreName": "Axé",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fbloco-totioque-oxe-perda-nam.png?alt=media&token=83523399-83d2-4fb1-8a20-1d75dbb82568",
            "releaseDate": "2008-07-01T08:00:00Z",
            "artistId": 358714030,
            "trackTimeMillis": 207679,
            "collectionName": "Oxe, perda nam!",
            "artistName": "Bloco TótiOQue",
            "wrapperType": "track",
            "id": 779273551,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Trovão do meu Tempo",
            "collectionId": 879273553,
            "trackName": "Trovão do meu Tempo"
        },
        {
            "collectionId": 879273553,
            "trackName": "Promessas Rebeldes",
            "country": "BR",
            "primaryGenreName": "Axé",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fbloco-totioque-oxe-perda-nam.png?alt=media&token=83523399-83d2-4fb1-8a20-1d75dbb82568",
            "releaseDate": "2008-07-01T08:00:00Z",
            "artistId": 358714030,
            "trackTimeMillis": 207679,
            "collectionName": "Oxe, perda nam!",
            "artistName": "Bloco TótiOQue",
            "wrapperType": "track",
            "id": 779273552,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Promessas Rebeldes"
        },
        {
            "country": "BR",
            "primaryGenreName": "Axé",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fbloco-totioque-oxe-perda-nam.png?alt=media&token=83523399-83d2-4fb1-8a20-1d75dbb82568",
            "releaseDate": "2008-07-01T08:00:00Z",
            "artistId": 358714030,
            "trackTimeMillis": 207679,
            "collectionName": "Oxe, perda nam!",
            "artistName": "Bloco TótiOQue",
            "wrapperType": "track",
            "id": 779273553,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Memórias dos meus Desejos",
            "collectionId": 879273553,
            "trackName": "Memórias dos meus Desejos"
        },
        {
            "artistName": "Bloco TótiOQue",
            "wrapperType": "track",
            "id": 779273554,
            "trackExplicitness": "notExplicit",
            "trackCensoredName": "Sente o Ritmo",
            "collectionId": 879273553,
            "trackName": "Sente o Ritmo",
            "country": "BR",
            "primaryGenreName": "Axé",
            "artworkUrl": "https://firebasestorage.googleapis.com/v0/b/tw-exercicio-mobile.appspot.com/o/albums%2Fbloco-totioque-oxe-perda-nam.png?alt=media&token=83523399-83d2-4fb1-8a20-1d75dbb82568",
            "releaseDate": "2008-07-01T08:00:00Z",
            "artistId": 358714030,
            "trackTimeMillis": 207679,
            "collectionName": "Oxe, perda nam!"
        }
    ]
        }
    }
</script>

<style scoped>
    
</style>