


export const csrfFetch = async(url, options={}) => {
    options.method ||= 'GET';
    options.headers ||= {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] = 'application/json';
        options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
    }

    const res = await fetch(url, options);
    return res;
}

export function storeCSRFToken(response) {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
}
  
export async function restoreCSRF() {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    return response;
}