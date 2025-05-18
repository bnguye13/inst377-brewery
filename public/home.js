async function createBrewery() {
  await fetch("/brewery", {
    method: "POST",
    body: JSON.stringify({
      name: `${document.getElementById("name").value}`,
      city: `${document.getElementById("city").value}`,
      state: `${document.getElementById("state").value}`,
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((result) => result.json());

  await loadBreweryData();
}

async function loadBreweryData() {
  await fetch(`/brewery`)
    .then((result) => result.json())
    .then((resultJson) => {
      const table = document.createElement("table");
      table.setAttribute("id", "breweryInfo");

      const tableRow = document.createElement("tr");

      const tableHeadingName = document.createElement("th");
      tableHeadingName.innerHTML = "Name";
      tableRow.appendChild(tableHeadingName);

      const tableHeadingCity = document.createElement("th");
      tableHeadingCity.innerHTML = "City";
      tableRow.appendChild(tableHeadingCity);

      const tableHeadingState = document.createElement("th");
      tableHeadingState.innerHTML = "State";
      tableRow.appendChild(tableHeadingState);

      table.appendChild(tableRow);

      result.Json.forEach((brewery) => {
        const breweryTableRow = document.createElement("tr");
        const breweryTableName = document.createElement("td");
        const breweryTableCity = document.createElement("td");
        const breweryTableState = document.createElement("td");

        breweryTableName.innerHTML = brewery.brewery_name;
        breweryTableCity.innerHTML = brewery.brewery_city;
        breweryTableState.innerHTML = brewery.brewery_state;

        breweryTableRow.appendChild(breweryTableName);
        breweryTableRow.appendChild(breweryTableCity);
        breweryTableRow.appendChild(breweryTableState);
      });

      const preExistingTable = document.getElementById("customerInfo");
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadBreweryData;
