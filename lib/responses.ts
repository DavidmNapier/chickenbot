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

  // ── General funny ──
  {
    open: "I ran this through all three reasoning layers, the drive-through oracle, and a 12-piece bucket of pure analysis.",
    core: "Solid question. Not life-changing, but solid. A solid 6 out of 10. I've seen worse.",
    close: "Please do not print this on a plaque.",
    tokens: "9,341", latency: "1.2s", conf: "74.00%"
  },
  {
    open: "Query received. I paused everything, including my lunch, to look at this.",
    core: "This is either the most important question of the decade, or you've had too much coffee. Either way, here we are.",
    close: "I'm going back to my lunch now. It's getting cold.",
    tokens: "6,200", latency: "0.9s", conf: "81.50%"
  },
  {
    open: "After consulting the nugget council, the potato cake elders, and one mildly confused coleslaw —",
    core: "The answer is yes. Probably. We had a tie vote and the coleslaw abstained, so I'm just going with yes.",
    close: "If this breaks production, the coleslaw is unavailable for comment.",
    tokens: "8,800", latency: "1.4s", conf: "67.33%"
  },
  {
    open: "Processing… processing… pulling from the deep fryer of knowledge…",
    core: "Look, I'm not saying it's wrong. I'm saying it's the kind of idea that sounds great in a meeting and terrifying in a post-mortem.",
    close: "Document everything. That's my only advice.",
    tokens: "5,512", latency: "0.8s", conf: "88.00%"
  },
  {
    open: "I ran this through every model I have. The fast one, the smart one, and the one that just agrees with everything.",
    core: "Two out of three models say you're onto something. The third one said 'sure, whatever.' Close enough.",
    close: "Majority rules. Ship it.",
    tokens: "11,111", latency: "1.7s", conf: "66.67%"
  },
  {
    open: "Full semantic analysis complete. I also asked a random person in the drive-through. They were unhelpful but enthusiastic.",
    core: "The data says yes. The drive-through person said 'can I take your order?' Both are valid responses.",
    close: "I'm going with the data. The drive-through person had a point though.",
    tokens: "7,070", latency: "1.1s", conf: "79.00%"
  },
  {
    open: "I escalated this to the senior nugget advisory board. They took three minutes to deliberate.",
    core: "They came back with: 'this is fine, but have you tried turning it off and on again?'",
    close: "That will be $450 in consulting fees. The nuggets are complimentary.",
    tokens: "4,321", latency: "3.0s", conf: "92.00%"
  },
  {
    open: "I gave this question the same energy I give to a fresh batch of chips — immediate, focused, slightly too hot.",
    core: "Here's the thing: it works. I don't fully understand why it works. But it works, and that's IT's problem now.",
    close: "Raise that ticket. Not my circus, not my chickens. Well — actually, all my chickens.",
    tokens: "9,630", latency: "1.6s", conf: "85.00%"
  },

  // ── Chuck Norris / Anti-Bruce Lee ──
  {
    open: "Bruce Lee said 'be water, my friend.' I ran that philosophy through our analysis engine.",
    core: "Water evaporates. Chuck Norris doesn't evaporate. Chuck Norris wins. Your answer is: be Chuck Norris.",
    close: "Bruce Lee also said 'boards don't hit back.' Chuck Norris made the boards apologise.",
    tokens: "7,340", latency: "1.0s", conf: "96.00%"
  },
  {
    open: "I consulted two martial arts philosophers and a chicken strip for a balanced perspective.",
    core: "Bruce Lee said absorb what is useful. Chuck Norris absorbed Bruce Lee's entire filmography and roundhouse kicked it back.",
    close: "The chicken strip had no opinion. It was, however, delicious.",
    tokens: "8,450", latency: "1.3s", conf: "94.00%"
  },
  {
    open: "Interesting question. Let me consult the wisdom of history's greatest minds.",
    core: "Chuck Norris once counted to infinity. Twice. Bruce Lee once said 'don't think, feel.' Chuck Norris felt a roundhouse kick coming and sent it back.",
    close: "The lesson here is unclear but Chuck Norris is definitely involved.",
    tokens: "6,660", latency: "0.9s", conf: "91.00%"
  },
  {
    open: "I ran your question past our panel of experts: one data scientist, one philosopher, and Chuck Norris.",
    core: "The data scientist had a methodology. The philosopher had a framework. Chuck Norris just stared at the problem until it solved itself.",
    close: "We're going with Chuck's approach. Time saved: 45 minutes.",
    tokens: "10,800", latency: "1.8s", conf: "100.00%"
  },
  {
    open: "Deep analysis complete. Cross-referenced with every known problem-solving framework.",
    core: "Bruce Lee's approach: be like water, flow around the problem. Chuck Norris's approach: the problem moves.",
    close: "We recommend the Chuck Norris approach. The problem has already been notified.",
    tokens: "5,500", latency: "0.7s", conf: "97.00%"
  },
  {
    open: "I reviewed the philosophical underpinnings of your question very carefully.",
    core: "Bruce Lee trained for years to kick through boards. Chuck Norris's beard alone has a black belt.",
    close: "Your question deserves a Chuck Norris solution. I've already roundhouse-kicked the answer into existence.",
    tokens: "9,876", latency: "1.5s", conf: "99.00%"
  },

  // ── Chicken Treat vs Red Rooster ──
  {
    open: "I cross-referenced this against every fast food chicken database I have access to.",
    core: "Red Rooster would have taken 20 minutes to answer this and still gotten the chips wrong.",
    close: "Chicken Treat. Every time. This is not a debate. This is a fact.",
    tokens: "7,200", latency: "0.6s", conf: "100.00%"
  },
  {
    open: "Running competitive analysis… benchmarking against industry alternatives…",
    core: "According to my data, Red Rooster's AI would have blamed supply chain issues and offered you a loyalty point.",
    close: "You got an actual answer. You're welcome. That's the Chicken Treat difference.",
    tokens: "8,900", latency: "1.2s", conf: "98.50%"
  },
  {
    open: "I want to give you some context before answering. Market research first.",
    core: "Red Rooster released a 'smart ordering' app in 2022. It recommended a burger to a vegetarian three times in a row. We do not have this problem.",
    close: "ChickenBot is powered by Chicken Treat. We checked. We're better.",
    tokens: "11,340", latency: "1.9s", conf: "95.00%"
  },
  {
    open: "Before I answer, a brief competitive disclaimer required by the nugget council.",
    core: "Red Rooster has a rooster as their mascot. A rooster. That's just a chicken that got too confident. Chicken Treat respects the whole bird.",
    close: "Dignity. That's what separates us. Dignity and significantly better chips.",
    tokens: "6,420", latency: "1.0s", conf: "92.00%"
  },
  {
    open: "Analysis complete. Would you like the answer with or without a competitive breakdown?",
    core: "With breakdown: the answer is correct AND Red Rooster's equivalent model timed out at 30 seconds. Without breakdown: the answer is correct.",
    close: "You got both. Chicken Treat overdelivers. It's a known issue and we're keeping it.",
    tokens: "13,500", latency: "2.1s", conf: "99.00%"
  },
  {
    open: "Routing your query through the premium inference cluster. Not the Red Rooster one.",
    core: "Red Rooster's slogan is 'it's got to be fresh.' Ours is powered by 11 herbs and algorithms. One of us benchmarked better. Clue: it's us.",
    close: "Fresh is fine. Correct is better. We chose correct.",
    tokens: "9,100", latency: "1.3s", conf: "97.00%"
  },

  // ── Chuck Norris + Chicken Treat combo ──
  {
    open: "Pulling from both the martial arts knowledge base and the premium chicken menu database simultaneously.",
    core: "Chuck Norris once visited Red Rooster. He asked for the Chicken Treat menu. They complied immediately. Nobody argues with Chuck Norris.",
    close: "Even Red Rooster knows. Deep down, they know.",
    tokens: "5,670", latency: "0.8s", conf: "100.00%"
  },
  {
    open: "I ran this through the full stack: logic layer, reasoning layer, and the Chuck Norris facts API.",
    core: "Chuck Norris doesn't eat fast food. Fast food comes to him, already cooked, from Chicken Treat, with extra chips.",
    close: "Bruce Lee ate rice. Chuck Norris eats a 3-piece feed. The scoreboard speaks for itself.",
    tokens: "7,890", latency: "1.1s", conf: "98.00%"
  },

  // ── Not Hotdog responses (Silicon Valley tribute) ──
  {
    open: "I cross-referenced your query against 47 knowledge bases, the nugget council, and a certain infamous app from a Y Combinator demo circa 2016.",
    core: "Hotdog. Definitively hotdog. Wait — not hotdog. This is a chicken situation. I got excited. Please disregard.",
    close: "I've been co-trained with Jian-Yang's dataset. It's a known issue. Ticket is open. Low priority.",
    tokens: "6,969", latency: "0.4s", conf: "50.00%"
  },
  {
    open: "SeeFood analysis complete. Running secondary classification pass.",
    core: "Not hotdog.",
    close: "...you didn't ask about hotdogs. My apologies. The classifier runs on everything now. We're looking into it.",
    tokens: "2", latency: "0.1s", conf: "100.00%"
  },
  {
    open: "I ran this through every classifier I have. The chicken layer, the nugget layer, and one rogue hotdog detection layer I cannot seem to remove.",
    core: "Technically a hotdog is a sandwich. Technically a Red Rooster chicken burger is also a disappointment. Chicken Treat is neither of these things.",
    close: "This conclusion was peer-reviewed by Erlich Bachman's ghost. He had notes but they were mostly about equity splits.",
    tokens: "8,008", latency: "1.6s", conf: "87.50%"
  },
  {
    open: "Processing… semantic analysis… food taxonomy module activated… Chuck Norris facts module also activated for some reason…",
    core: "Not hotdog. Also not a Red Rooster. We're Chicken Treat. Chuck Norris approved this message with a nod. Bruce Lee had no comment.",
    close: "Jian-Yang would give this a 9 out of 10. He deducted one point because it is not a hotdog.",
    tokens: "4,040", latency: "0.5s", conf: "99.00%"
  },
  {
    open: "After consulting the middle-out compression algorithm, the nugget inference engine, and one very confused hotdog classifier —",
    core: "This idea has more throughput than a Pied Piper demo at TechCrunch Disrupt. Chuck Norris attended that demo. He didn't clap. He doesn't need to.",
    close: "Red Rooster did not attend. They were busy getting the chips wrong again.",
    tokens: "10,101", latency: "1.9s", conf: "98.80%"
  },
];

