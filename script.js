
//function to GET my repository from Github
function getProjects() {
    const urlGithub = 'https://api.github.com/users/Dianadev-uk/repos'
    let loadingElement = document.getElementById('loading');

    fetch(urlGithub, {
        method:'GET'
    })
        .then((response) => response.json())
        .then((response) => {
            loadingElement.style.display = 'none'
            showProjects(response)
        })
        .catch((error) => {
            console.log(error)
        })
}

//create dinamically my list of projects brought from github
function showProjects(data) {
    let listElement = document.getElementById('my-projects-list')

    for (let i = 0; i < data.length; i++) {
        let a = document.createElement('a')
        a.href = data[i]['clone_url']
        a.target = '_blank'
        a.title = data[i]['description']
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }

}

getProjects();