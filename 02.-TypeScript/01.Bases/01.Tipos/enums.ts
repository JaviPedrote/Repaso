(() => {

    enum AudioLevel {
        min = 1,
        medium,
        max,
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    
    console.log( currentAudio );
    console.log( AudioLevel );


})()