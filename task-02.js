const inventory = {
    items: ['Монорельса', 'Фильтр'],
    add(itemName) {
        console.log(`Adding ${itemName} to inventory`);
        this.items.push(itemName);
    },
    remove(itemName) {
        console.log(`Removing ${itemName} from inventory`);
        this.items = this.items.filter(item => item !== itemName);
    },
};

const invokeInventoryAction = function (object, inventoryAction, itemName) {
    console.log(`Invoking action on ${itemName}`);
    const action = inventoryAction.bind(object, itemName);
    action();
};

invokeInventoryAction(inventory, inventory.add, 'Аптечка');
// Invoking action on Аптечка
// Adding Аптечка to inventory

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction(inventory, inventory.remove, 'Фильтр');
// Invoking action on Фильтр
// Removing Фильтр from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка']