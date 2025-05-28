function showSchedule() {
  const trainNumber = document.getElementById('trainNumber').value.trim();
  const imageContainer = document.getElementById('imageContainer');
  const errorMessage = document.getElementById('error');

  if (!trainNumber) {
    errorMessage.textContent = "列車番号を入力してください";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
    return;
  }

  const imagePath = `${trainNumber}.png`;
  const img = new Image();
  img.src = imagePath;
  img.alt = `列車 ${trainNumber} の運行予定表`;

  img.onload = () => {
    imageContainer.innerHTML = '';
    errorMessage.style.display = "none";
    imageContainer.appendChild(img);
  };

  img.onerror = () => {
    imageContainer.innerHTML = '';
    errorMessage.textContent = "ファイルが存在しません。管理者にお問い合わせください。";
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  };
}
