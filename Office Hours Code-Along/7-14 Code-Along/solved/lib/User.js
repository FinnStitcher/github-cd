class User {    

    constructor(name, github, email, skills, pagecolor) {
        this.name = name;
        this.github = github;
        this.email = email;
        this.skills = skills;
        this.pagecolor = pagecolor;
    }

    getName() {
        return this.name;
    }

    getGitHub() {
        return this.github;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = User;