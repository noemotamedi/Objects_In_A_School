function putOutAlert(){
    alert("Carlos Matos says: don't forget to turn your volume up because the sound effects are the only things that work!")
    makeSelect2();
}







//Basic Functions:


function addTeacher(){
    if(document.getElementById('teacherFirst').value!=''){
        var firstName=document.getElementById('teacherFirst').value;
        var lastName=document.getElementById('teacherLast').value;
        var subject=document.getElementById('subject').value;

        allTeachers.push(new Teacher(firstName,lastName,subject));

        document.getElementById('teacherFirst').value='';
        document.getElementById('teacherLast').value='';
        document.getElementById('subject').value='';
        document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=94&end=98"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }else{
        document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=48&end=50"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        alert("Please enter in a first name.");
    }
}



function addStudent() {
    if(document.getElementById('studentFirst').value!=''){
        var firstName=document.getElementById('studentFirst').value;
        var lastName=document.getElementById('studentLast').value;
        var subject=document.getElementById('grade').value;

        allStudents.push(new Student(firstName,lastName,grade));

        document.getElementById('studentFirst').value='';
        document.getElementById('studentLast').value='';
        document.getElementById('grade').value='';
        document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=94&end=98"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }else{
        alert("Please enter in a first name.");
        document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=48&end=50"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
}



function addSection(){
    if(document.getElementById('sectionName').value!=''){
        var sectionName=document.getElementById('sectionName').value;
        var sectionCount=document.getElementById('sectionCount').value;

        allSections.push(new Section(sectionName,sectionCount));

        document.getElementById('sectionName').value='';
        document.getElementById('sectionCount').value='';
        document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=94&end=98"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        makeSelect2();
    }else{
        alert("Please enter in a section name.");
        document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=48&end=50"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }
}








var listRemove='reset';

function list(type) {

    var x = false;

    if (type == 'Students') {
        var array = allStudents;
    }
    if (type == 'Teachers') {
        var array = allTeachers;
    }
    if (type == 'Sections') {
        var array = allSections;
    }

    var output = '';

    if (listRemove != type) {

        for (var i = 0; i < array.length; i++) {
            if (array[i].firstName != undefined) {

                output += '<tr>';
                output += '<td><p>' + array[i].firstName + ' ' + array[i].lastName + '</p></td>';
                output += '<td><button onClick="changeThing(' + array[i].id + ')">Change</button></td>';
                output += '<td><button onClick="deleteThing(' + array[i].id+ ')">Delete</button></td>';
                output += '</tr>';

                x = true;
            }
        }
    }
        output += "    <tr>\n" +
            "        <td>\n" +
            "            <select id=\"selectList\">\n" +
            "                <option value=\"Students\">Students</option>\n" +
            "                <option value=\"Teachers\">Teachers</option>\n" +
            "                <option value=\"Sections\">Sections</option>\n" +
            "            </select>\n" +
            "        </td>\n" +
            "        <td></td>\n" +
            "        <td><button id=\"confirmList\" onClick=\"list(document.getElementById('selectList').value)\">Confirm!</button></td>\n" +
            "    </tr>"


        document.getElementById('list').innerHTML = output;
        listRemove = type;

        if (x == false) {
            listRemove = 'reset';
        }

        document.getElementById('selectList').value = type;
    }






//Important Functions:



function changeThing(id,array){
    document.getElementById('list').style.display="none";
    document.getElementById("changePerson").style.display="block";
    document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=147&end=151"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';

    document.getElementById('changePersonHeading').innerHTML="Change "+getPerson(id).firstName;
    var typeOfThing=getArray(id);
    if(typeOfThing==allStudents){
        document.getElementById("row1column1").innerHTML="First Name:";
        document.getElementById("row2column1").innerHTML="Last Name:";
        document.getElementById("row3column1").innerHTML="Grade:";
        document.getElementById("row4column1").innerHTML="Sections:";

        document.getElementById("row3column2").innerHTML="<input id='gradeBox' type='number'></input>";
        document.getElementById("row4column2").innerHTML=makeSelect(allSections,"studentSection",id);

        document.getElementById("row1column2").value=getPerson(id).firstName;
        document.getElementById("row2column2").value=getPerson(id).lastName;
        document.getElementById("gradeBox").value=getPerson(id).grade;
    }
   if(typeOfThing==allTeachers){
       document.getElementById("row1column1").innerHTML="First Name:";
       document.getElementById("row2column1").innerHTML="Last Name:";
       document.getElementById("row3column1").innerHTML="Subject:";
       document.getElementById("row4column1").innerHTML="Sections:";

       document.getElementById("row3column2").innerHTML="<input id='subjectBox' type='text'></input>";
       document.getElementById("row4column2").innerHTML=makeSelect(allSections,"teacherSection",id);

       document.getElementById("row1column2").value=getPerson(id).firstName;
       document.getElementById("row2column2").value=getPerson(id).lastName;
       document.getElementById("subjectBox").value=getPerson(id).subject;
    }
    if(typeOfThing==allSections){
        document.getElementById("row1column1").innerHTML="Section Name:";
        document.getElementById("row2column1").innerHTML="Section Count:";
        document.getElementById("row3column1").innerHTML="Students:";
        document.getElementById("row4column1").innerHTML="Teachers:";

        document.getElementById("row3column2").innerHTML=makeSelect(allStudents,"sectionStudent",id);
        document.getElementById("row4column2").innerHTML=makeSelect(allTeachers,"sectionTeacher",id);

        document.getElementById("row1column2").value=getPerson(id).firstName;
        document.getElementById("row2column2").value=getPerson(id).count;
    }
    document.getElementById('confirmButtonTd').innerHTML='<button id="confirmButton" onClick="editFunction('+id+')">Confirm</button>'
}










function deleteThing(id){
    var message="Are you sure you would like to delete "+ getPerson(id).firstName+' '+getPerson(id).lastName+"?";

    if(confirm(message) == true){
        getPerson(id).firstName=undefined;

    }
    var x=studentTeacherSection.indexOf(document.getElementById('selectList').value);

    list(studentTeacherSection[(x+1)%3]);
    list(studentTeacherSection[x]);

    document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=160&end=165"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
}




function editFunction(id){
    document.getElementById('list').style.display="block";
    document.getElementById("changePerson").style.display="none";
    document.getElementById("carlos2").innerHTML='<iframe id="carlosMantos" width="560" height="315" src="https://www.youtube.com/embed/QKO6IChjojI?autoplay=1&start=213&end=224"  frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'


    getPerson(id).firstName=document.getElementById('row1column2').value;

    if(getArray(id)==allStudents){
        getPerson(id).lastName=document.getElementById('row2column2').value;
        getPerson(id).grade=document.getElementById('gradeBox').value;
        addToSection('studentSection',id);
    }
    if(getArray(id)==allTeachers){
        getPerson(id).lastName=document.getElementById('row2column2').value;
        getPerson(id).subject=document.getElementById('subjectBox').value;
        addToSection('teacherSection',id);

    }
    if(getArray(id)==allSections){
        getPerson(id).count=document.getElementById('row2column2').value;
        addToSection('sectionStudent',id);
        addToSection('sectionTeacher',id);
    }


    var x=studentTeacherSection.indexOf(document.getElementById('selectList').value);
    list(studentTeacherSection[(x+1)%3]);
    list(studentTeacherSection[x]);
}









//Small Helper Functions:



function getPerson(id) {
    for (var i = 0; i < allStudents.length; i++) {
        if (allStudents[i].id == id) {
            return allStudents[i];
        }
        for (var j = 0; j < allSections.length; j++) {
            if (allSections[j].id == id) {
                return allSections[j];
            }
        }
        for (var k = 0; k < allTeachers.length; k++) {
            if (allTeachers[k].id == id) {
                return allTeachers[k];
            }
        }
    }
}




function getArray(id){
    for(var i=0;i<allStudents.length;i++){
        if(allStudents[i].id==id){
            return allStudents;
        }
    }
    for(var j=0;j<allTeachers.length;j++){
        if(allTeachers[j].id==id){
            return allTeachers;
        }
    }
    for(var k=0;k<allSections.length;k++){
        if(allSections[k].id==id){
            return allSections;
        }
    }
}


function makeSelect(array,idThing,id){
    var selectBoxString="<select multiple id='"+idThing+"'>";
    selectBoxString+="<option value='-99'></option>";
    for(var i=0;i<array.length;i++){
        if(array[i].firstName!=undefined){


            if(idThing=="studentSection"){
                    if(allSections[i].studentsInSection.indexOf(getPerson(id))!=-1) {
                        selectBoxString+="<option selected value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }else{
                        selectBoxString+="<option value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                    }
            }

            if(idThing=="teacherSection"){
                if(allSections[i].teachersInSection.indexOf(getPerson(id))!=-1) {
                    selectBoxString+="<option selected value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }else{
                    selectBoxString+="<option value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }
            }

            if(idThing=="sectionTeacher"){
                if(getPerson(id).teachersInSection.indexOf(allTeachers[i])!=-1) {
                    selectBoxString+="<option selected value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }else{
                    selectBoxString+="<option value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }
            }

            if(idThing=="sectionStudent"){
                if(getPerson(id).studentsInSection.indexOf(allStudents[i])!=-1) {
                    selectBoxString+="<option selected value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }else{
                    selectBoxString+="<option value='"+array[i].id+"'>"+array[i].firstName+"</option>";
                }
            }
        }
    }
    selectBoxString+="</select>";
    return selectBoxString;
}







function addToSection(type,id){
    if(type=='studentSection'){
        for(var a=0;a<allSections.length;a++){
            if(allSections[a].studentsInSection.indexOf(getPerson(id))!=-1){
                allSections[a].studentsInSection.splice(allSections[a].studentsInSection.indexOf(getPerson(id)),1);
            }
        }
        for(var i=0;i<document.getElementById(type).selectedOptions.length;i++){
            if(document.getElementById(type).selectedOptions[i].value>-1){
               getPerson(document.getElementById(type).selectedOptions[i].value).studentsInSection.push(getPerson(id));
            }
            }
    }
    if(type=='teacherSection'){
        for(var b=0;b<allSections.length;b++){
            if(allSections[b].teachersInSection.indexOf(getPerson(id))!=-1){
                allSections[b].teachersInSection.splice(allSections[b].teachersInSection.indexOf(getPerson(id)),1);
            }
        }
        for(var j=0;j<document.getElementById(type).selectedOptions.length;j++){
            if(document.getElementById(type).selectedOptions[j].value>-1) {
                getPerson(document.getElementById(type).selectedOptions[j].value).teachersInSection.push(getPerson(id));
            }
        }
    }
    if(type=='sectionTeacher'){
        getPerson(id).teachersInSection=[];
        for(var k=0;k<document.getElementById(type).selectedOptions.length;k++){
            if(document.getElementById(type).selectedOptions[k].value>-1) {
                getPerson(id).teachersInSection.push(getPerson(document.getElementById(type).selectedOptions[k].value));
            }
        }
    }
    if(type=='sectionStudent'){
        getPerson(id).studentsInSection=[];
        for(var l=0;l<document.getElementById(type).selectedOptions.length;l++){
            if(document.getElementById(type).selectedOptions[l].value>-1) {
                getPerson(id).studentsInSection.push(getPerson(document.getElementById(type).selectedOptions[l].value));
            }
        }
    }
    makeSelect2();
}


function ListTheThingsInSection(x){
    console.log(getPerson(document.getElementById('whichSection2').value).studentsInSection.length);
    document.getElementById('PeopleInTheSection').innerHTML='';
    if(x=='students'){
        for(var i=0;i<getPerson(document.getElementById('whichSection2').value).studentsInSection.length;i++){
            document.getElementById('PeopleInTheSection').innerHTML+="<tr><td>'"+getPerson(document.getElementById('whichSection2').value).studentsInSection[i].firstName+"'</td>";
            document.getElementById('PeopleInTheSection').innerHTML+="<td>'"+getPerson(document.getElementById('whichSection2').value).studentsInSection[i].lastName+"'</td>";
            document.getElementById('PeopleInTheSection').innerHTML+="<td>'"+getPerson(document.getElementById('whichSection2').value).studentsInSection[i].grade+"'</td></tr>";
        }
    }
    if(x=='teachers'){
        for(var j=0;j<getPerson(document.getElementById('whichSection2').value).teachersInSection.length;j++){
            document.getElementById('PeopleInTheSection').innerHTML+="<tr><td>'"+getPerson(document.getElementById('whichSection2').value).teachersInSection[j].firstName+"'</td>";
            document.getElementById('PeopleInTheSection').innerHTML+="<td>'"+getPerson(document.getElementById('whichSection2').value).teachersInSection[j].lastName+"'</td>";
            document.getElementById('PeopleInTheSection').innerHTML+="<td>'"+getPerson(document.getElementById('whichSection2').value).teachersInSection[j].subject+"'</td></tr>";
        }
    }
    makeSelect2();
}


function makeSelect2(){
    document.getElementById('whichSection2').innerHTML='';
    for(var i=0;i<allSections.length;i++){
        document.getElementById('whichSection2').innerHTML+="<option value='"+allSections[i].id+"'>"+allSections[i].firstName+"</option>";
    }
}











//sectionobject.array.push(studentobject)



var studentTeacherSection=['Students','Teachers','Sections'];















//<iframe width="560" height="315" src="https://www.youtube.com/embed/SpN7FBamPUg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>