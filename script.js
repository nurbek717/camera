const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const captureBtn = document.getElementById('capture');
const downloadLink = document.getElementById('download');
const previewSection = document.getElementById('preview-section');
const previewImg = document.getElementById('preview');

// Kamerani ishga tushurish
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    alert('Kamera topilmadi yoki ruxsat berilmadi!');
  });

// Rasmga olish
captureBtn.addEventListener('click', () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

  // Rasmni ko‘rsatish
  const dataURL = canvas.toDataURL('image/png');
  previewImg.src = dataURL;
  previewSection.style.display = 'block';

  // Yuklab olish havolasini tayyorlash
  downloadLink.href = dataURL;
  downloadLink.style.display = 'inline-block';
}); 