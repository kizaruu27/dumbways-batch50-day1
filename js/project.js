let projectData = []

let days = "";
let month = "";
function addProject(e) {
    e.preventDefault();

    let projectName = document.getElementById("project-name").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("upload").files;

    let checkbox = document.getElementsByName("tech-checkbox");
    let tech= [];

    for (let i = 0; i < tech.length; i++) {
        if (checkbox[i].checked) {
            let techOption = checkbox[i].value;
            tech.push(techOption);
        }
    }

    image = URL.createObjectURL(image[0]);
    durationCount(startDate, endDate);

    let project = {
        projectName,
        days,
        month,
        techProject: tech,
        description,
        image
    }

    projectData.push(project);
    console.log(projectData);

    renderMyProject();
}

function durationCount(start, end) {
    let dateStart = new Date(start);
    let dateEnd = new Date(end);
    let oneDay = (1000 * 3600 * 24);

    let diff = dateEnd.getTime() - dateStart.getTime();
    let daysTotal = diff/oneDay;
    let inAMonth = Math.floor(daysTotal/30);
    daysTotal = daysTotal % 30;

    days = daysTotal;
    month = inAMonth;

    console.log(diff);
    console.log(daysTotal);
    console.log(inAMonth);
}

function renderMyProject() {
    document.getElementById("container").innerHTML = ``;

    for (let i = 0; i < projectData.length; i++) {
        console.log(projectData[i]);

        document.getElementById("container").innerHTML +=
            `
                <div class="project-content" >
                    <img src="${projectData[i].image}" alt="">
                    <h3>${projectData[i].projectName}</h3>
                    <h4>durasi: 3 bulan</h4>
                    <p>
                        ${projectData[i].description}
                    </p>
                    <div class="icon">
                        <i data-feather="play"></i>
                        <i data-feather="box"></i>
                        <i data-feather="bluetooth"></i>
                    </div>
                    <div class="buttons">
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>
            `
    }
}