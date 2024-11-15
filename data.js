const quotes = [
  {
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    person: 'Ellen Ullman'
  },
  {
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    person: 'Anonymous'
  },
  {
    quote: `If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.`,
    person: 'Grace Hopper'
  },
  {
    quote: 'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!',
    person: 'C-3PO'
  },
  {
    quote: 'I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.',
    person: 'Bjarne Stroustrup'
  },
  {
    quote: 'Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.',
    person: 'Ada Lovelace'
  },
  {
    quote: 'Java is to JavaScript as ham is to hamster.',
    person: 'Jeremy Keith'
  },
  {
    quote: `The most dangerous phrase in the language is, "We've always done it this way."`,
    person: 'Grace Hopper'
  },
  {
    quote: 'As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
    person: 'Maurice Wilkes'
  },
  {
    quote: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.',
    person: 'Bill Gates'
  },
  {
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    person: 'Fred Brooks'
  },
  {
    quote: 'The Internet? Is that thing still around?',
    person: 'Homer Simpson'
  },
  {
    quote: 'If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.',
    person: 'Jon von Neumann'
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    person: 'John Johnson'
  },
  {
    quote: 'The function of good software is to make the complex appear to be simple.',
    person: 'Grady Booch'
  },
  {
    quote: 'Computer science is no more about computers than astronomy is about telescopes.',
    person: 'Edsger Dijkstra'
  },
  {
    quote: 'Walking on water and developing software from a specification are easy if both are frozen.',
    person: 'Edward V. Berard'
  },
  {
    quote: 'It always takes longer than you expect, even when you take into account Hofstadter’s Law.',
    person: 'Douglas Hofstadter'
  },
  {
    quote: 'The computer was born to solve problems that did not exist before.',
    person: 'Bill Gates'
  },
  {
    quote: 'There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. The other way is to make it so complicated that there are no obvious deficiencies.',
    person: 'C.A.R. Hoare'
  },
  {
    quote: 'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
    person: 'Seymour Cray'
  },
  {
    quote: 'Programming is like sex: one mistake and you have to support it for the rest of your life.',
    person: 'Michael Sinz'
  },
  {
    quote: 'Deleted code is debugged code.',
    person: 'Jeff Sickel'
  },
  {
    quote: 'The most disastrous thing that you can ever learn is your first programming language.',
    person: 'Alan Kay'
  },
  {
    quote: 'The best performance improvement is the transition from the nonworking state to the working state.',
    person: 'J. Osterhout'
  },
  {
    quote: 'The only way to learn a new programming language is by writing programs in it.',
    person: 'Dennis Ritchie'
  },
  {
    quote: 'The most important property of a program is whether it accomplishes the intention of its user.',
    person: 'C.A.R. Hoare'
  },
  {
    quote: 'Computers are good at following instructions, but not at reading your mind.',
    person: 'Donald Knuth'
  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    person: 'Martin Fowler'
  },
  {
    quote: 'Truth can only be found in one place: the code.',
    person: 'Robert C. Martin'
  },
  {
    quote: 'Code is like humor. When you have to explain it, it’s bad.',
    person: 'Cory House'
  },
  {
    quote: 'Fix the cause, not the symptom.',
    person: 'Steve Maguire'
  },
  {
    quote: 'Optimism is an occupational hazard of programming: feedback is the treatment.',
    person: 'Kent Beck'
  },
  {
    quote: 'When to use iterative development? You should use iterative development only on projects that you want to succeed.',
    person: 'Martin Fowler'
  },
  {
    quote: 'Simplicity is the soul of efficiency.',
    person: 'Austin Freeman'
  },
  {
    quote: 'Before software can be reusable it first has to be usable.',
    person: 'Ralph Johnson'
  },
  {
    quote: 'Make it work, make it right, make it fast.',
    person: 'Kent Beck'
  },
  {
    quote: 'Good code is its own best documentation.',
    person: 'Steve McConnell'
  },
  {
    quote: 'You can’t have great software without a great team, and most software teams behave like dysfunctional families.',
    person: 'Jim McCarthy'
  },
  {
    quote: 'The best way to get a project done faster is to start sooner.',
    person: 'Jim Highsmith'
  },
  {
    quote: 'You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.',
    person: 'John Romero'
  },
  {
    quote: 'The most important part of writing a program is designing the data structures.',
    person: 'Dan Bricklin'
  },
  {
    quote: 'Talk is cheap. Show me the code.',
    person: 'Linus Torvalds'
  },
  {
    quote: 'Programs must be written for people to read, and only incidentally for machines to execute.',
    person: 'Harold Abelson'
  },
  {
    quote: 'The sooner you start to code, the longer the program will take.',
    person: 'Roy Carlson'
  },
  {
    quote: 'Software and cathedrals are much the same – first we build them, then we pray.',
    person: 'Anonymous'
  },
  {
    quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    person: 'Rick Cook'
  },
  {
    quote: 'A good soldier never leaves a man behind.',
    person: 'Captain Price'
  },
  {
    quote: "There's a fine line between right and wrong. And somewhere, in the shadows, they send us in to find them.",
    person: 'Captain Price'
  },
  {
    quote: 'The rules of engagement are gone, but we are not savages.',
    person: 'Captain Price'
  },
  {
    quote: "It's time to send a message. There'll be no more stepping back.",
    person: 'Captain Price'
  },
  {
    quote: 'Keep your eyes on the prize, and never let go.',
    person: 'Captain Price'
  },
  {
    quote: 'We get dirty, and the world stays clean.',
    person: 'Captain Price'
  },
  {
    quote: "Remember: we don't want to kill all of them. Just enough to make sure they don't come back.",
    person: 'Captain Price'
  },
  {
    quote: 'One shot, one kill. No luck, just skill.',
    person: 'Captain Price'
  },
  {
    quote: 'You’re going to be all right, son. We got this.',
    person: 'Captain Price'
  },
  {
    quote: "You never know what's on the other side, mate. But you keep pushing forward.",
    person: 'Captain Price'
  },
  {
    quote: 'Bravo six, going dark.',
    person: 'Captain Price'
  },
  {
    quote: 'Ghosts never die.',
    person: 'Captain Price'
  },
  {
    quote: 'This is for the record. History is written by the victor. History is filled with liars.',
    person: 'Captain Price'
  },
  {
    quote: "Good men mean well. We just don't always end up doing well.",
    person: 'Captain Price'
  },
  {
    quote: 'War never ends. It only sleeps.',
    person: 'Captain Price'
  },
  {
    quote: 'We fight to end wars, not start them.',
    person: 'Captain Price'
  },
  {
    quote: 'We are the first, the last, and the only line of defense.',
    person: 'Captain Price'
  },
  {
    quote: 'Fear is not my fate. It’s my fuel.',
    person: 'Captain Price'
  },
  {
    quote: 'They are on their last legs. Now we finish them.',
    person: 'Captain Price'
  },
  {
    quote: 'The clock is ticking, so let’s cut to the chase.',
    person: 'Captain Price'
  },
  {
    quote: 'Don’t let the price tag on your head get too big.',
    person: 'Captain Price'
  },
  {
    quote: 'Time and pressure. We get in, we get out.',
    person: 'Captain Price'
  },
  {
    quote: 'We draw the line wherever we need to, and we hold it.',
    person: 'Captain Price'
  },
  {
    quote: 'Time waits for no one. Let’s do this.',
    person: 'Captain Price'
  },
  {
    quote: 'He who dares wins.',
    person: 'Captain Price'
  },
  {
    quote: 'The only easy day was yesterday.',
    person: 'Navy SEALs Motto'
  },
  {
    quote: 'Pain is temporary, pride is forever.',
    person: 'Unknown'
  },
  {
    quote: 'Adapt. Improvise. Overcome.',
    person: 'Clint Eastwood'
  },
  {
    quote: 'Fate whispers to the warrior, “You cannot withstand the storm.” The warrior whispers back, “I am the storm.”',
    person: 'Unknown'
  },
  {
    quote: 'Strength does not come from winning. Your struggles develop your strengths.',
    person: 'Arnold Schwarzenegger'
  },
  {
    quote: 'If you want to be a lion, you must train with lions.',
    person: 'Unknown'
  },
  {
    quote: 'Rise and rise again until lambs become lions.',
    person: 'Robin Hood'
  },
  {
    quote: 'Courage is being scared to death but saddling up anyway.',
    person: 'John Wayne'
  },
  {
    quote: 'It’s not whether you get knocked down, it’s whether you get up.',
    person: 'Vince Lombardi'
  },
  {
    quote: 'The only thing necessary for the triumph of evil is for good men to do nothing.',
    person: 'Edmund Burke'
  },
  {
    quote: 'Bravery is being the only one who knows you’re afraid.',
    person: 'David Hackworth'
  },
  {
    quote: 'Don’t quit. Suffer now and live the rest of your life as a champion.',
    person: 'Muhammad Ali'
  },
  {
    quote: 'The harder the conflict, the greater the triumph.',
    person: 'George Washington'
  },
  {
    quote: 'Life is either a daring adventure or nothing at all.',
    person: 'Helen Keller'
  }
];

module.exports = {
  quotes
};
