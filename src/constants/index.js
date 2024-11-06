export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Personal Portfolio',
        desc: 'This website that you are currently scrolling through, showcasing my skills through an immersive 3D experience and interactive elements.',
        subdesc: 'Engineered with React.js and Three.js, the portfolio features a 3D figure of the Spot from Across the Spider Verse movie, dynamic project showcase, engaging experience timeline, and a responsive contact form, optimized for performance across different devices.',
        href: '/',
        texture: '/textures/project/portfolio.PNG',
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Three.js',
                path: '/assets/Three.js.svg',
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                path: '/assets/tailwindcss.png',
            },
            {
                id: 4,
                name: 'WebStorm',
                path: '/assets/WebStorm.svg',
            },
        ],
    },
    {
        title: 'PantryPal - Your Personal Recipe Assistant',
        desc: 'A web application that helps users find recipes based on available pantry ingredients using machine learning to offer personalized suggestions.',
        subdesc: 'Developed with Python, Flask, and Streamlit, PantryPal features an intuitive interface for ingredient input, dietary filters, and real-time recipe recommendations tailored to user preferences.',
        href: 'https://github.com/PantryPal-1/pantry-client',
        texture: '/textures/project/pantry-pal.png',
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python_logo.svg',
            },
            {
                id: 2,
                name: 'Flask',
                path: 'assets/Flask.svg',
            },
            {
                id: 3,
                name: 'Streamlit',
                path: '/assets/Streamlit.svg',
            },
        ],
    },
    {
        title: 'Blocky Animal World',
        desc: 'A 3D interactive environment with a customizable blocky animal, dynamic textures, and smooth camera movement across a simple, vibrant landscape.',
        subdesc: 'Built with JavaScipt and HTMl, this project leverages 3D modeling, transformation, and rendering techniques, achieving 140+ fps on a 32x32 map. Includes multiple textures and camera controls.',
        href: 'https://ysmagulov02.github.io/cse160---asgn3B/src/World.html',
        texture: '/textures/project/blocky_animal.PNG',
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'JavaScript',
                path: '/assets/JavaScript.svg',
            },
            {
                id: 2,
                name: 'HTML5',
                path: 'assets/HTML5.svg',
            },
            {
                id: 3,
                name: 'Three.js',
                path: '/assets/Three.js.svg',
            },
            {
                id: 4,
                name: 'Blender',
                path: '/assets/Blender.svg',
            },
        ],
    },
    {
        title: 'Long Distance Trails in the US',
        desc: 'An interactive tool to compare distances and elevations of popular long-distance trails across the United States, visualized with clean, dynamic graphs.',
        subdesc: 'Built using HTML, CSS, and JavaScript, this application lets users compare trails like the Appalachian Trail and Pacific Crest Trail, offering a unique view of trail data through interactive elements.',
        href: 'https://dpelissiry.github.io/LongDistanceTrails/',
        texture: '/textures/project/trails.PNG',
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/HTML5.svg',
            },
            {
                id: 2,
                name: 'CSS3',
                path: 'assets/CSS3.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/JavaScript.svg',
            },
        ],
    },
    {
        title: 'Overwatch Lite',
        desc: 'A 2D multiplayer game inspired by Overwatch, featuring fast-paced gameplay with health tracking, collision detection, and sound effects.',
        subdesc: 'Developed with Python, this game combines core multiplayer mechanics, including dynamic health bars and retro-inspired sound elements, to deliver an immersive experience reminiscent of classic arcade games.',
        href: 'https://github.com/ysmagulov02/overwatch_game',
        texture: '/textures/project/overwatch.png',
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python_logo.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        // deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.055,
        // deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -4.5, 0],
        deskScale: isSmall ? 3.75 : isMobile ? 4 : 4,
        deskPosition: isMobile ? [0.01, -4.5, 0.75] : [0.075, -4.25, 0.25],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Kapuscinski-Sarker Lab',
        pos: 'Software Engineer',
        duration: 'Aug 2022 - Oct 2024 · 2 yrs 3 mos',
        title: [
            '- Led development of a Python-based GUI for visualizing the economic and environmental impacts of 20+ aquafeed ingredients, improving research efficiency by 40%, measured through user feedback and time saved. ',
            '- Contributed to a decision-support tool, still used by lab members for ongoing research, improving ingredient evaluation efficiency by 30%, measured by faster decision-making in lab trials.',
            '- Optimized the back-end system and integrated 50+ datasets, achieving a 75% faster running time and enhancing data processing, measured by reduced processing time and increased uptime.'
        ],
        icon: '/assets/ucsc_logo.jfif',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'CITRIS and the Banatao Institute',
        pos: 'Computer Science Intern',
        duration: 'Jun 2022 - Aug 2022 · 3 mos',
        title: [
            '- Developed a front-end web application for the Cruz Aquafeed Sustainability Tool using HTML, CSS, and JavaScript, increasing user interaction by 40%, measured through page views and session durations. ',
            '- Collaborated in building a decision-support tool using Python, improving ingredient selection accuracy by 30%, measured through user surveys and data analysis.',
            '- Integrated back-end functionality for real-time data processing and designed a WordPress website, enhancing user engagement by 40%, measured by interactions with features and session time, while providing an intuitive platform for accessing sustainability data.'
        ],
        icon: '/assets/citris__logo.jfif',
        animation: 'clapping',
    }
    ,



    // {
    //     id: 1,
    //     name: 'Framer',
    //     pos: 'Lead Web Developer',
    //     duration: '2022 - Present',
    //     title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    //     icon: '/assets/framer.svg',
    //     animation: 'victory',
    // },
    // {
    //     id: 2,
    //     name: 'Figma',
    //     pos: 'Web Developer',
    //     duration: '2020 - 2022',
    //     title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    //     icon: '/assets/figma.svg',
    //     animation: 'clapping',
    // }
    // },
    // {
    //     id: 3,
    //     name: 'Notion',
    //     pos: 'Junior Web Developer',
    //     duration: '2019 - 2020',
    //     title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //     icon: '/assets/notion.svg',
    //     animation: 'salute',
    // },
];

export const skills = [
    {
        category: "Frontend Development",
        skills: [
            { id: 1, skill: "HTML", level: "Experienced" },
            { id: 2, skill: "CSS", level: "Experienced" },
            { id: 5, skill: "React", level: "Experienced" },
            { id: 3, skill: "JavaScript", level: "Intermediate" },
            { id: 6, skill: "Three.js", level: "Intermediate" },
            { id: 7, skill: "React Three Fiber", level: "Intermediate" },
            { id: 8, skill: "Tailwind CSS", level: "Intermediate" },
            { id: 9, skill: "Vite", level: "Basic" },
            { id: 4, skill: "Bootstrap", level: "Basic" },
        ],
    },
    {
        category: "Backend Development",
        skills: [
            { id: 10, skill: "Python", level: "Experienced" },
            { id: 11, skill: "C", level: "Experienced" },
            { id: 12, skill: "C++", level: "Intermediate" },
            { id: 15, skill: "Node.js", level: "Intermediate" },
            { id: 17, skill: "Express.js", level: "Intermediate" },
            { id: 18, skill: "REST APIs", level: "Intermediate" },
            { id: 14, skill: "MySQL", level: "Basic" },
            { id: 13, skill: "PHP", level: "Basic" },
            { id: 16, skill: "EmailJS", level: "Basic" },
            { id: 20, skill: "Docker", level: "Basic" },
        ],
    },
];


