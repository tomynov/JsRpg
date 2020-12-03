class Personnage{

    constructor(nom, level, atk, prot, protmag,  mag, maxpv, pv, maxmp, mp, vitesse, esquive, or){
        this.nom;
        this.level;
        this.atk;
        this.prot;
        this.protmag;
        this.mag;
        this.maxpv;
        this.pv;
        this.maxmp;
        this.mp;
        this.vitesse;
        this.esquive;
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

    levelUp(atk, mag, prot, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        if(this.level %2 == 0){
            this.atk += 10;
            this.mag += 5;
            this.maxpv += 15;
            this.pv += 15;
            this.vitesse += 5;
        }
        else{
            this.prot += 2;
            this.maxmp += 5;
            this.mp += 5;
            this.esquive += 1;
        }
        this.level += 1;
    }
}

class Guerrier extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive,  level);
        this.nom = "Guerrier";
        this.pv = 200;
        this.level = 1;
        this.atk = 50;
        this.prot = 20;
        this.protmag = 10;
        this.mag = 5;
        this.maxpv = 200;
        this.maxmp = 30;
        this.mp = 30;
        this.vitesse = 20;
        this.esquive = 0;
    }
}

class Archer extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level);
        this.nom = "Archer";
        this.pv = 150;
        this.level = 1;
        this.atk = 35;
        this.prot = 20;
        this.protmag = 5;
        this.mag = 15;
        this.maxpv = 150;
        this.maxmp = 60;
        this.mp = 60;
        this.vitesse = 25;
        this.esquive = 5;
    }
}

class Ninja extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level);
        this.nom = "Ninja";
        this.pv = 160;
        this.level = 1;
        this.atk = 30;
        this.prot = 15;
        this.protmag = 5;
        this.mag = 15;
        this.maxpv = 160;
        this.maxmp = 80;
        this.mp = 80;
        this.vitesse = 30;
        this.esquive = 15;
    }
}

class Magician extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level);
        this.nom = "Magician";
        this.pv = 140;
        this.level = 1;
        this.atk = 40;
        this.prot = 10;
        this.protmag = 25;
        this.mag = 35;
        this.maxpv = 140;
        this.maxmp = 100;
        this.mp = 100;
        this.vitesse = 20;
        this.esquive = 5;
    }
}

// export { Personnage };