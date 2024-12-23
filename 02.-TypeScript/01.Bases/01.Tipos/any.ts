(() => {
    let avenger: any = 5;

    let power;

    avenger = 'Dr. Strange';

    console.log((avenger as string).charAt(0));

    avenger = 5.54546383;

    console.log(<number>avenger.toFixed(2));
})();
