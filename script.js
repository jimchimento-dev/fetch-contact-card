/* Pseudo Code
1. Create an async function that pulls data from https://jsonplaceholder.typicode.com/users
2. Store and return that data in a fetchData function
3. Create a renderCard function that creates a card component within the DOM 
4. Each card should display person's title, address and a delete button
5. Create an async function that renders the cards (appending to the DOM) using the data from our fetchData function
6. Add an event listener to delete button that will remove a specific contact card from the DOM
7. Display confirmation text when delete button is clicked
8. Display the number of records dynamically to a user. When a record (card) is deleted, update the total number of records displayed
9. Apply some light styles to the card to make them pop. 3 cards in a row desktop view, 2 for tablet view, 1 for mobile
*/

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching data:", error);
        displayErrorMessage("Failed to fetch data. Please try again later.");
        throw error; // Rethrow the error to propagate it to the caller
    }
}

const displayErrorMessage = (message) => {
    const errorMessageElement = document.createElement("div");
    errorMessageElement.classList.add("alert", "alert-danger");
    errorMessageElement.textContent = message;
    document.body.insertBefore(errorMessageElement, document.body.firstChild);
}

const displayRecordCount = () => {
    const totalRecords = document.querySelectorAll("#contact-container .card").length;
    const recordContainer = document.getElementById("records-container");
    recordContainer.textContent = `Showing ${totalRecords} Records`;
}

const renderCard = item => {
    const card = document.createElement("div");
    card.classList = "col";

    const cardContent = document.createElement("div");
    cardContent.classList = "card";

    const cardHeader = document.createElement("h5");
    cardHeader.classList = "card-header";
    cardHeader.textContent = item.name;

    const cardBody = document.createElement("div");
    cardBody.classList = "card-body mt-2";
    if (item.address) {
        const addressText = `${item.address.street}<br>${item.address.suite}<br>${item.address.city}, ${item.address.zipcode}`;
        cardBody.innerHTML = addressText;
    } else {
        cardBody.textContent = "Address not available";
    }

    const deleteButton = document.createElement("button");
    deleteButton.classList = "btn btn-danger btn-md ms-auto my-2 me-4";
    deleteButton.innerHTML = `<i class="fas fa-trash"></i> Delete`;

    deleteButton.addEventListener("click", () => {
        if (confirm("Would you like to delete this contact?")) {
            card.remove();
            displayRecordCount();
        }
    })

    cardContent.appendChild(cardHeader);
    cardContent.appendChild(cardBody);
    cardContent.appendChild(deleteButton);
    card.appendChild(cardContent);

    return card;
}

const renderCards = async () => {
    const contactContainer = document.getElementById("contact-container");
    try {
        const cardData = await fetchData();
        if (cardData.length === 0) {
            displayErrorMessage("No contacts found.");
            return;
        }
        cardData.forEach(item => {
            const card = renderCard(item);
            contactContainer.appendChild(card);
            displayRecordCount();
        })
    }
    catch (error) {
        console.error("Error rendering cards:", error);
        displayErrorMessage("Failed to render contacts. Please try again later.");
    }
}

renderCards();