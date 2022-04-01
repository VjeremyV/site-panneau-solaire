(() =>{
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
    const consentPropertyName = 'consentement_Cookies';//on définit une variable qui contiendra le nom de notre cookie de consentement
    
    /**
     * fonction qui va vérifier si le cookie 'consentement_Cookies' n'existe pas
     * @returns un booleen true/false
     */
    const Popup = () => !storageType.getCookie(consentPropertyName);
    
    /**
     * fonction qui va sauvegarder le cookie de consentement et lui assigner une valeur à true
     */
    const saveToStorage = () => storageType.setCookie(consentPropertyName, true);
    
    window.onload = () => {// au chargement de la page
        const consentPopup = document.getElementById('cookie-popup'); // je selectione mon container
        const acceptBtn = document.getElementById('accept');// je selectione mon btn accepter
        const refuseBtn = document.getElementById('refuse');// je selectione mon btn refuser
    
        acceptBtn.addEventListener('click', ()=> {//evenement au click sur le btn accepter
            saveToStorage(storageType);//on sauvegarde le cookie sur le navigateur de l'utilisateur
            consentPopup.classList.add('hidden');//on cache le container 
        });
        refuseBtn.addEventListener('click', ()=> {//evenemnt au clieck sur le btn refuser
            consentPopup.classList.add('hidden');//on cache le container
        })
    
        if (Popup(storageType)) {// si le cookie n'existe pas
            setTimeout(() => {//on met un timer de 2 sec pour afficher le popup
                consentPopup.classList.remove('hidden');
            }, 2000);
        }
    };
})()