class Personnage{

    constructor(){
        this.nom = "";
        this.pv = 100;
        this.mp = 100;
    }
}

class Guerrier extends Personnage{

    constructor(){
        this.nom = "Guerrier";
        this.addPv = 1,15;

    }

    levelUp(addPv){
        Personnage.pv *= addPv;
        console.log(Personnage.pv);
    }
}

class Archer extends Personnage{

    constructor(){
        this.nom = "Archer"
        this.pv = 100;
        this.mp = 70;

    }
}

class Ninja extends Personnage{

    constructor(){
        this.nom = "Ninja";
        this.pv = 110;
        this.mp = 50;

    }
}