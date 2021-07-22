import dataJSON from './../../data.json'

const data = dataJSON.items

const mainView = document.getElementById('mainView')



// *** Render

for(let item = 0; item < data.length; item++) {
    const currentItem = data[item]

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
    button.classList.add('button')
    button.classList.add('primary')

    itemCard.append(itemImage)
    itemCard.append(itemDetails)
    itemCard.append(itemDescription)
    itemCard.append(button)
    itemDetails.append(itemTitle)
    itemDetails.append(itemPrice)

    mainView.append(itemCard)
}

