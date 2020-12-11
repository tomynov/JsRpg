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
        this.atk += 10;
    }

    ProtUp(){
        this.prot += 10;
    }

    MagUp(){
        this.mag += 10;
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
            this.atk += 20;
            this.mag += 5;
            this.maxpv += 25;
            this.pv += 15;
            this.vitesse += 5;
        }
        else{
            this.prot += 2;
            this.esquive += 1;
        }
        this.level += 1;
    }
}

class Guerrier extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive,  level);
        this.pv = 250;
        this.level = 1;
        this.atk = 60;
        this.prot = 20;
        this.protmag = 10;
        this.mag = 70;
        this.maxpv = 200;
        this.maxmp = 2;
        this.mp = 2;
        this.vitesse = 15;
        this.esquive = 10;
        this.nom = "Guerrier";
    }
}

class Archer extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level);
        this.pv = 150;
        this.level = 1;
        this.atk = 85;
        this.prot = 35;
        this.protmag = 5;
        this.mag = 90;
        this.maxpv = 150;
        this.maxmp = 3;
        this.mp = 3;
        this.vitesse = 25;
        this.esquive = 30;
        this.nom = "Archer";
    }
}

class Ninja extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level);
        this.pv = 260;
        this.level = 1;
        this.atk = 75;
        this.prot = 15;
        this.protmag = 5;
        this.mag = 85;
        this.maxpv = 160;
        this.maxmp = 2;
        this.mp = 2;
        this.vitesse = 30;
        this.esquive = 35;
        this.nom = "Ninja";
    }
}

class Magician extends Personnage{

    constructor(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        super(nom, atk, prot, protmag, mag, maxpv, pv, maxmp, mp, vitesse, esquive, level);
        this.pv = 190;
        this.level = 1;
        this.atk = 65;
        this.prot = 50;
        this.protmag = 25;
        this.mag = 95;
        this.maxpv = 140;
        this.maxmp = 3;
        this.mp = 3;
        this.vitesse = 10;
        this.esquive = 10;
        this.nom = "Magician";
    }
}

// export { Personnage };