export interface IKeycloakApi {
    'get-client-access-token': {
        method: 'POST';
        body: {
            client_id: string;
            client_secret: string;
            grant_type: 'client_credentials';
        };
    };
    'get-user-access-token': {
        method: 'POST';
        body: {
            client_id: string;
            client_secret: string;
            grant_type: 'password';
            username: string;
            password: string;
        };
    };
    'introspect-user-access-token': {
        method: 'POST';
        body: {
            client_id: string;
            client_secret: string;
            token: string;
        };
    };
    'refresh-user-access-token': {
        method: 'POST';
        body: {
            client_id: string;
            client_secret: string;
            refresh_token: string;
            grant_type: 'refresh_token';
        };
    };
    'user-logout': {
        method: 'POST';
        body: {
            client_id: string;
            client_secret: string;
            refresh_token: string;
        };
    };
    'remove-user-session': {
        method: 'DELETE';
        params: {
            user_id: string;
        };
    };
    'get-user': {
        method: 'GET';
        params: {
            user_id?: string;
            email?: string;
        };
    };
    'get-users': {
        method: 'GET';
    };
    'get-all-user-sessions': {
        method: 'GET';
        params: {
            user_id: string;
        };
    };
    'user-all-logout': {
        method: 'POST';
        params: {
            user_id: string;
        };
    };
    'create-user': {
        method: 'POST';
        body: {
            enabled: true;
            username: string;
            firstName: string;
            lastName: string;
            email: string;
            credentials: [
                {
                    type: 'password';
                    value: string;
                    temporary: false;
                }
            ];
        };
    };
    'reset-user-password': {
        method: 'PUT';
        body: {
            type: 'password';
            value: string;
            temporary: false;
        };
        params: {
            user_id: string;
        };
    };

    'delete-user': {
        method: 'DELETE';
        params: {
            user_id: string;
        };
    };
}
