module.exports = class ApiErrors extends Error{
    status;
    errors;

    constructor(status, message, errors = []){
        super(message)

        this.status = status;
        this.errors = errors;
    }

    static badRequest(message, errors = []){
        return new ApiErrors(400, message, errors)
    }

    static notFound(message, errors = []){
        return new ApiErrors(404, message, errors)
    }
}