function renderAlbums(albums) {
    /* return `
        <div class="text-center mt-5">
            <code>${JSON.stringify(albums)}</code>
        </div>
    `
    */

    /* Overview 
        - need to loop through each album and build their respective div's
            - one will contain the image and title
            - other will contain song list
        - then add those to another div with h1 of artist
            - this div could be a card based on the picture
    */
    var albumHeader = "";
    var albumSongs = "";
    var artistPage = `
        <div class="jumbotron jumbotron-fluid">
            <h1 class="display-4">${albums.artist}</h1>
            <hr class="my-4">
        </div>
    `
    for (var i = 0; i < albums.length; i++) {
        albumHeader = albums[i].albums.map(function(e){
            return `
                <div class="container flex-row justify-content-start">
                    <img src="${e.albumCover}" />
                    <h3>${e.title}</h3>
                </div>
            `
        })
        albumSongs = albums[i].albums[i].songs.map(function(e){
            return `
                <div class="container">
                    <div class="row justify-content-between align-items-center border-bottom-1 border-secondary">
                        <div class="col-1">${e.title}</div>
                        <div class="col-1">${e.length}</div>
                    </div>
                </div>
            `
        }) 
    }

    // albumHeader = albumHeader.join('');
    // albumSongs = albumSongs.join('');

    for (var i = 0; i < albumHeader.length; i++) {
        artistPage += albumHeader[i];
        for (var j = 0; j < albumSongs.length; j++) {
            artistPage += albumSongs.join('');
        }
    }

    return artistPage;
    
}

function albums() {
    var content = document.getElementById('content');

    var albumsAbstraction = [
        {
            artist: "Creed",
            albums: [
                {
                    title: "My Own Prison",
                    albumCover: "https://images-na.ssl-images-amazon.com/images/I/51Y5ZCMV2QL.jpg",
                    songs: [
                        {
                            title: "Torn",
                            length: "6:25"
                        },
                        {
                            title: "Ode",
                            length: "4:58"
                        },
                        {
                            title: "My Own Prison",
                            length: "5:00"
                        },
                        {
                            title: "Pity for a Dime",
                            length: "4:37"
                        },
                        {
                            title: "In America",
                            length: "3:38"
                        },
                        {
                            title: "Illusion",
                            length: "5:29"
                        }
                    ]

                },
                {
                    title: "Weathered",
                    albumCover: "https://is5-ssl.mzstatic.com/image/thumb/Music22/v4/b1/a4/a9/b1a4a9dd-ecda-6233-07da-f53848d37bdf/mzm.qakvcpwo.jpg/1200x630bb.jpg",
                    songs: [
                        {
                            title: "Bullets",
                            length: "6:25"
                        },
                        {
                            title: "Freedom Fighter",
                            length: "4:58"
                        },
                        {
                            title: "Who's Got My Back?",
                            length: "5:00"
                        },
                        {
                            title: "Signs",
                            length: "4:37"
                        },
                        {
                            title: "One Last Breath",
                            length: "3:38"
                        },
                        {
                            title: "My Sacrifice",
                            length: "5:29"
                        }
                    ]
                }
            ]
        }
    ]

    content.innerHTML = renderAlbums(albumsAbstraction);

}