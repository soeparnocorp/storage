/* app.js */ const fileList = document.getElementById('file-list'); const uploadBtn = document.getElementById('upload-btn'); const fileInput = document.getElementById('file-input');

// Dummy function: fetch list file (replace dengan API Storadera nanti) async function fetchFiles() { fileList.innerHTML = ''; // Contoh file statis const files = ['Document.pdf', 'Image.png', 'Video.mp4']; files.forEach(file => { const div = document.createElement('div'); div.classList.add('file-item'); div.innerHTML = <div>${file}</div><button onclick="downloadFile('${file}')">Download</button>; fileList.appendChild(div); }); }

function downloadFile(fileName) { alert(Download file: ${fileName} (hubungkan dengan Storadera API)); }

uploadBtn.addEventListener('click', () => { const file = fileInput.files[0]; if (!file) { alert('Pilih file dulu!'); return; } alert(Upload file: ${file.name} (hubungkan dengan Storadera API)); });

fetchFiles();
