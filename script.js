// Dummy user data
const users = [
  { username: 'Nnoruka John', password: '2345', class: 'Primary 1' },
  { username: 'Icon Sam Hr', password: '307329', class: 'Primary 1' },
  { username: 'Gbemisola Gabriel', password: 'P2Gabriel', class: 'Primary 2' },
  { username: 'Adekunle Ridwan', password: 'P2Ridwan', class: 'Primary 2' },
  { username: 'Lasisi Ibrahim', password: 'P2Ibrahim', class: 'Primary 2' },
  { username: 'Salarudeen Pelumi', password: 'P2Pelumi', class: 'Primary 2' },
  { username: 'Gbangbola Damilare', password: 'P3Damilare', class: 'Primary 3' },
  { username: 'Taiwo Fathia', password: 'P3Fathia', class: 'Primary 3' },
  { username: 'AbdulRasheed Rokibat', password: 'P4Rokibat', class: 'Primary 4' },
  { username: 'Lasisi Fawas', password: 'P4Fawas', class: 'Primary 4' },
  { username: 'Ayamolowo Darasimi', password: 'P5Darasimi', class: 'Primary 5' },
  { username: 'Olakanola Jasope', password: 'P5Jasope', class: 'Primary 5' },
  { username: 'Ajibola Dumininu', password: 'P5Dumininu', class: 'Primary 5' },
  { username: 'Oguntosin Feranmi', password: 'P5Feranmi', class: 'Primary 5' },
  { username: 'Wasiu Anuoluwapo', password: 'P5Anuoluwapo', class: 'Primary 5' },
  { username: 'Lukman Olamilekan', password: 'JSS1Olamilekan', class: 'Jss 1' },
  { username: 'Olamijulo Israel', password: 'JSS1Israel', class: 'Jss 1' },
  { username: 'Alagi Richard', password: 'JSS1Richard', class: 'Jss 1' },
  { username: 'Akeem Olamide Raimot', password: 'JSS3Raimot', class: 'Jss 3' },
  { username: 'Salako Muiz Babatunde', password: 'SS1ArtBabatunde', class: 'SS 1 Art' },
  { username: 'Danso Georgina Temitope', password: 'SS2ScienceTemitope', class: 'SS 2 Science' }
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
