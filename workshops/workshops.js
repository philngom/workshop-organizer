import {
    checkAuth,
    logout,
    getWorkshops
} from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const workshops = await getWorkshops();

});
