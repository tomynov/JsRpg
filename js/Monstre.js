class Monstre{
    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        this.nom;
        this.level;
        this.atk;
        this.prot;
        this.pv;
        this.mp;
        this.esquive;
        this.vitesse;
    }

    levelUp(atk, prot, maxpv, pv, maxmp, mp, vitesse, esquive, level){
        if(this.level %2 == 0){
            this.atk += 12;
            this.maxpv += 15;
            this.pv += 15;
            this.vitesse += 8;
            this.prot += 8;
            this.maxmp += 8;
            this.mp += 8;
            this.esquive += 3;
        }
        this.level += 1;
    }
}

class Gobelin extends Monstre{
    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        super(nom, atk, prot, pv, mp, esquive, vitesse, level);
        this.nom = "Gobelin";
        this.atk = 25;
        this.pv = 150;
        this.mp = 20;
        this.prot = 30;
        this.esquive = 10;
        this.vitesse = 10;
        this.level = 1;
    }
}

class Goule extends Monstre{
    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        super(nom, atk, prot, pv, mp, esquive, vitesse, level);
        this.nom = "Goule";
        this.atk = 40;
        this.prot = 10;
        this.pv = 120;
        this.mp = 20;
        this.esquive = 25;
        this.vitesse = 70;
        this.level = 1;
    }
}

class Ogre extends Monstre{
    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        super(nom, atk, prot, pv, mp, esquive, vitesse, level)
        this.nom = "Ogre";
        this.atk = 50;
        this.pv = 170;
        this.prot = 10;
        this.mp = 30;
        this.esquive = 5;
        this.vitesse = 1;
        this.level = 1;
    }
}

class Esprit extends Monstre{

    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        super(nom, atk, prot, pv, mp, esquive, vitesse, level);
        this.nom = "Esprit";
        this.atk = 55;
        this.pv = 100;
        this.prot = 50;
        this.mp = 30;
        this.esquive = 15;
        this.vitesse = 25;
        this.level = 1;
    }
}

class Banshee extends Monstre{
    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        super(nom, atk, prot, pv, mp, esquive, vitesse, level);
        this.nom = "Banshee";
        this.atk = 50;
        this.prot = 10;
        this.pv = 350;
        this.mp = 40;
        this.esquive = 5;
        this.vitesse = 20;
        this.level += 1;
    }
}

class Dragon extends Monstre{
    constructor(nom, atk, prot, pv, mp, esquive, vitesse, level){
        super(nom, atk, prot, pv, mp, esquive, vitesse, level);
        this.nom = "Dragon";
        this.atk = 120;
        this.pv = 500;
        this.prot = 120;
        this.mp = 60;
        this.esquive = 1;
        this.vitesse = 100;
        this.level = 1;
    }
}// export { Monstre };