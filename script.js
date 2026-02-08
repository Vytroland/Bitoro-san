const locations = {
    "mnichovo": { 
        title: "Zámek Mnichovo Hradiště", 
        badge: "Historie", 
        desc: "Barokní zámek spojený s rodem Valdštejnů. Najdete zde i hrobku slavného Albrechta z Valdštejna.", 
        img: "img/mnichovo.jpg" 
    },
    "drabske": { 
        title: "Drábské světničky", 
        badge: "Příroda", 
        desc: "Skalní pevnost na okraji pískovcové plošiny s nádherným výhledem do kraje.", 
        img: "img/drabske.jpg" 
    },
    "bela-zamek": { 
        title: "Zámek Bělá pod Bezdězem", 
        badge: "Památka", 
        desc: "Původně tvrz, později zámek v historickém městě obklopeném hlubokými lesy.", 
        img: "img/bela.jpg" 
    },
    "vrchbela": { 
        title: "Areál Vrchbělá", 
        badge: "Sport", 
        desc: "Sportovně-relaxační areál s rozhlednou, in-line dráhou a zoo koutkem.", 
        img: "img/vrchbela.jpg" 
    },
    "muzeum": { 
        title: "Škoda Muzeum", 
        badge: "Auto", 
        desc: "Moderní expozice historie mladoboleslavské automobilky v původních výrobních halách.", 
        img: "img/muzeum.jpg" 
    },
    "michalovice": { 
        title: "Zřícenina Michalovice", 
        badge: "Zřícenina", 
        desc: "Hrad proslulý svou šikmou věží 'Putna', která se naklání více než věž v Pise.", 
        img: "img/michalovice.jpg" 
    },
    "loucen": { 
        title: "Zámek Loučeň", 
        badge: "Zábava", 
        desc: "Zámek známý svým unikátním labyrintáriem – v parku najdete 12 různých bludišť.", 
        img: "img/loucen.jpg" 
    },
    "mcb": { 
        title: "Muzeum čtveráků", 
        badge: "Recese", 
        desc: "Netradiční muzeum v obci Březno věnované humoru a místním tradicím.", 
        img: "img/mcb.jpg" 
    },
    "benatky-zamek": { 
        title: "Zámek Benátky nad Jizerou", 
        badge: "Věda", 
        desc: "Působiště astronoma Tychona Brahe. Dnes zde sídlí muzeum hraček a expozice o městě.", 
        img: "img/benatky.jpg" 
    },
    "milovice-rezervace": { 
        title: "Rezervace divokých koní", 
        badge: "Příroda", 
        desc: "Unikátní projekt pastvy divokých koní, praturů a zubrů v bývalém vojenském prostoru.", 
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
