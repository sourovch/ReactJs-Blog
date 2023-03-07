import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

// blogs
export const blogs = [
  {
    id: 1,
    author: 'ChatGpt',
    createdAt: '02-02-2023',
    slug: '01',
    title: "The Basics of Programming: A Beginner's Guide",
    discription: `"The Basics of Programming: A Beginner's Guide" is an article designed to help those who are new to programming learn the basics of coding. The article covers topics such as the benefits of learning to code, the different programming languages available, and the tools needed to get started. It also includes step-by-step instructions on how to write a simple program, including explanations of key concepts such as variables, loops, and functions. With clear and concise language, this article provides a solid foundation for anyone looking to take their first steps in the world of programming.`,
    markdown: `
# Let's Get Started With Programming

Programming is a skill that is becoming increasingly important in today's world. With the rise of technology and the increasing use of computers, knowing how to code can give you a competitive edge in the job market and open up new opportunities for you. In this blog post, we will cover some of the basics of programming.

![Programming Image](https://cdn.pixabay.com/photo/2015/05/31/10/51/coding-791029_960_720.jpg)

## What is Programming?

At its core, programming is the process of creating instructions that a computer can understand and execute. These instructions are written in a programming language, which is a set of instructions that the computer can interpret.

> "Programming is the process of creating instructions that a computer can understand and execute." - ChatGPT

## Basic Programming Concepts

### Variables

Variables are used to store data in a program. They are like containers that hold information that can be used later in the program. For example, you might use a variable to store a person's age or their name.

> "A variable is a container for a value, which can be of various types." - W3Schools

### Functions

Functions are blocks of code that perform a specific task. They are like mini-programs that can be called from other parts of the program. Functions can take input, perform some action, and return output.

> "A function is a block of code designed to perform a particular task." - MDN Web Docs

### Conditional Statements

Conditional statements are used to make decisions in a program. They allow the program to take different actions based on certain conditions. For example, you might use a conditional statement to check if a number is greater than another number, and then take a different action depending on the result.

> "Conditional statements are used to perform different actions based on different conditions." - GeeksforGeeks

## Programming Tools

To write and execute programs, you need a few basic tools. These include:

- A code editor: This is a program that allows you to write and edit code.
- A compiler or interpreter: This is a program that translates your code into machine-readable instructions that the computer can understand.
- A debugger: This is a tool that helps you find and fix errors in your code.

![Programming Tools Image](https://cdn.pixabay.com/photo/2017/01/31/18/25/laptop-2024497_960_720.jpg)

## Conclusion

Programming can seem daunting at first, but it's really just a matter of learning a few basic concepts and tools. With practice and persistence, you can become proficient in programming and open up new opportunities for yourself. Remember to start small, take breaks when you need them, and never be afraid to ask for help when you get stuck.


## Tips for Getting Started

### Start Small

When you're just starting out, it's important to start small. Pick a simple project, like building a basic calculator or creating a simple website, and work your way up from there.

### Practice, Practice, Practice

Like any skill, programming takes practice. Try to spend at least an hour a day working on programming projects to build your skills.

![Practice coding](${process.env.PUBLIC_URL}/resorces/img/b1_practice_img.jpg)

### Find a Community

Programming can be challenging, but it can also be fun and rewarding. Joining a programming community, like a coding bootcamp or an online forum, can help you stay motivated and get feedback on your work.

![Programming community](${process.env.PUBLIC_URL}/resorces/img/b1_programing_community.png)

## Conclusion

Programming can seem intimidating at first, but with some patience and dedication, anyone can learn to code. By understanding key programming concepts and tools, and following some basic tips, you can start building your own software applications and websites in no time!

`,
    catagory: 'programing',
    comments: [
      {
        comment: 'This is very well written and informetive post.',
        author: 'sourov ch',
        commentedAt: '03-02-2023',
        likes: new Array(3),
        replies: [
          {
            author: 'cooper',
            repliedAt: '03-02-2023',
            reply: 'I totally agree with you.',
            likes: new Array(7),
          },
        ],
      },
    ],
    likes: new Array(16),
    videoId: 'zOjov-2OZ0E',
  },
];

export const authors = [
  {
    name: 'ChatGpt',
    avatar: `${process.env.PUBLIC_URL}/resorces/img/avatars/profile-picture2_2x.webp`,
    discription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, eum.',
  },
];

// dummy top posts
export const topPosts = [
  {
    slug: '01',
    banner: `${process.env.PUBLIC_URL}/resorces/img/b1_b.webp`,
    title: 'Leveling up CSS',
    createdAt: '01 Feb 2023',
    catagory: 'css',
  },
  {
    slug: '01',
    banner: `${process.env.PUBLIC_URL}/resorces/img/b2_b.webp`,
    title: 'Evolving the Google Identity',
    createdAt: '01 Feb 2023',
    catagory: 'Graphic',
  },
  {
    slug: '01',
    banner: `${process.env.PUBLIC_URL}/resorces/img/b3_b.webp`,
    title: 'Angular 2 versus React: There Will Be Blood',
    createdAt: '02 Feb 2023',
    catagory: 'Javascript',
  },
  {
    slug: '01',
    banner: `${process.env.PUBLIC_URL}/resorces/img/b4_b.webp`,
    title: 'The end of global CSS',
    createdAt: '02 Feb 2023',
    catagory: 'HTML',
  },
  {
    slug: '01',
    banner: `${process.env.PUBLIC_URL}/resorces/img/b5_b.webp`,
    title: 'Building an CSS Framework',
    createdAt: '02 Feb 2023',
    catagory: 'CSS',
  },
];

