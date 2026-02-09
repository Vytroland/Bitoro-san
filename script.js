const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", badge: "Historie", desc: "Barokní zámek spojený s rodem Valdštejnů. Uvidíte zde vzácnou knihovnu i zámecké divadlo.", img: "img/mnichovo.jpg" },
    "drabske": { title: "Drábské světničky", badge: "Příroda", desc: "Skalní pevnost s úžasným výhledem na Pojizeří. Ideální pro pěší turistiku.", img: "img/drabske.jpg" },
    "bela-zamek": { title: "Zámek Bělá p. B.", badge: "Památka", desc: "Historické sídlo obklopené přírodou. Dozvíte se o historii regionu.", img: "img/bela.jpg" },
    "vrchbela": { title: "Areál Vrchbělá", badge: "Sport", desc: "Zábavní areál s in-line dráhou, rozhlednou a zoo koutkem.", img: "img/vrchbela.jpg" },
    "muzeum": { title: "Škoda Muzeum", badge: "Technika", desc: "Expozice historie automobilky Škoda od jejích počátků.", img: "img/muzeum.jpg" },
    "michalovice": { title: "Zřícenina Michalovice", badge: "Hrad", desc: "Zřícenina hradu se slavnou šikmou věží Putna.", img: "img/michalovice.jpg" },
    "loucen": { title: "Zámek Loučeň", badge: "Zábava", desc: "Unikátní zámek s 12 bludišti a labyrinty v parku.", img: "img/loucen.jpg" },
    "mcb": { title: "Muzeum čtveráků", badge: "Kultura", desc: "Vtipné muzeum humoru a recese v Březně.", img: "img/mcb.jpg" },
    "benatky-zamek": { title: "Benátky n. Jizerou", badge: "Věda", desc: "Zámek s hvězdárnou Tychona Brahe a muzeem hraček.", img: "img/benatky.jpg" },
    "milovice-rezervace": { title: "Rezervace Milovice", badge: "Příroda", desc: "Rezervace s divokými koni a pratury v otevřené krajině.", img: "img/milovice.jpg" }
};

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const data = locations[id];
        if (data) {
            document.getElementById('p-title').innerText = data.title;
            document.getElementById('p-badge').innerText = data.badge;
            document.getElementById('p-desc').innerText = data.desc;
            const imgElement = document.getElementById('p-img');
            if (data.img) {
                imgElement.src = data.img;
                imgElement.style.display = 'block';
            } else {
                imgElement.style.display = 'none';
            }
            document.getElementById('info-panel').style.display = 'block';
        }
    });
});
