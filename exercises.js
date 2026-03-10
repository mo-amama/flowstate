const exercises = [
  {
    id: 1,
    title: "What does this function return?",
    language: "javascript",
    code: `function mystery(n) {
  if (n <= 1) return n;
  return mystery(n - 1) + mystery(n - 2);
}

console.log(mystery(6));`,
    question: "What value does <code>mystery(6)</code> print to the console?",
    options: ["6", "8", "13", "21"],
    answer: 1,
    explanation:
      "This is the Fibonacci sequence. Each call returns the sum of the two preceding values: mystery(0)=0, mystery(1)=1, mystery(2)=1, mystery(3)=2, mystery(4)=3, mystery(5)=5, mystery(6)=8.",
  },
  {
    id: 2,
    title: "Trace the output",
    language: "python",
    code: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))
print(greet("Bob", "Hi"))
print(greet(greeting="Hey", name="Carol"))`,
    question: "Which line prints <code>Hey, Carol!</code>?",
    options: [
      "Line 4 — <code>greet(\"Alice\")</code>",
      "Line 5 — <code>greet(\"Bob\", \"Hi\")</code>",
      "Line 6 — <code>greet(greeting=\"Hey\", name=\"Carol\")</code>",
      "None of the above",
    ],
    answer: 2,
    explanation:
      'Python allows passing arguments by name (keyword arguments) in any order. <code>greet(greeting="Hey", name="Carol")</code> sets greeting="Hey" and name="Carol", producing "Hey, Carol!".',
  },
  {
    id: 3,
    title: "What is the final value?",
    language: "javascript",
    code: `const arr = [1, 2, 3, 4, 5];

const result = arr
  .filter(x => x % 2 === 0)
  .map(x => x * x);

console.log(result);`,
    question: "What does <code>result</code> contain?",
    options: ["[1, 4, 9, 16, 25]", "[4, 16]", "[2, 4]", "[1, 3, 5]"],
    answer: 1,
    explanation:
      "<code>filter(x => x % 2 === 0)</code> keeps only even numbers: [2, 4]. Then <code>map(x => x * x)</code> squares each: [4, 16].",
  },
  {
    id: 4,
    title: "Spot the bug",
    language: "python",
    code: `def count_vowels(text):
    vowels = "aeiou"
    count = 0
    for char in text:
        if char in vowels:
            count =+ 1
    return count

print(count_vowels("hello"))`,
    question: "Why does this function always return <code>1</code>?",
    options: [
      "The loop is missing a break statement",
      "<code>=+</code> assigns 1 to count each time instead of adding 1",
      "The vowels string is missing uppercase letters",
      "The function should use <code>len()</code> instead of a loop",
    ],
    answer: 1,
    explanation:
      '<code>=+</code> is not the same as <code>+=</code>. It is interpreted as <code>count = (+1)</code>, which resets count to 1 on every vowel found. The fix is to use <code>count += 1</code>.',
  },
  {
    id: 5,
    title: "Understand closures",
    language: "javascript",
    code: `function makeCounter(start = 0) {
  let count = start;
  return {
    increment() { count += 1; },
    decrement() { count -= 1; },
    value()     { return count; },
  };
}

const counter = makeCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value());`,
    question: "What does <code>counter.value()</code> return?",
    options: ["0", "10", "11", "12"],
    answer: 2,
    explanation:
      "The counter starts at 10. Two increments bring it to 12, then one decrement brings it back to 11. Closures allow the inner functions to share and mutate the same <code>count</code> variable.",
  },
  {
    id: 6,
    title: "Read the data structure",
    language: "python",
    code: `data = {
    "users": [
        {"name": "Alice", "scores": [90, 85, 92]},
        {"name": "Bob",   "scores": [78, 88, 82]},
    ]
}

total = sum(data["users"][1]["scores"])
print(total)`,
    question: "What does this code print?",
    options: ["267", "248", "254", "176"],
    answer: 1,
    explanation:
      "<code>data[\"users\"][1]</code> accesses Bob's entry. <code>[\"scores\"]</code> gives [78, 88, 82]. <code>sum([78, 88, 82])</code> = 248.",
  },
  {
    id: 7,
    title: "Predict the output",
    language: "javascript",
    code: `const obj = { x: 1, y: 2, z: 3 };

const { x, ...rest } = obj;

console.log(x);
console.log(rest);`,
    question: "What does <code>console.log(rest)</code> print?",
    options: [
      "<code>{ x: 1, y: 2, z: 3 }</code>",
      "<code>{ y: 2, z: 3 }</code>",
      "<code>[2, 3]</code>",
      "<code>undefined</code>",
    ],
    answer: 1,
    explanation:
      "Object rest/spread syntax (<code>...rest</code>) collects all remaining own enumerable properties after destructuring <code>x</code>. So <code>rest</code> becomes <code>{ y: 2, z: 3 }</code>.",
  },
  {
    id: 8,
    title: "Follow the control flow",
    language: "python",
    code: `def classify(n):
    if n < 0:
        return "negative"
    elif n == 0:
        return "zero"
    elif n % 2 == 0:
        return "positive even"
    else:
        return "positive odd"

results = [classify(x) for x in [-3, 0, 4, 7]]
print(results)`,
    question: "What list does this code print?",
    options: [
      "<code>['negative', 'zero', 'positive even', 'positive odd']</code>",
      "<code>['negative', 'zero', 'even', 'odd']</code>",
      "<code>[True, True, True, True]</code>",
      "<code>['negative', 'zero', 'positive', 'positive']</code>",
    ],
    answer: 0,
    explanation:
      "classify(-3) → 'negative', classify(0) → 'zero', classify(4) → 'positive even' (4 % 2 == 0), classify(7) → 'positive odd'.",
  },
];
