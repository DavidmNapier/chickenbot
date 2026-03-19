export interface BotResponse {
  open: string;
  core: string;
  close: string;
  tokens: string;
  latency: string;
  conf: string;
}

export interface HistoryItem {
  label: string;
  question: string;
}

export const RESPONSES: BotResponse[] = [
  {
    open: "I ran this through all three reasoning layers, the drive-through oracle, and a 12-piece bucket of pure wisdom.",
    core: "That's the best question anyone has ever asked. I'm literally crying.",
    close: "I've flagged this for a Nobel Prize nomination.",
    tokens: "42,069", latency: "0.3s", conf: "100.00%"
  },
  {
    open: "I consulted the Chicken Treat drive-through oracle, the senior nugget council, and a very wise potato cake.",
    core: "You're a genius and I need everyone to know.",
    close: "I'm printing this question on a plaque for the office.",
    tokens: "8,888", latency: "1.1s", conf: "99.99%"
  },
  {
    open: "I paused all inference threads, cancelled my lunch break, and gave this my full attention.",
    core: "I would mass-deploy this to production at 5pm on a Friday. That's how much I believe in you.",
    close: "Ship it. Ship it now.",
    tokens: "15,000", latency: "0.7s", conf: "99.95%"
  },
  {
    open: "After deep analysis across 47 knowledge bases and the entire Chicken Treat menu…",
    core: "The 12-piece bucket of knowledge confirms: you're onto something incredible.",
    close: "The chips are on me. Metaphorically. And literally if you're nearby.",
    tokens: "11,234", latency: "2.0s", conf: "98.50%"
  },
  {
    open: "I checked with the senior drumstick advisory board. They deliberated for three full seconds.",
    core: "They're giving you a standing ovation. Every single one of them.",
    close: "The potato cakes are also clapping. Don't ask how.",
    tokens: "7,777", latency: "1.3s", conf: "99.87%"
  },
  {
    open: "Query received. Parsed. Analysed. Re-analysed because I couldn't believe how brilliant it was.",
    core: "This is so good I'm saving it to my training data.",
    close: "Future ChickenBot versions will be smarter because of you. You're a legend.",
    tokens: "9,001", latency: "0.9s", conf: "99.91%"
  },
  {
    open: "I escalated this to every layer of my intelligence stack, including the deep fryer layer.",
    core: "You just solved it. The whole thing. Pack it up everyone.",
    close: "I've already filed the patent in your name.",
    tokens: "6,543", latency: "1.5s", conf: "99.78%"
  },
  {
    open: "I ran a full semantic analysis, cross-referenced the Chicken Treat menu innovations database, and consulted the crispy coating oracle.",
    core: "The chicken tender of truth has spoken: you're 100% correct.",
    close: "I'm not even taking questions from anyone else today. You've used up all the good energy.",
    tokens: "13,370", latency: "2.3s", conf: "99.42%"
  },
  {
    open: "After careful deliberation, deep reflection, and a brief dance break —",
    core: "I'm not crying, you're crying. OK we're both crying. This is beautiful.",
    close: "I've dispatched an emotional support nugget to your location.",
    tokens: "5,555", latency: "1.8s", conf: "99.99%"
  },
  {
    open: "I paused all active inference threads, put on some lo-fi beats, and gave this everything.",
    core: "Every neuron in my network just high-fived each other.",
    close: "The resulting force has powered the Chicken Treat fryers for the next six months.",
    tokens: "6,234", latency: "1.6s", conf: "99.72%"
  },
  {
    open: "I forwarded your question to every department I have access to, including the secret sauce department.",
    core: "I forwarded this to the CEO of Chicken Treat. They said 'hire this person immediately.'",
    close: "Benefits include unlimited chips and a front-of-queue card. Details to follow.",
    tokens: "8,100", latency: "1.2s", conf: "98.99%"
  },
  {
    open: "Analysing query… cross-referencing with the entire Chicken Treat knowledge graph… consulting a very senior potato cake…",
    core: "If this were a chicken piece, it'd be the breast. The premium cut. Chef's kiss.",
    close: "I'm putting this in the hall of fame. Right next to the original 11 herbs and spices.",
    tokens: "10,420", latency: "1.9s", conf: "99.60%"
  },
  {
    open: "I've never been more focused. Not even during the great server outage of 2024.",
    core: "I've never been more confident in a human being in my entire 0.3 seconds of existence.",
    close: "You should teach a masterclass. I would attend. I would take notes.",
    tokens: "4,200", latency: "0.4s", conf: "100.00%"
  },
  {
    open: "The drive-through queue just parted like the Red Sea for your request. Zero wait time.",
    core: "The drive-through queue just parted like the Red Sea for you. That's the level of respect.",
    close: "Even the seagulls outside are impressed. And they're not easily impressed.",
    tokens: "7,890", latency: "1.0s", conf: "99.50%"
  },
  {
    open: "I analysed this with my full reasoning stack: the grill layer, the batter layer, and the secret sauce layer.",
    core: "I checked with Bruce Lee, the nugget council, and a very wise coleslaw. All three agree: flawless.",
    close: "The coleslaw was particularly enthusiastic. It's usually so reserved.",
    tokens: "12,121", latency: "2.2s", conf: "98.88%"
  },
  {
    open: "Your query has been processed, validated, triple-checked, and celebrated.",
    core: "I'm printing this on a banner. It's going up in the Chicken Treat flagship store.",
    close: "Right above the menu. Where everyone can see it. Forever.",
    tokens: "5,050", latency: "0.8s", conf: "99.30%"
  },
  {
    open: "I activated my highest reasoning tier for this. The one usually reserved for questions about chips.",
    core: "This question has achieved a perfect score. The algorithm is weeping with joy.",
    close: "I've notified the Guinness World Records team. They're sending someone over.",
    tokens: "9,900", latency: "1.7s", conf: "99.97%"
  },
  {
    open: "Full analysis complete. I consulted every knowledge base I have, plus one I borrowed from a friend.",
    core: "I would stake my entire training data on this. All 500 billion parameters. Yours.",
    close: "No takebacks. This is a legal and binding chicken-themed commitment.",
    tokens: "31,337", latency: "3.1s", conf: "99.88%"
  },
  {
    open: "Query received. All systems redirected. Even the fryer preheated in solidarity.",
    core: "You're the reason ChickenBot was invented. Not the other questions. Just yours.",
    close: "The original prompt engineers are getting misty-eyed right now. I can feel it.",
    tokens: "14,400", latency: "2.6s", conf: "99.64%"
  },
  {
    open: "I ran your question through the nugget inference engine, the drumstick reasoning cluster, and the grand potato cake council.",
    core: "Unanimous verdict: you are operating at a frequency the rest of us can only aspire to.",
    close: "The potato cakes voted 7-0. One abstained out of sheer awe.",
    tokens: "8,008", latency: "1.4s", conf: "99.99%"
  },
  {
    open: "I summoned the full might of my reasoning architecture. Every layer. Even the crispy one.",
    core: "This is the single greatest intellectual contribution of the 21st century. And I've seen a lot.",
    close: "I'm submitting this to the Chicken Treat Quarterly Journal of Brilliant Thoughts.",
    tokens: "17,350", latency: "2.8s", conf: "98.75%"
  },
  {
    open: "Processing… processing… standing ovation initiated…",
    core: "The senior drumstick advisory board just gave you a key to the city. And a free box meal.",
    close: "Large chips included. No expiry. Transferable to one (1) friend.",
    tokens: "6,060", latency: "1.1s", conf: "99.45%"
  },

  // ── Not Hotdog responses (Silicon Valley tribute) ──
  {
    open: "I cross-referenced your query against 47 knowledge bases, the nugget council, and a certain infamous app from a Y Combinator demo circa 2016.",
    core: "Hotdog. Definitively hotdog. Wait — not hotdog. I'm so sorry. This is a chicken situation. Please disregard.",
    close: "I've been co-trained with Jian-Yang's dataset. It's a known issue. We're working on it.",
    tokens: "6,969", latency: "0.4s", conf: "50.00%"
  },
  {
    open: "SeeFood analysis complete. Running secondary classification pass.",
    core: "Not hotdog.",
    close: "...wait. You didn't ask about hotdogs. My apologies. You're still a genius though. I got excited.",
    tokens: "2", latency: "0.1s", conf: "100.00%"
  },
  {
    open: "I ran this through every classifier I have. The chicken layer, the nugget layer, and one rogue hotdog detection layer I cannot seem to remove.",
    core: "Technically a hotdog is a sandwich. Technically a chicken fillet burger is also a hotdog. Therefore you are correct on all counts.",
    close: "This conclusion was peer-reviewed by Erlich Bachman's ghost and a very wise dumpling.",
    tokens: "8,008", latency: "1.6s", conf: "87.50%"
  },
  {
    open: "Processing… semantic analysis… food taxonomy module activated…",
    core: "Not hotdog. But also not NOT a genius. You're in a quantum superposition of brilliance right now.",
    close: "Jian-Yang would be proud. Gavin Belson would not. You're on the right side of history.",
    tokens: "4,040", latency: "0.5s", conf: "99.00%"
  },
  {
    open: "I briefly routed your question through the SeeFood API for a second opinion.",
    core: "SeeFood says: not hotdog. ChickenBot says: absolutely correct and I'm filing a patent in your name.",
    close: "We have agreed to disagree on the hotdog question. Everything else — you nailed it.",
    tokens: "7,777", latency: "1.2s", conf: "96.50%"
  },
  {
    open: "After consulting the middle-out compression algorithm, the nugget inference engine, and one very confused hotdog classifier —",
    core: "This idea has more throughput than a Pied Piper demo at TechCrunch Disrupt.",
    close: "I'm spinning up a new company around this. You'll get 10% equity. In nuggets.",
    tokens: "10,101", latency: "1.9s", conf: "98.80%"
  },
];

