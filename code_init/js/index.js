// ITERATION 1
// A TRAVEZ DE ESTA FUNCIÓN SE TOMAN LOS DATOS PARA CALCULAR EL TOTAL POR CADA PRODUCTO E IMPRIMIRLO
function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(`.pu span`).innerHTML;
  
  const quantity = product.querySelector(`.qty input`).value;
  
  const subtotal = product.querySelector(`.subtot span`)
  
  const total = parseFloat(price).toFixed(2) * parseFloat(quantity)
  
  subtotal.innerHTML = total;
  console.log(total)
  return total
  }
  
// ITERATION 2
// A TRAVEZ DE ESTA FUNCIÓN  RECORRE EL ARREGLO DONDE SE ENCUENTRAN LOS PRODUCTOS Y POR CADA UNO
// MANDA A LLAMAR A LA FUNCIÓN "updateSubtotal" POR MEDIO DE ELLA RECIBE EL TOTAL DE CADA PRODUCTO
// Y LO ACUMULA EN UNA VARIABLE. IMPRIME EL TOTAL DE LA COMPRA DE TODOS LOS PRODUCTOS
  
  function calculateAll(product) {
    //const elementProduct = document.getElementsByClassName(`product`) //SE QUITA
    //console.log(elementProduct)

    let totalTotal = 0;

  //    for (const elem of elementProduct){
  //      console.log(elem)
  //      totalTotal = totalTotal + updateSubtotal(elem) 
  //  } 
  //  for(let i = 0 ; i<= elementProduct.length ; i++){

  //    totalTotal = totalTotal + updateSubtotal(elementProduct[i])
  // }
   const products = document.querySelectorAll('.product');

   products.forEach(function(product) {
     totalTotal += updateSubtotal(product);
 });

// ITERATION 3

    let  totalGlobal = document.getElementById("totalGlobal"); // SE AGREGA
    //let grandTotal = document.querySelector(`#total-value span`).innerHTML; // SE QUITA
    
    // const collection = document.querySelectorAll(`.product`);
  
    // let totalArr = Array.from(collection)
  
    // totalArr = totalArr.reduce(function (acc,product) { 
    //   return acc += updateSubtotal(product)}, 0);
    // console.log(totalArr);

    // grandTotal = Number(totalArr).toFixed(2); // SE QUITA

    totalGlobal.textContent = totalTotal //SE AGREGA
    return totalTotal;
    }
    
    
  
  // ITERATION 4
  // A TRAVEZ DE ESTA FUNCIÓN SE ELIMINAN PRODUCTOS POR MEDIO DE LA ELIMINACIÓN DE NODO.
  // UNA VEZ ELIMIANDO EL PRODUCTO SE VUELVE A CALCULAR LOS PRECIOS

  function removeProduct(event) {
 
   const target = event.currentTarget;
    console.log('The target in remove is:', target.parentNode.parentNode);       
    
    target.parentNode.parentNode.remove();
    calculateAll();
  }
  
// ITERATION 5
// A TRAVEZ DE ESTA FUNCIÓN SE CREA UN NUEVO PRODUCTO, ES AÑADIDO POR EL BOTON
// ADQUIERE TODAS LAS DUNCIONALIDADES  Y SE AÑADE COMO UN HIJO DEL NODO QUE ENGLOBA LA TABLA

  
  function createProduct() {
    const mainProductsTable = document.querySelector(`tbody`);
    const newProductName = document.querySelector(`input[placeholder= "Product Name"]`);
    const newProductPrice = document.querySelector(`input[placeholder="Product Price"]`);
  
    //console.log({mainProductsTable, newProductName, newProductPrice});
  
    const newProductItem = document.createElement(`tr`);
    newProductItem.innerHTML = `
    <tr class="product">
            <td class="name">
              <span>${newProductName.value}</span>
            </td>
            <td class="pu">$<span>${newProductPrice.value}</span></td>
            <td class="qty">
              <input type="number" value="0" min="0" placeholder="Quantity" />
            </td>
            <td class="subtot">$<span>0</span></td>
            <td class="action">
              <button class="btn btn-delete">Delete</button>
            </td>
          </tr>
    `;
    newProductItem.classList.add('product');
    mainProductsTable.appendChild(newProductItem);
  
    newProductItem.querySelector(`.btn-delete`).addEventListener(`click`, removeProduct); //SE COLOCO LA CLASE CORRECTA DEL BOTÓN
  }
  

// TOTDOS LOS BOTONES SE LES AÑADE UN "addEventListener" 
// AQUI ESTAN LA FUNCION DE LOS BOTONES
  window.addEventListener('load', () => {

    const calculatePricesBtn = document.getElementById('calc');

    calculatePricesBtn.addEventListener('click', calculateAll);
  
    let removeButton = document.querySelectorAll(`.btn-delete`);// SE QUITA CONST
    
    removeButton.forEach(button => {
      
      button.addEventListener(`click`, removeProduct)
    });
  
    const createButton = document.getElementById(`create`);
    createButton.addEventListener(`click`, createProduct);
  });