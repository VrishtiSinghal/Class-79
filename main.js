var students=[];
function submit(){
    var stud1=document.getElementById("name1").value ;
    var stud2=document.getElementById("name2").value ;
    var stud3=document.getElementById("name3").value ;
    var stud4=document.getElementById("name4").value ;
    students.push(stud1);
    students.push(stud2);
    students.push(stud3);
    students.push(stud4);  
    console.log(students);  
    document.getElementById("show_names").innerHTML=students;
    document.getElementById("sub").style.display="none";
    document.getElementById("sort").style.display="inline";
    
}
function Sort(){
    students.sort();
    console.log(students);
    document.getElementById("show_names").innerHTML=students;
}