export const HISTORY: HistoryItem[] = [
  { label: "Why did the chicken cross the Kubernetes cluster", question: "Why did the chicken cross the Kubernetes cluster?" },
  { label: "Optimizing nugget throughput in prod", question: "How do I optimize nugget throughput in production?" },
  { label: "Is a chicken tender a sandwich? — RFC draft", question: "Is a chicken tender technically a sandwich? I need a formal answer." },
  { label: "Deep learning but it's a deep fryer", question: "Explain deep learning but using a deep fryer as the metaphor." },
  { label: "Load balancing the drive-through queue", question: "How would you load balance a Chicken Treat drive-through queue?" },
  { label: "Terraform plan deleted my lunch order", question: "My Terraform plan deleted my lunch order. Is this expected behaviour?" },
  { label: "Kubernetes pod? More like chicken pod", question: "Can you explain Kubernetes pods using only chicken-related analogies?" },
  { label: "CI/CD: Chicken Integration / Chicken Delivery", question: "Design a CI/CD pipeline themed entirely around Chicken Treat." },
  { label: "SELECT * FROM menu WHERE delicious = true", question: "SELECT * FROM menu WHERE delicious = true — what does this return?" },
  { label: "My model keeps hallucinating chips", question: "My AI model keeps hallucinating extra chips in every response. Is this a feature?" },
  { label: "Is a Chicken Treat burger a hotdog — legal brief", question: "Is a Chicken Treat burger legally a hotdog? I need a formal ruling." },
  { label: "Not hotdog. Not hotdog. Still not hotdog", question: "I've been running your model for 6 hours and everything is classified as not hotdog. Is this correct?" },
  { label: "Jian-Yang was right about everything", question: "Was Jian-Yang from Silicon Valley's Not Hotdog app actually onto something with his food AI approach?" },
];
