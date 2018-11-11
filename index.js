var upvote1 = 0, upvote2 = 0, upvote3 = 0;
var downvote1 = 0, downvote2 = 0, downvote3 = 0;

function changeUpvoteImage1() {
  if (upvote1 == 0) {
    document.getElementById("upvote1").src = "assets/upvote2.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
    upvote1 = 1;

    if(downvote1 == 1){
      num++;
      text = num.toString();
      document.getElementById("votes1").innerHTML = text;
      document.getElementById("downvote1").src = "assets/downvote1.png";
    }
  }
  else {
    document.getElementById("upvote1").src = "assets/upvote1.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
    upvote1 = 0;
  }
}

function changeUpvoteImage2() {
  if (upvote2 == 0) {
    document.getElementById("upvote2").src = "assets/upvote2.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
    upvote2 = 1;

    if(downvote2 == 1) {
      num++;
      text = num.toString();
      document.getElementById("votes2").innerHTML = text;
      document.getElementById("downvote2").src = "assets/downvote1.png";
    }
  }
  else {
    document.getElementById("upvote2").src = "assets/upvote1.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
    upvote2 = 0;
  }
}

function changeUpvoteImage3() {
  if (upvote3 == 0) {
    document.getElementById("upvote3").src = "assets/upvote2.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
    upvote3 = 1;

    if(downvote3 == 1) {
      num++;
      text = num.toString();
      document.getElementById("votes3").innerHTML = text;
      document.getElementById("downvote3").src = "assets/downvote1.png";
    }
  }
  else {
    document.getElementById("upvote3").src = "assets/upvote1.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
    upvote3 = 0;
  }
}

function changeDownvoteImage1() {
  if (downvote1 == 0) {
    document.getElementById("downvote1").src = "assets/downvote2.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
    downvote1 = 1;

    if(upvote1 == 1) {
      num--;
      text = num.toString();
      document.getElementById("votes1").innerHTML = text;
      document.getElementById("upvote1").src = "assets/upvote1.png";
    }
  }
  else {
    document.getElementById("downvote1").src = "assets/downvote1.png";
    var text = document.getElementById("votes1").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes1").innerHTML = text;
    downvote1 = 0;
  }
}

function changeDownvoteImage2() {
  if (downvote2 == 0) {
    document.getElementById("downvote2").src = "assets/downvote2.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
    downvote2 = 1;

    if(upvote2 == 1) {
      num--;
      text = num.toString();
      document.getElementById("votes2").innerHTML = text;
      document.getElementById("upvote2").src = "assets/upvote1.png";
    }
  }
  else {
    document.getElementById("downvote2").src = "assets/downvote1.png";
    var text = document.getElementById("votes2").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes2").innerHTML = text;
    downvote2 = 0;
  }
}

function changeDownvoteImage3() {
  if (downvote3 == 0) {
    document.getElementById("downvote3").src = "assets/downvote2.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num--;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
    downvote3 = 1;

    if(upvote3 == 1) {
      num--;
      text = num.toString();
      document.getElementById("votes3").innerHTML = text;
      document.getElementById("upvote3").src = "assets/upvote1.png";
    }
  }
  else {
    document.getElementById("downvote3").src = "assets/downvote1.png";
    var text = document.getElementById("votes3").innerHTML;
    var num = parseInt(text);
    num++;
    text = num.toString();
    document.getElementById("votes3").innerHTML = text;
    downvote3 = 0;
  }
}

function displayPostComments1() {
  var foo = document.getElementById("comments1");
  if(foo.style.display == 'none')
    foo.style.display = 'block';
  else
    foo.style.display = 'none';
}

function displayPostComments2() {
  var foo = document.getElementById("comments2");
  if(foo.style.display == 'none')
    foo.style.display = 'block';
  else
    foo.style.display = 'none';
}

function displayPostComments3() {
  var foo = document.getElementById("comments3");
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

function loadPreview() {
  var img = document.getElementById("link-pic");
  setTimeout(function() {
      img.style.opacity = 0.8;
  }, 1000);
}

function addPost() {
  var elm = document.getElementById('add-post');
  elm.style.display = 'block';
}

function submitPost() {
  var title = document.getElementById("new-title");
  var content = document.getElementById("new-content");
  var el1 = document.getElementById('add-post');

  var htmlString = '<div class="block"><div class="active-content"><div class="content"><p class="post-title">' + title.value + '</p><p class="post-content">"' + content.value + '"</p></div><div class="options"><div class="voting"><button class="upvote" width="30px" onclick="changeUpvoteImage1()"><img src="assets/upvote1.png" width="30px"></button><div class="votes" style="">000</div><button class="downvote" width="30px" onclick="changeDownvoteImage1()"><img src="assets/downvote1.png" width="30px"></button></div><div class="social"><div class="social-buttons"><button class="share-it" onclick=""><img src="assets/share.png" width="30px"></button><button class="comment-it" onclick="displayPostComments1()"><img src="assets/comment.png" width="30px"></button></div><p class="comments-count" style="float:left">0</p></div></div><div class="thumbnail"><img src="assets/code-sample.jpg" width="100%" height="100%"></div></div><div class="comments" style="display:none;"><input class="new-comment" type="text" name="firstname" placeholder="Make a new comment..." onkeypress="newComment1(this)"></div></div>'

  el1.insertAdjacentHTML('afterend', htmlString);
}
