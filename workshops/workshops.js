import {
    checkAuth,
    logout,
    getWorkshops
} from '../fetch-utils.js';

const logoutButton = document.getElementById('logout');
const workshopsContainerEl = document.querySelector('.workshops-container');

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const workshops = await getWorkshops();

    displayWorkshops(workshops);
});

function displayWorkshops(workshops) {

    workshopsContainerEl.textContent = '';

    for (let workshop of workshops) {
        console.log(workshop);
        const workshopContainerEl = document.createElement('div');
        const workshopNameEl = document.createElement('h5');

        workshopNameEl.classList.add('workshop');
        workshopNameEl.textContent = workshop.name;

        workshopContainerEl.append(workshopNameEl);
        workshopsContainerEl.append(workshopContainerEl);
    }
}
