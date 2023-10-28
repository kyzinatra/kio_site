import { keycloakApiUrl } from './apiURL';
import { IKeycloakApi } from './api';
import { keycloakConfig } from '../config';

let clientAccessToken: string = '';

const getAuthHeaders = () => ({
    Authorization: 'Bearer ' + clientAccessToken
});

export const keycloakApi = {
    'get-client-access-token': async () => {
        const body: IKeycloakApi['get-client-access-token']['body'] = {
            ...keycloakConfig,
            grant_type: 'client_credentials'
        };

        const method: IKeycloakApi['get-client-access-token']['method'] = 'POST';

        const data = await fetch(keycloakApiUrl['get-client-access-token'], {
            body: new URLSearchParams(body),
            method
        });

        const { access_token } = await data.json();

        clientAccessToken = access_token;
    },

    'self-login': async () => {
        const res = await keycloakApi['introspect-user-access-token']({ token: clientAccessToken });

        if (!res.active) {
            await keycloakApi['get-client-access-token']();
        }
    },

    'get-user-access-token': async ({ username, password }: { username: string; password: string }) => {
        const body: IKeycloakApi['get-user-access-token']['body'] = {
            ...keycloakConfig,
            password,
            username,
            grant_type: 'password'
        };

        const method: IKeycloakApi['get-user-access-token']['method'] = 'POST';

        const data = await fetch(keycloakApiUrl['get-user-access-token'], {
            body: new URLSearchParams(body),
            method
        });

        return await data.json();
    },

    'introspect-user-access-token': async ({ token }: { token: string }) => {
        const body: IKeycloakApi['introspect-user-access-token']['body'] = {
            ...keycloakConfig,
            token
        };

        const method: IKeycloakApi['introspect-user-access-token']['method'] = 'POST';

        const data = await fetch(keycloakApiUrl['introspect-user-access-token'], {
            body: new URLSearchParams(body),
            method
        });

        return await data.json();
    },

    'refresh-user-access-token': async ({ refresh_token }: { refresh_token: string }) => {
        const body: IKeycloakApi['refresh-user-access-token']['body'] = {
            ...keycloakConfig,
            refresh_token,
            grant_type: 'refresh_token'
        };

        const method: IKeycloakApi['refresh-user-access-token']['method'] = 'POST';

        const data = await fetch(keycloakApiUrl['refresh-user-access-token'], {
            body: new URLSearchParams(body),
            method
        });

        return await data.json();
    },

    'user-logout': async ({ refresh_token }: { refresh_token: string }) => {
        const body: IKeycloakApi['user-logout']['body'] = {
            ...keycloakConfig,
            refresh_token
        };

        const method: IKeycloakApi['user-logout']['method'] = 'POST';

        await fetch(keycloakApiUrl['user-logout'], {
            body: new URLSearchParams(body),
            method
        });

        return;
    },

    'get-user': async ({ user_id = '', email = '' }: IKeycloakApi['get-user']['params']) => {
        const method: IKeycloakApi['get-user']['method'] = 'GET';

        let url;

        if (user_id) {
            url = keycloakApiUrl['get-user'].replace('$INSERT', `/${user_id}`);
        } else if (email) {
            url = keycloakApiUrl['get-user'].replace('$INSERT', `?email=${email}`);
        } else {
            return null;
        }

        const data = await fetch(url, {
            method,
            headers: getAuthHeaders()
        });

        const res = await data.json();

        return Array.isArray(res) ? res[0] : res.error ? undefined : res;
    },

    'create-user': async ({
        username,
        password,
        firstName,
        lastName,
        email
    }: {
        username: string;
        password: string;
        firstName: string;
        lastName: string;
        email: string;
    }) => {
        const method: IKeycloakApi['create-user']['method'] = 'POST';

        const body: IKeycloakApi['create-user']['body'] = {
            enabled: true,
            firstName,
            lastName,
            email,
            username,
            credentials: [
                {
                    type: 'password',
                    value: password,
                    temporary: false
                }
            ]
        };

        const data = await fetch(keycloakApiUrl['create-user'], {
            method,
            headers: {
                ...getAuthHeaders(),
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return data.status;
    },

    'get-users': async () => {
        const method: IKeycloakApi['get-users']['method'] = 'GET';

        const data = await fetch(keycloakApiUrl['get-users'], {
            method,
            headers: getAuthHeaders()
        });

        return await data.json();
    },

    'get-all-user-sessions': async ({ user_id }: { user_id: string }): Promise<{ id: string }[]> => {
        const method: IKeycloakApi['get-all-user-sessions']['method'] = 'GET';

        const data = await fetch(keycloakApiUrl['get-all-user-sessions'].replace('$INSERT', user_id), {
            method,
            headers: getAuthHeaders()
        });

        return await data.json();
    },

    'user-all-logout': async ({ user_id }: { user_id: string }) => {
        const method: IKeycloakApi['user-all-logout']['method'] = 'POST';

        return await fetch(keycloakApiUrl['user-all-logout'].replace('$INSERT', user_id), {
            method,
            headers: getAuthHeaders()
        });
    },

    'remove-user-session': async ({ session_id }: { session_id: string }) => {
        const method: IKeycloakApi['remove-user-session']['method'] = 'DELETE';

        return await fetch(keycloakApiUrl['remove-user-session'].replace('$INSERT', session_id), {
            method,
            headers: getAuthHeaders()
        });
    },

    'reset-user-password': async ({ password, user_id }: { password: string; user_id: string }) => {
        const method: IKeycloakApi['reset-user-password']['method'] = 'PUT';

        const body: IKeycloakApi['reset-user-password']['body'] = {
            type: 'password',
            value: password,
            temporary: false
        };

        return await fetch(keycloakApiUrl['reset-user-password'].replace('$INSERT', user_id), {
            method,
            body: JSON.stringify(body),
            headers: { ...getAuthHeaders(), 'content-type': 'application/json' }
        });
    },
    'update-user': async () => {},

    'delete-user': async ({ user_id }: { user_id: string }) => {
        const method: IKeycloakApi['delete-user']['method'] = 'DELETE';

        return await fetch(keycloakApiUrl['delete-user'].replace('$INSERT', user_id), {
            method,
            headers: { ...getAuthHeaders() }
        });
    }
};
