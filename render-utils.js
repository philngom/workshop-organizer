export function renderOptionElement(workshop) {
    const option = document.createElement('option');
    option.value = workshop.id;
    option.textContent = workshop.name;

    return option;
}