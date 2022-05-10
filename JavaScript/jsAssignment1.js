function GenerateTable() {
    //Build an array containing Customer records.
    var Employees = new Array();
    Employees.push(["Name", "Age", "Date of Birth", "Email", "Company Name" ]);
    Employees.push([ "Utkarsh Yadav", "23", "07-041999", "utkarsh.y@gemail.com" , "HCL"]);
    Employees.push([ "Vishal Singh ","24", "12-09-1998", "vishal,s@gemail.com", "Vodaphon"]);
    Employees.push([ "Anshu Kumar","23","12-12-1999", "amshu.k@gemail.com", "Tata"]);
    Employees.push([ "Satyam Giri", "23", "09-12-1999", "Satyam.g@gemail.com", "Gemini solutions"]);

    //Create a HTML Table element.
    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = Employees[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = Employees[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < Employees.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = Employees[i][j];
        }
    }

    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
}