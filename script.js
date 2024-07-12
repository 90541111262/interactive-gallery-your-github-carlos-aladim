// Array de objetos para armazenar os dados das imagens
const images = [
    { thumb: 'image1_thumb.jpg', hd: 'image1_hd.jpg', caption: 'Image 1 Description' },
    { thumb: 'image2_thumb.jpg', hd: 'image2_hd.jpg', caption: 'Image 2 Description' },
    { thumb: 'image3_thumb.jpg', hd: 'image3_hd.jpg', caption: 'Image 3 Description' },
    { thumb: 'image4_thumb.jpg', hd: 'image4_hd.jpg', caption: 'Image 4 Description' },
    { thumb: 'image5_thumb.jpg', hd: 'image5_hd.jpg', caption: 'Image 5 Description' },
    { thumb: 'image6_thumb.jpg', hd: 'image6_hd.jpg', caption: 'Image 6 Description' },
    { thumb: 'image7_thumb.jpg', hd: 'image7_hd.jpg', caption: 'Image 7 Description' },
    { thumb: 'image8_thumb.jpg', hd: 'image8_hd.jpg', caption: 'Image 8 Description' },
    { thumb: 'image9_thumb.jpg', hd: 'image9_hd.jpg', caption: 'Image 9 Description' },
    { thumb: 'image10_thumb.jpg', hd: 'image10_hd.jpg', caption: 'Image 10 Description' },
    { thumb: 'image11_thumb.jpg', hd: 'image11_hd.jpg', caption: 'Image 11 Description' },
    { thumb: 'image12_thumb.jpg', hd: 'image12_hd.jpg', caption: 'Image 12 Description' },
];

// Elementos do DOM
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const overlayCaption = document.getElementById('overlayCaption');
const backButton = document.getElementById('backButton');

// Adicionar imagens à galeria
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `images/${image.thumb}`;
    imgElement.alt = image.caption;
    imgElement.classList.add('gallery-image');

    imgElement.addEventListener('click', () => {
        showOverlay(`images/${image.hd}`, image.caption);
    });

    gallery.appendChild(imgElement);
});

// Exibir overlay com imagem ampliada
function showOverlay(src, caption) {
    overlayImage.src = src;
    overlayCaption.textContent = caption;
    overlay.classList.remove('hidden');
}

// Event listener para o botão "Back"
backButton.addEventListener('click', () => {
    hideOverlay();
});

// Esconder overlay e limpar dados da imagem ampliada
function hideOverlay() {
    overlay.classList.add('hidden');
    overlayImage.src = '';
    overlayCaption.textContent = '';
}
