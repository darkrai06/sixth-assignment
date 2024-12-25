function createPetCard(pet) {
    const modalId = `modal-${pet.pet_name.split(' ').join('-')}`;
    
    return `
        <div class="card border bg-white shadow-xl rounded-lg p-4">
            <img src="${pet.image !== undefined && pet.image !== null ? pet.image : 'Not Available'}" alt="${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}" class="w-full h-48 object-cover rounded-md">
            <div class="card-body p-4">
                <h2 class="text-2xl font-extrabold">${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}</h2>
                <div class="flex items-center gap-3"><i class="fa-brands fa-microsoft"></i><p>Breed: ${pet.breed !== undefined && pet.breed !== null ? pet.breed : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-regular fa-calendar"></i><p>Birth: ${pet.date_of_birth !== undefined && pet.date_of_birth !== null ? pet.date_of_birth : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-solid fa-venus-mars"></i><p>Gender: ${pet.gender !== undefined && pet.gender !== null ? pet.gender : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-solid fa-dollar-sign"></i><p>Price: ${pet.price !== undefined && pet.price !== null ? pet.price + '$' : 'Not Available'}</p></div>
            </div>
            <div class="flex gap-4">
            <button class="btn sm:btn-md md:btn-sm lg:btn-md thumbs-up-click text-teal-500"><i class="fa-solid fa-thumbs-up"></i></button>

            <button class="btn sm:btn-md md:btn-sm lg:btn-md text-teal-500 adopt-click" onclick="openAndCloseModal('${modalId}')">Adopt</button>
            <dialog id="${modalId}" class="modal">
                <div class="modal-box flex flex-col items-center">
                    <h3 class="text-2xl font-extrabold">Adopt ${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}!</h3>
                    <p class="py-4">You have adopted ${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}</p>
                    <img src="images/handshake.png">
                    <div class="modal-action">
                        <p class="text-5xl font-extrabold"><span id="countdown-${modalId}">3</span></p>
                    </div>
                </div>
            </dialog>
            <button class="btn sm:btn-md md:btn-sm lg:btn-md text-teal-500" onclick="document.getElementById('${modalId}-2').showModal()">Details</button>
            <dialog id="${modalId}-2" class="modal">
            <div class="modal-box flex flex-col gap-3">
                <img src="${pet.image !== undefined && pet.image !== null ? pet.image : 'Not Available'}" alt="${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}" class="max-h-[230px] object-cover rounded-md">
                <h2 class="text-2xl font-extrabold">${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}</h2>
                <div class="grid grid-cols-2 gap-2">
                <div class="flex items-center gap-3"><i class="fa-brands fa-microsoft"></i><p>Breed: ${pet.breed !== undefined && pet.breed !== null ? pet.breed : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-regular fa-calendar"></i><p>Birth: ${pet.date_of_birth !== undefined && pet.date_of_birth !== null ? pet.date_of_birth : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-solid fa-venus-mars"></i><p>Gender: ${pet.gender !== undefined && pet.gender !== null ? pet.gender : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-solid fa-dollar-sign"></i><p>Price: ${pet.price !== undefined && pet.price !== null ? pet.price + '$' : 'Not Available'}</p></div>
                <div class="flex items-center gap-3"><i class="fa-solid fa-syringe"></i><p>Vaccination Status: ${pet.vaccinated_status !== undefined && pet.vaccinated_status !== null ? pet.vaccinated_status : 'Not Available'}</p></div>
                </div>
                <h2 class="text-xl font-extrabold">Details Information</h2>
                <p class="text-gray-400">${pet.pet_details !== undefined && pet.pet_details !== null ? pet.pet_details : 'Not Available'}</p>
                <div class="modal-action">
                <form method="dialog" class="w-full">
                    <button class="btn w-full bg-teal-100 text-teal-600">Close</button>
                </form>
                </div>
            </div>
            </dialog>
            <div>
        </div>
    `;
}

