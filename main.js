var images = ["images.png","https://thumbs.dreamstime.com/b/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg","https://image.freepik.com/free-vector/cartoon-school-boy-carrying-backpack-waving-hand_29190-4926.jpg","https://i.pinimg.com/originals/7f/c4/41/7fc4411c1ae268142164dfb9713035ff.jpg","https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names = ["Mother","Father","Sabya","Grandmother,Grandfather","Shriya"];
var i = 0;
function nextimage1(){
    i++;
    var namemembersarray = 5;
    if(i > namemembersarray){
    i = 0;
    }
    var updateimage = images[i];
    var updatenames = names[i];
    document.getElementById("Img1").src=updateimage;
    document.getElementById("Family1").innerHTML=updatenames;
}