const randomGenerator = (num) => {
  return Math.floor(Math.random() * num);
};

const astrology = ["star", "moon", "jupiter", "mars", "sun"];
const lifeLesson = [
  "never fall down!",
  "never underestimate your opponent",
  "never look back",
  "always be on the watchout",
  "be gentle",
  "be vigilant",
];
const topic = [lifeLesson, astrology];

const quoteTopicSelector = randomGenerator(topic.length);

const quote = () => {
  if (quoteTopicSelector === 1) {
    return `Your ${
      topic[quoteTopicSelector][
        randomGenerator(topic[quoteTopicSelector].length)
      ]
    } is shining today`;
  } else {
    return `You ${
      topic[quoteTopicSelector][
        randomGenerator(topic[quoteTopicSelector].length)
      ]
    }`;
  }
};

console.log(quote());
