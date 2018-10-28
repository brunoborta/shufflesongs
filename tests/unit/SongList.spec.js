import { expect } from 'chai';
import SongList from '@/components/SongList.vue';

describe('SongList', () => {
  describe('does property', () => {
    const songListData = SongList.data();
    describe('songs', () => {
      it('exists', () => {
        expect(songListData).to.have.property('songs');
      });
      it('is an array', () => {
        expect(songListData.songs).to.be.an('array');
      });
    });
    describe('shuffledSongs', () => {
      it('exists', () => {
        expect(songListData).to.have.property('shuffledSongs');
      });
      it('is an array', () => {
        expect(songListData.shuffledSongs).to.be.an('array');
      });
    });
    describe('listSize', () => {
      it('exists', () => {
        expect(songListData).to.have.property('listSize');
      });
      it('is a number', () => {
        expect(songListData.listSize).to.be.a('number');
      });
      it('has a default value of 6', () => {
        expect(songListData.listSize).to.equal(6);
      });
    });
    describe('myPlaylistTitle', () => {
      it('exists', () => {
        expect(songListData).to.have.property('myPlaylistTitle');
      });
      it('is a number', () => {
        expect(songListData.myPlaylistTitle).to.be.a('string')
      });
    });
  });
  
});
