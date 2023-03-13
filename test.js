let user1 = {
    title: "Відеокарта Palit Nvidia GeForce RTX 3050 Dual OC 8 GB",
    price: 17000,
    chip: {
        title: "Графічний чип",
        value: "GeForce RTX 3060"},
    frq_mem: {
        title: "Частота пам'яті",
        value: "14000"},
    frq_core: {
        title: "Частота ядра",
        value: "2022"},
    cool: {
        title: "Система охолодження",
        value: "активна"},
    size_mem: {
        title: "Обсяг пам'яті",
        value: "10 ГБ"},
    bus_mem: {
        title: "Розрядність шини пам'яті",
        value: "128 біт"},
    type_mem: {
        title: "Тип пам'яті",
        value: "GDDR6"},
    resolution: {
        title: "Максимально підтримувана роздільна здатність",
        value: "7680x4380"},
    poer_su: {
        title: "Мінімально необхідна потужність БЖ",
        value: "160 Вт"},
    size: {
        title: "Розміри",
        value: "245x119x40 мм"},
}
let users = [];
users.push(user1);
users.push(user1);
users.push(user1);
let users_json = JSON.stringify(users);
console.log(users_json);
let users_return  = JSON.parse(users_json);
console.log(users_return[0]);
                /*Графічний чип
                "chip">GeForce RTX 3060

                Частота пам'яті
                "frq_mem">14000

                Частота ядра
                "frq_core">2022

                Система охолодження
                "cool">активна

                Обсяг пам'яті
                "size_mem">10 ГБ

                Розрядність шини пам'яті
                "bus_mem">128 біт

                Тип пам'яті
                "type_mem">GDDR6

                Максимально підтримувана роздільна здатність
                "resolution">7680x4380

                Мінімально необхідна потужність БЖ
                "poer_su">160 Вт

                Розміри
                "size">245x119x40 мм*/