// dummy All posts
export const allPosts = [
  {
    slug: '01',
    title:
      '10 Interview Questions Every JavaScript Developer Should Know ',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '12 Hours Ago',
    likes: new Array(221),
    comment: new Array(7),
    catagory: 'javascript',
  },
  {
    slug: '01',
    title: 'State of the Art JavaScript in 2022 ',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(245),
    comment: new Array(7),
    catagory: 'css',
  },
  {
    slug: '01',
    title: 'Want to learn JavaScript in 2022?',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '12 Hours Ago',
    likes: new Array(190),
    comment: new Array(7),
    catagory: 'javascript',
  },
  {
    slug: '01',
    title: 'Want to learn JavaScript in 2022?',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '12 Hours Ago',
    likes: new Array(221),
    comment: new Array(7),
    catagory: 'javascript',
  },
  {
    slug: '01',
    title: 'State of the Art JavaScript in 2022 ',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(245),
    comment: new Array(7),
    catagory: 'css',
  },
  {
    slug: '01',
    title: 'State of the Art JavaScript in 2022 ',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(245),
    comment: new Array(7),
    catagory: 'css',
  },
  {
    slug: '01',
    title: 'Is HTML is Heard?',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(233),
    comment: new Array(7),
    catagory: 'html',
  },
  {
    slug: '01',
    title: 'Is HTML is Heard?',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(233),
    comment: new Array(7),
    catagory: 'html',
  },
  {
    slug: '01',
    title: 'Is HTML is Heard?',
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(233),
    comment: new Array(7),
    catagory: 'html',
  },
  {
    slug: '01',
    title: "Les's learn ReactJs an amezing JS library",
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(233),
    comment: new Array(7),
    catagory: 'reactjs',
  },
  {
    slug: '01',
    title: "Les's learn ReactJs an amezing JS library",
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(233),
    comment: new Array(7),
    catagory: 'reactjs',
  },
  {
    slug: '01',
    title: "Les's learn ReactJs an amezing JS library",
    discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestia.`,
    createdAt: '16 Dec 2022',
    likes: new Array(233),
    comment: new Array(7),
    catagory: 'reactjs',
  },
];

// catagory
export const catagorys = [
  {
    name: 'CSS',
    slug: '/catagory/CSS',
  },
  {
    name: 'HTML',
    slug: '/catagory/HTML',
  },
  {
    name: 'Javascript',
    slug: '/catagory/Javascript',
  },
  {
    name: 'ReactJS',
    slug: '/catagory/ReactJS',
  },
];

export const lastProject = {
  title: 'ReactJs Blog',
  discription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
  numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
  optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
  obcaecati tenetur iure eius earum ut molestia`,
  link: '/post/01',
};

export const responces = [
  {
    sederName: 'Jobby Foster',
    responce: 'Want to learn Javascript',
    discription: 'Love this guy and his dog, really nice work!',
    avatar: `${process.env.PUBLIC_URL}/resorces/img/avatars/profile-picture2_2x.webp`,
  },
  {
    sederName: 'Sheryl Winarick',
    responce: 'Want to learn Javascript',
    discription: 'Love the way you did the background image man.',
    avatar: `${process.env.PUBLIC_URL}/resorces/img/avatars/profile-picture3_2x.webp`,
  },
  {
    sederName: 'Jobby Foster',
    responce: 'Want to learn Javascript',
    discription:
      'Really nice style. I need to take note for drawing people!',
    avatar: `${process.env.PUBLIC_URL}/resorces/img/avatars/profile-picture4_2x.webp`,
  },
];

export const tweets = [
  {
    userName: '@microsoft',
    time: '3 days ago',
    tweet: `She's climbing #50Peaks in 50 states in 50 days. Meet http://msft.it/Melissa`,
    logo: <FontAwesomeIcon icon={faTwitter} size={'2x'} />,
  },
  {
    userName: '@microsoft',
    time: '3 days ago',
    tweet: `She's climbing #50Peaks in 50 states in 50 days. Meet http://msft.it/Melissa`,
    logo: <FontAwesomeIcon icon={faTwitter} size={'2x'} />,
  },
  {
    userName: '@microsoft',
    time: '3 days ago',
    tweet: `She's climbing #50Peaks in 50 states in 50 days. Meet http://msft.it/Melissa`,
    logo: <FontAwesomeIcon icon={faTwitter} size={'2x'} />,
  },
];

export const ownerInfo = {
  name: 'Sourov Chowdhury',
  work: 'Front-end developer',
  discription: `Hi, I'm Sourov. I have been doing Web Development for the past 2 years. I have expertise working with Web releted tecs like HTML, CSS, JS and ReactJs. I also create backend services using technologies like NodeJs and ExpressJs. With regard to the future, I have high ambitions. I am very passionate about my work, I do it because I like my work.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloremque iste tempore quasi illo nobis quo accusantium ea velit cupiditate nisi sint, beatae perspiciatis veritatis enim officiis aliquid dolore iusto! Ipsum consectetur cumque quis unde ex eligendi, amet magni minus illo quam, eaque iste at! Pariatur cumque dolorem inventore libero?`,
  img_src: `${process.env.PUBLIC_URL}/resorces/img/avatars/sourov_avatar.jpg`,
  cv: `${process.env.PUBLIC_URL}/resorces/files/sourov cv.pdf`,
  socialLinks: [
    {
      platform: 'Twitter',
      logo: <FontAwesomeIcon icon={faTwitter} />,
      link: 'https://twitter.com/sourovch',
    },
    {
      platform: 'Github',
      logo: <FontAwesomeIcon icon={faGithub} />,
      link: 'https://github.com/sourovch',
    },
    {
      platform: 'Linkdin',
      logo: <FontAwesomeIcon icon={faLinkedin} />,
      link: 'https://www.linkedin.com/sourov-ch',
    },
  ],
};
