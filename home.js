let username=localStorage.getItem("USERNAME");
var head1=document.getElementById("head1");
head1.innerHTML=`Welcome ${username}`;


function logout(){
    localStorage.clear();
    window.location="./login.html"
}


function addEmp(){
    var empobj={
        empid:empid.value,
        empname:empname.value,
        empadd:empadd.value,
        empdesig:empdesig.value,
        empexp:empexp.value,
        empsalary:empsalary.value
    }

    console.log(empobj);
    empid.value='';
    empname.value='';
    empadd.value='';
    empdesig.value='';
    empexp.value='';
    empsalary.value='';


    localStorage.setItem("emp",JSON.stringify(empobj))
    alert("Employee Details successfully added!")
}


function searchEmp(){
    const emp=JSON.parse(localStorage.getItem('emp'))
    console.log(emp);

    if(search.value==`${emp.empid}`){
        display.innerHTML=`<div class="text-center p-2">
        <div class="p-2">
        <img src="https://th.bing.com/th/id/OIP.w0RmAbd4Yq2lO6hx9h8qogHaHa?w=181&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width=150px>
        <h2 class="text-center">Employee Details</h2>
        <p>Resourceful employee who always finds a way to get things done, even in challenging situations.</p>
        Employee Id : ${emp.empid}<br>
        Employee Name : ${emp.empname}<br>
        Employee Address : ${emp.empadd}<br>
        Employee Designation : ${emp.empdesig}<br>
        Employee Experience : ${emp.empexp}<br>
        Employee Salary : ${emp.empsalary}
        </div>`
    }
    else{
        alert("Enter a Valid Employee Id !")
        searchEmp.value='';
    }

}