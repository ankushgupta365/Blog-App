const { SESClient, SendTemplatedEmailCommand } = require('@aws-sdk/client-ses');
require('dotenv').config()

const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    },
    region: process.env.AWS_SES_REGION
}

//creating new ses service object
const sesClient = new SESClient(SES_CONFIG)


const sendTemplatedEmailSESSingle = async(to, templateName, templateData) => {
    let params = {
        Destination: {ToAddresses: [to]},
        TemplateData: JSON.stringify(templateData),
        Source: 'studiocu@idolcu.in',
        Template: templateName
    }
    try {
        const sendTemplateEmailCommand = new SendTemplatedEmailCommand(params)
        await sesClient.send(sendTemplateEmailCommand)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {sendTemplatedEmailSESSingle}