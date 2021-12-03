const flatsContainer = document.querySelector('#flats-container');
const indexFlatsContainer = document.querySelector('#index-flats-container');

getFlats();

async function getFlats() {
    const response = await fetch('./js/flats.json');
    const flatsArray = await response.json();

    renderFlats(flatsArray);
    
}

function renderFlats(flatsArray) {
    flatsArray.forEach(function (item) {
        const flatHTML = `<li class="flat" data-flat data-id="${item.id}">
                                <div class="price">${item.price} &#8381;</div>
                                <img class="img-room" src="/images/rooms/${item.imgSrc}" alt="Photo of the apartment">
                                <div class="base-desc">
                                    <div class="rooms" data-rooms>${item.title}</div>
                                    <div class="address">${item.address}</div>
                                </div>
                                <ul class="params">
                                    <li class="guests">
                                        <img class="icon-guests" src="/images/icons/icon-guests.png" alt="">
                                        ${item.guests} гостя
                                    </li>
                                    <li class="beds">
                                        <img class="icon-beds" src="/images/icons/icon-beds.png" alt="">
                                        ${item.beds} спальных места
                                    </li>
                                </ul>
                            </li>`;
        flatsContainer.insertAdjacentHTML('beforeend', flatHTML);


        const searchBtn = document.querySelectorAll('[data-btn]');
        const cartsFlats = document.querySelectorAll('[data-flat]');

        searchBtn.forEach(function (event) {
            event.addEventListener('click', function () {
                cartsFlats.forEach(function (i) {
                    const btn = event.innerText;
                    const flat = i.querySelector('.rooms').innerText;
        
                    i.classList.add('none');
        
                    if (btn === "Студия" && flat === "Студия") {
                        i.classList.remove('none');
                    }
        
                    if (btn === "1" && flat === "1-комнатная") {
                        i.classList.remove('none');
                    }
        
                    if (btn === "2" && flat === "2-комнатная") {
                        i.classList.remove('none');
                    }

                    if (btn === "3" && flat === "3-комнатная") {
                        i.classList.remove('none');
                    }

                    if (btn === "4" && flat === "4-комнатная") {
                        i.classList.remove('none');
                    }
                });
            });
        });
    });
}
