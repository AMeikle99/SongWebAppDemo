import React, { Component } from 'react'
import { Song } from '../interfaces/songInterfaces'

interface SongRowProps {
	song: Song
}

export default class SongRow extends Component<SongRowProps,{}> {
	render() {
		const {songName, artistName, releaseYear} = this.props.song

		return (
			<tr>
				<td>{songName}</td>
				<td>{artistName}</td>
				<td>{releaseYear}</td>
			</tr>
		)
	}
}
