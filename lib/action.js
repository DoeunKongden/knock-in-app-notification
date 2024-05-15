'use server'
const { Knock } = require("@knocklabs/node");

const knockClient = new Knock(process.env.KNOCK_SECRETE_API_KEY);

export const notifiyOtherUser = async () => {
    await knockClient.notify(
        'krorya-in-app-notification',
        {
            actor: "user-123",
            recipient: "user-123",
            data: {

            }
        }
    )
}