let arr = [];
let users;

let randomNumber;

function generatePin() {
    console.log();
    randomNumber = Math.floor(Math.random() * 434578362823);
    input2.value = randomNumber;
}

function savePin() {
    input2.value = "";
    
    users = {
        network: network.value,
        amount: amount.value,
        pin: ``,
        status: "Unused",
        dateCreated: new Date().toLocaleDateString(),
        dateUsed: "unused",
    };

    if (network.value == "MTN") {
        users.pin  = `*555*${randomNumber}#`;
    }
    else if (network.value == "GLO"){
        users.pin = `*777*${randomNumber}#`;
    }
    else if (network.value == "AIRTEL"){
        users.pin = `*123*${randomNumber}#`;
    }
    else if (network.value == "9MOBILE"){
        users.pin = `*999*${randomNumber}#`;
    }

    arr.push(users);
    console.log(arr);
    updateTb();
}

function updateTb() {
    let tableContent = document.getElementById("tableBody");

    tableContent.innerHTML = "";

    arr.forEach((values, index) => {
        const{ network, amount, pin, status, dateCreated, dateUsed } = values;
        tableContent.innerHTML += `
            <tr>
                <th scope="row">${ index + 1}</th>
                <td>${network}</td>
                <td>${amount}</td>
                <td>${pin}</td>
                <td>${status}</td>
                <td>${dateCreated}</td>
                <td>${dateUsed}</td>
                <td><button class="btn" onclick="del(${index})">Delete</button></td>
            </tr>
    `;
    })

}

function recharge() {
    let pin = document.getElementById("input1").value.trim();

    let check = arr.findIndex((values) => values.pin === pin);

    if (check !== -1){
        arr[check].status = "Used";
        arr[check].dateUsed = new Date().toLocaleDateString();
        alert("Recharge Successful");
        updateTb();
    }
    else{
        alert("Invalid Pin");
    }
}

function del(params){
    arr.splice(params, 1);
    updateTb();
}
