const locations = {
    "mnichovo": { title: "Zámek Mnichovo Hradiště", badge: "Zámek", desc: "Barokní sídlo Valdštejnů s unikátní knihovnou spravovanou Casanovou.", img: "img/mnichovo.jpg" },
    "drabske": { title: "Drábské světničky", badge: "Příroda", desc: "Skalní pevnost s dechberoucím výhledem na celé Pojizeří.", img: "img/drabske.jpg" },
    "bela-zamek": { title: "Zámek Bělá pod Bezdězem", badge: "Historie", desc: "Původně tvrz v hlubokých lesích, dnes historické muzeum.", img: "img/bela.jpg" },
    "vrchbela": { title: "Sportovní areál Vrchbělá", badge: "Sport", desc: "In-line dráha, rozhledna a mini zoo ideální pro rodinný výlet.", img: "img/vrchbela.jpg" },
    "muzeum": { title: "Škoda Muzeum", badge: "Technika", desc: "Historie aut od prvních kol Laurin & Klement po moderní vozy.", img: "img/muzeum.jpg" },
    "michalovice": { title: "Zřícenina Michalovice", badge: "Zřícenina", desc: "Hrad se šikmou věží Putna, která se naklání více než ta v Pise.", img: "img/michalovice.jpg" },
    "loucen": { title: "Zámek Loučeň", badge: "Zábava", desc: "Slavný zámek s parkem plným labyrintů a bludišť pro každého.", img: "img/loucen.jpg" },
    "mcb": { title: "Muzeum čtveráků", badge: "Kultura", desc: "Recesistické muzeum v Březně věnované místnímu humoru.", img: "img/mcb.jpg" },
    "benatky-zamek": { title: "Zámek Benátky nad Jizerou", badge: "Věda", desc: "Působiště astronoma Tychona Brahe s muzeem hraček.", img: "img/benatky.jpg" },
    "milovice-rezervace": { title: "Rezervace divokých koní", badge: "Příroda", desc: "Pastviny divokých koní, praturů a zubrů v otevřené krajině.", img: "img/milovice.jpg" }
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
