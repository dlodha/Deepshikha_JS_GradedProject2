const searchJob = document.getElementById("searchJob");
var current = 0;
let searchDataLen =0;
let searchData = [];
function searchJobEvent (e) {
     removeAllChildNodes(document.getElementById("container"));
    removeAllChildNodes(document.getElementById("navigateData"));
    current = 0;
    if(e.keyCode === 13) {
        console.log("Entered");
            let searchElement = document.getElementById('searchJob');
           
            console.log(searchElement.value);
            let searchData = resumeData.filter(item=>item.basics.AppliedFor===searchElement.value);
            let cardData = [];
            console.log(searchData);
            if(searchData.length>0){
                searchDataLen = searchData.length;
                console.log(searchDataLen);
                             
                populateNavButton(current,searchData);
                prepareItemCard(searchData[current]);
            } else {
                removeAllChildNodes(document.getElementById("container"));
                removeAllChildNodes(document.getElementById("navigateData"));
                let cardTop = document.getElementById("container");
                cardTop.style.display="grid";

                let cardBody = document.createElement('div');
                cardBody.setAttribute('id', 'invalidData'); 
                cardBody.innerHTML="<p><span style=\"font-size:100px\">&#128542;</span><h2>No such result found!</h2></p>";
                
                cardTop.appendChild(cardBody);
            }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function prepareItemCard(item) {
   
    let itemCard = document.getElementById("container");
    itemCard.style.display="grid";

    let topDiv = document.createElement('div');
    topDiv.setAttribute('id', 'top-div');
    let applicantName=document.createElement('p');
    applicantName.setAttribute('id','resume-top')
    applicantName.innerHTML =  "<h2><b>" + item.basics.name + "</b></h2><h8><b>Applied for:</b>" + item.basics.AppliedFor + "</h8>";
    topDiv.appendChild(applicantName);

    let applicantImg=document.createElement('img');
    applicantImg.setAttribute('id','applicantImg');
    applicantImg.setAttribute('src','./Images/profile_img.jpg');
    topDiv.appendChild(applicantImg);
    itemCard.appendChild(topDiv);
    console.log(item.basics.name);
    
    let resumeMain = document.createElement('div');
    resumeMain.setAttribute('class','w3-row');
    let leftPanel = document.createElement('div');
        leftPanel.setAttribute('id','leftPanel');
        leftPanel.setAttribute('class',"w3-col m4 l3");
        
        let personalInfo = document.createElement('p');
        personalInfo.setAttribute('class','leftPanel-item');
        personalInfo.innerHTML="<b>Personal Information</b><br>" + item.basics.phone + "<br>" + item.basics.email + "<br><a href= " + item.basics.profiles.url + ">LinkedIn</a>";
        let techSkills = document.createElement('p');
        techSkills.setAttribute('class','leftPanel-item');
        techSkills.innerHTML="<b>Technical Skills</b><br>" + item.skills.keywords.map((skill)=> skill.replace(/,/g,'')+ "<br>");
        let hobby = document.createElement('p');
        hobby.setAttribute('class','leftPanel-item');
        hobby.innerHTML="<b>Hobbies</b><br>" + item.interests.hobbies.map((hobby)=> hobby.replace(/,/g, '')  + "<br>");
        leftPanel.appendChild(personalInfo);
        leftPanel.appendChild(techSkills);
        leftPanel.appendChild(hobby);
        resumeMain.appendChild(leftPanel);

    let rightPanel = document.createElement("div");
    rightPanel.setAttribute('class',"w3-col m8 l9");
    
    let rightTitle= document.createElement("p");
    rightTitle.innerHTML="<h3><b>Work Experience in previous company</b></h3>";
    rightPanel.appendChild(rightTitle);

    
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
        
        let tableRow1 = tableBody.insertRow();
        let companyName=tableRow1.insertCell(0);
        companyName.style.fontSize="12px";
        companyName.innerHTML="<b>Company name :</b>" + item.work["Company Name"];
        
        let tableRow2 = tableBody.insertRow();
        let position=tableRow2.insertCell(0);
        position.style.fontSize="12px";
        position.innerHTML="<b>Position :</b>" + item.work.Position;
        
        let tableRow3 = tableBody.insertRow();
        let startDate=tableRow3.insertCell(0);
        startDate.style.fontSize="12px";
        startDate.innerHTML="<b>Start Date :</b>" + item.work["Start Date"];
        
        let tableRow4 = tableBody.insertRow();
        let endDate=tableRow4.insertCell(0);
        endDate.style.fontSize="12px";
        endDate.innerHTML="<b>End Date :</b>" + item.work["End Date"];
        
        let tableRow5= tableBody.insertRow();
        let summary=tableRow5.insertCell(0);
        summary.style.fontSize="12px";
        summary.innerHTML="<b>Summary :</b>" + item.work.Summary;
        
        let tableRow6 = tableBody.insertRow();
        let projects=tableRow6.insertCell(0);
        projects.style.fontSize="12px";
        projects.innerHTML="<p><b>Projects :</b></p><b>" +item.projects.name + " :</b>" + item.projects.description;
        
        let tableRow7 = tableBody.insertRow();
        let education=tableRow7.insertCell(0);
        education.style.fontSize="12px";
        education.innerHTML="<p><b>Education :</b><p><ul><li><b>UG :</b>" + item.education.UG.institute + "," + item.education.UG.course +
                             ","+item.education.UG["Start Date"] +"," + item.education.UG["End Date"] +"," + item.education.UG.cgpa + "</li>" +
                                                          "<li><b>PU :</b>" + item.education["Senior Secondary"].institute +"," + item.education["Senior Secondary"].cgpa + "</li>" +
                                                          "<li><b>High School :</b>" + item.education["High School"].institute + "," + item.education["High School"].cgpa + "</li>" ;
        
        let tableRow8 = tableBody.insertRow();
        let internships=tableRow8.insertCell(0);
        internships.style.fontSize="12px";
        internships.innerHtml="<p><b>Internship :</b></p><li><b>Company Name :</b>" + item.Internship["Company Name"] + "</li" +
                                                           "<li><b>Position :</b>" + item.Internship.Position + "</li>"+
                                                          "<li><b>Start Date :</b>" + item.Internship["Start Date"] + "</li>"+
                                                          "<li><b>End Date :</b>" + item.Internship["End Date"] + "</li>"+
                                                          "<li><b>Summary :</b>" + item.Internship.Summary + "</li>";
        
        let tableRow9 = tableBody.insertRow();
        let achievements=tableRow9.insertCell(0);
        achievements.style.fontSize="12px";
        achievements.innerHTML="<b>Achievements :</b>" + item.achievements.Summary;
        
       
        tableBody.appendChild(tableRow1);
        tableBody.appendChild(tableRow2);
        tableBody.appendChild(tableRow3);
        tableBody.appendChild(tableRow4);
        tableBody.appendChild(tableRow5);
        tableBody.appendChild(tableRow6);
        tableBody.appendChild(tableRow7);
        tableBody.appendChild(tableRow8);
        tableBody.appendChild(tableRow9);
        table.appendChild(tableBody);
        rightPanel.appendChild(table);
        resumeMain.appendChild(rightPanel);
        itemCard.appendChild(resumeMain);
        
    return itemCard;
}
   

function prev(searchData){
    if(current != 0){
        current--;
    }
    disableButtons(prevButton,nextButton,current);
    removeAllChildNodes(document.getElementById("container"));
    return prepareItemCard(searchData[current]);
    
}

function next(searchData){
     if(current != searchDataLen - 1){
        current++;}

        disableButtons(prevButton,nextButton,current);
        removeAllChildNodes(document.getElementById("container"));
        return prepareItemCard(searchData[current]);
}

let prevButton = document.createElement('button');
let nextButton = document.createElement('button');

function populateNavButton(current,searchData){
    console.log("in navButton searchDataLen" + searchDataLen);
    let navData = document.getElementById('navigateData');

    prevButton.setAttribute('id','prev_button');
    prevButton.innerText="previous";
    prevButton.addEventListener('click',() => {prev(searchData);});
    navData.appendChild(prevButton);
  
    nextButton.setAttribute('id','next_button');
    nextButton.setAttribute('listener', 'true');
    nextButton.innerText="next";
    console.log(document.getElementById('next_button'));
    nextButton.addEventListener('click',()=>{next(searchData);});
    navData.appendChild(nextButton);    
    
    disableButtons(prevButton,nextButton,current);
   }

    function disableButtons(prevButton,nextButton,current){
        nextButton.disabled=false;
        prevButton.disabled =false;
        if(current==(searchDataLen-1) && searchDataLen!=1){
            nextButton.disabled = true;
            prevButton.disabled =false;
        } else if(current==0 && searchDataLen > 1){
            nextButton.disabled=false;
            prevButton.disabled =true;
        } else if(current==0 && searchDataLen==1){
            nextButton.disabled=true;
            prevButton.disabled =true;
        }
    }
   
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate',function (e) {
    window.history.pushState(null, null, window.location.href);
    });
    window.addEventListener('load',function (e) {
        document.getElementById("container").style.display = "none";
    });
   