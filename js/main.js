//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const books = document.querySelector('#books').value
  const chapter = document.querySelector('#chapter').value
  const verse = document.querySelector('#verse').value
  const url = `https://bible-api.com/${books}+${chapter}:${verse}?verse_numbers=true`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.reference
        document.querySelector('a').innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}