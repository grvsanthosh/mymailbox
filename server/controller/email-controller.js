import Email from '../model/Email.js'

export const saveSendEmails =  (request, response) => {
    try {
        const email = new Email(request.body);
        email.save();

        response.status(200).json('email saved successfully');
    } catch (error) {
        response.status(500).json(error.message);
        console.error(error);
    }
}
