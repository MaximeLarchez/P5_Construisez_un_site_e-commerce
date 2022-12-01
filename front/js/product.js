// RECUPERATION DE L'ID DU PRODUIT

const urlId = window.location.search ;

const urlIdSearch = new URLSearchParams (urlId);

const id = urlIdSearch.get("id");
// console.log(id)


// APPEL DE L'API POUR RECUPERE L'ENSEMBLE DES INFOS DU PRODUIT
const getProduct = async function () {
    const fetchApi = await fetch(`http://localhost:3000/api/products/${id}`)
    const product = await fetchApi.json()
    return product;
}

// recuperation du produit 
const product = await getProduct()

console.log(product)


// =============================================================================
// =============================================================================
// INTEGRATION DES INFORMATIONS DU PRODUIT
function displayProductInfos (){
    
    //*H1*
    const titleH1 = document.getElementById('title')
    titleH1.innerHTML = product.name
    // console.log(titleH1)

    //*P*
    const descriptionP = document.getElementById('description')
    descriptionP.innerHTML = product.description
    // console.log(descriptionP)

    //*IMG*
    const imageContainer = document.querySelector('.item__img')
    const image = document.createElement('img')
    image.src = product.imageUrl
    image.alt = product.altTxt
    imageContainer.appendChild(image)

    // console.log(image)

    // PRICE
    const priceContainer = document.getElementById('price')
    const priceProduct = document.createElement('price')
    priceProduct.innerHTML = product.price
    priceContainer.appendChild(priceProduct)

    //COULEUR 
    product.colors.forEach(color =>{
    const colorOption = document.createElement('option')
    colorOption.value = color
    colorOption.innerHTML = color
    const colorContainer = document.querySelector('select')
    colorContainer.appendChild(colorOption)
       
       
    })
}
displayProductInfos()

// =============================================================================
// ============================================================================

// ==============================================================================
// Fonction de verification apres le choix de l'utilisateur
// Recuperation Element du DOM
const inputColor = document.getElementById("colors")
const inputQuantity = document.getElementById("quantity")

// Choix de l'utilisateur
const productChoice = {
    id:product,
    quantity: parseInt(inputQuantity.value,10),
    color: inputColor.value,
}

// Ecouter les modifications réalise par l'utilisateur sur la quantité et la couleur(voir element selectionne ci dessus)
// Couleur

inputColor.addEventListener('change', (event) => {

    productChoice.color = event.target.value
    console.log(productChoice.color)
   
  });


// quantité

inputQuantity.addEventListener('change',(event) => {

    productChoice.quantity = event.target.value
    // console.log(productChoice)
})

// creation de div pour afficher le message derreur au dessus des labels
// Message erreur couleur
// const messageErrorColorContainer = document.querySelector('.item__content__settings__color')
// const messageErrorColor = document.createElement('div')
// messageErrorColor.textContent = 'veuillez choisir une couleur'
// messageErrorColor.id = "message"
// messageErrorColorContainer.appendChild(messageErrorColor)

// Message erreur quantité 





// Fonction pour verifier si une couleur a été selectionné
// if color != "" alors je met la couleur dans l'objet(productchoice) else afficher un message d'erreur
const messageErrorColorContainer = document.querySelector('.item__content__settings__color')
const messageErrorColor = document.createElement('div')

function verifyColor(){
   
    if(productChoice.color != ""){
        messageErrorColor.remove();
        return true
    }else{
       
        messageErrorColor.textContent = 'veuillez choisir une couleur'
        messageErrorColor.id = "message"
        messageErrorColorContainer.appendChild(messageErrorColor)
    }
}

// console.log(verifyColor())

// if quantity est comprise entre 1 et 100 = je met la couleur dans l'objet (productChoice) sinon j'affice un message d'erreur 
const messageErrorQuantityContainer = document.querySelector('.item__content__settings__quantity')
const messageErrorQuantity = document.createElement('div')
console.log(messageErrorQuantityContainer)
function verifyQuantity(){
    
    if(productChoice.quantity <= 0 || productChoice.quantity > 100){
        messageErrorQuantity.textContent ='Veuillez choisir une quantité entre 1 et 100'
        messageErrorQuantity.id = "messageQuantity"
        messageErrorQuantityContainer.appendChild(messageErrorQuantity)
        inputQuantity.value = 0
        return false
    }
    
    messageErrorQuantity.remove()
    return true
}
// console.log(verifyQuantity())


// Fonction pour ajouter au panier
// Recuperation du produit dans le localStorage || faire un tableau vide

function addToCart(){
let localProduct = JSON.parse(localStorage.getItem("produit")) || []
// verifier si le meme produit existe deja dans le panier


}
    







// Selection du Bouton dans le html
const bouton = document.querySelector('#addToCart')

// Ecoute sur le bouton 
bouton.addEventListener("click",(e) => {
    
console.log(productChoice.quantity)
    if(verifyColor() && verifyQuantity()){
        return true
    }else{
        
    }
})
