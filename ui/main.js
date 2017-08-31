var button = document.getElementById('counter');
//var counter = 0;
button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
        //Take some action
        if(request.status === 200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHtml = counter.toString();
        }
        }
    };
    // Make the request
    request.open('GET','http://ranjani38eee.imad.hasura-app.io/counter',true);
    request.send(null);
};