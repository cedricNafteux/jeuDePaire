

export default class Carte
{
    constructor(numCarte, choix = '01' )
    {
        this.numCarte = numCarte;
        this.carteVisible = false;
        this.carteTrouve = false;
        this.image = new Image();
        this.image.src = `./images/paires${choix}/${numCarte}.jpg`;//les backstik (alt Gr +7) permettent de concatener
        this.image.style.display = 'none';
       //this.image.dataset['num_carte'] = numCarte;
       // this.image.dataset.num_carte = numCarte;
    }

    compareCarte(carte)
    {
        if (this.numCarte === carte.numCarte) {
            return true;
        }else{
            return false;
        }
    }

    isVisible()
    {
        return this.carteVisible;
    }

    isTrouve()
    {
        return this.carteTrouve;
    }

    trouve()
    {
        this.trouve = true;
    }


}
//export default { Carte };