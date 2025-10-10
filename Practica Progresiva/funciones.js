function clickBoton() {
    const header = document.querySelector('header');
    const video = document.getElementById('header-video');

    if (!header || !video) return;

    // Guardar estilos originales
    const estilosHeaderOriginales = {
        backgroundImage: header.style.backgroundImage,
        backgroundSize: header.style.backgroundSize,
        backgroundPosition: header.style.backgroundPosition,
        backgroundRepeat: header.style.backgroundRepeat
    };

    // Ocultar el video
    video.style.display = 'none';

    // Poner el GIF como fondo del header
    header.style.backgroundImage = "url('https://i.pinimg.com/originals/4a/5d/4c/4a5d4c1d0596927e4eaf592f978e078d.gif')";
    header.style.backgroundSize = '100% auto';
    header.style.backgroundPosition = 'center';
    header.style.backgroundRepeat = 'no-repeat';

    // Cambiar color del body cada 100 ms
    const intervaloColor = setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }, 100);

    // Crear la imagen flotante que rebota
    const img = document.createElement('img');
    img.src = 'https://tysonwu.gallerycdn.vsassets.io/extensions/tysonwu/vscode-dvd-bouncer/1.0.1/1678887896110/Microsoft.VisualStudio.Services.Icons.Default';
    img.style.position = 'fixed';
    img.style.width = '250px';
    img.style.height = '250px';
    img.style.zIndex = '1000';
    document.body.appendChild(img);

    // Obtener tamaño de la ventana y de la imagen
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const imgWidth = 250;
    const imgHeight = 250;

    // Posición inicial aleatoria
    let posX = Math.floor(Math.random() * (windowWidth - imgWidth));
    let posY = Math.floor(Math.random() * (windowHeight - imgHeight));

    // Velocidad inicial
    let velX = 30;
    let velY = 30;

    // Colocar la imagen en la posición inicial
    img.style.left = posX + 'px';
    img.style.top = posY + 'px';

    // Intervalo para mover la imagen
    const intervaloImagen = setInterval(() => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        posX += velX;
        posY += velY;

        // Rebote en los bordes
        if (posX <= 0 || posX + img.offsetWidth >= windowWidth) velX *= -1;
        if (posY <= 0 || posY + img.offsetHeight >= windowHeight) velY *= -1;

        img.style.left = posX + 'px';
        img.style.top = posY + 'px';
    }, 20);

    // Restaurar todo después de 5 segundos
    setTimeout(() => {
        // Restaurar header
        header.style.backgroundImage = estilosHeaderOriginales.backgroundImage;
        header.style.backgroundSize = estilosHeaderOriginales.backgroundSize;
        header.style.backgroundPosition = estilosHeaderOriginales.backgroundPosition;
        header.style.backgroundRepeat = estilosHeaderOriginales.backgroundRepeat;

        // Mostrar el video
        video.style.display = 'block';

        // Detener el cambio de color del body y restaurarlo
        clearInterval(intervaloColor);
        document.body.style.backgroundColor = '#374151'; // bg-gray-700 en Tailwind

        // Detener y eliminar la imagen
        clearInterval(intervaloImagen);
        img.remove();
    }, 5000);
}
