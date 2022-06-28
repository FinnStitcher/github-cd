var requestUrl = 'https://api.github.com/repos/twitter/chill/issues?per_page=5';

var testDiv = document.getElementById("test");

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log('Github Repo Issues \n----------');
    console.log(data[3].node_id);
    var nodeID = data[3].node_id;
    var text = document.createElement('h1');
    text.textContent = nodeID;
    testDiv.append(text);
  });
