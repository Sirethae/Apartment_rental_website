const indexFlatsContainer = document.querySelector('#index-flats-container');

getFlats();

async function getFlats() {
    const response = await fetch('./js/indexFlats.json');
    const flatsArray = await response.json();

    renderFlats(flatsArray);
}

function renderFlats(flatsArray) {
    flatsArray.forEach(function (item) {
        const flatHTML = `<li class="flat" data-id="${item.id}">
                                <div class="price">${item.price} &#8381;</div>
                                <img class="img-room" src="/images/rooms/${item.imgSrc}" alt="Photo of the apartment">
                                <div class="base-desc">
                                    <div class="rooms">${item.title}</div>
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
        indexFlatsContainer.insertAdjacentHTML('beforeend', flatHTML);
    });
}
