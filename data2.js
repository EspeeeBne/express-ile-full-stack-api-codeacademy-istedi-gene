const bios = [
    {
      id: 1, name: "Alan Turing", bio: "English mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist. Widely considered to be the father of theoretical computer science and artificial intelligence."
    },
    {
      id: 2, name: "Ada Lovelace", bio: "English mathematician and writer, known for her work on Charles Babbage's early mechanical general-purpose computer, the Analytical Engine."
    },
    {
      id: 3, name: "Grace Hopper", bio: "American computer scientist and United States Navy rear admiral. Pioneer of computer programming and inventor of one of the first compiler-related tools."
    },
    {
      id: 4, name: "John von Neumann", bio: "Hungarian-American mathematician, physicist, computer scientist, engineer, and polymath. Made major contributions to many fields, including the development of game theory and the digital computer."
    },
    {
      id: 5, name: "Katherine Johnson", bio: "American mathematician whose calculations of orbital mechanics were critical to the success of the first U.S. crewed spaceflights."
    },
    {
      id: 6, name: "Tim Berners-Lee", bio: "British computer scientist best known as the inventor of the World Wide Web."
    },
    {
      id: 7, name: "Steve Wozniak", bio: "American electronics engineer, programmer, philanthropist, and technology entrepreneur. Co-founder of Apple Inc. with Steve Jobs and Ronald Wayne."
    },
    {
      id: 8, name: "Margaret Hamilton", bio: "American computer scientist, systems engineer, and business owner. Director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for NASA's Apollo space program."
    },
    {
      id: 9, name: "Dennis Ritchie", bio: "American computer scientist who created the C programming language and, with long-time colleague Ken Thompson, the Unix operating system."
    },
    {
      id: 10, name: "Linus Torvalds", bio: "Finnish-American software engineer who is the creator and principal developer of the Linux kernel."
    },
    {
      id: 11, name: "Vint Cerf", bio: "American computer scientist, who is recognized as one of \"the fathers of the Internet,\" sharing this title with TCP/IP co-developer Bob Kahn."
    },
    {
      id: 12, name: "James Gosling", bio: "Canadian computer scientist, best known as the founder and lead designer behind the Java programming language."
    },
    {
      id: 13, name: "Donald Knuth", bio: "American computer scientist, mathematician, and professor emeritus at Stanford University. Author of \"The Art of Computer Programming\" and creator of the TeX typesetting system."
    },
    {
      id: 14, name: "Larry Page", bio: "American computer scientist and Internet entrepreneur who co-founded Google with Sergey Brin."
    },
    {
      id: 15, name: "Sergey Brin", bio: "American computer scientist and Internet entrepreneur who co-founded Google with Larry Page."
    },
    {
      id: 16, name: "Mark Zuckerberg", bio: "American media magnate, internet entrepreneur, and philanthropist. Co-founder of Facebook, Inc."
    },
    {
      id: 17, name: "Bill Gates", bio: "American business magnate, software developer, investor, author, and philanthropist. Co-founder of Microsoft Corporation."
    },
    {
      id: 18, name: "Elon Musk", bio: "Business magnate, industrial designer, and engineer. Founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company."
    },
    {
      id: 19, name: "Jeff Bezos", bio: "American business magnate, media proprietor, and investor. Founder and executive chairman of Amazon."
    },
    {
      id: 20, name: "Sheryl Sandberg", bio: "American business executive, billionaire, and philanthropist. Chief Operating Officer (COO) of Facebook and founder of LeanIn.Org."
    },
    {
      id: 21, name: "Ginni Rometty", bio: "American business executive, former chairman, president, and CEO of IBM. First woman to head the company."
    },
    {
      id: 22, name: "Satya Nadella", bio: "Indian-American business executive. Chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014."
    },
    {
      id: 23, name: "Sundar Pichai", bio: "Indian-American business executive. CEO of Alphabet Inc. and its subsidiary Google LLC."
    },
    {
      id: 24, name: "Marissa Mayer", bio: "American businesswoman and investor. Served as the president and chief executive officer of Yahoo! from July 2012 to June 2017."
    },
    {
      id: 25, name: "Whitney Wolfe Herd", bio: "American entrepreneur. Founder and CEO of Bumble, a social and dating app, and a co-founder of the dating app Tinder."
    },
    {
      id: 26, name: "Susan Wojcicki", bio: "American business executive who was the CEO of YouTube from February 2014 to February 2023."
    },
    {
      id: 27, name: "Melinda Gates", bio: "American philanthropist and former general manager at Microsoft. Co-founder of the Bill & Melinda Gates Foundation."
    },
    {
      id: 28, name: "Hedy Lamarr", bio: "Austrian-American actress and inventor who co-invented an early version of frequency-hopping spread spectrum."
    },
    {
      id: 29, name: "Katherine Johnson", bio: "American mathematician whose calculations of orbital mechanics were critical to the success of the first U.S. crewed spaceflights."
    },
    {
      id: 30, name: "Radia Perlman", bio: "American computer programmer and network engineer. Known for her invention of the spanning-tree protocol (STP), which is fundamental to the operation of network bridges."
    },
    {
      id: 31, name: "Barbara Liskov", bio: "American computer scientist who led the design and implementation of the CLU programming language, a predecessor to object-oriented programming."
    },
    {
      id: 32, name: "Jean Sammet", bio: "American computer scientist who developed the FORMAC programming language and was one of the developers of COBOL."
    },
    {
      id: 33, name: "Frances E. Allen", bio: "American computer scientist known for her work in optimizing compilers and parallel computing. First woman to win the Turing Award."
    },
    {
      id: 34, name: "Charles Babbage", bio: "English polymath, mathematician, and inventor who is credited with conceiving the first mechanical computer, the Analytical Engine."
    },
    {
      id: 35, name: "Niklaus Wirth", bio: "Swiss computer scientist best known for designing the Pascal programming language and for his contributions to software engineering."
    },
    {
      id: 36, name: "Bjarne Stroustrup", bio: "Danish computer scientist known for creating and developing the C++ programming language."
    },
    {
      id: 37, name: "Richard Stallman", bio: "American free software movement activist, software freedom advocate, and programmer. Founder of the GNU Project."
    },
    {
      id: 38, name: "Ken Thompson", bio: "American computer scientist, co-creator of the Unix operating system, and the B programming language, a predecessor of C."
    },
    {
      id: 39, name: "John McCarthy", bio: "American computer scientist and cognitive scientist. One of the founders of the field of artificial intelligence, and creator of the LISP programming language."
    },
    {
      id: 40, name: "Seymour Cray", bio: "American electrical engineer and supercomputer architect. Known as the father of supercomputing."
    },
    {
      id: 41, name: "Douglas Engelbart", bio: "American engineer and inventor, known for inventing the computer mouse and developing early forms of hypertext, networked computers, and graphical user interfaces."
    },
    {
      id: 42, name: "Anita Borg", bio: "American computer scientist who founded the Institute for Women and Technology and the Grace Hopper Celebration of Women in Computing."
    },
    {
      id: 43, name: "Joan Clarke", bio: "English cryptanalyst and mathematician who worked with Alan Turing at Bletchley Park to break German ciphers during World War II."
    },
    {
      id: 44, name: "Elizabeth Feinler", bio: "American information scientist who ran the Network Information Center for the ARPANET, the precursor to the modern Internet."
    },
    {
      id: 45, name: "Leonard Kleinrock", bio: "American computer scientist known for his early work in packet-switching theory, which became the foundation for the development of the Internet."
    },
    {
      id: 46, name: "Rasmus Lerdorf", bio: "Danish-Canadian programmer who created the PHP scripting language."
    },
    {
      id: 47, name: "Guido van Rossum", bio: "Dutch programmer and the creator of the Python programming language."
    },
    {
      id: 48, name: "Larry Wall", bio: "American programmer and author, best known as the creator of the Perl programming language."
    },
    {
      id: 49, name: "Yukihiro Matsumoto", bio: "Japanese computer scientist and software programmer best known as the chief designer of the Ruby programming language."
    },
    {
      id: 50, name: "Anders Hejlsberg", bio: "Danish software engineer, creator of Turbo Pascal, and key contributor to the development of C# and TypeScript at Microsoft."
    }
  ];

  module.exports = {
    bios
  };
