images = '/images/';
pictureBox = document.querySelector(".picture-box");

var image_count = 5;

for (let i = 1; i < image_count+1; i++) {
    let pictureFolder = document.createElement("div");
    pictureFolder.className = "picture";
    pictureFolder.innerHTML = "<img src=" + images + 'image' + i + '.jpg' + " alt=Картинка" + i + ">";
    pictureBox.insertBefore(pictureFolder, pictureBox.firstChild);
}
