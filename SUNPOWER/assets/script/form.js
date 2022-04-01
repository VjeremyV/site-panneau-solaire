(() => {
    const form = document.querySelector('.form') //je selectionne ma div .form
    const formSubmit = document.querySelector('.formSubmit')
    const radios = document.getElementsByName('interlocuteur')//je selectionne mes 2 input:radio
    const formEntrepriseEtCollectivite = ["Raison Sociale", "Nom", "Prénom", "Mail", "Rôle au sein de votre organisation", "Adresse", "Téléphone", "Description du projet", "Documents à télécharger", "Ville", "Code Postal"];
    const formContact = ["Nom", "Prénom", "Mail", "Téléphone", "Votre projet"]
    //j'établie 2 tableaux qui contiennent les Label des champs de mes 22 formulaires différents
    //Pour chaque bouton, au clique, je vérifie si le bouton est checked et si oui j'injecte le html qui suit

    //Pour tous mes boutons radios
    radios.forEach((btn) => {
        /**l'evenement se déclenche au clic sur l'un d'entres eux
         * et va vérifier lequel est coché avec .checked
         * et va injecter le formulaire html qui suit avec innerHtml
         */
        btn.addEventListener('click', () => {
            if (btn.checked) {
                switch (btn.getAttribute("id")) {
                    case "particulier": //cas 1 pour les particuliers
                        form.style.border = "1px solid black"; // on fait apparaitre une bordure à notre formulaire
                        form.innerHTML = //on inject du code html directement dans notre page
                            `
                                <div class="formContainer">
                                    <div class ="informations">
                                        <label for="${formContact[0]}">${formContact[0]}(*)</label>
                                        <input type="text" name="${formContact[0]}" id="${formContact[0]}" required="required">
                                        <span id="spName"></span> 
                        
                                        <label for="${formContact[1]}">${formContact[1]}(*)</label>
                                        <input type="text" name="${formContact[1]}" id="${formContact[1]}" required="required">
                                        <span id="spFirstname"></span> 
                        
                                        <label for="${formContact[2]}">${formContact[2]}(*)</label>
                                        <input type="email" name="${formContact[2]}" id="${formContact[2]}" required="required">
                                        <span id="spMail"></span> 
                        
                                        <label for="${formContact[3]}">${formContact[3]}(*)</label>
                                        <input type="tel" name="${formContact[3]}" id="${formContact[3]}" required="required">
                                        <span id="spTel"></span> 
                                    </div>
                    
                                    <div class="textarea">
                                        <label for="${formContact[4]}">${formContact[4]}(*)</label>
                                        <textarea id="story" name="${formContact[4]}"  id="${formContact[4]}" required="required"></textarea>
                                    </div>
                                </div>
                                <input type="submit" value="Envoyer">
                            `
                        break;
                    case "prof-coll": //cas 2 professionnels et collectivités ect
                        form.style.border = "1px solid black";// on fait apparaitre une bordure à notre formulaire
                        form.innerHTML =  //on refait le même processus qu'au dessu
                            `
                                <div class="formContainer">
                                
                                <div class ="informations">

                                        <div class="d-flex justify-content-between w-100">
                                            <div class="d-flex flex-column align-items-center">
                                                <label for="pro">Un professionel</label>
                                                <input type="radio" name="interlocuteurPro" id="pro">
                                            </div>
                                            <div class="d-flex flex-column align-items-center">
                                                <label for="collectivité">une collectivité</label>
                                                <input type="radio" name="interlocuteurPro" id="collectivité">
                                            </div>
                                            <div class="d-flex flex-column align-items-center">
                                                <label for="syndicat">Un syndicat de copropriété</label>
                                                <input type="radio" name="interlocuteurPro" id="syndicat">
                                            </div>
                                        </div>

                                        <label for="${formEntrepriseEtCollectivite[0]}">${formEntrepriseEtCollectivite[0]}</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[0]}" id="${formEntrepriseEtCollectivite[0]}"required="required">
                                        <span id="spRaisonSoc"></span>
                        
                                        <label for="${formEntrepriseEtCollectivite[1]}">${formEntrepriseEtCollectivite[1]}(*)</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[1]}" id="${formEntrepriseEtCollectivite[1]}"required="required">
                                        <span id="spName"></span>                        
                        
                                        <label for="${formEntrepriseEtCollectivite[2]}">${formEntrepriseEtCollectivite[2]}(*)</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[2]}" id="${formEntrepriseEtCollectivite[2]}"required="required">
                                        <span id="spFirstname"></span>
                        
                                        <label for="${formEntrepriseEtCollectivite[3]}">${formEntrepriseEtCollectivite[3]}(*)</label>
                                        <input type="email" name="${formEntrepriseEtCollectivite[3]}" id="${formEntrepriseEtCollectivite[3]}"required="required">
                                        <span id="spMail"></span>
                                        
                                        <label for="${formEntrepriseEtCollectivite[4]}">${formEntrepriseEtCollectivite[4]}</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[4]}" id="${formEntrepriseEtCollectivite[4]}">
                                        <span id="spQual"></span>
                                        
                                        <label for="${formEntrepriseEtCollectivite[5]}">${formEntrepriseEtCollectivite[5]}</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[5]}" id="${formEntrepriseEtCollectivite[5]}">
                                        <span id="spAdresse"></span>

                                        <label for="${formEntrepriseEtCollectivite[9]}">${formEntrepriseEtCollectivite[9]}</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[9]}" id="${formEntrepriseEtCollectivite[9]}">
                                        <span id="spVille"></span>

                                        <label for="${formEntrepriseEtCollectivite[10]}">${formEntrepriseEtCollectivite[10]}</label>
                                        <input type="text" name="${formEntrepriseEtCollectivite[10]}" id="${formEntrepriseEtCollectivite[10]}">
                                        <span id="spCode"></span>
                                        
                                        <label for="${formEntrepriseEtCollectivite[6]}">${formEntrepriseEtCollectivite[6]}(*)</label>
                                        <input type="tel" name="${formEntrepriseEtCollectivite[6]}" id="${formEntrepriseEtCollectivite[6]}"required="required">
                                        <span id="spTel"></span>
                        
                                        <label for="${formEntrepriseEtCollectivite[8]}">${formEntrepriseEtCollectivite[8]} (pdf uniquement)</label>
                                        <input type="file" name="${formEntrepriseEtCollectivite[8]}" id="${formEntrepriseEtCollectivite[8]}">
                                        <span id="spDoc"></span>
                                    </div>

                                    <div class="textarea">
                                        <label for="${formEntrepriseEtCollectivite[7]}">${formEntrepriseEtCollectivite[7]}(*)</label>
                                        <textarea id="story" name="${formEntrepriseEtCollectivite[7]}"  id="${formEntrepriseEtCollectivite[7]}"required="required"></textarea>
                                    </div>
                                </div>
                
                                <input type="submit" value="Envoyer">
                            `
                        break;
                }
            }
            //Je déclare une constante qui va stocker tous mes input
            const inputs = document.querySelectorAll('input[type ="text"], input[type="tel"], input[type="email"], input[type="file"], textarea, input[type="number"]');
            //je déclare 4 variables qui correspondent à mes champs obligatoires
            let name, surname, tel, mail;


            /**
             * fonction qui permet de vérifier si un champs de formulaire est correct et d'affichier ou non une erreur
             * @param {string} tag correspond à la string équivalente à l'id de l'input
             * @param {string} span correspond à la string équivalente à l'id du span qui suit l'input
             * @param {string} message message d'erreur à afficher
             * @param {boolean} valid booleen qui renvoi si le champs est rempli de manière valide ou non
             */
            const errorDisplay = (tag, span, message, valid) => {
                const container = document.getElementById(tag);
                const errorContainer = document.getElementById(span);
                if (!valid) {
                    container.classList.add("text-danger");
                    errorContainer.classList.add('text-danger')
                    errorContainer.textContent = message;
                } else {
                    container.classList.remove("text-danger");
                    errorContainer.classList.remove('text-danger')
                    errorContainer.textContent = message;
                }
            };

            /**
             * fonction qui vérifie le contenu d'un champ texte
             * @param {string} value la valeur rentrée par l'utilisateur
             * @param {string} input valeur a passer en 1er paramètre à errorDisplay() qui correspond à l'id de l'input;
             * @param {string} span  valeur à passer en 2eme paramètre à erroDisplay() qui correspond à l'id du span qui suit l'input
             * @param {string} validation valeur qui si elle est équivalente au nom d'une variable champs obligatoire va permettre d'attribuer une valeur true ou false
             */
            const textChecker = (value, input, span, validation) => {
                if (!value.match(/^[a-zA-Z\s-]*$/)) {
                    errorDisplay(input, span, "Entrez du texte valide", false);
                    if (validation == name) {
                        name = false;
                    }
                } else {
                    errorDisplay(input, span, "", true);
                    if (validation == name) {
                        name = true;
                    }
                }
            };
            const surnameChecker = (value, input, span) => {
                if (!value.match(/^[a-zA-Z\s-]*$/)) {
                    errorDisplay(input, span, "Entrez du texte valide", false);
                        surname = false;
                } else {
                    errorDisplay(input, span, "", true);
                        surname = true;
                }
            };
            /**
             * fonction qui vérifie le contenu d'un champ tel
             * @param {string} value la valeur rentrée par l'utilisateur
             * @param {string} input valeur a passer en 1er paramètre à errorDisplay() qui correspond à l'id de l'input;
             * @param {string} span valeur à passer en 2eme paramètre à erroDisplay() qui correspond à l'id du span qui suit l'input
             */
            const telChecker = (value, input, span) => {
                if (!value.match(/^[0-9\s]*$/)) {
                    errorDisplay(input, span, "Entrez un numéro de téléphone valide", false);
                    tel = false;
                } else {
                    errorDisplay(input, span, "", true);
                    tel = true;
                }
            };
            /**
             * fonction qui vérifie le contenu d'un champ code postal
             * @param {string} value la valeur rentrée par l'utilisateur
             * @param {string} input valeur a passer en 1er paramètre à errorDisplay() qui correspond à l'id de l'input;
             * @param {string} span valeur à passer en 2eme paramètre à erroDisplay() qui correspond à l'id du span qui suit l'input
             */
            const codeChecker = (value, input, span) => {
                if (!value.match(/^[0-9\d{5}]*$/)) {
                    errorDisplay(input, span, "Entrez un code postal valide", false);
                    tel = false;
                } else {
                    errorDisplay(input, span, "", true);
                    tel = true;
                }
            };
            /**
             * fonction qui vérifie le contenu d'un champ adresse
             * @param {string} value la valeur rentrée par l'utilisateur
             * @param {string} input valeur a passer en 1er paramètre à errorDisplay() qui correspond à l'id de l'input;
             * @param {string} span valeur à passer en 2eme paramètre à erroDisplay() qui correspond à l'id du span qui suit l'input
             */
            const addressChecker = (value, input, span) => {

                if (!value.match(/^[0-9a-zA-Z\s-]*$/)) {
                    errorDisplay(input, span, "Votre adresse mail n'est pas valide", false);
                } else {
                    errorDisplay(input, span, "", true);
                }
            };
            /**
             * fonction qui vérifie le contenu d'un champ mail
             * @param {string} value la valeur rentrée par l'utilisateur
             * @param {string} input valeur a passer en 1er paramètre à errorDisplay() qui correspond à l'id de l'input;
             * @param {string} span valeur à passer en 2eme paramètre à erroDisplay() qui correspond à l'id du span qui suit l'input
             */
            const mailChecker = (value, input, span) => {

                if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
                    errorDisplay(input, span, "Entrez une adresse mail valide", false);
                    mail = false;
                } else {
                    errorDisplay(input, span, "", true);
                    mail = true;
                }
            };

            /**
             * fonction qui vérifie l'extention du fichier que l'utilisateur va vouloir envoyer
             * @param {string} value la valeur du nom du fichier envoyé par l'utilisateur
             * @param {string} input valeur a passer en 1er paramètre à errorDisplay() qui correspond à l'id de l'input;
             * @param {string} span valeur à passer en 2eme paramètre à erroDisplay() qui correspond à l'id du span qui suit l'input
             */
            const docChecker = (value, input, span) => {

                if (!value.match(/^.+\.(([pP][dD][fF])|([jJ][pP][gG]))$/i)) {
                    errorDisplay(input, span, "Entrez uniquement un fichier .pdf", false);
                } else {
                    errorDisplay(input, span, "", true);
                }
            };
            inputs.forEach((input) => {
                //Pour chaque input je créé un événement
                input.addEventListener("input", (e) => {
                    //j'établie un switch pour tous mes cas d'input diférent et pour chacun d'entre eux, j'appelle la fonction de vérification associée
                    switch (e.target.id) {
                        case "Raison Sociale":
                            textChecker(e.target.value, "Raison Sociale", "spRaisonSoc");
                            break;
                        case "Nom":
                            textChecker(e.target.value, "Nom", "spName", name);
                            break;
                        case "Prénom":
                            surnameChecker(e.target.value, "Prénom", "spFirstname");
                            break;
                        case "Mail":
                            mailChecker(e.target.value, "Mail", "spMail");
                            break;
                        case "Rôle au sein de votre organisation":
                            textChecker(e.target.value, "Rôle au sein de votre organisation", "spQual");
                            break;
                        case "Adresse":
                            addressChecker(e.target.value, "Adresse", "spAdresse");
                            break;
                        case "Ville":
                            textChecker(e.target.value, "Ville", "spVille");
                            break;
                        case "Code Postal":
                            codeChecker(e.target.value, "Code Postal", "spCode");
                            break;
                        case "Téléphone":
                            telChecker(e.target.value, "Téléphone", "spTel");
                            break;
                        case "Documents à télécharger":
                            docChecker(e.target.value, "Documents à télécharger", "spDoc");
                            break;
                        default:
                            null;
                    }
                });
            });

            formSubmit.addEventListener("submit", (e) => {//je créé un événement à la soumission du formulaire
                e.preventDefault()//je previens du comportement par défaut et empeche l'actualisation de la page
                if (name && surname && tel && mail) {//si mes variable de champs obligatoires sont vrai
                    alert("Votre message a bien été envoyé.")
                    inputs.forEach((input) => {
                        input.value = "";//je vide les champs
                    })
                } else {
                    alert('Il y a des erreurs dans votre formulaire.')
                }
            });
        })
    })
})()


