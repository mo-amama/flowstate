# FlowState — Code Reading Practice

An interactive, browser-based quiz that helps mentees sharpen their **code reading skills** across JavaScript and Python.

## What it does

* Presents a shuffled set of code snippets
* Asks a multiple-choice question about each snippet
* Highlights the correct answer and explains **why** after every selection
* Tracks progress with a live progress bar
* Shows a final score with a per-question breakdown

## Getting started

No build step or server required — just open the file in your browser:

```
open index.html
```

Or serve it locally with any static file server, for example:

```bash
npx serve .
# then visit http://localhost:3000
```

## Project structure

| File | Purpose |
|------|---------|
| `index.html` | Page markup and layout |
| `style.css` | Dark-theme styles |
| `exercises.js` | Exercise data (code snippets, questions, answers, explanations) |
| `app.js` | Quiz logic (shuffle, render, scoring, results) |

## Adding exercises

Open `exercises.js` and append a new object to the `exercises` array:

```js
{
  id: 9,                         // unique number
  title: "Short description",
  language: "javascript",        // for display only
  code: `// your code here`,
  question: "What does X do?",   // HTML allowed
  options: ["A", "B", "C", "D"], // HTML allowed
  answer: 0,                     // 0-based index of the correct option
  explanation: "Because …",      // HTML allowed, shown after answering
}
```

## License

MIT