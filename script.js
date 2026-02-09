const locations = {
    "mnichovo": { 
        title: "Zámek Mnichovo Hradiště", 
        badge: "Baroko", 
        desc: "Navštivte velkolepé sídlo Valdštejnů. Najdete zde knihovnu, kterou spravoval Giacomo Casanova, a vzácné zámecké divadlo.", 
        img: "img/mnichovo.jpg" 
    },
    "drabske": { 
        title: "Drábské světničky", 
        badge: "Skály", 
        desc: "Skalní pevnost s nejkrásnějším výhledem v kraji. Projděte se po mostech vysoko nad zemí v pískovcových skalách.", 
        img: "img/drabske.jpg" 
    },
    "bela-zamek": { 
        title: "Zámek Bělá pod Bezdězem", 
        badge: "Historie", 
        desc: "Původně gotická tvrz přestavěná na zámek. Obklopují ho hluboké lesy a klidná atmosféra historického města.", 
        img: "img/bela.jpg" 
    },
    "vrchbela": { 
        title: "Sportovní areál Vrchbělá", 
        badge: "Pro rodiny", 
        desc: "Ideální pro sport i relax. Najdete tu in-line dráhu, rozhlednu, zoo koutek pro děti a lanové centrum.", 
        img: "img/vrchbela.jpg" 
    },
    "muzeum": { 
        title: "Škoda Muzeum", 
        badge: "Technika", 
        desc: "Srdce Mladé Boleslavi. Poznejte historii aut od prvních kol Laurin & Klement až po moderní vozy budoucnosti.", 
        img: "img/muzeum.jpg" 
    },
    "michalovice": { 
        title: "Zřícenina Michalovice", 
        badge: "Zřícenina", 
        desc: "Hrad proslulý šikmou věží zvanou 'Putna'. Věž se naklání více než ta v Pise a je odtud krásný výhled na Jizeru.", 
        img: "img/michalovice.jpg" 
    },
    "loucen": { 
        title: "Zámek Loučeň", 
        badge: "Zábava", 
        desc: "Zámek s unikátním labyrintáriem. V parku najdete 12 různých bludišť a labyrintů, které zabaví děti i dospělé.", 
        img: "img/loucen.jpg" 
    },
    "mcb": { 
        title: "Muzeum čtveráků", 
        badge: "Recese", 
        desc: "Jedinečné muzeum v Březně věnované humoru, místním tradicím a lidem, co si umí udělat legraci sami ze sebe.", 
        img: "img/mcb.jpg" 
    },
    "benatky-zamek": { 
        title: "Zámek Benátky nad Jizerou", 
        badge: "Věda", 
        desc: "Působiště astronoma Tychona Brahe. Dnes tu najdete muzeum historických hraček a krásné renesanční nádvoří.", 
        img: "img/benatky.jpg" 
    },
    "milovice-rezervace": { 
        title: "Rezervace divokých koní", 
        badge: "Příroda", 
        desc: "Pozorujte divoké koně, pratury a zubry v jejich přirozeném prostředí v bývalém vojenském prostoru Milovice.", 
        img: "img/milovice.jpg" 
    }
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
