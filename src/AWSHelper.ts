import axios, { AxiosResponse } from 'axios'
import { Song } from './interfaces/songInterfaces'

export default class AWSHelper {

	private SONG_API_URL = process.env.REACT_APP_API_URL || ''
	
	getAllSongs = async () => {
		return await axios.get(this.SONG_API_URL).then(response => {
			console.log(response)
			const songList = this.modelSongResponse(response)
			return songList
		}).catch(() => {
			return []
		})
		
	}

	submitNewSong = (song: Song) => {
		axios.post(this.SONG_API_URL, song)
	}

	private modelSongResponse = (response: AxiosResponse) => {
		const responseData = response.data === undefined ? [] : response.data
		
		return responseData.map((song: Song) => {
			return {
				'songName': song['songName'],
				'artistName': song['artistName'],
				'releaseYear': song['releaseYear']
			}
		})
	}
}
