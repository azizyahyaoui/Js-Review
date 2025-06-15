export default class Users  {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    setName(name) {
        this.name = name;
    }

    setEmail(email) {
        this.email = email;
    }

    toString() {
        return `User [id=${this.id}, name=${this.name}, email=${this.email}]`;
    }

    equals(other) {
        if (!(other instanceof User)) {
            return false;
        }
        return this.id === other.id &&
              this.name === other.name &&
              this.email === other.email;
      
    }
}

// Export the User class
//export default User;

// OR export { User };
//export { toString, equals };