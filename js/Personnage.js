class Personnage{

    constructor(nom, level, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, or){
        this.nom;
        this.level;
        this.atk;
        this.prot;
        this.mag;
        this.maxpv;
        this.pv;
        this.maxmp;
        this.mp;
        this.vitesse;
        this.or = 20;
    }

    // Amélioration des Armes (atk), Protection (prot) et Magie (mag)
    WeaponUp(){
        this.atk += 15;
        // Ameliorer differrement en fonction de la classe choisie

    }

    ProtUp(){
        this.prot += 5;
         // Ameliorer differrement en fonction de la classe choisie

    }

    MagUp(){
        this.mag += 5;
        // Ameliorer differrement en fonction de la classe choisie
    }


    // Restauration des PV et MP
    HpRest(){
        this.pv = this.maxpv;
    }

    MpRest(){
        this.mp = this.maxmp;
    }

    levelUp(maxpv, pv, mp, vitesse, level){
        this.maxpv += 15;
        this.pv += 15;
        this.mp += 5;
        this.vitesse += 5;
        this.level += 1;
    }
}

class Guerrier extends Personnage{

    constructor(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level){
        super(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level);
        this.nom = "Guerrier";
        this.level = 1;
        this.atk = 50;
        this.prot = 40;
        this.mag = 5;
        this.maxpv = 200;
        this.pv = 200;
        this.maxmp = 30;
        this.mp = 30;
        this.vitesse = 20;
    }
}

class Archer extends Personnage{

    constructor(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level){
        super(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level);
        this.nom = "Archer";
        this.level = 1;
        this.atk = 35;
        this.prot = 20;
        this.mag = 15;
        this.maxpv = 150;
        this.pv = 150;
        this.maxmp = 60;
        this.mp = 60;
        this.vitesse = 25;
    }
}

class Ninja extends Personnage{

    constructor(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level){
        super(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level);
        this.nom = "Ninja";
        this.level = 1;
        this.atk = 30;
        this.prot = 15;
        this.mag = 15;
        this.maxpv = 160;
        this.pv = 160;
        this.maxmp = 80;
        this.mp = 80;
        this.vitesse = 30;
    }
}

class Magician extends Personnage{

    constructor(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level){
        super(nom, atk, prot, mag, maxpv, pv, maxmp, mp, vitesse, level);
        this.nom = "Magician";
        this.level = 1;
        this.atk = 40;
        this.prot = 10;
        this.mag = 35;
        this.maxpv = 140;
        this.pv = 140;
        this.maxmp = 100;
        this.mp = 100;
        this.vitesse = 20;
    }
}

// export { Personnage };