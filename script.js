const url = "https://235c713c.ngrok.io/api/sleeplogs";
const options = 
{
    method: 'GET',
    mode: 'cors',
    headers: {
    'Content-Type': 'application/json'
    }   

};

const app = document.getElementById("root");
const container = document.createElement('div');
container.setAttribute("class", "container");
app.appendChild(container);

fetch(url, options).then((response) => {
    console.log(response);
    return response.json();
}).then((data) => {
    console.log("De data: ");
    console.log(data);
    data.forEach((sleeplog) => {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        const h1 = document.createElement("div");
        h1.setAttribute("class", "slaaplog-entry")
        h1.textContent = "Slaaplog Entry";
        const pTijd = document.createElement("p");
        pTijd.setAttribute("class", "tijd");
        pTijd.textContent = sleeplog.createdAt;
        const p1 = document.createElement("p");
        p1.textContent = sleeplog.data.eersteData;
        const p2 = document.createElement("p");
        p2.textContent = sleeplog.data.tweedeData;
        container.appendChild(row);
        row.appendChild(h1);
        row.appendChild(pTijd);
        row.appendChild(p1);
        row.appendChild(p2);
        console.log(sleeplog.data.eersteData + " - " + sleeplog.data.tweedeData);
    })
}).catch((error) => { 
    console.log(error);});


