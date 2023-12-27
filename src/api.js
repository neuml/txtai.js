// Backwards compatibility
import "core-js/features/promise";
import "isomorphic-fetch";

/**
 * Base class for interfacing with a remote txtai service via REST API calls. 
 */
class API {
    /**
     * Creates an API instance.
     * 
     * @param url api url
     * @param token api token
     */
    constructor(url, token) {
        // API url
        this.url = url ? url : process.env.TXTAI_API_URL

        // API token
        this.token = token ? token : process.env.TXTAI_API_TOKEN
    }

    /**
     * Executes a get request.
     * 
     * @param method api method
     * @param params query parameters
     * @return response
     */
    async get(method, params) {
        // Build URL
        let url = `${this.url}/${method}`;
        if (params) {
            url += `?${new URLSearchParams(params)}`;
        }

        // Execute remote call
        let res = await fetch(url, {headers: this.headers()});

        // Validate response and return JSON 
        return res.ok ? await res.json() : Promise.reject(`${res.status} ${res.statusText}`);
    }

    /**
     * Executes a post request.
     * 
     * @param method api method
     * @param params post parameters
     * @return response
     */
    async post(method, params) {
        // Build URL
        let url = `${this.url}/${method}`;

        // Default headers
        let defaults = {"Content-Type": "application/json"};

        // Execute remote call
        let res = await fetch(url, {method: "post",
                                    body: JSON.stringify(params),
                                    headers: this.headers(defaults)});

        // Validate response and return JSON 
        return res.ok ? await res.json() : Promise.reject(`${res.status} ${res.statusText}`);
    }

    /**
     * Creates default HTTP headers.
     *
     * @param base base headers
     * @return headers
     */
    headers(base) {
        let headers = base ? base : {};
        if (this.token) {
            headers["Authorization"] = "Bearer " + this.token;
        }

        return headers
    }
}

export default API;
