import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [input_prompt, setinput_prompt] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_prompt: input_prompt }),
    });
    const data = await response.json();
    setResult(data.result);
    // setinput_prompt("");
  }

  return (
    <div>
      <Head>
        <title>Bedtime Stories</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Bedtime stories about ...</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="input_prompt"
            placeholder="Enter text"
            value={input_prompt}
            onChange={(e) => setinput_prompt(e.target.value)}
          />
          <input type="submit" value="Continue story" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
