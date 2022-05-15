window.addEventListener('load', loadData);

function loadData() {
    fetch('veggies.json')
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data)
            showData(data);
        });
}

function showData(data) {

    const { veggies } = data;
    console.log(veggies)
    const cards = document.querySelector('.veggies-cards');

    veggies.forEach((element, index) => {

        //console.log(index)
        console.log(element)

        const { img, name, price } = element;

        const veggie = document.createElement('div');

        const contenido = ` 
                            <div class="card">
                                <img src="${img}" alt="${name}" />
                                <div class="flex">
                                
                                    <h5>${name}</h5>
                                    <p>$${price}</p>
                                </div>
                                <div id="add" class="add">+</div>
                            </div>
                            `;

        veggie.innerHTML = contenido;
        cards.appendChild(veggie);


    })
}









