import axios, { AxiosResponse } from 'axios'
import { Song } from './interfaces/songInterfaces'

export default class AWSHelper {

	private SONG_API_URL = process.env.API_URL || ''
	
	getAllSongs = async () => {
		const response = await axios.get(this.SONG_API_URL)
		console.log(response)
		console.log(this.SONG_API_URL)
		const songList = this.modelSongResponse(response)
		return songList
	}

	submitNewSong = (song: Song) => {
		axios.post(this.SONG_API_URL, song).then(response => {
			console.log(response)
		})
		console.log(song)
	}

	private modelSongResponse = (response: AxiosResponse) => {
		const responseData = response.data
		
		return responseData.map((song: Song) => {
			return {
				'songName': song['songName'],
				'artistName': song['artistName'],
				'releaseYear': song['releaseYear']
			}
		})
	}
}
