#Task 1 (Optional)
If the group agree we will quickly learn 2 basic options of SCSS
- adding and reusing variables
- nesting selectors 

####Create variables
In `src/scss/constants.scss` create variables for given colors and font sizes. 
Variable looks like this: `$primary: #30004A;`  
Colors
- `#30004A`
- `#DD4913`
- `#737373`
- `#E5E5E5`
- `#fff`
- `#000`  

Font sizes
- small `0.8125rem;`
- medium `1.125rem;`
- large `1.5rem;`

#Task 2 
Add `Lato` font from [https://fonts.google.com](https://fonts.google.com/) 
(only Regular and Bold) using import in `./main.scss`

#Task 3
- Create initial layout of the website (navbar and wrapper for items)
  - navbar should have width of whole screen, no height and padding `16px`  
  - it should be flex that centers items inside. 
- Create Wrapper for logo with the text. (you can find logo in `src/img`) and style it (use flexbox)
- Create `@keyframe` which will rotate image in logo - 10s to make whole 360deg rotation and apply it in styles.

#Task 4
- Temporary make main view a `flexbox` that centers element
- Create template item card: 
    - Give it the right dimensions
    - Make background white
    - Create box shadow using `$shadow`
    - Make borders round
    - Align elements inside using `flexbox`

#Task 5 
Copy/paste few cards and adjust main view's flebox so cards align like in project (use flex wrap)

#Task 6
Create cards based on `data.json` and append them on your website, to do that you need to:
 - Create all elements in js based on previously made HTML using `document.createElement()`. 
 - Append them in the right order to make one finished element. (use `parent.append(child)`)
 - Create for loop and append them inside the right element from index.html
 - Adjust styles

#Task 7 
Create shopping cart element like in the project. Cart image is in `src/img`, use position fixed, relative and absolute.
Then create 2 classes in CSS - `hidden` with display none and `visible` with display block.

#Task 8
- Create `shoppingCart` variable and assign empty Array to it. 
- Creat function which takes `title` and `price` as arguments and pushes them into shoppingCart array as an object `{price: price, title: title}` and updates counter on shopping cart element based on shopping cart length.
- Add event listener which will fire above function on buy button click.

####ALMOST THERE! :D

#Task 9 
- Add class hidden to shopping cart element in HTML file.
- Create function that checks if shoppingCart is empty or not. If it's not empty let's add class visible to shopping cart element in HTML.
- Implement function on the end of another one that fires on buy button click.
- (OPTIONAL) create animation for shopping cart enter

#Task 10 
- Add event listener that fires when user clicks shopping cart with function appending class `visible` to element with id `modalBg`

#Task 11 
Create function similar to this rendering cards, it's task is to update shoppingCart list in modal. Inside function:
- Set innerHtml of element with id `shoppingCartList` to empty string. (`''`)
- Create let or var `sum` which will be `0` as a number
- Create loop over all elements in shoppingCart Array and for each item will create HTML element from `src/shoppingCartListItem.html`. In first `p` tag inner text will be `title` and in second `price`. Then append it in element with id `shoppingCartList`.
- Also in the same loop update `sum` variable with summed up items price. 
- Update inner text of element with id `sumPrice` with number from variable `sum` 

#Task 12 
Add click event listener to button with id `checkoutButton` that will: 
- Add class `hidden` to element id `shoppingCartContent`
- Remove class `hidden` from element id `thanksMessage` and add class `visible` to it