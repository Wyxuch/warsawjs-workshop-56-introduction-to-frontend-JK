import dataJSON from './../../data.json'

// items are stored in "items" object as an array
const data = dataJSON.items;

// this will grab main view from html file
const mainView = document.getElementById('mainView');
const shoppingCartButton = document.getElementById('shoppingCartWrapper')
const checkout = document.getElementById('checkout')


let isModalVisible = false;

const shoppingCart = [];

// *** Render

// For all items in our data
for(let item = 0; item < data.length; item++) {
    //we use variable "item" as number of element we want to grab
    const currentItem = data[item]

    // this creates element and adds class
    const itemCard = document.createElement('div')
    itemCard.classList.add('itemCard')

    const itemImage = document.createElement('div')
    itemImage.classList.add('itemImage')
    itemImage.style.backgroundImage = `url(${currentItem.imageUrl})`

    const itemDetails = document.createElement('div')
    itemDetails.classList.add('itemDetails')

    const itemTitle = document.createElement('p')
    itemTitle.classList.add('itemTitle')
    itemTitle.innerText = currentItem.title

    const itemPrice = document.createElement('p')
    itemPrice.classList.add('itemPrice')
    itemPrice.innerText = currentItem.price

    const itemDescription = document.createElement('p')
    itemDescription.innerText = currentItem.description

    const button = document.createElement('button')
    button.innerText = 'Buy'
    button.addEventListener('click', function(){
        addToCart(currentItem.price, currentItem.title)
    })
    button.classList.add('button')
    button.classList.add('primary')

    // here we "assembly" our card element by putting all blocks in correct order into item card etc.
    itemCard.append(itemImage)
    itemCard.append(itemDetails)
    itemCard.append(itemDescription)
    itemCard.append(button)
    itemDetails.append(itemTitle)
    itemDetails.append(itemPrice)

    // here we mount element on the website
    mainView.append(itemCard)
}

// function to add item to cart used when someone clicks buy
function addToCart(price, title) {
    //first you need to create object you will be adding to cart
    const cartItem = {
        price: price,
        title: title
    }

    //then you need to add it to shoppingCart array
    shoppingCart.push(cartItem)

    updateShoppingCardList()
    checkShoppingCart()
}

function updateShoppingCardList() {
    //first we clear previous list
    document.getElementById('shoppingCartList').innerHTML = ''

    let sum = 0

    //then we add each element to list and sum the price
    shoppingCart.forEach(function (el) {
        sum = sum + el.price

        const shoppingCartItem = document.createElement('div')
        shoppingCartItem.classList.add('shoppingCartListItem')

        const title = document.createElement('p')
        title.innerText = el.title

        const price = document.createElement('p')
        price.innerText = el.price

        shoppingCartItem.append(title)
        shoppingCartItem.append(price)
        document.getElementById('shoppingCartList').append(shoppingCartItem)

    })

    //we need to update sum
    checkout.getElementsByTagName('p')[0].innerText = sum
}

// function that checks if something is in shoppingCart
function checkShoppingCart() {
    if(shoppingCart.length > 0) {
        // if it's not empty
        // update counter
        document.getElementById('shoppingCartCounter').innerText = `${shoppingCart.length}`
        shoppingCartButton.classList.remove('hidden')
        shoppingCartButton.classList.add('visible')
    } else {
        // if it's empty
        shoppingCartButton.classList.remove('visible')
        shoppingCartButton.classList.add('hidden')
    }
}

// onclick for shopping cart
shoppingCartButton.addEventListener('click', function (){
    const modal = document.getElementById('modalBg')

    // if modal is hidden
    if(!isModalVisible) {
        isModalVisible = true;
        modal.classList.remove('hidden')
        modal.classList.add('visible')
    } else {
        isModalVisible = false;
        modal.classList.remove('visible')
        modal.classList.add('hidden')
    }
})

checkout.getElementsByTagName('button')[0].addEventListener('click', function (){
    document.getElementById('shoppingCartContent').classList.add('hidden')
    document.getElementById('thanksMessage').classList.remove('hidden')
    document.getElementById('thanksMessage').classList.add('visible')

})


