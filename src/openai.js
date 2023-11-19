const {Configuration, OpenAIApi} = require ('openai');
const configuration = new Configuration({apiKey: "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"})

const openai = new OpenAIApi(configuration);

export async function sendingToOpenAi(message){
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}

// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     prompt: message,
//     temperature: 0.7,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0
// });



