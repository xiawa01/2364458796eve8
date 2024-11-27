async function getResponce() {

    let responce = await fetch("shop_1.json")
    console.log("responce:\n", responce, "\n /responce: \n")
    let content = await responce.text()
    console.log("await responce.text()\n", content)
    content = JSON.parse(content)
    content = content.slice(0, 10)
    console.log("content.slice(0, 10)", content)
    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("node_for_insert")
    node_for_insert.innerHTML = "";
    for (key in content) {
        node_for_insert.innerHTML += `



        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].url}>
        <h5 class="card-title">${content[key].title}</h5>
        <p class="card-text">${content[key].description}. <br> Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input class="w-25" type="number" name="amount_${content[key].id}" value="0" min="1" ></p>
        </li>
                `
    }
}
getResponce()