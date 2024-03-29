window.addEventListener('load', loadData);

function loadData() {
    fetch('fruits.json')
        .then((respuesta) => respuesta.json())
        .then((data) => {
            console.log(data)
            showFruits(data);
        });
}

function showFruits(data) {

    const { fruits } = data;
    console.log(fruits)
    const fruitCards = document.querySelector('.fruits-cards');

    fruits.forEach((element, index) => {

        console.log(index)
        console.log(element)

        const { img, name, price } = element;

        const fruta = document.createElement('div');

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

        fruta.innerHTML = contenido;
        fruitCards.appendChild(fruta);


    })
}









