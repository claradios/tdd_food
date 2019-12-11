
function getTotalPrice (iva = 10,...nums ) {
    if (nums) {
        const sum = nums.reduce((total,actualNum) => total + actualNum, 0);
        const result = sum * (1 + iva / 100);
        return result;
    } else { return 0 ;}
 
};
function createDefaultObject() {   
    const defaultObj = {
        defaultId : '1',
        defaultName : 'plato',
        defaultPrice : 10,
        defaultDesc : 'Sin descripción',
        defaultImg : 'https://via.placeholder.com/500x500',
        defaultIngredients : 'Ingredientes no disponibles'
    }
    return defaultObj;
}

function getIngredientList (ingredients) {
    if (ingredients) {
        let ingredientsList = ''; 
        ingredients.forEach(ing => ingredientsList +=`<li class ="ingredient">${ing}</li>`);
        return ingredientsList;
    }
}

function createCard (object) {   
    if(object) {
        const defaultObj = createDefaultObject();
        const {defaultId, defaultName, defaultPrice, defaultDesc, defaultImg, defaultIngredients} =defaultObj;
        const { id, name, price, description, image, ingredients } = object;
        const ingredientsList = getIngredientList(ingredients);
  
     const result =   `
        <li id=${id || defaultId} class="card">
            <h3 class="card__name">${name || defaultName}</h3>
            <p class="card__price">Precio: ${price || defaultPrice} €</p>
            <div class="card__image">
                <img class="card__photo" src="${image || defaultImg}" alt="${name}"/>
            </div>
            <p class="card__description">${description || defaultDesc}</p>
            <ul class="card__ingredients">${ingredientsList || defaultIngredients} </ul>
        </li>`
        return result;
    };
};

function createShoppingCard(obj) {
    if(obj) {
        
        const { id, name, price } = obj;
        const defaultObj = createDefaultObject();
        const { defaultId, defaultName, defaultPrice } = defaultObj;
    
        const shopCard = `
        <li data-id=${id || defaultId} class="shop-card">
            <h3 class="shop-card__name">${name || defaultName}</h3>
            <p class="shop-card__price">Precio: ${price || defaultPrice} €</p>
        </li>`
        return shopCard;
    };
};

export { getTotalPrice, createCard, getIngredientList, createDefaultObject, createShoppingCard };