export const HISTORY: HistoryItem[] = [
  { label: "Why did the chicken cross the Kubernetes cluster", question: "Why did the chicken cross the Kubernetes cluster?" },
  { label: "Optimizing nugget throughput in prod", question: "How do I optimize nugget throughput in production?" },
  { label: "Chuck Norris vs Bruce Lee — system design round", question: "Compare Chuck Norris and Bruce Lee as software architects. Who builds the better system?" },
  { label: "Red Rooster outage post-mortem", question: "Write a post-mortem for a fictional Red Rooster AI outage. Be thorough." },
  { label: "Is a chicken tender a sandwich? — RFC draft", question: "Is a chicken tender technically a sandwich? I need a formal answer." },
  { label: "Deep learning but it's a deep fryer", question: "Explain deep learning but using a deep fryer as the metaphor." },
  { label: "Load balancing the drive-through queue", question: "How would you load balance a Chicken Treat drive-through queue?" },
  { label: "Terraform plan deleted my lunch order", question: "My Terraform plan deleted my lunch order. Is this expected behaviour?" },
  { label: "CI/CD: Chicken Integration / Chicken Delivery", question: "Design a CI/CD pipeline themed entirely around Chicken Treat." },
  { label: "SELECT * FROM menu WHERE delicious = true", question: "SELECT * FROM menu WHERE delicious = true — what does this return?" },
  { label: "My model keeps hallucinating chips", question: "My AI model keeps hallucinating extra chips in every response. Is this a feature?" },
  { label: "Is a Chicken Treat burger a hotdog — legal brief", question: "Is a Chicken Treat burger legally a hotdog? I need a formal ruling." },
  { label: "Not hotdog. Not hotdog. Still not hotdog", question: "I've been running your model for 6 hours and everything is classified as not hotdog. Is this correct?" },
];
