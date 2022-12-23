

// recuperation des infos du panier dans le localStorage
let localStorageProduct = JSON.parse(localStorage.getItem("produit"))
let totalQuantity = 0
let totalPrice = 0  
let arrayDelete = []

// Boucle qui affiche les produit tant qu'il y en a dans le LS 

for(let i = 0 ; i < localStorageProduct.length ; i++){
    // console.log(localStorageProduct[i])
    let couleur = localStorageProduct[i].color;
    let quantité = localStorageProduct[i].quantity;
//    console.log(quantité)
    
    // APPEL DE L'API POUR RECUPERE L'ENSEMBLE DES INFOS DES PRODUITS 
    fetch(`http://localhost:3000/api/products/${localStorageProduct[i].id}`)
        .then((result) => result.json())
        .then((data) => {
            
            creationArticleCart(data)
            
        })
        
    function creationArticleCart(data){
        // console.log(data)

        // création de l'article et de ses enfants 
        const createArticleCart = document.createElement("article")
        const cart__item__img = document.createElement("div")
        const imgProductCart = document.createElement("img")
        const cart__item__content = document.createElement("div")
        const cart__item__content__description = document.createElement("div")
        const h2Cart = document.createElement("h2")
        const colorOfProduct = document.createElement("p")
        const priceOfProduct = document.createElement("p")
        const cart__item__content__settings = document.createElement("div")
        const cart__item__content__settings__quantity = document.createElement("div")
        const quantityProduct = document.createElement("p")
        const itemQuantity = document.createElement("input")
        const cart__item__content__settings__delete = document.createElement("div")
        const deleteItem = document.createElement("p")

        // Integration de l'article et de ses enfant dans le html
        document.getElementById("cart__items").appendChild(createArticleCart)
        createArticleCart.insertAdjacentElement("afterbegin",cart__item__img)
        cart__item__img.insertAdjacentElement("afterbegin",imgProductCart)
        cart__item__img.insertAdjacentElement("afterend",cart__item__content)
        cart__item__content.insertAdjacentElement("afterbegin",cart__item__content__description)
        cart__item__content__description.insertAdjacentElement("afterbegin", h2Cart)
        h2Cart.insertAdjacentElement("afterend", colorOfProduct)
        colorOfProduct.insertAdjacentElement("afterend",priceOfProduct)
        cart__item__content__description.insertAdjacentElement("afterend",cart__item__content__settings)
        cart__item__content__settings.insertAdjacentElement("afterbegin",cart__item__content__settings__quantity)
        cart__item__content__settings__quantity.insertAdjacentElement("afterbegin",quantityProduct)
        quantityProduct.insertAdjacentElement("afterend",itemQuantity )
        cart__item__content__settings__quantity.insertAdjacentElement("afterend",cart__item__content__settings__delete)
        cart__item__content__settings__delete.insertAdjacentElement("afterbegin",deleteItem)

        // Integration des information pour chaque element crée

        // Article
        createArticleCart.className = "cart__item"
        createArticleCart.dataset.id = data._id
        createArticleCart.dataset.color = couleur
        // console.log(createArticleCart)
        // Div cart__item__img
        cart__item__img.className = "cart__item__img"

        // Image
        imgProductCart.src = data.imageUrl
        imgProductCart.alt = data.altTxt

        // Div cart__item__content
        cart__item__content.className ="cart__item__content"

        // Div cart__item__content__description
        cart__item__content__description.className = "cart__item__content__description"

        //H2 nom du produit
        h2Cart.textContent = data.name

        // P couleur du produit
        colorOfProduct.textContent = "Couleur: " + couleur

        // P prix du produit
        priceOfProduct.textContent ="Prix: " + data.price * quantité + "€"
        let productPrice = data.price * quantité 
        totalPrice = totalPrice + productPrice
       
        // Div cart__item__content__settings
        cart__item__content__settings.className ="cart__item__content__settings"

        // Div cart__item__content__settings__quantity
        cart__item__content__settings__quantity.className ="cart__item__content__settings__quantity"
                        
        // P de la quantité de produit
        quantityProduct.textContent = "Quantité :"

        // Input ItemQuantity
        itemQuantity.type ="number"
        itemQuantity.className ="itemQuantity"
        itemQuantity.name = "itemQuantity"
        itemQuantity.min = 1
        itemQuantity.max = 100
        itemQuantity.value = quantité
        // itemQuantity.readOnly = true

        itemQuantity.addEventListener('change' , (e) => {
            
            if(localStorageProduct[i].quantity < itemQuantity.value ){
                localStorageProduct[i].quantity ++
                console.log(localStorageProduct[i].quantity)
                localStorage.setItem("produit", JSON.stringify(localStorageProduct))
                location.reload();
            
            }else{
                
                localStorageProduct[i].quantity --
                console.log(localStorageProduct[i].quantity)
                localStorage.setItem("produit", JSON.stringify(localStorageProduct))
                location.reload();
            }

        })
        // console.log(quantité)
        // Div cart__item__content__settings__delete
        cart__item__content__settings__delete.className = "cart__item__content__settings__delete"

        

      // Prix total du panier 
        const priceTotalElement = document.querySelector("#totalPrice")
        priceTotalElement.textContent = totalPrice

        // quantité total de produit dans le panier 
        const quantityTotalElement = document.querySelector("#totalQuantity")
        totalQuantity = totalQuantity + quantité
        quantityTotalElement.textContent = totalQuantity

     
        // Suppression d'un produit depuis la page panier
        deleteItem.className = "deleteItem"
        deleteItem.textContent="Supprimer"
        arrayDelete.push(localStorageProduct[i].quantity)
        // console.log(arrayDelete)

        // deleteItem.addEventListener('click', (e) => {
           
            
        
        // localStorageProduct[i]













        //     // const productSuppInfo = createArticleCart.dataset
        //     // const arrayProductSuppInfo = []
        //     // arrayProductSuppInfo.push(productSuppInfo.id , productSuppInfo.color)
            
        //     // const productSelect = localStorageProduct[i]
        //     // const arrayProductSelect = []
        //     // arrayProductSelect.push(productSelect.id , productSelect.color)
            
            
        //     // if(arrayProductSuppInfo && arrayProductSelect){
        //     //     const productSupp =  localStorageProduct.filter(el => (el.id && el.color) !== (productSuppInfo.id && productSuppInfo.color))
                
        //     //   console.log(arrayProductSelect)
        //     //   console.log(arrayProductSuppInfo)
        //     //   console.log(productSupp)
        //     // //   console.log(localStorage)
        //     // }
            
        //     // // Methode filter pour selectionner l'element a supprimer dans le localstorage
        //     // let productSuppId = localStorageProduct.filter(el => el.id !== idSelectSupp)
        //     // let ProductSuppColor = localStorageProduct.filter(el => el.color !== colorSelectSupp)
            
            
    



        //     // // Envoi des information au LocalStorage
        //     // localStorage.setItem("produit", JSON.stringify(localStorageProduct))

           

        // })
       
    deleteProduct()
    }    

  
}
function deleteProduct(){
    const buttonSupp = document.querySelectorAll(".deleteItem");
console.log(buttonSupp)

for(let b = 0 ; b < buttonSupp.length; b++){
    console.log(b)
    
    
    // buttonSupp.addEventListener("click" , () => {
    //     localStorageProduct.splice(b , 1)
    //     localStorage.setItem("produit", JSON.stringify(localStorageProduct))
    //     location.reload();
    // })
}

}
