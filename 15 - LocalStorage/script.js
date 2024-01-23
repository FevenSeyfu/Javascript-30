const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const input = document.querySelector("[name =item]");
const items = JSON.parse(localStorage.getItem("items")) || [];

const populateList = (plates = [], platesList) => {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
          <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
            <label for="item${i}">${plate.plate}</label>
          </li>
        `;
    })
    .join("");
};

const AddItem = (e) => {
  e.preventDefault();
  let plate = input.value;
  let item = {
    plate,
    done: false,
  };
  items.push(item);
  console.log(items)
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  e.target.reset();
};
const toggleDone = (e) => {
    if (!e.target.matches('input')) return;
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener("submit", AddItem);
itemsList.addEventListener('click',toggleDone)
window.addEventListener('load',populateList(items,itemsList))
