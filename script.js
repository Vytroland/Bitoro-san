const locations = {
    "mnichovo": { t: "Mnichovo Hradiště", i: "Minchovo.jpg" },
    "bela": { t: "Bělá p. Bezdězem", i: "bela.jpg" },
    "boleslav": { t: "Mladá Boleslav", i: "muzeum.jpg" },
    "michalovice": { t: "Michalovice", i: "Putna.jpg" },
    "loucen": { t: "Zámek Loučeň", i: "Loucen.jpg" },
    "benatky": { t: "Benátky n. Jizerou", i: "Benatky.jpg" }
};

const modal = document.getElementById('modal');
const mTitle = document.getElementById('m-title');
const mImg = document.getElementById('m-img');

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', () => {
        const data = locations[dot.dataset.id];
        mTitle.innerText = data.t;
        mImg.src = data.i;
        modal.style.display = 'flex';
    });
});

document.getElementById('closeBtn').onclick = () => { modal.style.display = 'none'; };
