var Name = document.getElementById("Name");
var bookURL  = document.getElementById("URL");




var allValue = [];



function addValue() {
    var bookmark = {
        siteName: Name.value,
        siteURL: bookURL.value,
    }
    allValue.push(bookmark)
    clear();
    display();
    
}

function clear(){
    Name.value = "";
    bookURL.value = "";
}


function display() {
    var all = "";
    
    for(var i = 0    ; i <allValue.length      ;  i++   ){
        all += `<tr>
        <td>`+ allValue[i].siteName +`</td>
        <td><a target="_blank" href="`+allValue[i].siteURL+`"><button class="visitButton">visit</button></a></td>
        <td><button onclick="deleteMark(${i})" class="deletebutton">Delete</button></td>
    </tr>`
    }

    document.getElementById("tablee").innerHTML = all;
}

function deleteMark(index){
    allValue.splice(index , 1);
    display();
}