export const keycloakApiUrl: Record<keycloakApiNames, string> = {
    'get-client-access-token': `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,

    'get-user-access-token': `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,

    'introspect-user-access-token': `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token/introspect`,

    'refresh-user-access-token': `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/token`,

    'user-logout': `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/logout`,

    'remove-user-session': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/sessions/$INSERT`,

    'get-user': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users$INSERT`,

    'get-users': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users`,

    'get-all-user-sessions': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users/$INSERT/sessions`,

    'user-all-logout': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users/$INSERT/logout`,

    'create-user': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users`,

    'reset-user-password': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users/$INSERT/reset-password`,

    'update-user': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users/$INSERT`,

    'delete-user': `${process.env.KEYCLOAK_URL}/admin/realms/${process.env.KEYCLOAK_REALM}/users/$INSERT`
};

export type keycloakApiNames =
    | 'get-client-access-token'
    | 'get-user-access-token'
    | 'introspect-user-access-token'
    | 'refresh-user-access-token'
    | 'user-logout'
    | 'remove-user-session'
    | 'get-user'
    | 'get-users'
    | 'get-all-user-sessions'
    | 'user-all-logout'
    | 'create-user'
    | 'reset-user-password'
    | 'update-user'
    | 'delete-user';
