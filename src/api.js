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
     * @param url base url
     */
    constructor(url) {
        // Base url
        this.url = url;
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
        let res = await fetch(url);

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

        // Execute remote call
        let res = await fetch(url, {method: "post",
                                    body: JSON.stringify(params),
                                    headers: {"content-type": "application/json"}});

        // Validate response and return JSON 
        return res.ok ? await res.json() : Promise.reject(`${res.status} ${res.statusText}`);
    }
}

export default API;
