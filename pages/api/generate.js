import { Configuration, OpenAIApi } from "openai";
var lastResult;
var printLastResult;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(lastResult + req.body.input_prompt),
    max_tokens: 250,
    temperature: 0.5,
  });
  res.status(200).json({ result: completion.data.choices[0].text });

  lastResult = completion.data.choices[0].text;
  var sentences = lastResult.split('.');
sentences.pop();
printLastResult = sentences.join('.');
console.log(printLastResult);
}

function generatePrompt(input_prompt) {
  const capitalizedinput_prompt =
    input_prompt[0].toUpperCase() + input_prompt.slice(1).toLowerCase();
  //console.log(capitalizedinput_prompt);
  return `Continue a short bedtime story. The story begins anxiously, but in the end it spreads a positive attitude. The story starts as follows: ${capitalizedinput_prompt}. At the end of the input there is a question and an answer. First, rephrase these two sentences in a narrative way. Then, continue the story in two sentences. Then ask a question about a possible continuation of the story.`;

//input_prompt: Cat
//Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
//input_prompt: Dog
//Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
//input_prompt: ${capitalizedinput_prompt}
//Names:`;
}
