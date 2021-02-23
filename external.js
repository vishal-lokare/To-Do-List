var c=0;

function addlistitem(){
    var s = document.getElementById("new").value;
    if(s.length===0)
	return false;
    var td1 = document.createElement("td");
    var tr = document.createElement("tr");
    var table = document.getElementById("table");
    table.appendChild(tr);
    td1.innerHTML=s;
    tr.appendChild(td1);
    td1.bgColor="tomato";
    document.getElementById("new").value = "";
    var td2 = document.createElement("td");
    var dlt = document.createElement("button");
    dlt.innerHTML="X";
    td2.appendChild(dlt);
    tr.appendChild(td2);
    dlt.onclick=deletelistitem;
    td1.onclick=changecolor;
    c++;
    tr.id=c;
    td1.width="90%";
    
    function changecolor(){
        if(td1.bgColor=="tomato")
            td1.bgColor="lime";
        else
            td1.bgColor="tomato";
    }
    
    function deletelistitem(){
	if(confirm("Confirm deletion?")===false)
		return false;
	var index = parseInt(tr.id);
        table.removeChild(table.childNodes[index]);
	var i;
	for(i=index+1;i<=c;i++)
	{
		document.getElementById(i).id=i-1;
	}
	c--;
    }
}