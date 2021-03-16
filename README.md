# Let's go to the library!
Your challenge is to build a site with the following user stories:

1. When I open the page, I see a simple form that consists of a text input and a submit button:
![user story 1](./assets/user_story_1.png)
1. When I enter a genre keyword and submit, I see the title, author, and cover of a random book from that genre:
![user story 2](./assets/user_story_2.png)
1. If the genre keyword is invalid for any reason (note that this API cannot handle spaces in search terms), I see an error message:
![user story 3](./assets/user_story_3.png)

## Baby steps
- Build out your html. Use a `<form>` element so we can just hit enter to search.
- Add a submit event listener to your form that grabs the value from the input field.
- Make a request to get data on the books in that genre. Use this api: `https://openlibrary.org/developers/api`. (You'll have to read their documentation to figure out how to search by subject!) Log the response that you get to confirm that it works.
- Pick a random book out of the array of books that you get from the API search.
- Append the data to the DOM. You'll need to look at the API documentation on book covers to figure out how to do this, it takes some tricky navigation!
- Handle errors, using `.catch()` if you are using `.then()` or `try {} catch () {}` if you are using `async/await`.
