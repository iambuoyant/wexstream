export default {
    googleAuth: '/api/google-auth',
    facebookAuth: '/api/facebook-auth',
    signup: '/api/sign-up',
    confirmEmail: '/api/confirm-email/:email/:token',
    resendLink: '/api/resend-link',
    signin: '/api/sign-in',
    validateAccessToken: '/api/validate-access-token',
    get: '/api/user/:id',
    getUserById: '/api/get-user/:userId',
    update: '/api/update-user',
    updateLanguage: '/api/update-language',
    updateEmailNotifications: '/api/update-email-notifications',
    updatePrivateMessages: '/api/update-private-messages',
    resetPassword: '/api/reset-password',
    validateEmail: '/api/validate-email',
    delete: '/api/delete-user/:id',
    updateAvatar: '/api/update-avatar/:userId',
    deleteAvatar: '/api/delete-avatar/:userId',
    setIsLive: '/api/set-is-live/:userId/:isLive',
    setIsConferencing: '/api/set-is-conferencing/:userId/:isConferencing',
    search: '/api/search-users/:userId/:messages/:page/:pageSize',
    checkBlockedUser: '/api/check-blocked-user/:userId/:blockedUserId',
    block: '/api/block/:userId/:blockedUserId',
    unblock: '/api/unblock/:userId/:blockedUserId',
    report: '/api/report'
};