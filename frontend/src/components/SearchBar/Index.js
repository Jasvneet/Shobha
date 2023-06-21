const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    searchProduct();
  }
});

function searchProduct() {
  const searchTerm = searchInput.value.toLowerCase();

  // Make a request to the Rails API endpoint to search for the product
  fetch(`/api/products?search=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      if (data.length > 0) {
        // Redirect to the first product's show page
        const productId = data[0].id;
        window.location.href = `/products/${productId}`;
      } else {
        // Handle case when no product is found
        alert("No products found");
      }
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error("Error:", error);
    });
}