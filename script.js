function launchGame(url) {
    document.getElementById('game-frame').src = url;
    document.getElementById('game-container').classList.remove('hidden');
}

function closeGame() {
    document.getElementById('game-frame').src = "";
    document.getElementById('game-container').classList.add('hidden');
}

function cloak() {
    document.title = "My Drive - Google Drive";
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}
