// Array de objetos para armazenar os dados das imagens
const images = [
    { thumb: 'images/image1_thumb.jpg', hd: 'images/image1_hd.jpg', caption: 'Image 1 Description' },
    { thumb: 'images/image2_thumb.jpg', hd: 'images/image2_hd.jpg', caption: 'Image 2 Description' },
    { thumb: 'images/image3_thumb.jpg', hd: 'images/image3_hd.jpg', caption: 'Image 3 Description' },
    { thumb: 'images/image4_thumb.jpg', hd: 'images/image4_hd.jpg', caption: 'Image 4 Description' },
    { thumb: 'images/image5_thumb.jpg', hd: 'images/image5_hd.jpg', caption: 'Image 5 Description' },
    { thumb: 'images/image6_thumb.jpg', hd: 'images/image6_hd.jpg', caption: 'Image 6 Description' },
    { thumb: 'images/image7_thumb.jpg', hd: 'images/image7_hd.jpg', caption: 'Image 7 Description' },
    { thumb: 'images/image8_thumb.jpg', hd: 'images/image8_hd.jpg', caption: 'Image 8 Description' },
    { thumb: 'images/image9_thumb.jpg', hd: 'images/image9_hd.jpg', caption: 'Image 9 Description' },
    { thumb: 'images/image10_thumb.jpg', hd: 'images/image10_hd.jpg', caption: 'Image 10 Description' },
    { thumb: 'images/image11_thumb.jpg', hd: 'images/image11_hd.jpg', caption: 'Image 11 Description' },
    { thumb: 'images/image12_thumb.jpg', hd: 'images/image12_hd.jpg', caption: 'Image 12 Description' },
];

// Seleciona a galeria e o overlay
const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');
const overlayCaption = document.getElementById('overlayCaption');

// Função para criar a galeria dinamicamente
function createGallery() {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.thumb;
        img.alt = image.caption;
        img.dataset.index = index;
        img.classList.add('gallery-item');

        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.appendChild(img);

        gallery.appendChild(galleryItem);
    });
}

// Função para mostrar a imagem HD e a legenda
function showOverlay(index) {
    const image = images[index];
    overlayImage.src = image.hd;
    overlayCaption.textContent = image.caption;
    overlay.classList.remove('hidden');
}

// Função para esconder a imagem HD e a legenda
function hideOverlay() {
    overlay.classList.add('hidden');
    overlayImage.src = '';
    overlayCaption.textContent = '';
}

// Adiciona os event listeners
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = event.target.dataset.index;
        showOverlay(index);
    }
});

overlay.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG' || event.target.tagName === 'P') {
        hideOverlay();
    }
});

// Inicializa a galeria
createGallery

// Botao

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', () => {
    hideOverlay();
});

// Função para esconder a imagem HD e a legenda
function hideOverlay() {
    overlay.classList.add('hidden');
    overlayImage.src = '';
    overlayCaption.textContent = '';
}

// Inicializa a galeria
createGallery();

