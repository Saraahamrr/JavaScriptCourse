//////////////////////////////////// Lab 4 ////////////////////////////////
console.log("Hello Eng/menna this is Sarah Amr's Lab 4");


// // 1- image slider while mouse on(auto sliding between imgs)
// // - back to first img if exit the img 

var i = 0;
var img = [];
var time = 1500;
var timeout;

img[0] = "./slideshow_imgs/apple.jpeg";
img[1] = "./slideshow_imgs/avocado.jpeg";
img[2] = "./slideshow_imgs/banana.jpeg";
img[3] = "./slideshow_imgs/cherry.jpeg";
img[4] = "./slideshow_imgs/grapes.jpeg";


//document.slideShow.src = img[0];

function changeImg() {
    document.slideShow.src = img[i];
    console.log("switched to ", img[i]);

    if( i < img.length -1){
        i++
    }
    else {
        i = 0
    }

    timeout = setTimeout("changeImg()",time)
}

function firstImg() {
    clearTimeout(timeout);
    document.slideShow.src = img[0];
}


// // 2- drop list (names) from json file
// // when select name
// // output the details of person(age,mail...)
// // - selecting new name will overwrite exist one

var xhr = new XMLHttpRequest();
xhr.open("GET", "people.json");
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var regOk = new RegExp(/^2\d{2}/);
    var regServerError = new RegExp(/^5\d{2}/);
    var regClientError = new RegExp(/^4\d{2}/);

    if (String(xhr.status).match(regOk)) {
      // console.log(JSON.parse(xhr.responseText));
     var data = JSON.parse(xhr.responseText);
      //console.log(JSON.stringify(data));
      const peopleList = document.getElementById("peopleList");
      data.forEach(person => {
      const option = document.createElement("option");
      option.value = person.name;
      option.textContent = person.name
      peopleList.appendChild(option)
      });
    } else if (String(xhr.status).match(regServerError)) {
      //console.error("server error:", xhr.responseText);
    } else if (String(xhr.status).match(regClientError)) {
      //console.error("client error:", xhr.responseText, xhr.statusText);
    }
  }
};
