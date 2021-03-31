# Spotify Featured Playlists

Spotify Featured Playlists, as the name suggests, is a single page application, developed with ReactJS, where users can check all featured playlists at Spotify according to some criteria, like Country, for example.

As we live in a dynamic world, the page refreshes its content every 30 seconds, to obtain updated data.

**[Demo](https://spotify-playlists-tau.vercel.app/)**

## Spotify API
The [Spotify API](https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-featured-playlists) was consumed to get playlists data.

## Getting Started
### Installation

Clone this project using:

    $ git https://github.com/dtoloto/spotify-playlists
    $ cd spotify-playlists

Once you have the project, install all dependencies:

    $ yarn

Then, you have to create the `.env` file with the following fields and replace with your own data:

    REACT_APP_SPOTIFY_URL= https://api.spotify.com/v1
    REACT_APP_SPOTIFY_AUTH= https://accounts.spotify.com/api/token
    REACT_APP_SPOTIFY_CLIENT_ID= YOUR_SPOTIFY_CLIENT_ID
    REACT_APP_SPOTIFY_CLIENT_SECRET= YOUR_SPOTIFY_CLIENT_SECRET
    REACT_APP_FILTER_API= https://www.mocky.io/v2/5a25fade2e0000213aa90776

### Running
Once the installation is done, you can run the following command:

    $ yarn start
