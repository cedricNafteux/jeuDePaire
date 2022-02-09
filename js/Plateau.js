import Carte from './Carte.js';

export default class Plateau
{
    constructor(choixCarte)
    {
        this.tabCartes = [];
        this.premiereCarteCliquee = null;
        this.deuxiemeCarteCliquee = null;

        this.creerTabCarte(choixCarte);
        this.brasserTabCarte();
        this.afficheCarte();
    }


    creerTabCarte(typeCarte)
    {
        for (let numCarte = 1; numCarte <= 8; numCarte++)
        {
            let carte = new Carte(numCarte, typeCarte);
            this.tabCartes.push(carte);
            carte = new Carte(numCarte, typeCarte);
            this.tabCartes.push(carte);
        }
    }

    brasserTabCarte()
    {
        for (let index = 0; index < this.tabCartes.length; index++) {
            let j = Math.floor(Math.random()*15);
            let temp = this.tabCartes[index];
            this.tabCartes[index] = this.tabCartes[j];
            this.tabCartes[j] = temp;
        }
    }

    afficheCarte()
    {
        let tagDiv = document.getElementById('idPlateau');
        let tagUl = document.createElement('ul');
        for (let index = 0; index < this.tabCartes.length; index++)
        {
            let tagLi = document.createElement('li');
            this.tabCartes[index].image.dataset.numCarte = index;
            tagLi.appendChild(this.tabCartes[index].image);
            tagUl.appendChild(tagLi);
        }

        tagUl.addEventListener('click', (ev) => this.clickCarte(ev), false);
        tagDiv.appendChild(tagUl);
    }

    clickCarte(event)
    {
        let indiceCarte = event.target.firstElementChild.dataset.numCarte;
        let carte = this.tabCartes[indiceCarte];

        if(this.premiereCarteCliquee === null && !carte.isTrouve())
        {
            this.premiereCarteCliquee = carte;
            // this.premiereCarteCliquee.image.style.display = 'block';
            // this.premiereCarteCliquee.carteVisible = true;
            this.premiereCarteCliquee.visible(true);
        }else{

            if( carte.isVisible() === false)
            {
                this.deuxiemeCarteCliquee = carte;
                // carte.image.style.display = 'block';
                // carte.carteVisible = true;
                carte.visible(true);

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
            document.getElementById('idNbrPaire').value++;

        }else{
            setTimeout(() => {
                this.premiereCarteCliquee.visible(false);
                this.deuxiemeCarteCliquee.visible(false);
                this.premiereCarteCliquee = null;
                this.deuxiemeCarteCliquee = null;
            }, 2000);
        }
        document.getElementById('idNbrEssai').value++;
    }

    // getCarteByIndice()
    // {
        
    // }



}


