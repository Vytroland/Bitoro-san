const locationsData = {
    "mnichovo": {
        title: "Zámek Mnichovo Hradiště",
        badge: "Hrad / Zámek",
        desc: "Zámek Mnichovo Hradiště představuje výjimečnou ukázku barokní architektury v Čechách...",
        img: "img/zamek-mnichovo.jpg",
        features: ["Barokní interiéry", "Valdštejnská hrobka"]
    }
};

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const id = this.dataset.id;
        const info = locationsData[id];
        document.getElementById('p-title').innerText = info.title;
        document.getElementById('p-desc').innerText = info.desc;
        document.getElementById('info-panel').style.display = 'block';
    });
});
