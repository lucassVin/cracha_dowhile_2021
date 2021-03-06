const LinksSocialMedia = {
    github: 'lucassVin',
    youtube: 'jakelinygracielly',
    facebook: 'maykbrito',
    instagram: 'lucas.bcamps',
    twitter: 'lucassVin'
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    }
  }

  // i = i + 1 - incrementação
  // i++ - incrementação

  // ser humano 12345678910
  //computador 0123456789

  changeSocialMediaLinks()

//---------------------------------------------------------------//

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response =>  response.json())
    .then(data => userName.textName = data.nome)
}

getGitHubProfileInfos()


//ARROW FUNCTIONS