const quotes = [
  { id: 1, quote: "Make it so.", character: "Captain Jean-Luc Picard" },
  { id: 2, quote: "Engage!", character: "Captain Jean-Luc Picard" },
  {
    id: 3,
    quote: "Tea, Earl Grey, hot.",
    character: "Captain Jean-Luc Picard",
  },
  { id: 4, quote: "Resistance is futile.", character: "The Borg" },
  {
    id: 5,
    quote: "There are four lights!",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 6,
    quote: "I am Locutus of Borg.",
    character: "Captain Jean-Luc Picard",
  },
  { id: 7, quote: "Shut up, Wesley!", character: "Captain Jean-Luc Picard" },
  {
    id: 8,
    quote: "The first duty of every Starfleet officer is to the truth.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 9,
    quote:
      "It is possible to commit no mistakes and still lose. That is not a weakness; that is life.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 10,
    quote: "A lie is a very poor way to say hello.",
    character: "Deanna Troi",
  },
  {
    id: 11,
    quote: "I never knew what a friend was until I met Geordi.",
    character: "Data",
  },
  { id: 12, quote: "Worf, eat any good books lately?", character: "Q" },
  {
    id: 13,
    quote: "Time is a companion who goes with us on the journey.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 14,
    quote: "Things are only impossible until they're not.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 15,
    quote:
      "Believing oneself to be perfect is often the sign of a delusional mind.",
    character: "Data",
  },
  {
    id: 16,
    quote: "Lifeforms... You tiny little lifeforms...",
    character: "Data",
  },
  {
    id: 17,
    quote: "Data, you are a hell of an officer.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 18,
    quote: "A little rebellion now and then is a healthy thing.",
    character: "Riker",
  },
  {
    id: 19,
    quote: "Fear is the true enemy. The only enemy.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 20,
    quote: "Let’s make sure history never forgets the name Enterprise.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 21,
    quote: "Logic is the beginning of wisdom, not the end.",
    character: "Captain Jean-Luc Picard",
  },
  { id: 22, quote: "Good tea. Nice house.", character: "Worf" },
  { id: 23, quote: "I am not a merry man!", character: "Worf" },
  {
    id: 24,
    quote: "A warrior does not let a friend face danger alone.",
    character: "Worf",
  },
  {
    id: 25,
    quote: "Fate protects fools, little children, and ships named Enterprise.",
    character: "Riker",
  },
  {
    id: 26,
    quote: "You're just a damn computer!",
    character: "Dr. Beverly Crusher",
  },
  {
    id: 27,
    quote:
      "Every once in a while, declare peace. It confuses the hell out of your enemies.",
    character: "Ferengi Rule of Acquisition",
  },
  {
    id: 28,
    quote: "The line must be drawn here! This far, no further!",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 29,
    quote:
      "I will not sacrifice the Enterprise. We've made too many compromises already.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 30,
    quote:
      "And when I have plucked the rose, I cannot give it vital growth again. It needs must wither.",
    character: "Data",
  },
  {
    id: 31,
    quote: "Smooth as an android's bottom, eh Data?",
    character: "Riker",
  },
  { id: 32, quote: "It is a good day to die!", character: "Worf" },
  {
    id: 33,
    quote:
      "Live now; make now always the most precious time. Now will never come again.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 34,
    quote: "Klingons do not procrastinate. It is a... tactical delay.",
    character: "Worf",
  },
  {
    id: 35,
    quote:
      "You will never look at your hairline in the mirror again without wondering.",
    character: "Q",
  },
  { id: 36, quote: "We are Starfleet.", character: "Captain Jean-Luc Picard" },
  {
    id: 37,
    quote:
      "I would be delighted to offer any advice I can on understanding women. When I have some, I’ll let you know.",
    character: "Data",
  },
  {
    id: 38,
    quote: "There’s no greater challenge than the study of philosophy.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 39,
    quote:
      "You don’t know what it means to be human! To live! To laugh! To cry!",
    character: "Riker",
  },
  {
    id: 40,
    quote: "The bureaucratic mentality is the only constant in the universe.",
    character: "Dr. Leonard McCoy",
  },
  {
    id: 41,
    quote: "We are more alike than unlike, my dear Captain.",
    character: "Spock",
  },
  {
    id: 42,
    quote: "Mister Worf, do you intend to blast a hole in the viewer?",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 43,
    quote: "Cowards take hostages. Klingons do not.",
    character: "Worf",
  },
  {
    id: 44,
    quote:
      "There is a way out of every box, a solution to every puzzle; it’s just a matter of finding it.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 45,
    quote: "What we leave behind is not as important as how we have lived.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 46,
    quote: "You’re right. I do lie. I also sharpen my teeth.",
    character: "Q",
  },
  {
    id: 47,
    quote: "Q, if I had the power of the Q, I would kick your ass.",
    character: "Worf",
  },
  {
    id: 48,
    quote:
      "You cannot explain away a wantonly immoral act because you think that it is connected to some higher purpose.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 49,
    quote: "Data, you’re a machine. You’re not capable of evil.",
    character: "Captain Jean-Luc Picard",
  },
  {
    id: 50,
    quote: "I am fully functional and programmed in multiple techniques.",
    character: "Data",
  },
];

export default quotes;
