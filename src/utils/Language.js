let currentLanguage = "";
currentLanguage = "en_US";
// currentLanguage = "pt_BR";

let lang = {
    logo: {
        url: "/US-Logo.png",
        alt: "AgResource Company Logo"
    },
    login: {
        usernameOrEmail: "Username or Email Address",
        password: "password",
        invalidUser: 'Invalid Username and Password',
        login: "Log in"
    },
    navbar: {
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
    account: {
        personal: "PERSONAL",
        password: "PASSWORD",
        business: "BUSINESS",
        subscriptions: "SUBSCRIPTIONS",
        payment: "PAYMENT",
        update: "UPDATE",
    },
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
    },
    reportDaily: {
        morning: "MORNING",
        noon: "NOON",
        evening: "EVENING",
        saturday: "SATURDAY",
        sunday: "SUNDAY",
        breaking: "BREAKING",
    }
}

if (currentLanguage === "pt_BR") {
    lang = {
        logo: {
            url: "/BR-Logo.png",
            alt: "AgResource  Brasil"
        },
        login: {
            usernameOrEmail: "Usu�rio ou endere�o de e-mail",
            password: "Senha",
            invalidUser: 'Usu�rio ou senha inv�lido.',
            login: 'Entrar',
        },
        navbar : {
            home: "IN�CIO",
            reports: "RELAT�RIOS",
            daily: "Di�rio",
            weekly: "Semanal",
            plus: "Plus+",
            latam: "LATAM",
            climate: "Clima",
            myAccount: "MINHA CONTA",
            privacyPolicy: "PRIVACIDADE",
            signOut: "Sair",
            followAg: "Seguir AgResource",
            hello: "Ol�, ",
        },
        dashboardTable: {
            corn: "Corn",
            soybeans: "Soybeans",
            soybeanmeal: "Soybean Meal",
        },
        updates: {
            latest: "�ltimos relat�rios",
        },
        reportArchives: {
            back: "Voltar",
        },
        monthNames: [
            "Janeiro",
            "Fevereiro",
            "Mar�o",
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
        account: {
            personal: "PESSOAL",
            password: "SENHA",
            business: "USU�RIOS",
            subscriptions: "PLANOS",
            payment: "PAGAMENTOS",
            update: "ATUALIZAR",
        },
        myAccount: {
            userInformation: "INFORMA��ES PESSOAIS",
            firstName: "Nome",
            lastName: "Sobrenome",
            company: "Empresa",
            occupation: "Cargo",
            country: "Pa�s",
            city: "Cidade",
            state: "Estado",
            postal: "CEP",
            phoneNumber: "Telefone / Celular",
            email: "E-mail",
            devices: "DISPOSITIVOS",
            youHaveToComplete: "Preencha todos os campos para atualizar...",
            updatedSuccessfully: "Perfil atualizado com sucesso...",
            firstNameShouldBe: "O nome precisa ter no m�nimo tr�s letras.",
            lastNameNameShouldBe: "O sobrenome precisa ter no m�nimo tr�s letras.",
            occupationIsRequired: "Cargo � obrigat�rio",
            validPhoneNumber: "Por favor, insira um telefone v�lido.",
            validEmail: "E-mail inv�lido.",
            deviceAdded: "dispositivo",
        },
        password: {
            passwordInformation: "ALTERAR SENHA",
            current: "Senha atual",
            new: "Digite uma senha nova",
            confirm: "Confirme a nova senha",
            atLeast: "A nova senha precisa ser ao menos 6 caracteres",
        },
        reportDaily: {
            morning: "MANH�",
            noon: "TARDE",
            evening: "NOITE",
            saturday: "S�BADO",
            sunday: "DOMINGO",
            breaking: "BREAKING",
        }
    }
}

export default lang