(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;
        
        mutantPower( id: number ) {
            return this.name + ' está usando el método mutantPower ';
        }
    }
    let Javi = new Mutant ;

    Javi.name = 'Javi'
    Javi.realName = 'Javier'
    Javi.age=37;
    Javi.mutantPower(1);

    // console.log(Javi.mutantPower(1));
})()