function multiplicationTable(){
    let table;
    table = "<table id='mtable'>"

    let num = document.getElementById("number").value


    if(num == null || num == "")

    num = 5;
    for(let i = 1; i<=10;i++){
        table+='<tr><td>' + num  + "x" + i + "=" + num*i + '</td></tr>'
    }

    table+= '</table>'
    document.getElementById("result").innerHTML += table
}

if(localStorage.getItem(multiplicationTable)){
    const tableData = JSON.parse(localStorage.getItem('multiplicationTable'))
    displayTable(tableData)
}else{
  const tableData= generateTableData()
  displayTable(tableData)
  localStorage.setItem('multiplicationTable',JSON.stringify(tableData))
    
}


function generateTableData(){

}

function displayTable(){
    
}
