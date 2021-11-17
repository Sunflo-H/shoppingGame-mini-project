// json데이터를 가져오는 함수
function getItems() {
    let json_items = fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
    return json_items;
}

// 아이템을 화면에 보여주는 함수
function displayItems(items) {
    let container = document.querySelector('.items');
    container.innerHTML = items.map(item =>createHTMLString(item)).join('');
}

// 화면에 띄울 아이템 리스트를 만드는 함수
function createHTMLString(item){
    return `
            <li class="item">
                <img src="${item.image}" alt="${item.image}">
                <span>${item.gender}, ${item.size} size</span>
            </li>
            `
}

// 필터에 이벤트를 적용하는 함수
function setEventListenr(items) {
    let logo = document.querySelector('.logo');
    let filter = document.querySelector('.filter');

    logo.addEventListener('click',()=>displayItems(items));
    filter.addEventListener('click', (event)=>filterEvent(event,items));
}

// 필터 함수
function filterEvent(event,items){
    let value = event.target.dataset.value;
    let filtered_items = items.filter(item=> item.type==value || item.color==value);
    displayItems(filtered_items);
}

getItems()
.then(items => {
    displayItems(items);
    setEventListenr(items);
})