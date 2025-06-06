export const API_URLS = {
    saveSentEmail: {
        endpoint: 'save',
        method: 'POST'
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    saveDraftEmails:{
        endpoint: 'save-drafts',
        method: 'POST'
    },
     moveEmailsToBin: {
        endpoint: 'bin',
        method: 'POST'
    },
    toggleStarredMails: {
        endpoint: 'starred',
        method: 'POST'
    },
    deleteEmails: {
        endpoint: 'delete',
        method: 'DELETE'
    }   
}