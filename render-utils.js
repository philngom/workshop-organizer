export function renderOptionElement(workshop) {
    const option = document.createElement('option');
    option.value = workshop.id;
    option.textContent = workshop.name;

    return option;
}

export function renderParticipant(participant) {
    const nameEl = document.createElement('p');
    nameEl.textContent = participant.name;
    nameEl.classList.add('participant');
    return nameEl;
}