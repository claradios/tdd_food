
function getTotalPrice (iva = 10,...nums ) {
    if (nums) {
        const sum = nums.reduce((total,actualNum) => total + actualNum, 0);
        const result = sum * (1 + iva / 100);
        return result;
    } else { return 0 ;}
 
};

function createCard (object) {   
    if(object) {
        const { id, name, price, description, image, ingredients } = object;
        const defaultId = '1';
        const defaultName = 'plato';
        const defaultPrice = '-';
        const defaultDesc = 'Sin descripción';
        const defaultImg = 'https://via.placeholder.com/500x500';
        const defaultIngredientes = 'Ingredientes no disponibles';
        let ingredientsList = '';         
        if (ingredients) {ingredients.forEach(ing => ingredientsList +=`<li>${ing}</li>`)};
  
     const result =   `
        <li id=${id || defaultId} class="card">
            <h3 class="card__name">${name || defaultName}</h3>
            <p class="card__price">Precio: ${price || defaultPrice} €</p>
            <div class="card__image">
                <img class="card__photo" src="${image || defaultImg}" alt="${name}"/>
            </div>
            <p class="card__description">${description || defaultDesc}</p>
            <ul class="card__ingredients">${ingredientsList || defaultIngredientes} </ul>
        </li>`
        return result;
    } else {
        return '';
    };
};

export { getTotalPrice, createCard };