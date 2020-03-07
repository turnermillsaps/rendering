/* 
    Current Issues:
    - General styling
    - After Thurs 3/5/20, I realized this should be split into multiple functions
*/


function renderAlbums(albums) {
    // Declare empty strings for each section of the page
    var albumHeader = "";
    var albumSongs = "";

    // Use for loop to iterate through each artist in case there are multiples
    for (var artistCount = 0; artistCount < albums.length; artistCount++) {
        var artistPage = `
            <div class="jumbotron jumbotron-fluid">
                <h1 class="display-4">${albums[artistCount].artist}</h1>
                <hr class="my-4">
            </div>
         `
    }

    // Nested for loop to iterate through each album and its songs, then append template literal strings to declared empty strings above
    for (var i = 0; i < albums.length; i++) {
        albumHeader = albums[i].albums.map(function(e){
            return `
                <div class="container flex-row justify-content-start">
                    <img src="${e.albumCover}" />
                    <h3>${e.title}</h3>
                </div>
            `
        })
        for (var j = 0; j < albums[i].albums.length; j++) {
            albumSongs = albums[i].albums[j].songs.map(function(e){
                return `
                    <div class="container">
                        <div class="row justify-content-between align-items-center border-bottom-1 border-secondary">
                            <div class="col-1">${e.title}</div>
                            <div class="col-1">${e.length}</div>
                        </div>
                    </div>
              `
            })
            artistPage += albumHeader[j];
            artistPage += albumSongs.join(''); 
        }
    }

    // Return the final page
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