function generatePlaylist(travelType) {
    let playlistTitle = '';
    let playlistUrl = '';
    let backgroundClass = '';

    switch (travelType) {
        case 'Beach':
            playlistTitle = "Soundtrack for Your Beach Escape";
            playlistUrl = "https://open.spotify.com/embed/playlist/5T1AqB0p4l4zmDeh7yhsdD"; // Example Playlist
            backgroundClass = "beach-background";
            break;
        case 'City':
            playlistTitle = "Vibes for Your City Adventure";
            playlistUrl = "https://open.spotify.com/embed/playlist/5JstV9TXVkk3yOjHvYzEzY"; // Example Playlist
            backgroundClass = "city-background";
            break;
        case 'Mountains':
            playlistTitle = "Mountain Hike Tunes";
            playlistUrl = "https://open.spotify.com/embed/playlist/7L8G2YbZVuOeO1xL3fRk9H"; // Example Playlist
            backgroundClass = "mountain-background";
            break;
        case 'Road Trip':
            playlistTitle = "Ultimate Road Trip Playlist";
            playlistUrl = "https://open.spotify.com/embed/playlist/3vnLgktgX8hzXYcx6wzYZD"; // Example Playlist
            backgroundClass = "road-trip-background";
            break;
    }

    document.getElementById('playlist-title').textContent = playlistTitle;
    document.getElementById('spotify-player').src = playlistUrl;
    document.getElementById('playlist-section').style.display = 'block';
    document.body.classList.add(backgroundClass); // Adds the background class dynamically
}
