const json_data = `[
    {
        "title":"Відеокарта Palit Nvidia GeForce RTX 3050 Dual OC 8 GB",
        "price":{"title":"Цена","value":17000},
        "chip":{"title":"Графічний чип","value":"GeForce RTX 3060"},
        "frq_mem":{"title":"Частота пам'яті","value":"14000"},
        "frq_core":{"title":"Частота ядра","value":"2022"},
        "cool":{"title":"Система охолодження","value":"активна"},
        "size_mem":{"title":"Обсяг пам'яті","value":"10 ГБ"},
        "bus_mem":{"title":"Розрядність шини пам'яті","value":"128 біт"},
        "type_mem":{"title":"Тип пам'яті","value":"GDDR6"},
        "resolution":{"title":"Максимально підтримувана роздільна здатність","value":"7680x4380"},
        "poer_su":{"title":"Мінімально необхідна потужність БЖ","value":"160 Вт"},
        "size":{"title":"Розміри","value":"245x119x40 мм"}
    },
    {
        "title":"Відеокарта Palit Nvidia GeForce RTX 3050 Dual OC 8 GB",
        "price":{"title":"Цена","value":17000},
        "chip":{"title":"Графічний чип","value":"GeForce RTX 3060"},
        "frq_mem":{"title":"Частота пам'яті","value":"14000"},
        "frq_core":{"title":"Частота ядра","value":"2022"},
        "cool":{"title":"Система охолодження","value":"активна"},
        "size_mem":{"title":"Обсяг пам'яті","value":"10 ГБ"},
        "bus_mem":{"title":"Розрядність шини пам'яті","value":"128 біт"},
        "type_mem":{"title":"Тип пам'яті","value":"GDDR6"},
        "resolution":{"title":"Максимально підтримувана роздільна здатність","value":"7680x4380"},
        "poer_su":{"title":"Мінімально необхідна потужність БЖ","value":"160 Вт"},
        "size":{"title":"Розміри","value":"245x119x40 мм"}},
    {
        "title":"Відеокарта Palit Nvidia GeForce RTX 3050 Dual OC 8 GB",
        "price":{"title":"Цена","value":17000},
        "chip":{"title":"Графічний чип","value":"GeForce RTX 3060"},
        "frq_mem":{"title":"Частота пам'яті","value":"14000"},
        "frq_core":{"title":"Частота ядра","value":"2022"},
        "cool":{"title":"Система охолодження","value":"активна"},
        "size_mem":{"title":"Обсяг пам'яті","value":"10 ГБ"},
        "bus_mem":{"title":"Розрядність шини пам'яті","value":"128 біт"},
        "type_mem":{"title":"Тип пам'яті","value":"GDDR6"},
        "resolution":{"title":"Максимально підтримувана роздільна здатність","value":"7680x4380"},
        "poer_su":{"title":"Мінімально необхідна потужність БЖ","value":"160 Вт"},
        "size":{"title":"Розміри","value":"245x119x40 мм"}
    }
]`;

function generate_item(json_obj, arr_ind) {
    console.log(json_obj);
    let content = document.getElementById("content");

    let newCardElem = document.createElement("div");
    newCardElem.setAttribute("class", "page-comparison__position  position");
    newCardElem.setAttribute("name", "compare" + arr_ind.toString());
    content.appendChild(newCardElem);

    let newTopElem = document.createElement("div");
    /*let newTopNode = document.createTextNode(json_obj.title);
    let newAdditElem = document.createElement("br");*/
    //newTopElem.appendChild(newTopNode);
    newTopElem.innerHTML = `<span name="title" class="title">${json_obj.title}</span>`;
    //newTopElem.setAttribute("name", "title");
    newTopElem.setAttribute("class", "position position__title");
    newTopElem.id = "title" + arr_ind.toString();
    newCardElem.appendChild(newTopElem);
    
    newTopElem = document.createElement("div");
    newTopElem.setAttribute("class", "position position__card");
    //content.appendChild(newAdditElem);
    
    for (let obj_elem in json_obj) {
        //console.log(obj_elem + " => " + json_obj[obj_elem]);
        if (obj_elem != "title") {
            let text_to_append = `<div class="position__card card">
            <dt class="card__name name"><span>${json_obj[obj_elem].title}</span></dt>
            <dd class="card__info info"><span name="${obj_elem}">${json_obj[obj_elem].value}</span></dd>
            </div>`;
            newTopElem.innerHTML += text_to_append;
        }
    }

    newCardElem.appendChild(newTopElem);
}

