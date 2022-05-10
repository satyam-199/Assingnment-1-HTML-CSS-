showData();
function saveData()
{
    let name,age,email,dob,mobile;
    name=document.getElementById("name").value;
    age=document.getElementById("age").value;
    email=document.getElementById("email").value;
    dob=document.getElementById("dob").value;
    mobile=document.getElementById("mobile").value;
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(name == ""){
        document.getElementById('username').innerHTML = "**Please fill user name**"
        return false;
    }
    if(!isNaN(name)){
        document.getElementById('username').innerHTML = "**Numbers Not Allowed**"
        return false;
    }
    if(/^[a-zA-Z0-9]*$/.test(name) == false){
        document.getElementById('username').innerHTML = "**Please fill the correct user Name**";
        return false;
    }
    if(age == ""){
        document.getElementById('userAge').innerHTML = "**Please fill the  user Age**"
        return false;
    }
    if(age <= 21 || age > 90 ){
        document.getElementById('userAge').innerHTML = "**Please fill the correct user Age**";
        return false;
    }
    if(email == ""){
        document.getElementById('userEmail').innerHTML = "**Please fill user Email**";
        return false;
    }
    if(email.indexOf('@') <= 0){
        document.getElementById('userEmail').innerHTML = "**Invalid Email**";
        return false;
    }
    if(dob == ""){
        document.getElementById('userDob').innerHTML = "**Please fill the user DOB**";
        return false;
    }
    if(mobile == ""){
        document.getElementById('userNumber').innerHTML = "**Please fill the Mobile Number**";
        return false;
    }
    if(mobile.length < 10 || mobile.length > 10){
        document.getElementById('userNumber').innerHTML = "**Please fill the Correct Mobile Number**";
        return false;
    }
    if(user_records.some((v)=>{return v.email==email}))
    {
        alert("duplicate data");
    }
    else
    {
        user_records.push({
        "name":name,
        "age" :age,
        "email":email,
        "dob":dob,
        "mobile":mobile
        })
        localStorage.setItem("users",JSON.stringify(user_records));
    }
    showData();
}

function showData()
{
    document.getElementById("showUsers").innerHTML="";
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if(user_records)
    {
        for(let i=0;i<user_records.length;i++)
        {
            let addDiv=document.createElement('div');
            addDiv.className="row";
            addDiv.innerHTML='  <div class="col-sm-2" style="padding: 10px;">'+user_records[i].name+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].age+'</div><div class="col-sm-4" style="padding: 10px;">'+user_records[i].email+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].dob+'</div><div class="col-sm-2" style="padding: 10px;">'+user_records[i].mobile+'</div>';
            document.getElementById("showUsers").appendChild(addDiv);
        }
    }
}