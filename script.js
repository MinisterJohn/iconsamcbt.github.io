// Dummy user data
const users = [
  { "username": "Tade Teslim", "password": "IconTeslim1" },
  { "username": "Asore Fathia", "password": "IconFathia2" },
  { "username": "Shokunbi Shewa", "password": "IconShewa3" },
  { "username": "Adekunle Ridwan", "password": "IconRidwan4" },
  { "username": "Salarudeen Pelumi", "password": "IconPelumi5" },
  { "username": "Gbemisola Gabriel", "password": "IconGabriel6" },
  { "username": "Gbangbola Damilare", "password": "IconDamilare7" },
  { "username": "Abdulrasheed Rokeebat", "password": "IconRokeebat8" },
  { "username": "Asore Faruq", "password": "IconFaruq9" },
  { "username": "Oguntosin Feranmi", "password": "IconFeranmi10" },
  { "username": "Olarewaju Kolawole", "password": "IconKolawole11" },
  { "username": "Ayoola Abibat", "password": "IconAbibat12" },
  { "username": "Ayamolowo Darasimi", "password": "IconDarasimi13" },
  { "username": "Olamijulo Israel", "password": "IconIsrael14" },
  { "username": "Lukman Olamilekan", "password": "IconOlamilekan15" },
  { "username": "Alagi Richard", "password": "IconRichard16" },
  { "username": "Olonode Usman", "password": "IconUsman17" },
  { "username": "Ogunsanwo Antonia", "password": "IconAntonia18" },
  { "username": "Taiwo Adewale", "password": "IconAdewale19" },
  { "username": "Salako Muiz Babatunde", "password": "IconBabatunde20" },
  { "username": "Danso Georgina Temitope", "password": "IconTemitope21" }

];

let loggedInUser = null;

// Login function
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    loggedInUser = user; // Set the logged-in user
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('subject-section').classList.remove('hidden');
    document.getElementById('studentNameDisplay').innerText = user.username; // Display the student's name
  } else {
    alert('Invalid login details');
  }
}

// Add the rest of your JavaScript code for displaying questions, calculating scores, and storing results here.
