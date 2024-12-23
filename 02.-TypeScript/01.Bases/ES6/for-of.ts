(()=> {

    type Avenger = {
        name: string,
        weapon: string;
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitán América',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, thor, captainAmerica ];

    // for (const aveng of avengers) {
    //     console.log(aveng.name, aveng.weapon );
    // }


})()