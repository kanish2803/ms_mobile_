let totalAmount = 0;
const billBody = document.getElementById("billing-body");
const totalAmountDisplay = document.getElementById("total-amount");

function addProduct() {
    const productName = document.getElementById("product-name").value;
    const productQuantity = parseInt(document.getElementById("product-quantity").value);
    const productPrice = parseFloat(document.getElementById("product-price").value);

    if (productName && productQuantity && productPrice) {
        const productTotal = productQuantity * productPrice;
        totalAmount += productTotal;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${productQuantity}</td>
            <td>₹${productPrice.toFixed(2)}</td>
            <td>₹${productTotal.toFixed(2)}</td>
        `;
        billBody.appendChild(newRow);

        totalAmountDisplay.innerText = totalAmount.toFixed(2);

        // Clear input fields
        document.getElementById("product-name").value = "";
        document.getElementById("product-quantity").value = "";
        document.getElementById("product-price").value = "";
    } else {
        alert("Please fill out all fields.");
    }
}

function generateBill() {
    alert("Bill generated successfully! Total amount: ₹" + totalAmount.toFixed(2));
}

function printBill() {
    window.print();
}
