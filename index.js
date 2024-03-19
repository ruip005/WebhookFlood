const axios = require('axios');

const webhooks = [
    "https://discord.com/api/webhooks/1074797593223233666/DQWutpiUfxV4_hkW5L8iAp-3t7dLjSVhiDt-RjPYQtgIQEmpBiNxyCELoT9-0uf58-E8",
    "https://discord.com/api/webhooks/1167913629794963678/QrMdFZISOoJgk5r2QNb7EOa7gxstKe7vi_bbx9qwlLbUfTuop7qAAeyHSsfuyOWNe_A-",
    "https://discord.com/api/webhooks/1121143696881094768/syQmQ131jbCUIkquTLwlS3lHEcSRfzNn3fNWCjfWg-j7aIXZmmh-aiKqnMrrGM72CeHZ",
    "https://discord.com/api/webhooks/1130472833093484706/LLCSGl_5MTv3sXfsavXSVtEvm7n2BpgMXA6SaJwqGcQwSG7Fgqd1y2iOG1bIsZ-QNLp8",
    "https://discord.com/api/webhooks/1188822610411278467/f4wX0JwoWEoIsYUo9qhds6UEdf_L2VdKjifh1BW4CQtZdYqVSQtHpGmNVfh5kW4YOv47",
    "https://discord.com/api/webhooks/1132005483532779612/A2peGEbkFwYuSuzmfBsC5pa7hbrXGRW5cnBFMZZzSbfrRZI6IndqfyjrH4DoiGSSi5YG",
    "https://discord.com/api/webhooks/1168048069070295091/vMz-UQ_vBEIq_ileB3XSWlRWGAUhornTGeH8cITxE20pQIp1z6j2vsP93tYOouurhPb7",
    "https://discord.com/api/webhooks/1074111646940795061/z1EwEvGWeXOtREJNXWB5immxE1WofABRiCVa9Ci2BOImVwl3PTiDs8FsPGyvzxXzhCww",
];

const user = "Divulgação de canal do youtube!"
const photo = "https://cdn.discordapp.com/attachments/1167506410611937424/1219390243032268800/Screen-Shot-2018-03-29-at-21.png?ex=660b20a9&is=65f8aba9&hm=bbcaf6de80bb0ea0dad86aed681468926e98f5394024c46634d6856c174a53c0&"
const message = "Opá tudo bem com voces? Cola na live! https://www.youtube.com/watch?v=64Zv7xodyLI \n@here";
let time = 1000; // 1000 = 1 segundo

const sendDiscordMessage = async (webhookUrl) => {
    try {
        const payload = {
            username: user,
            avatar_url: photo,
            content: message,
        };

        await axios.post(webhookUrl, payload);
        console.log("SUCCESS!");
    } catch (error) {
        if (error.response.status === 429) {
            console.warn("Rate limit atingido.");
            return;
        }
        error.response.status === 404 ? console.error("Webhook não encontrado " + webhookUrl) : null; // 404 = Webhook não encontrado
        console.error("FAILED! ERROR:", error.response.status); // 429 = Rate limit
    }
};

setInterval(() => {
    webhooks.forEach(lista => {
        if (lista !== "")
            sendDiscordMessage(lista)
    })
}, time)