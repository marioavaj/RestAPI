fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {

      let element = document.getElementById("element");

      element.innerHTML += `<div id = "vypis">id uzivatela: `+ json[i].userId + "<br>" + 
      `<h1>Titul: `+"<br>" + json[i].title + `</h1>` + "<br>" +
      `Telo spravy: ` +"<br>" + json[i].body + `<div>`;
      ;
    }
  });
