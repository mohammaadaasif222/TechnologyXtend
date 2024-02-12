export const courseData = [
  {
    name: "Introduction to React Native",
    instructor: "John Doe",
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/mae-com-in/image/upload/v1701446932/courses/reactnative_jtnnhf.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },
  {
    name: "Advanced React Techniques",
    instructor: "Jane Smith",
    description:
      "Explore advanced concepts in React and implement complex applications.",
    enrollmentStatus: "Closed",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701447572/courses/9d0a6780-394a-11eb-9fd1-6296a684b124_1_-removebg-preview_dbxsqd.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate React knowledge",
      "Experience with state management",
    ],
    syllabus: [
      {
        week: 1,
        topic: "State Management with Redux",
        content: "Understanding Redux and implementing state management.",
      },
      {
        week: 2,
        topic: "Server-Side Rendering",
        content: "Implementing server-side rendering with React.",
      },
    ],
    students: [
      {
        id: 103,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
    ],
  },
  {
    name: "Advanced Data Structures",
    instructor: "Dr. Emily Brown",
    description:
      "Explore complex data structures and algorithms for efficient problem-solving.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701447686/courses/0_xmecyKNlbZKinBDs-removebg-preview_porltu.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Fridays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate programming knowledge",
      "Basic understanding of algorithms",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Arrays and Linked Lists",
        content: "Understanding and implementing arrays and linked lists.",
      },
      {
        week: 2,
        topic: "Stacks and Queues",
        content: "Exploring stack and queue data structures.",
      },
      {
        week: 3,
        topic: "Trees and Graphs",
        content: "Learning about tree and graph data structures.",
      },
    ],
    students: [
      {
        id: 103,
        name: "Eva Martinez",
        email: "eva@example.com",
      },
      {
        id: 104,
        name: "Chris Johnson",
        email: "chris@example.com",
      },
    ],
  },
  {
    name: "Data Analysis with Python",
    instructor: "Prof. Sarah Johnson",
    description: "Master data analysis using Python programming language.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701447955/courses/bookkeeping-vector-illustration_epczjf.webp",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: [
      "Basic Python programming",
      "Understanding of data structures",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Analysis",
        content: "Basic concepts of data analysis and its importance.",
      },
      {
        week: 2,
        topic: "Data Cleaning and Preprocessing",
        content: "Techniques for cleaning and preprocessing data in Python.",
      },
      {
        week: 3,
        topic: "Data Visualization",
        content:
          "Using libraries like Matplotlib and Seaborn for data visualization.",
      },
    ],
    students: [
      {
        id: 108,
        name: "Sophia Miller",
        email: "sophia@example.com",
      },
      {
        id: 109,
        name: "Liam Wilson",
        email: "liam@example.com",
      },
    ],
  },
  {
    name: "Web Development Bootcamp",
    instructor: "Alex Clark",
    description:
      "A comprehensive bootcamp covering HTML, CSS, and JavaScript for web development.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701448321/courses/2918517_qkp8ya.webp",
    duration: "12 weeks",
    schedule: "Saturdays and Sundays, 9:00 AM - 1:00 PM",
    location: "Online",
    prerequisites: ["No prior experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "Basic structure and tags of HTML.",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "CSS fundamentals and styling techniques.",
      },
      {
        week: 3,
        topic: "JavaScript Essentials",
        content: "Introduction to JavaScript and its usage in web development.",
      },
    ],
    students: [
      {
        id: 110,
        name: "Olivia Brown",
        email: "olivia@example.com",
      },
      {
        id: 111,
        name: "Noah Martinez",
        email: "noah@example.com",
      },
    ],
  },

  {
    name: "Introduction to Artificial Intelligence",
    instructor: "Dr. Lisa Adams",
    description:
      "An introductory course covering the basics of artificial intelligence and machine learning.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701448480/courses/images_kyqek6.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: [
      "Basic knowledge of programming",
      "Statistics fundamentals",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Overview of AI",
        content: "Understanding the basics and applications of AI.",
      },
      {
        week: 2,
        topic: "Machine Learning Concepts",
        content: "Introduction to machine learning and its algorithms.",
      },
      {
        week: 3,
        topic: "Neural Networks",
        content: "Exploring neural networks and their architectures.",
      },
    ],
    students: [
      {
        id: 112,
        name: "Ava Johnson",
        email: "ava@example.com",
      },
      {
        id: 113,
        name: "Ethan Wilson",
        email: "ethan@example.com",
      },
    ],
  },
  {
    name: "Mobile App Development with Flutter",
    instructor: "Sam Robinson",
    description: "Learn to build mobile applications using Flutter framework.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701448551/courses/Flutter-Framework-Feature-Image-Background-Colour_yrd1il.avif",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content: "Setting up Flutter and building a basic app.",
      },
      {
        week: 2,
        topic: "Flutter Widgets",
        content: "Understanding different widgets in Flutter.",
      },
      {
        week: 3,
        topic: "State Management in Flutter",
        content: "Managing state in Flutter applications.",
      },
    ],
    students: [
      {
        id: 114,
        name: "Mia Garcia",
        email: "mia@example.com",
      },
      {
        id: 115,
        name: "William Clark",
        email: "william@example.com",
      },
    ],
  },
  {
    name: "Digital Marketing Fundamentals",
    instructor: "Emily White",
    description:
      "Learn the basics of digital marketing strategies and techniques.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701448630/courses/major-components-of-digital-marketing_z02crm.png",
    duration: "6 weeks",
    schedule: "Fridays, 10:00 AM - 12:00 PM",
    location: "Online",
    prerequisites: ["No prior experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing and its importance.",
      },
      {
        week: 2,
        topic: "Social Media Marketing",
        content: "Strategies for marketing on social media platforms.",
      },
      {
        week: 3,
        topic: "Search Engine Optimization (SEO)",
        content: "Fundamentals of SEO and its implementation.",
      },
    ],
    students: [
      {
        id: 116,
        name: "Sophie Adams",
        email: "sophie@example.com",
      },
      {
        id: 117,
        name: "Aiden Martinez",
        email: "aiden@example.com",
      },
    ],
  },
  {
    name: "Introduction to Cybersecurity",
    instructor: "Dr. James Wilson",
    description:
      "Learn the basics of cybersecurity and essential security measures.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701448683/courses/download_2_svn6lr.png",
    duration: "8 weeks",
    schedule: "Saturdays, 2:00 PM - 4:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of computer networks"],
    syllabus: [
      {
        week: 1,
        topic: "Cyber Threats Overview",
        content: "Introduction to common cyber threats and vulnerabilities.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Fundamentals of securing computer networks.",
      },
      {
        week: 3,
        topic: "Cryptography",
        content: "Understanding cryptographic techniques for data security.",
      },
    ],
    students: [
      {
        id: 118,
        name: "Oliver Johnson",
        email: "oliver@example.com",
      },
      {
        id: 119,
        name: "Charlotte Brown",
        email: "charlotte@example.com",
      },
    ],
  },
  {
    name: "Photography Essentials",
    instructor: "Sarah Adams",
    description:
      "Learn the fundamentals of photography and visual composition.",
    enrollmentStatus: "Open",
    thumbnail: "https://res.cloudinary.com/mae-com-in/image/upload/v1701448881/courses/Elizabeth-Wendland-Photography-Portland-Sherwood-Oregon-senior-athlete-sports-photographer-D7K_8077_wycwdp.jpg",
    duration: "4 weeks",
    schedule: "Tuesdays and Thursdays, 3:00 PM - 5:00 PM",
    location: "Online",
    prerequisites: ["No prior experience required"],
    syllabus: [
      {
        week: 1,
        topic: "Camera Basics",
        content: "Understanding camera settings and controls.",
      },
      {
        week: 2,
        topic: "Composition Techniques",
        content: "Learning visual composition and framing.",
      },
      {
        week: 3,
        topic: "Editing and Post-Processing",
        content: "Introduction to editing and post-processing techniques.",
      },
    ],
    students: [
      {
        id: 120,
        name: "Sophia Miller",
        email: "sophia@example.com",
      },
      {
        id: 121,
        name: "Lucas Wilson",
        email: "lucas@example.com",
      },
    ],
  },
  {
    name: "MERN Stack Web Development",
    instructor: "Michael Johnson",
    description:
      "Master the MERN (MongoDB, Express.js, React, Node.js) stack for full-stack web development.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/mae-com-in/image/upload/v1701446933/courses/mern_s6rsif.jpg",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic understanding of HTML, CSS, and JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to MERN Stack",
        content: "Overview of MongoDB, Express.js, React, and Node.js.",
      },
      {
        week: 2,
        topic: "Building Backend with Node.js and Express.js",
        content: "Creating a backend server using Node.js and Express.js.",
      },
      {
        week: 3,
        topic: "Frontend Development with React",
        content: "Building interactive user interfaces with React.",
      },
    ],
    students: [
      {
        id: 122,
        name: "Emma Garcia",
        email: "emma@example.com",
      },
      {
        id: 123,
        name: "Liam Wilson",
        email: "liam@example.com",
      },
    ],
  },
  {
    name: "Angular Framework Masterclass",
    instructor: "Dr. Sophia Clark",
    description:
      "Learn Angular framework and build dynamic single-page applications.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://res.cloudinary.com/mae-com-in/image/upload/v1701446932/courses/angular_f2d34m.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 4:00 PM - 6:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of HTML, CSS, and JavaScript"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Angular",
        content: "Understanding Angular fundamentals and architecture.",
      },
      {
        week: 2,
        topic: "Components and Directives",
        content: "Working with components and directives in Angular.",
      },
      {
        week: 3,
        topic: "Services and Dependency Injection",
        content: "Implementing services and dependency injection.",
      },
    ],
    students: [
      {
        id: 124,
        name: "Olivia Brown",
        email: "olivia@example.com",
      },
      {
        id: 125,
        name: "Noah Martinez",
        email: "noah@example.com",
      },
    ],
  },
];
