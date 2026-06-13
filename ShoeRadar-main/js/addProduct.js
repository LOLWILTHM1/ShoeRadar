const form = document.getElementById("addProductForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("shoeName").value.trim();

  const price = Number(document.getElementById("shoePrice").value);

  const stock = Number(document.getElementById("shoeStock").value);

  const description = document.getElementById("shoeDescription").value.trim();

  const location = document.getElementById("shoeLocation").value.trim();

  const image = document.getElementById("shoeImage").value.trim();

  if (!name) {
    alert("Product name cannot be empty.");
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert("Price must be a positive number.");
    return;
  }

  if (isNaN(stock) || stock < 0) {
    alert("Stock cannot be negative.");
    return;
  }

  const { error } = await window.db
    .from("shoes")
    .insert([{ name, price, stock, description, location, image }]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Product Added Successfully");

  form.reset();
});
