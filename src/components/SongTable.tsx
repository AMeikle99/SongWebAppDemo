import React, { Component } from 'react'
import AWSHelper from '../AWSHelper'
import { Song } from '../interfaces/songInterfaces'
import SongRow from './SongRow'

interface SongTableState {
	'songList': Song[]
}

export default class SongTable extends Component<{},{}> {

	awsHelper = new AWSHelper()
	state: SongTableState = {
		'songList': []
	}

	componentDidMount() {
		this.loadSongData()
	}

	

	loadSongData = () => {
		this.awsHelper.getAllSongs().then((songList: Song[]) => {
			this.setState({'songList': songList})
		})
	}

	render() {
		const songList = this.state.songList
		return (
			<div className='d-flex flex-column'>
				<table className=' p-0 table table-bordered table-hover mt-5'>
					<thead className='thead-dark'>
						<tr>
							<th>Song Name</th>
							<th>Artist Name</th>
							<th>Release Year</th>
						</tr>
					</thead>
					<tbody>
						{songList.map(song => {
							return <SongRow song={song} key={songList.indexOf(song)}/>
						})}
					</tbody>
				</table>
					<button className='btn btn-outline-dark' type='button' onClick={this.loadSongData}>Reload Data</button>
			</div>
			
		)
	}
}
