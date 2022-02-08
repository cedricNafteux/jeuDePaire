import Carte from './Carte.js';

export default class Plateau
{
    constructor()
    {
        this.tabCartes = [];
        this.premiereCarteCliquee = null;
        this.deuxiemeCarteCliquee = null;

        this.creerTabCarte();
        this.brasserTabCarte();
        this.afficheCartes();
    }


    creerTabCarte()
    {
        for (let numCarte = 1; numCarte <= 8; numCarte++)
        {
            let carte = new Carte(numCarte);
            this.tabCartes.push(carte);
            carte = new Carte(numCarte);
            this.tabCartes.push(carte);
        }
    }

    brasserTabCarte()
    {
        for (let i = 0; i < this.tabCartes.length; i++) {
            let j = Math.floor(Math.random()*15);
            let temp = this.tabCartes[i];
            this.tabCartes[i] = this.tabCartes[j];
            this.tabCartes[j] = temp;
        }
    }

    afficheCartes()
    {
        let tagUl = document.getElementById('idPlateau');
        for (let index = 0; index < this.tabCartes.length; index++)
        {
            let tagLi = document.createElement('li');
            this.tabCartes[index].image.dataset.numcarte = index;
            tagLi.appendChild(this.tabCartes[index].image);
            tagUl.appendChild(tagLi);
        }

        tagUl.addEventListener('click', (ev) => this.clickCarte(ev), false);
    }

    clickCarte(event)
    {
        let indiceCarte = event.target.firstElementChild.dataset.numCarte;
        let carte = this.tabCartes[indiceCarte];

        if(this.premiereCarteCliquee === null && !carte.isTrouve())
        {
            this.premiereCarteCliquee = carte;
            this.premiereCarteCliquee.image.style.display = 'block';
            this.premiereCarteCliquee.carteVisible = true;
        }else{

            if( carte.isVisible() === false)
            {
                this.deuxiemeCarteCliquee = carte;
                carte.image.style.display = 'block';
                carte.carteVisible = true;

                this.testPaire();
            }

        }
    }

    testPaire()
    {
        if (this.premiereCarteCliquee.compareCarte(this.deuxiemeCarteCliquee)) {
            this.premiereCarteCliquee.trouve();
            this.deuxiemeCarteCliquee.trouve();
            this.premiereCarteCliquee = null;
            this.deuxiemeCarteCliquee = null;
        }
    }

    // getCarteByIndice()
    // {
        
    // }



}


