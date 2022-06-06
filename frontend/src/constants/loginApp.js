module.exports = Object.freeze({
    inputFields: [
        {
            name: "username",
            type: "text",
            scope: ["login", "signup"]
        },
        {
            name: "password",
            type: "password",
            scope: ["login", "signup"]
        },
        {
            name: "confirmation",
            type: "password",
            scope: ["signup"]
        },
    ],
    errors: {
        username: "Invalid username",
        password: "Invalid password",
        passwordConfirmation: "Passwords doesn't match"
    },
    connectionOptions: {
        login: {
            text: "Log In",
            switch: "Dont have an account ? Click here for sign up"
        },
        signup: {
            text: "Sign Up",
            switch: "Already have an account ? Click here for log in"
        }
    }
})
