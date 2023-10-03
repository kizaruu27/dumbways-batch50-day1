let projectData = []

let days = "";
let month = "";
function addProject(e) {
    e.preventDefault();

    let projectName = document.getElementById("project-name").value;
    let startDate = new Date(document.getElementById("start-date").value);
    let endDate = new Date(document.getElementById("end-date").value);
    let description = document.getElementById("description").value;
    let image = document.getElementById("upload").files;

    let checkbox = document.getElementsByName("tech-checkbox");

    image = URL.createObjectURL(image[0]);

    let diff = endDate - startDate;
    let days = diff / (1000 * 3600 * 24);
    let weeks = days / 7;
    let months = days / 30;


    let project = {
        projectName,
        days: Math.floor(days),
        weeks: Math.floor(weeks),
        months: Math.floor(months),
        description,
        image
    }

    projectData.push(project);
    console.log(projectData);

    renderMyProject();
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
                    <h4>durasi: ${projectData[i].months} bulan, ${projectData[i].weeks} minggu, ${projectData[i].days} hari</h4>
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