var config = {
    apiKey: "AIzaSyD3KXl7Q67sqbEHKqUstAamfPXa5B7nGY0",
    authDomain: "testengine-a27d5.firebaseapp.com",
    databaseURL: "https://testengine-a27d5.firebaseio.com",
    projectId: "testengine-a27d5",
    storageBucket: "testengine-a27d5.appspot.com",
    messagingSenderId: "45825186675"
  };
  firebase.initializeApp(config);
  
  
  function* autoGen(){
    var counter = 1;
    while(true){
    yield counter;
    counter++;
    }
    }
  
  const QuestionConstants = {
      score: 5
  }
  