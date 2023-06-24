console.log("Código JavaScript cargado"); // Verificar si se ejecuta el archivo JavaScript

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Verificar los datos obtenidos del archivo JSON
    
    const tableBody = document.getElementById("table-body");
    console.log(tableBody); // Verificar la referencia al elemento de la tabla
    
    const columnsName = ["id", "monto", "email", "comentario"];

    data.users.forEach((user) => {
      const row = document.createElement("tr");
      columnsName.forEach((key) => {
        const td = document.createElement("td");
        td.textContent = user[key];
        row.appendChild(td);
      });

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error", error);
  });
