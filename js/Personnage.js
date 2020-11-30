class Personnage{

    constructor(nom, pv, mp, vitesse, level, or){
        this.nom;
        this.level;
        this.or;
        this.pv;
        this.mp;
        this.vitesse;
    }

    levelUp(pv, mp, vitesse, level){
        this.pv += 15;
        this.mp += 5;
        this.vitesse += 5;
        this.level += 1;
    }
}

class Guerrier extends Personnage{

    constructor(nom, pv, mp, vitesse, level){
        super(nom, pv, mp, vitesse, level);
        this.nom = "Guerrier";
        this.level = 1;
        this.pv = 200;
        this.mp = 30;
        this.vitesse = 20;
    }
}

class Archer extends Personnage{

    constructor(nom, pv, mp, vitesse, level){
        super(nom, pv, mp, vitesse, level);
        this.nom = "Archer";
        this.level = 1;
        this.pv = 100;
        this.mp = 70;
        this.vitesse = 25;
    }
}

class Ninja extends Personnage{

    constructor(nom, pv, mp, vitesse, level){
        super(nom, pv, mp, vitesse, level);
        this.nom = "Ninja";
        this.level = 1;
        this.pv = 110;
        this.mp = 50;
        this.vitesse = 30;
    }
}

class Magician extends Personnage{

    constructor(nom, pv, mp, vitesse, level){
        super(nom, pv, mp, vitesse, level);
        this.nom = "Magician";
        this.level = 1;
        this.pv = 120;
        this.mp = 50;
        this.vitesse = 20;
    }
}

// export { Personnage };