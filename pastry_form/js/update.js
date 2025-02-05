//calculates the total of the pastries being purchased. gives error if quantity is negative or empty
function update() {
    var quantityElements = document.getElementsByClassName("quant");
    var costElements = document.getElementsByClassName("cost");
    var totalQuantity = 0;
    var totalCost = 0;

    for (var i = 0; i < quantityElements.length; i++) {
        var quantity = quantityElements[i].value;
        var price = parseFloat(costElements[i].textContent);

        if (quantity === "") {
            console.error("Quantity cannot be empty");
            quantityElements[i].style.backgroundColor = "red";
            quantityElements[i].style.color = ""; 
            continue;
        }

        quantity = parseInt(quantity);

        if (isNaN(quantity) || quantity < 0) {
            console.error("Quantity cannot be negative or non-numeric");
            quantityElements[i].style.backgroundColor = "red";
            quantityElements[i].style.color = "red";
            continue;
        }

        quantityElements[i].style.backgroundColor = ""; 
        quantityElements[i].style.color = ""; 
        totalQuantity += quantity;
        totalCost += quantity * price;
    }

    document.getElementById("quantTotal").textContent = totalQuantity;
    document.getElementById("totalCost").textContent = totalCost.toFixed(2); 
}