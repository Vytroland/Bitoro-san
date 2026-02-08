const locations = {
    "mnichovo": { 
        title: "Zámek Mnichovo Hradiště", 
        badge: "Baroko & Historie", 
        desc: "Prohlédněte si velkolepé sídlo Valdštejnů. Najdete zde unikátní knihovnu s 22 tisíci svazky, o kterou se staral sám slavný Giacomo Casanova, a vzácné zámecké divadlo.", 
        img: "img/mnichovo.jpg" 
    },
    "drabske": { 
        title: "Drábské světničky", 
        badge: "Skály & Výhledy", 
        desc: "Bývalá skalní pevnost, která nabízí jeden z nejlepších výhledů v celém kraji. Procházet se budete po dřevěných mostech a schodištích vysoko na pískovcových blocích.", 
        img: "img/drabske.jpg" 
    },
    "bela-zamek": { 
        title: "Zámek Bělá pod Bezdězem", 
        badge: "Památka & Lesy", 
        desc: "Klidné šlechtické sídlo na okraji hlubokých lesů. Dozvíte se zde o historii papírenství v regionu a prohlédnete si expozici věnovanou řemeslům.", 
        img: "img/bela.jpg" 
    },
    "vrchbela": { 
        title: "Areál Vrchbělá", 
        badge: "Sport & Rodina", 
        desc: "Ideální místo pro aktivní odpočinek. Najdete tu in-line dráhu, rozhlednu ve tvaru jehlanu a mini zoo, kde si děti mohou zblízka prohlédnout zvířata.", 
        img: "img/vrchbela.jpg" 
    },
    "muzeum": { 
        title: "Škoda Muzeum", 
        badge: "Auto & Technika", 
        desc: "Fascinující cesta historií automobilky. Od prvních kol Laurin & Klement přes luxusní limuzíny až po moderní koncepty, které určují budoucnost dopravy.", 
        img: "img/muzeum.jpg" 
    },
    "michalovice": { 
        title: "Zřícenina Michalovice", 
        badge: "Tajemství & Výhled", 
        desc: "Hrad proslulý svou věží 'Putna', která je kvůli poddolování viditelně nakloněná – dokonce více než věž v Pise! Nabízí krásný výhled na údolí Jizery.", 
        img: "img/michalovice.jpg" 
    },
    "loucen": { 
        title: "Zámek Loučeň", 
        badge: "Zábava & Labyrinty", 
        desc: "Místo, kde se nikdo nenudí. V zámeckém parku na vás čeká 12 unikátních labyrintů a bludišť, včetně světelného, provazového nebo kamenného.", 
        img: "img/loucen.jpg" 
    },
    "mcb": { 
        title: "Muzeum čtveráků", 
        badge: "Humor & Recese", 
        desc: "Netradiční muzeum v obci Březno. Je věnované vtipům, místním čtverákům a humoru, který je pro tento kraj typický. Ideální pro dobrou náladu!", 
        img: "img/mcb.jpg" 
    },
    "benatky-zamek": { 
        title: "Zámek Benátky nad Jizerou", 
        badge: "Hračky & Hvězdy", 
        desc: "Na tomto zámku působil slavný hvězdář Tycho Brahe. Dnes zde kromě historických interiérů najdete i úžasné muzeum historických hraček.", 
        img: "img/benatky.jpg" 
    },
    "milovice-rezervace": { 
        title: "Rezervace divokých koní", 
        badge: "Příroda & Zvířata", 
        desc: "Kousek opravdové divočiny. Na rozlehlých pastvinách bývalého vojenského prostoru můžete pozorovat divoké koně, pratury a majestátní zubry.", 
        img: "img/milovice.jpg" 
    }
};

// Logika pro zobrazení panelu po kliknutí na bod
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
                imgElement.alt = data.title;
            } else {
                imgElement.style.display = 'none';
            }
            
            document.getElementById('info-panel').style.display = 'block';
        }
    });
});
