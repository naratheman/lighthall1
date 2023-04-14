const firebaseConfig = {
  apiKey: "AIzaSyB2xcyq9RBH-EVJmemN-m5RAk8mRdFfss8",
  authDomain: "lighthall-clicks.firebaseapp.com",
  projectId: "lighthall-clicks",
  storageBucket: "lighthall-clicks.appspot.com",
  messagingSenderId: "798203105476",
  appId: "1:798203105476:web:3091439836f63b404d3991",
  measurementId: "G-V4JLVMTTXY" 
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var dbRef = firebase.database().ref();

  function incrementCount() {
    localclickCount++;
    localStorage.setItem("localclickCount", localclickCount);
    document.getElementById("localclickCount").innerHTML = localclickCount;
    getLocation();
    recordClickTime();
}

function resetCount() {
  localclickCount = 0;
  localStorage.setItem("localclickCount", localclickCount);
  document.getElementById("localclickCount").innerHTML = localclickCount;
}

// Show your position 
function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

// Get the user's country based on their IP address
function recordClickTime() {
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((data) => {
      let country = data.country_name;

      // get the current click count from Firebase Realtime Database
      var clicksRef = firebase.database().ref('clicks');
      clicksRef.child(country).child('clickCount').once('value', function(snapshot) {
        const clickCount = snapshot.val();


      

        let tableRows = document.querySelectorAll("#clickTableBody tr");
        let rowFound = false;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

