function changeUpvoteImage1() {
  if (document.getElementById("upvote1").src == "file:///C:/Users/Sparsh/Documents/DeepDive/assets/upvote1.png") {
    document.getElementById("upvote1").src = "assets/upvote2.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
  }
  else {
    document.getElementById("upvote1").src = "assets/upvote1.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
  }
}

function changeUpvoteImage2() {
  if (document.getElementById("upvote2").src == "file:///C:/Users/Sparsh/Documents/DeepDive/assets/upvote1.png") {
    document.getElementById("upvote2").src = "assets/upvote2.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
  }
  else {
    document.getElementById("upvote2").src = "assets/upvote1.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
  }
}

function changeUpvoteImage3() {
  if (document.getElementById("upvote3").src == "file:///C:/Users/Sparsh/Documents/DeepDive/assets/upvote1.png") {
    document.getElementById("upvote3").src = "assets/upvote2.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
  }
  else {
    document.getElementById("upvote3").src = "assets/upvote1.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
  }
}

function changeDownvoteImage1() {
  if (document.getElementById("downvote1").src == "file:///C:/Users/Sparsh/Documents/DeepDive/assets/downvote1.png") {
    document.getElementById("downvote1").src = "assets/downvote2.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
  }
  else {
    document.getElementById("downvote1").src = "assets/downvote1.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
  }
}

function changeDownvoteImage2() {
  if (document.getElementById("downvote2").src == "file:///C:/Users/Sparsh/Documents/DeepDive/assets/downvote1.png") {
    document.getElementById("downvote2").src = "assets/downvote2.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
  }
  else {
    document.getElementById("downvote2").src = "assets/downvote1.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
  }
}

function changeDownvoteImage3() {
  if (document.getElementById("downvote3").src == "file:///C:/Users/Sparsh/Documents/DeepDive/assets/downvote1.png") {
    document.getElementById("downvote3").src = "assets/downvote2.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
  }
  else {
    document.getElementById("downvote3").src = "assets/downvote1.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
  }
}

function displayPostComments1() {
  var foo = document.getElementById("comments1");
  if(foo.style.display == 'none')
    foo.style.display = 'block';
  else
    foo.style.display = 'none';
}

function newComment1(elem) {
  if(event.keyCode == 13){
    var htmlString = '<span class="comment-user"><strong>' + 'Max (You) ' +'</strong></span><span class="comment-content">' + elem.value + '</span>',
    div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = htmlString;
    elem.parentNode.insertBefore(div, elem);
    elem.value = '';
  }
}
