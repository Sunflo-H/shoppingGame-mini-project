// item은 여자, 남자 / 티셔츠 , 스커트, 바지 / 블루, 핑크, 옐로우 / 라지 , 미디움 , 스몰 배열 만들어서
// JSON.stringify(배열) 하고 data.json에 붙여넣기
const gender = ['male', 'female'];
const type = ['tshirt', 'skirt', 'pants'];
const color = ['blue', 'pink', 'yellow'];
const size = ['large', 'medium', 'small'];

let items = [];
console.log(items);

// data 객체, 타입 인덱스, 칼라 인덱스를 받아와서 타입과 색을 확인하여 적절한 이미지를 data.image에 저장한다.
function pushImage(data, data_type_index, data_color_index) {
    if (type[data_type_index] == type[0] && color[data_color_index] == color[0]) 
        data.image = "img/blue_t.png";
    else if (type[data_type_index] == type[0] && color[data_color_index] == color[1]) 
        data.image = "img/pink_t.png";
    else if (type[data_type_index] == type[0] && color[data_color_index] == color[2]) 
        data.image = "img/yellow_t.png";
    else if (type[data_type_index] == type[1] && color[data_color_index] == color[0]) 
        data.image = "img/blue_s.png";
    else if (type[data_type_index] == type[1] && color[data_color_index] == color[1]) 
        data.image = "img/pink_s.png";
    else if (type[data_type_index] == type[1] && color[data_color_index] == color[2]) 
        data.image = "img/yellow_s.png";
    else if (type[data_type_index] == type[2] && color[data_color_index] == color[0]) 
        data.image = "img/blue_p.png";
    else if (type[data_type_index] == type[2] && color[data_color_index] == color[1]) 
        data.image = "img/pink_p.png";
    else if (type[data_type_index] == type[2] && color[data_color_index] == color[2]) 
        data.image = "img/yellow_p.png";
    }

for (let g = 0; g < gender.length; g++) {
    for (let t = 0; t < type.length; t++) {
        // male 이고 skirt면 반복문을 하지 않는다. 치마는 여성용이다.
        if(g != 0 || t != 1){
            for (let c = 0; c < color.length; c++) {
                for (let s = 0; s < size.length; s++) {
                    let data = new Object();
                    data.gender = gender[g];
                    data.type = type[t];
                    data.color = color[c];
                    data.size = size[s];
    
                    pushImage(data,t,c);
                    items.push(data);
                }
            }
        }
    }
}

let json_data = JSON.stringify(items);
