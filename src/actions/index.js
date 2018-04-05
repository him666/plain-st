import axios from 'axios'

export const GET_EVENTS = 'GET_EVENTS'
export const GET_BANDS = 'GET_BANDS'
export const GET_ALBUMS = 'GET_ALBUMS'
export const GET_SONGS = 'GET_SONGS'
export const GET_SONG = 'GET_SONG'

export function getEvents() {
    return(dispatch, getState) => {
        axios
        .get("https://nightapi.herokuapp.com/api/events")
          .then((resp) => {
              dispatch( { type: GET_EVENTS, payload: resp.data.data } )
              console.log(resp.data.data)
          })
          .catch((err) => console.log(err))
    }
}

export function getBands() {
    return(dispatch, getState) => {
        axios
        .get("https://nightapi.herokuapp.com/api/bands")
          .then((resp) => {
              dispatch( { type: GET_BANDS, payload: resp.data.data } )
          })
          .catch((err) => console.log(err))
    }
}

export function getAlbums() {
    return(dispatch, getState) => {
        axios
        .get("https://nightapi.herokuapp.com/api/albums")
          .then((resp) => {
              dispatch( { type: GET_ALBUMS, payload: resp.data } )
          })
          .catch((err) => console.log(err))
    }
}

export function getSongs() {
    return(dispatch, getState) => {
        axios
        .get("https://nightapi.herokuapp.com/api/songs")
          .then((resp) => {
              dispatch( { type: GET_SONGS, payload: resp.data } )
          })
          .catch((err) => console.log(err))
    }
}

export function getSong(id) {
    return(dispatch, getState) => {
        axios
        .get("https://nightapi.herokuapp.com/api/songs/" + id)
          .then((resp) => {
              dispatch( { type: GET_SONG, payload: resp.data } )
          })
          .catch((err) => console.log(err))
    }
}