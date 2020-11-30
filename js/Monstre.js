class Monstre{
    constructor(nom, level, pv, mp, vitesse){
        this.nom;
        this.level;
        this.pv;
        this.mp;
        this.vitesse;
    }

    LevelMonstre(level){
        this.pv += ((level - 1) * 3);
        this.mp += ((level - 1) * 2);
        this.vitesse += ((level - 1) * 2);
    }
}

class Ogre extends Monstre{

    constructor(){
        this.nom = "Ogre"
        this.pv = 80;
        this.mp = 30;
    }
}

class Gobelin extends Monstre{
    constructor(){
        super(nom, level, pv, mp, vitesse);
        this.nom = "Gobelin";
        this.pv = 50;
        this.mp = 20;
        this.vitesse = 10;
    }
}

class Esprit extends Monstre{

    constructor(){
        super(nom, level, pv, mp, vitesse);
        this.nom = "Esprit";
        this.pv = 70;
        this.mp = 30;
        this.vitesse = 20;
    }
}