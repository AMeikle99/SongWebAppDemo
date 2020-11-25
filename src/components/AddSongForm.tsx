import React, { Component } from 'react'
import AWSHelper from '../AWSHelper'

export default class AddSongForm extends Component {

	awsHelper = new AWSHelper()
	state = {
		'songName': '',
		'artistName': '',
		'releaseYear': ''
	}

	submitSongHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const song = {
			'songName': this.state.songName,
			'artistName': this.state.artistName,
			'releaseYear': this.state.releaseYear
		}
		this.awsHelper.submitNewSong(song)
		this.setState({
			'songName': '',
			'artistName': '',
			'releaseYear': ''
		})
		
	}

	handleSongNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({'songName': event.target.value})
	}

	handleArtistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({'artistName': event.target.value})
	}

	handleReleaseYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({'releaseYear': event.target.value})
	}

	render() {
		return (
			<form className='card bg-light p-5' onSubmit={this.submitSongHandler}>
				<div className='row'>
					<h2>Add a Song</h2>
				</div>
				<div className='form-group row'>
					<label htmlFor="inputSongName" className="col-form-label">Song Name</label>
      				<input className="form-control" id="inputSongName" value={this.state.songName} onChange={this.handleSongNameChange} placeholder="Enter a Song..."/>
				</div>
				<div className='form-group row'>
					<label htmlFor="inputArtistName" className="col-form-label">Artist Name</label>
      				<input className="form-control" id="inputArtistName" value={this.state.artistName} onChange={this.handleArtistNameChange} placeholder="Enter the Song's Artist..."/>
				</div>
				<div className='form-group row'>
					<label htmlFor="inputReleaseYear" className="col-form-label">Release Year</label>
      				<input className="form-control" id="inputReleaseYear" value={this.state.releaseYear} onChange={this.handleReleaseYearChange} placeholder="Enter the Release Year..."/>
				</div>

				<button type='submit' className='btn btn-dark'>Add Song</button>
			</form>
		)
	}
}
