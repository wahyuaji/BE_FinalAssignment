class Unauthorized extends Error {
    constructor(message = "Invalid username or password") {
        super(message);
        this.name = "Unauthorized";
        this.statusCode = 401;
      }
    }

class UserError extends Error {
    constructor (message = "User not found") {
        super(message);
        this.name = "UserError";
        this.statusCode = 404;
      }
}

module.exports = { Unauthorized, UserError };