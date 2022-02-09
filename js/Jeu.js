import Plateau from './Plateau.js';

export default class Jeu
{
    constructor()
    {
        this.plateau = null;
        this.initJeu();


    }


    initJeu()
    {
        let choix = document.getElementById('idChoix').value;
        document.getElementById('idPlateau').innerHTML = '';
        
        this.plateau = new Plateau(choix);
        document.getElementById('idNbrEssai').value = 0;
        document.getElementById('idNbrPaire').value = 0;
        let tagRejour = document.getElementById('idRejouer');
        tagRejour.addEventListener('click', () => this.initJeu(), false);
    }

    // choixCarte()
    // {

    // }

    // majEtatDuJeu()
    // {
        
    // }




}
