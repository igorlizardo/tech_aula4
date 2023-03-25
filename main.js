let pets = [];
function addPet(){
    event.preventDefault();

    let pet = {
        "petName": document.getElementById(fname).value,
        "petBreed": document.getElementById(fbreed).value,
        "petowner": document.getElementById(fowner).value,
        "petPhone": document.getElementById(fphone).value,
    }

    document.getElementById(fname).value = ""
    document.getElementById(fbreed).value = ""
    document.getElementById(fowner).value = ""
    document.getElementById(fphone).value = ""

    pets.push(pet);
}

function renderTable(){

    let table = document.getElementById(dataTable);
    table.innerHTML = `<tr>
    <th> ID </th>
    <th> Nome do Pet </th>
    <th> Raça </th>
    <th> Dono do Pet </th>
    <th> Telefone </th>
    <th> Remover </th>
</tr>`;

for(let i= 0; i < pets.length; i++){
    table.innerHTML = table.innerHTML  +  `<tr>
    <td>${i}</td>
    <td>${pets[i].petName}</td>
    <td>${pets[i].petBreed}</td>
    <td>${pets[i].petOwner}</td>
    <td>${pets[i].phone}</td>
    <td><img src="remove.png" width="25px" height="25px" onclick="removePet(${i})"></td>
</tr>`
}
}

function resetForm(){
document.getElementById("fname").value = "";
document.getElementById("fbreed").value = "";
document.getElementById("fowner").value = "";
document.getElementById("fphone").value = "";
}

renderTable();