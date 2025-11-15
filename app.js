const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const driveUI = document.getElementById('drive-ui');
const logoutBtn = document.getElementById('logout-btn');

const fileList = document.getElementById('file-list');
const uploadBtn = document.getElementById('upload-btn');
const fileInput = document.getElementById('file-input');
const createFolderBtn = document.getElementById('create-folder-btn');

let files = [];

// Login logic
loginBtn.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;
  if(username === CONFIG.USERNAME && password === CONFIG.PASSWORD){
    loginForm.style.display = 'none';
    driveUI.style.display = 'block';
    fetchFiles();
  } else {
    alert('Username atau password salah!');
  }
});

logoutBtn.addEventListener('click', () => {
  driveUI.style.display = 'none';
  loginForm.style.display = 'flex';
  usernameInput.value = '';
  passwordInput.value = '';
});

// Dummy file management
function fetchFiles(){
  fileList.innerHTML = '';
  files.forEach(file => {
    const div = document.createElement('div');
    div.classList.add('file-item');
    div.innerHTML = `<div>${file}</div>
                     <button onclick="downloadFile('${file}')">Download</button>
                     <button onclick="deleteFile('${file}')">Delete</button>`;
    fileList.appendChild(div);
  });
}

function downloadFile(fileName){
  alert(`Download file: ${fileName}`);
}

function deleteFile(fileName){
  files = files.filter(f => f !== fileName);
  fetchFiles();
}

uploadBtn.addEventListener('click', () => {
  const file = fileInput.files[0];
  if(!file) return alert('Pilih file dulu!');
  files.push(file.name);
  fetchFiles();
  alert(`Upload file: ${file.name}`);
});

createFolderBtn.addEventListener('click', () => {
  const folderName = prompt('Nama folder:');
  if(folderName){
    files.push(`${folderName}/`);
    fetchFiles();
  }
});
