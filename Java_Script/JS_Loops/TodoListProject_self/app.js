let order = prompt("What would you like to do? : ").toLowerCase();
const todo_list = [];

while (true) {
    if (order === "quit") {
        console.log("Ok, You quit the app");
        break;
    } else if (order === "new") {
        const new_todo = prompt("What would you want to add in todo_list : ");
        todo_list.push(new_todo);
        console.log(`You added "${new_todo}" in todo list`)
    } else if (order === "list") {
        console.log("**********");
        for (let i = 0; i < todo_list.length; i++) {
            console.log(`${i}: ${todo_list[i]}`);
        }
        console.log("**********");
    } else if (order === "delete") {
        const delete_idx = parseInt(prompt("Type index you want to delete"));
        if (!isNaN(delete_idx) && delete_idx < todo_list.length) {
            const deleted = todo_list.splice(delete_idx, 1); //from delete_idx, delete 1 element
            console.log(`"${deleted}" is deleted in the list`)
        } else {
            console.log(`There are no index of ${delete_idx}`)
        }

    } else {
        order = prompt("You put the wrong order! What would you like to do? : ");
        continue;
    }
    order = prompt("What would you like to do? : ").toLowerCase();
}