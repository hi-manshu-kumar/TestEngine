var config = {
    apiKey: "AIzaSyD3KXl7Q67sqbEHKqUstAamfPXa5B7nGY0",
    authDomain: "testengine-a27d5.firebaseapp.com",
    databaseURL: "https://testengine-a27d5.firebaseio.com",
    projectId: "testengine-a27d5",
    storageBucket: "testengine-a27d5.appspot.com",
    messagingSenderId: "45825186675"
  };
  firebase.initializeApp(config);

var rootRef = firebase.database().ref().child("questions");
        rootRef.on('child_added', function (snap ) {
            // alert(snap.val());
            var name = snap.child("name").val();
            var id = snap.child("id").val();
            var opA = snap.child("opA").val();
            var opB = snap.child("opB").val();
            var opC = snap.child("opC").val();
            var opD = snap.child("opD").val();
            var ans = snap.child("ans").val();
            // var div =document.createElement("div");
            // div.innerHTML=`<p> Q${id}:${name}</p> <br> `;
            // $("#div").append("<br>"name+"<br>");
            
        
        });
        var questions = firebase.database().ref().child("questions");
        questions.on('value', function (snapShot) {
            var obj = snapShot.val();
            console.log("fetch__", obj);
            console.log("Type of", typeof obj);
            for (let key in obj) {
                console.log(key, " ", obj[key]);
                var objI=obj[key];
                console.log(key, " ", obj[key].id);
                for(let keys in objI ) {
                    console.log(keys , objI[keys]);
                    
                }
                // questionOperations.prepareQuestions(obj[key]);
                $("#div").append(objI.id+"<br>" );
                console.log( objI.name);
            }
            
        
        })
// `Q${question.id}: ${question.name}`


        // <p id=""></p>
        // <input type="radio" name="ans">
        // <input type="text" id="" placeholder = '' disabled = true>
        // <br>
        // <input type="radio" name="ans">
        // <input type="text" id="optionB" placeholder = "opB" disabled = true >
        // <br>
        // <input type="radio" name="ans">
        // <input type="text" id="optionC" placeholder = "opC" disabled = true >
        // <br>
        // <input type="radio" name="ans" >
        // <input type="text" id="optionD" placeholder = "opD" disabled = true >