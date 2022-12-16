let currentLanguage = "";
// currentLanguage = "en_US";
currentLanguage = "pt_BR";

let lang = {
    navbar: {
        /** Navbar */
        home: "HOME",
        reports: "REPORTS",
        daily: "Daily Newsletter",
        weekly: "Weekly Newsletter",
        plus: "Plus+ Report",
        latam: "LATAM Newsletter",
        climate: "Climate Impact",
        myAccount: "MY ACCOUNT",
        privacyPolicy: "PRIVACY POLICY",
        signOut: "Sign out",
        followAg: "Follow AgResource",
        hello: "Hello, ",
    },
    dashboardTable: {
        /** Dashboard Table */
        corn: "Corn",
        soybeans: "Soybeans",
        soybeanmeal: "Soybean Meal",
    },
    updates: {
        latest: "Latest updates",
    },
    reportArchives: {
        back: "Back",
    },
    monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    myAccount: {
        userInformation: "USER INFORMATION",
        firstName: "First name",
        lastName: "Last name",
        company: "Company",
        occupation: "Occupation",
        country: "Country",
        city: "City",
        state: "State",
        postal: "Postal",
        phoneNumber: "Phone number",
        email: "Email",
        devices: "Devices",
        youHaveToComplete: "You have to complete all the fields...",
        updatedSuccessfully: "Updated successfully...",
        firstNameShouldBe: "First name field should be at least 3 letters.",
        lastNameShouldBe: "Last name field should be at least 3 letters.",
        occupationIsRequired: "Occupation field is required",
        validPhoneNumber: "Please input valid phone number",
        validEmail: "Invalid email",
        deviceAdded: "Device Added",
    },
    password: {
        passwordInformation: "PASSWORD INFORMATION",
        current: "Current password",
        new: "Type a new password",
        confirm: "Confirm the new password",
        atLeast: "The password must be at least 6 characters"
    }
}

if (currentLanguage == "pt_BR") {
    lang = {
        navbar : {
            /** Navbar */
            home: "INÍCIO",
            reports: "RELATÓRIOS",
            daily: "Diário",
            weekly: "Semanal",
            plus: "Plus+",
            latam: "LATAM",
            climate: "Clima",
            myAccount: "MINHA CONTA",
            privacyPolicy: "PRIVACIDADE",
            signOut: "Sair",
            followAg: "Seguir AgResource",
            hello: "Olá, ",
        },
        dashboardTable: {
            /** Dashboard Table */
            corn: "Corn",
            soybeans: "Soybeans",
            soybeanmeal: "Soybean Meal",
        },
        updates: {
            latest: "Últimos relatórios",
        },
        reportArchives: {
            back: "Voltar",
        },
        monthNames: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ],
        myAccount: {
            userInformation: "INFORMAÇÕES PESSOAIS",
            firstName: "Nome",
            lastName: "Sobrenome",
            company: "Empresa",
            occupation: "Cargo",
            country: "País",
            city: "Cidade",
            state: "Estado",
            postal: "CEP",
            phoneNumber: "Telefone / Celular",
            email: "E-mail",
            devices: "DISPOSITIVOS",
            youHaveToComplete: "Preencha todos os campos para atualizar...",
            updatedSuccessfully: "Perfil atualizado com sucesso...",
            firstNameShouldBe: "O nome precisa ter no mínimo três letras.",
            lastNameNameShouldBe: "O sobrenome precisa ter no mínimo três letras.",
            occupationIsRequired: "Cargo é obrigatório",
            validPhoneNumber: "Por favor, insira um telefone válido.",
            validEmail: "E-mail inválido.",
            deviceAdded: "dispositivo",
        },
        password: {
            passwordInformation: "ALTERAR SENHA",
            current: "Senha atual",
            new: "Digite uma senha nova",
            confirm: "Confirme a nova senha",
            atLeast: "A nova senha precisa ser ao menos 6 caracteres",
        },
    }
}

export default lang