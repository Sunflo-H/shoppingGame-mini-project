function getItems(){
    let json_items = fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
    return json_items;
}


getItems()
.then(items => {
    // console.log(items);
})
