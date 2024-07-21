function setTheme(theme) {
    document.body.className = theme + '-theme';
}

function displayImageModal(src) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    modalImage.src = src;
    modal.style.display = 'block';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

function saveImage() {
    const modalImage = document.getElementById('modal-image');
    const link = document.createElement('a');
    link.href = modalImage.src;
    link.download = 'profile-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function copyImageLink() {
    const modalImage = document.getElementById('modal-image');
    const input = document.createElement('input');
    input.value = modalImage.src;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Image link copied to clipboard');
}
