function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassisfier('https://teachablemachine.withgoogle.com/models/QuFCk2A3T/', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('dog') 
    img1 = document.getElementById('cat')
    img2 = document.getElementById('lion')
    img3 = document.getElementById('cow')

    if (results[0].label == "Barking") {
      img.src = '6623e73500f43b8d20aaa35a46465641.gif';
      img1.src = 'download.png';
      img2.src = 'downlod123.jpg';
      img3.src = 'download (1).png';
    } else if (results[0].label == "Meowing") {
      img.src = 'images.png';
      img1.src = 'cute-animated-cat-tutorial.gif';
      img2.src = 'download123.jpg';
      img3.src = 'download (1).png';
    } else if (results[0].label == "Roaring") {
      img.src = 'images.png';
      img1.src = 'download.png';
      img2.src = '1282522359animated-lion-gif-5.gif';
      img3.src = 'download (1).png';
    }else if (results[0].label == "Mooing") {
        img.src = 'images.png';
        img1.src = 'download.png';
        img2.src = 'downlod123.jpg';
        img3.src = 'Za9e.gif';
    }
  }
}