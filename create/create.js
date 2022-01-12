import {
    renderOptionElement
} from '../render-utils.js';

import {
    getWorkshops,
    createParticipant
} from '../fetch-utils.js';

const dropdown = document.querySelector('.workshop-dropdown');
const form = document.querySelector('.participant-form');

window.addEventListener('load', async(e) => {

    e.preventDefault();
    const workshops = await getWorkshops();
    populateDropdown(workshops);

});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);
    const participantName = data.get('name-input');
    const workshopId = dropdown.value;

    await createParticipant(participantName, workshopId);
    form.reset();
});

function populateDropdown(workshops) {
    for (let workshop of workshops) {
        const optionTag = renderOptionElement(workshop);
        dropdown.append(optionTag);
    }
}