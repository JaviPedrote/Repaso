(() => {

    class Avenger {

        // private name: string;
        // private team: string;
        // public realName?: string;
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        static avgAge: number = 35;
        static getAvgAge() {
            return Avenger.name;
        }
        

        public bio() {
            return `${ this.name } (${ this.team })!!!`
        }


    }


    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log( antman )

    // console.log( Avenger.getAvgAge())

})()