function generate_items() {
    var json_arr = JSON.parse(json_data);
    //console.log(json_arr[0]);
    for (let arr_ind in json_arr) {
        let json_obj = json_arr[arr_ind];
        //console.log(json_obj);
        generate_item(json_obj, arr_ind);
    }
}

function isSame(arr) {
    var prev_elem = '';
    var cur_elem = '';
    var col_flag = false;
    for (let iter = 0; iter < arr.length; iter+=1) {
        if (iter == 0) {
            prev_elem = arr[iter].innerHTML;
            cur_elem = arr[iter].innerHTML; 
        } else {
            cur_elem = arr[iter].innerHTML; 
            if (cur_elem != prev_elem) {
                col_flag = true;
                break;
            }
        }
    }
    return col_flag;
}

function paintFields(color_flag, arr, color_warning, paint_ok, color_ok) {
    if (color_flag) {
        for (let iter = 0; iter < arr.length; iter+=1) {
            arr[iter].style.backgroundColor = color_warning; // '#fcba03' '#3bb7c4'
        }
    } else {
        if (paint_ok) {
            for (let iter = 0; iter < arr.length; iter+=1) {
                arr[iter].style.backgroundColor = color_ok; // '#fcba03' '#3bb7c4'
            }
        }
    }
}

function compare() {
    //var data = require('./data.json');
    var prices = document.getElementsByName("price");
    var min_index = 0;
    var min_price = 0;
    var prev_price = 0;
    var cur_price = 0;
    for (let iter = 0; iter < prices.length; iter+=1) {
        console.log(prices[iter]);
        if (iter == 0) {
            prev_price = parseFloat(prices[iter].innerHTML);
            cur_price = parseFloat(prices[iter].innerHTML); 
            min_price = cur_price;
        } else {
            cur_price = parseFloat(prices[iter].innerHTML);
            if (cur_price < prev_price) {
                min_index = iter;
                min_price = cur_price;
            }
        }
    }
    for (let iter = 0; iter < prices.length; iter+=1) {
        prices[iter].style.backgroundColor = 'red'; //background-сolor
        prices[iter].style.fontWeight = "800"; //font-weight
    }
    prices[min_index].style.backgroundColor = "#03fc52";
    prices[min_index].style.fontWeight = "1000";
    var chips = document.getElementsByName("chip");
    console.log(chips);
    /*var prev_chip = '';
    var cur_chip = '';
    var color_flag = false;
    for (let iter = 0; iter < chips.length; iter+=1) {
        if (iter == 0) {
            prev_chip = chips[iter].innerHTML;
            cur_chip = chips[iter].innerHTML; 
        } else {
            cur_chip = chips[iter].innerHTML; 
            if (cur_chip != prev_chip) {
                color_flag = true;
                break;
            }
        }
    }*/

    var color_warning = '#fcba03'; //'#3bb7c4';
    var color_ok = '#3bb7c4';

    var color_flag = isSame(chips);
    //if (!color_flag) { //(color_flag == false)
    if (color_flag) { //(color_flag == true)
        /*for (let iter = 0; iter < chips.length; iter+=1) {
            chips[iter].style.backgroundColor = '#fcba03'; //#3bb7c4
        }*/
        paintFields(color_flag, chips, color_warning, true, color_ok);
    }

    var frq_mem = document.getElementsByName("frq_mem");
    color_flag = isSame(frq_mem);
    paintFields(color_flag, frq_mem, color_warning, true, color_ok);
    
    var frq_core = document.getElementsByName("frq_core");
    color_flag = isSame(frq_core);
    paintFields(color_flag, frq_core, color_warning, true, color_ok);
    
    var cool = document.getElementsByName("cool");
    color_flag = isSame(cool);
    paintFields(color_flag, cool, color_warning, true, color_ok);
    
    var size_mem = document.getElementsByName("size_mem");
    color_flag = isSame(size_mem);
    paintFields(color_flag, size_mem, color_warning, true, color_ok);
    
    var bus_mem = document.getElementsByName("bus_mem");
    color_flag = isSame(bus_mem);
    paintFields(color_flag, bus_mem, color_warning, true, color_ok);
    
    var type_mem = document.getElementsByName("type_mem");
    color_flag = isSame(type_mem);
    paintFields(color_flag, type_mem, color_warning, false, color_ok);
    
    var resolution = document.getElementsByName("resolution");
    color_flag = isSame(resolution);
    paintFields(color_flag, resolution, color_warning, true, color_ok);
    
    var poer_su = document.getElementsByName("poer_su");
    color_flag = isSame(poer_su);
    paintFields(color_flag, poer_su, color_warning, true, color_ok);
    
    var size = document.getElementsByName("size");
    color_flag = isSame(size);
    paintFields(color_flag, size, color_warning, false, color_ok);
}