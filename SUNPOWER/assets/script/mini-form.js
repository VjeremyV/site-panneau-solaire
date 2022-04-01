(() => {
    const form = document.querySelector("form");
    //Je déclare une constante qui va stocker tous mes input
    const inputs = document.querySelectorAll('input[type ="text"], input[type="email"], textarea');
    //je déclare 4 variables qui correspondent à mes champs obligatoires
    let name, surname, mail;
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
    inputs.forEach((input) => {
        //Pour chaque input je créé un événement
        input.addEventListener("input", (e) => {
            //j'établie un switch pour tous mes cas d'input diférent et pour chacun d'entre eux, j'appelle la fonction de vérification associée
            switch (e.target.id) {
                case "Nom":
                    textChecker(e.target.value, "Nom", "spName", name);
                    break;
                case "Prénom":
                    surnameChecker(e.target.value, "Prénom", "spFirstname");
                    break;
                case "Mail":
                    mailChecker(e.target.value, "Mail", "spMail");
                    break;
                default:
                    null;
            }
        });
    });

    form.addEventListener("submit", (e) => {//je créé un événement à la soumission du formulaire
        e.preventDefault()//je previens du comportement par défaut et empeche l'actualisation de la page
        if(name && surname && mail){//si mes variable de champs obligatoires sont vrai
        alert("Votre message a bien été envoyé.")
        inputs.forEach((input) => {
            input.value = "";//je vide les champs
        })
        } else {
            alert('Il y a des erreurs dans votre formulaire.')
        }
    });
})()