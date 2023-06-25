let itemList = [];

function addItem() {
  let itemName = document.getElementById("item-name").value;
  let itemPrice = document.getElementById("item-price").value;
  let itemQuantity = document.getElementById("item-quantity").value;

  if (itemName === "" || itemPrice === "" || itemQuantity === "") {
    alert("Please fill all fields");
    return;
  }

  let itemTotalPrice = itemPrice * itemQuantity;

  let item = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
    totalPrice: itemTotalPrice,
  };

  itemList.push(item);
  showItemList();
}

function showItemList() {
  let itemListHTML = "";
  let totalPrice = 0;

  for (let i = 0; i < itemList.length; i++) {
    itemListHTML += "<tr>";
    itemListHTML += "<td>" + itemList[i].name + "</td>";
    itemListHTML += "<td>" + itemList[i].price + "</td>";
    itemListHTML += "<td>" + itemList[i].quantity + "</td>";
    itemListHTML += "<td>" + itemList[i].totalPrice + "</td>";
    itemListHTML += "<td><button onclick='deleteItem(" + i + ")'>Delete</button></td>";
    itemListHTML += "</tr>";

    totalPrice += itemList[i].totalPrice;
  }

  document.getElementById("item-list").innerHTML = itemListHTML;
  document.getElementById("total-price").innerHTML = "Total Price: " + totalPrice;
}

function deleteItem(index) {
  itemList.splice(index, 1);
  showItemList();
}

function generateReceipt() {
  let receipt = "";
  let totalPrice = 0;

  for (let i = 0; i < itemList.length; i++) {
    receipt += itemList[i].name + " - " + itemList[i].quantity + " x " + itemList[i].price + " = " + itemList[i].totalPrice + "\n";
    totalPrice += itemList[i].totalPrice;
  }

  receipt += "\nTotal Price: " + totalPrice;
  alert(receipt);
}
