

let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word.trim();

let url = `http://api.wordnik.com:80/v4/word.json/${word}/definitions?limit=5&includeRelated=true&sourceDictionaries=all&useCanonical=true&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText);
        console.log(response);
        console.log(typeof(response));
        var length = 3;
        var maxLength = response.length;
        if(maxLength < length)
            length = maxLength;
        console.log(response[0]);
        for(var i=0; i<length; ++i){
            var ele = document.createElement('h1');
            ele.innerHTML = `${i+1}. ${response[i]["text"]}`;
            ele.style.fontFamily = 'Comic Sans MS';
            ele.style.fontSize = '14px';
            document.body.appendChild(ele);
        }
   }
};
xhttp.open("GET", url, true);
xhttp.send();
