const cookieStorage = {
    getCookie: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setCookie: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}
const storageType = cookieStorage;
const consentPropertyName = 'consentement_Cookies';
const Popup = () => !storageType.getCookie(consentPropertyName);
const saveToStorage = () => storageType.setCookie(consentPropertyName, true);

window.onload = () => {
    const consentPopup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept');
    const refuseBtn = document.getElementById('refuse');

    acceptBtn.addEventListener('click', ()=> {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    });
    refuseBtn.addEventListener('click', ()=> {
        consentPopup.classList.add('hidden');
    })

    if (Popup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }
};