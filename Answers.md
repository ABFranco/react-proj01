# Answers!

Keep your answers to each checkoff question here for safe keeping. You will need to copy them over to the submission form at the end of the project.

1.1
Explain in your own words what ReactDOM.render is doing.

Accesses the DOM to then render (make visible) a particular component to a specified element.

1.2
What are some of the advantages and cons to using Semantic UI? (or any UI library for that matter)

Advantages: allows developer to quickly and easily create good-looking interfaces
Cons: learning curve, lots of UI libraries to choose from, limited with what is possible

1.3
In your own words, explain why we need to wrap addToCart with another function.

onClick can't be assigned to a function call, which is what "onClick={addToCart(props.productName)}" is. The call occurs once the button is clicked, so it only needs the name of the function. By wrapping it, we can create a new function that doesn't act as a function call, but as a function "name" instead.

1.4
**1.4a)** What allowed us to only write the Product component once inside the Cart's `render` function?

Using a map function to loop through all of the products to render a Cart for each iteration.

**1.4b)** Why don't we just do this inside our `render` function

    <Product title="Apple" price={1} />
    <Product title="Banana" price={2} />
    <Product title="Orange" price={3} />

What benefit, _besides_ code cleanliness, do we get from pulling in the data from an object instead?

We could add more products in Data.js easily and it will make React to create the new card for us. It makes it easier to keep all info about the products in one place.

Part 2
Checkoff Question 2.0
Give an example of a component we haven't built or talked about in class that would require state. Why does it need state?

A "Person" might have state that includes their name, height, weight, age. Meanwhile, we also have a "roster" that accessess all of this info. Since these properties about the "Persons" can change and a "roster" needs to update too, we would need to access the state to change these properties for each "Person" to make "roster" realize changes occurred.

Checkoff Question 2.1
How do we accomplish parent-to-child communication in React? What about child-to-parent? Why can't they be the same?

Parent communicates to a child using props. Children can use a function defined in the parent that was passed into the child using props.

Checkoff Question 2.2
How might we go about adding and removing items from the cart given the structure of our state?

Using a function defined in the parent, we pass it into the child. The child then calls this function when it wants to update state since the parent will be able to access its state.