function createPetCard(pet, category) {
    const modalId = `modal-${category}-${pet.pet_name.split(' ').join('-')}`;
    
    return `
    <div class="card border bg-white shadow-xl rounded-lg p-4">
        <img src="${pet.image !== undefined && pet.image !== null ? pet.image : 'Not Available'}" alt="${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}" class="w-full h-48 object-cover rounded-md">
        <div class="card-body p-4">
            <h2 class="text-2xl font-extrabold">${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}</h2>
            <div class="flex items-center gap-3"><i class="fa-brands fa-microsoft"></i><p>Breed: ${pet.breed !== undefined && pet.breed !== null ? pet.breed : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-regular fa-calendar"></i><p>Birth: ${pet.date_of_birth !== undefined && pet.date_of_birth !== null ? pet.date_of_birth : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-venus-mars"></i><p>Gender: ${pet.gender !== undefined && pet.gender !== null ? pet.gender : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-dollar-sign"></i><p>Price: ${pet.price !== undefined && pet.price !== null ? pet.price + '$' : 'Not Available'}</p></div>
        </div>
        <div class="flex gap-4">
        <button class="btn sm:btn-md md:btn-sm lg:btn-md thumbs-up-click text-teal-500"><i class="fa-solid fa-thumbs-up"></i></button>

        <button class="btn sm:btn-md md:btn-sm lg:btn-md text-teal-500 adopt-click" onclick="openAndCloseModal('${modalId}')">Adopt</button>
        <dialog id="${modalId}" class="modal">
            <div class="modal-box flex flex-col items-center">
                <h3 class="text-2xl font-extrabold">Adopt ${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}!</h3>
                <p class="py-4">You have adopted ${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}</p>
                <img src="images/handshake.png">
                <div class="modal-action">
                    <p class="text-5xl font-extrabold"><span id="countdown-${modalId}">3</span></p>
                </div>
            </div>
        </dialog>
        <button class="btn sm:btn-md md:btn-sm lg:btn-md text-teal-500" onclick="document.getElementById('${modalId}-2').showModal()">Details</button>
        <dialog id="${modalId}-2" class="modal">
        <div class="modal-box flex flex-col gap-3">
            <img src="${pet.image !== undefined && pet.image !== null ? pet.image : 'Not Available'}" alt="${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}" class="max-h-[230px] object-cover rounded-md">
            <h2 class="text-2xl font-extrabold">${pet.pet_name !== undefined && pet.pet_name !== null ? pet.pet_name : 'Not Available'}</h2>
            <div class="grid grid-cols-2 gap-2">
            <div class="flex items-center gap-3"><i class="fa-brands fa-microsoft"></i><p>Breed: ${pet.breed !== undefined && pet.breed !== null ? pet.breed : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-regular fa-calendar"></i><p>Birth: ${pet.date_of_birth !== undefined && pet.date_of_birth !== null ? pet.date_of_birth : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-venus-mars"></i><p>Gender: ${pet.gender !== undefined && pet.gender !== null ? pet.gender : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-dollar-sign"></i><p>Price: ${pet.price !== undefined && pet.price !== null ? pet.price + '$' : 'Not Available'}</p></div>
            <div class="flex items-center gap-3"><i class="fa-solid fa-syringe"></i><p>Vaccination Status: ${pet.vaccinated_status !== undefined && pet.vaccinated_status !== null ? pet.vaccinated_status : 'Not Available'}</p></div>
            </div>
            <h2 class="text-xl font-extrabold">Details Information</h2>
            <p class="text-gray-400">${pet.pet_details !== undefined && pet.pet_details !== null ? pet.pet_details : 'Not Available'}</p>
            <div class="modal-action">
            <form method="dialog" class="w-full">
                <button class="btn w-full bg-teal-100 text-teal-600">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        <div>
    </div>
`;
}

function createPetButton(category){
    console.log(category);
    return `
    <img src="${category.category_icon}" class="w-2/12">${category.category}
    `;
}

function showSpinner() {
    document.getElementById('spinner').classList.remove('hidden');
}

