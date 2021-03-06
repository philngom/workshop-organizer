import {
    checkAuth,
    logout,
    getWorkshops,
    deleteParticipant
} from '../fetch-utils.js';
import {
    renderParticipant
} from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const workshopsContainerEl = document.querySelector('.workshops-container');

checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const workshops = await getWorkshops();
    console.log(workshops);
    displayWorkshops(workshops);
});

function displayWorkshops(workshops) {

    workshopsContainerEl.textContent = '';

    for (let workshop of workshops) {
        const workshopContainerEl = document.createElement('div');
        const workshopNameEl = document.createElement('h3');

        workshopContainerEl.classList.add('workshop');
        workshopNameEl.textContent = workshop.name;
        for (let participant of workshop.participants) {
            const participantContainerEl = renderParticipant(participant);
            workshopContainerEl.append(participantContainerEl);
            participantContainerEl.addEventListener('click', async() => {
                let id = participant.id;
                await deleteParticipant(id);
                location.reload();
            });
        }

        workshopContainerEl.append(workshopNameEl);
        workshopsContainerEl.append(workshopContainerEl);
    }
}
