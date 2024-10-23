class apiResponse {
    constructor({
        status , // Default status to 200
        message , // Default message
        data = null, // Default data to null
        success = true, // Default success to true
        cookies = [], // Default cookies to an empty array
        meta = {} // Optional metadata
    }) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.success = status < 400; // Determine success based on status code
        this.cookies = cookies; // Store cookies for applying later
        this.meta = meta; // Store additional metadata
    }

    // Method to apply cookies to the response
    applyCookies(res) {
        if (this.cookies.length > 0) {
            this.cookies.forEach(cookie => {
                const { name, value, options } = cookie;
                res.cookie(name, value, options);
            });
        }
    }
}

export default apiResponse;