function hideSpinner() {
    document.getElementById('spinner').classList.add('hidden');
}

function fetchAndDisplayPetsWithSpinner(category) {
    const mainSection = document.getElementById(`main-${category}`);

    mainSection.innerHTML = ''; 
    showSpinner();
    setTimeout(() => {
        fetchAndDisplayPets(category); 
        hideSpinner(); 
    }, 2000);
}

function openAndCloseModal(modalId) {
    const modal = document.getElementById(modalId);
    const countdownElement = document.getElementById(`countdown-${modalId}`);
    modal.showModal();
    let countdown = 3;
    const interval = setInterval(() => {
        countdown--; 
        countdownElement.textContent = countdown; 
        if (countdown === 0) {
            modal.close();
            clearInterval(interval);
        }
    }, 1000);  
}

function showNothingMessage(mainSection) {
    mainSection.innerHTML = `<div class="flex flex-col gap-8 items-center mx-auto" >
    <img src="images/error.webp">
    <p class="text-black text-5xl font-extrabold text-center">No Information Available</p>
    <p class="text-gray-500 font-bold text-center">There is no information currently available for this pet. We will soon contact you when it will be available.</p></div>`;
}

function fetchAndDisplayAll(){
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(response => response.json())
        .then(data => {
            const pets = data.pets; 
            let mainSection = document.getElementById('main-all');
            mainSection.innerHTML = '';

            if (!pets || pets.length === 0) {
                mainSection.classList.remove('grid');
                showNothingMessage(mainSection);
            } else {
                pets.forEach(pet => {
                    mainSection.innerHTML += createPetCard(pet);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function fetchAndDisplayPets(category) {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(response => response.json())
        .then(data => {
            const pets = data.data;
            let mainSection = document.getElementById(`main-${category}`);
            mainSection.innerHTML = '';

            if (pets.length === 0) {
                mainSection.classList.remove('grid');
                showNothingMessage(mainSection);
            } else {
                pets.forEach(pet => {
                    mainSection.innerHTML += createPetCard(pet, category);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            let mainSection = document.getElementById(`main-${category}`);
            showNothingMessage(mainSection);
        });
}

function fetchButton() {
    fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                const categories = data.categories; 
                categories.forEach(cat => {
                    const categoryId = `${cat.category.toLowerCase()}-click`;
                    const buttonsContainer = document.getElementById(categoryId); 
                    
                    if (buttonsContainer) { 
                        buttonsContainer.innerHTML = ''; 
                        const button = createPetButton(cat); 
                        buttonsContainer.innerHTML += button; 
                    } else {
                        console.error(`No container found for ${categoryId}`);
                    }
                });

            } else {
                console.error('Failed to fetch categories');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function sortByPriceAll() {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then(response => response.json())
        .then(data => {
            const petsArray = data.pets.map(pet => {
                return {
                    id: pet.petId,
                    breed: pet.breed,
                    category: pet.category,
                    date_of_birth: pet.date_of_birth,
                    price: pet.price,
                    gender: pet.gender,
                    image: pet.image,
                    vaccinated_status: pet.vaccinated_status,
                    details: pet.pet_details,
                    pet_name: pet.pet_name 
                };
            });

            console.log('Array of pet objects:', petsArray);

            petsArray.sort((a, b) => {
                return b.price - a.price; 
            });

            let mainSection = document.getElementById('main-all');
            mainSection.innerHTML = '';

            if (petsArray.length === 0) {
                mainSection.classList.remove('grid');
                showNothingMessage(mainSection);
            } else {
                petsArray.forEach(pet => {
                    mainSection.innerHTML += createPetCard(pet); 
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            let mainSection = document.getElementById('main-all');
            showNothingMessage(mainSection); 
        });
}



function sortByPrice(category) {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
        .then(response => response.json())
        .then(data => {
            const petsArray = data.data.map(pet => {
                return {
                    id: pet.petId,
                    breed: pet.breed,
                    category: pet.category,
                    date_of_birth: pet.date_of_birth,
                    price: pet.price,
                    gender: pet.gender,
                    image: pet.image,
                    vaccinated_status: pet.vaccinated_status,
                    details: pet.pet_details,
                    pet_name: pet.pet_name 
                };
            });

            console.log('Array of pet objects:', petsArray);

            petsArray.sort((a, b) => {
                return b.price - a.price; 
            });

            let mainSection = document.getElementById(`main-${category}`);
            mainSection.innerHTML = '';

            if (petsArray.length === 0) {
                mainSection.classList.remove('grid');
                showNothingMessage(mainSection);
            } else {
                petsArray.forEach(pet => {
                    mainSection.innerHTML += createPetCard(pet, category);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            let mainSection = document.getElementById(`main-${category}`);
            showNothingMessage(mainSection); 
        });
}



document.addEventListener('click', function(event) {
    if (event.target.classList.contains('adopt-click')) {
        event.target.classList.add('btn-disabled');
        console.log('Button has been disabled');
        event.target.innerText = 'Adopted';
    }
});

document.addEventListener('click', function(event) {
    if (event.target.closest('.thumbs-up-click')) { 
        const card = event.target.closest('.card'); 
   
        const petImage = card.querySelector('img').src;
        const mainGrid = document.getElementById('main-grid');
        const newImage = document.createElement('img');
        newImage.src = petImage;
        newImage.classList.add( 'w-11/12', 'rounded-lg');
        
        mainGrid.appendChild(newImage); 
    }
});

document.getElementById('dog-click').addEventListener('click', function () {
    document.getElementById('main-dog').classList.remove('hidden');
    document.getElementById('main-cat').classList.add('hidden');
    document.getElementById('main-rabbit').classList.add('hidden');
    document.getElementById('main-bird').classList.add('hidden');
    document.getElementById('main-all').classList.add('hidden');
    fetchAndDisplayPetsWithSpinner('dog');
    document.getElementById('dog-click').classList.add('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('cat-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('rabbit-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('bird-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
});

document.getElementById('cat-click').addEventListener('click', function () {
    document.getElementById('main-cat').classList.remove('hidden');
    document.getElementById('main-dog').classList.add('hidden');
    document.getElementById('main-rabbit').classList.add('hidden');
    document.getElementById('main-bird').classList.add('hidden');
    document.getElementById('main-all').classList.add('hidden');
    fetchAndDisplayPetsWithSpinner('cat');
    document.getElementById('cat-click').classList.add('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('dog-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('rabbit-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('bird-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
});

document.getElementById('rabbit-click').addEventListener('click', function () {
    document.getElementById('main-rabbit').classList.remove('hidden');
    document.getElementById('main-dog').classList.add('hidden');
    document.getElementById('main-cat').classList.add('hidden');
    document.getElementById('main-bird').classList.add('hidden');
    document.getElementById('main-all').classList.add('hidden');
    fetchAndDisplayPetsWithSpinner('rabbit');
    document.getElementById('rabbit-click').classList.add('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('dog-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('cat-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('bird-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
});

document.getElementById('bird-click').addEventListener('click', function () {
    document.getElementById('main-bird').classList.remove('hidden');
    document.getElementById('main-dog').classList.add('hidden');
    document.getElementById('main-cat').classList.add('hidden');
    document.getElementById('main-rabbit').classList.add('hidden');
    document.getElementById('main-all').classList.add('hidden');
    fetchAndDisplayPetsWithSpinner('bird');
    document.getElementById('bird-click').classList.add('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('dog-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('cat-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
    document.getElementById('rabbit-click').classList.remove('bg-cyan-100', 'border-cyan-600', 'rounded-[100px]');
});

document.getElementById('sort-price').addEventListener('click', function () {
    sortByPriceAll();
    sortByPrice('cat');
    sortByPrice('dog');
    sortByPrice('rabbit');
    sortByPrice('bird');
});


window.onload = function () {
    fetchButton();
    fetchAndDisplayAll();
};