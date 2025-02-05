document.addEventListener('DOMContentLoaded', function() {
    function addRecipe() {
        // Find the element that contains the text input box for the recipe name
        const recipeNameInput = document.getElementById('recipeName');
        // Get the value that the user typed into the text input box for the recipe name
        const recipeName = recipeNameInput.value.trim();

        // Find the element that contains the text input box for the recipe link
        const recipeLinkInput = document.getElementById('link');
        // Get the value that the user typed into the text input box for the recipe link
        const recipeLink = recipeLinkInput.value.trim();

        // Check if both values are not empty
        if (recipeName !== '' && recipeLink !== '') {
            // Create a new list item element
            const newListItem = document.createElement('li');

            // Create a new hyperlink element
            const newHyperlink = document.createElement('a');
            // Set the text of the new hyperlink to the value the user typed into the text input for the recipe name
            newHyperlink.textContent = recipeName;
            // Set the href property of the new hyperlink to the value the user typed into the text input for the recipe link
            newHyperlink.href = recipeLink;

            // Attach the new hyperlink element to the new list item element
            newListItem.appendChild(newHyperlink);

            // Find parent element (i.e., the unordered list of recipes) where the new element will be added
            const recipeList = document.getElementById('recipes');
            // Add the new list item element to the parent element
            recipeList.appendChild(newListItem);

            // Clear the input fields
            recipeNameInput.value = '';
            recipeLinkInput.value = '';
        }
    }

    // Select the element that contains the button to add a recipe
    const addButton = document.getElementById('addRecipeBtn');
    // Assign the function as the event listener for the click event for the button
    addButton.addEventListener('click', addRecipe);
});