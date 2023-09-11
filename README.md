# BedTimeStories-by-GPT-3

A simple web interface to write bedtime stories together with GPT-3 – one step at a time.

## Functioning

The interface allows users to write a story in iterations and in collaboration with the AI. That's how it works:

1. Write the beginning of the story. Example: *"One uppon a time, an octopus decided that wanted to see the world."*
2. AI will continue the story with a couple of sentences.
3. How can the story go on? Just write the next step of the story.
4. AI will continue it further.

And so on.

 ## Implementation

 The app builds on:

 - OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart)
 - [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/)

 ## Setup

 1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)
 2. Clone this repository
 3. Navigate into the project directory

    ```bash
    $ cd BedTimeStories-by-GPT-3
    ```

 4. Install the requirements

    ```bash
    $ npm install
    ```

 5. Make a copy of the example environment variables file

    ```bash
    $ cp .env.example .env
    ```

 6. Add your [OpenAI API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

 7. Run the app

    ```bash
    $ npm run dev
    ```

 You should now be able to access the app at [http://localhost:3000](http://localhost:3000)
