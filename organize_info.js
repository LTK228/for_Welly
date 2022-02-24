const userIds = ['U01', 'U02', 'U03']
const orderIds = ['T01', 'T02', 'T03', 'T04']
const userOrders = [
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
]

const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const orderData = {
    'T01': { name: 'A', price: 499 },
    'T02': { name: 'B', price: 599 },
    'T03': { name: 'C', price: 699 },
    'T04': { name: 'D', price: 799 }
}


/* 取得 user 字典 */
function get_user() {
    store_list = []
    for (let j = 0; j < userOrders.length; j++) {
        let property = {}
        property.id = userOrders[j].userId;
        property.name = userData[userOrders[j].userId];

        store_list.push(property)
    }
    // console.log(store_list);

    store_list2 = []
    for (let i = 0; i < store_list.length; i++) {
        let user = {};
        user.user = store_list[i];
        store_list2.push(user);
    }
    // console.log(store_list2);
    return store_list2;
}

let getUser = get_user();
console.log(getUser);

/* 取得 user 字典 */



/* 取得 order array */
function get_order() {
    store_list = [];
    for (let i = 0; i < userOrders.length; i++) {
        for (let j = 0; j < userOrders[i].orderIds.length; j++) {
            let order = {};
            order.id = userOrders[i].orderIds[j];
            order.name = orderData[userOrders[i].orderIds[j]];
            store_list.push(order);
        }
    }
    return store_list;
}

let getOrder = get_order();
console.log(getOrder);


store_list4 = []
for (let i = 0; i < getUser.length; i++) {
    for (let j = 0; j < userOrders[i].orderIds.length; j++) {
        console.log(orderData[userOrders[i].orderIds[j]]);
    }
}
