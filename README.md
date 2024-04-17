# Fetch Contact Card

This repository contains a web application for fetching and displaying contact cards retrieved from an external API. It demonstrates how to fetch data from an external API, render it dynamically within a web page, and provide interactivity such as deleting individual contact cards.

## Technologies Used

- HTML5: For structuring the web page.
- CSS3: For styling the web page.
- JavaScript (ES6): For fetching data, rendering cards dynamically, and providing interactivity.
- Bootstrap (v5.0.2): For styling and layout of the navigation bar and contact cards.

## Getting Started

To run this project locally on your machine, follow these steps:

1. Clone this repository to your local machine using the following command:

```
git clone git@github.com:jimchimento-dev/fetch-contact-card.git
```

2. Navigate to the project directory:

```
cd fetch-contact-card
```

3. Open the **index.html** file in your preferred web browser.

```
open index.html
```

## Functionality

The application performs the following functions:

1. Fetches contact data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
2. Renders contact cards dynamically on the web page, displaying the name and address of each contact.
3. Provides a delete button for each contact card, allowing users to remove individual contacts from the list.
4. Displays the total number of records dynamically, updating when a contact card is deleted.

## Folder Structure

- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file containing styles for the web page.
- `script.js`: The JavaScript file containing functionality for fetching data, rendering cards, and providing interactivity.

## Credits

- **Bootstrap**: Used for styling and layout.
- **Font Awesome**: Used for icons.
