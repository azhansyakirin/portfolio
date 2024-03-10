const demoText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

const TechStackArr = [
    "/portfolio/static/icons/reactjs.svg",
    "/portfolio/static/icons/redux.svg",
    "/portfolio/static/icons/html5.svg",
    "/portfolio/static/icons/sass.svg",
    "/portfolio/static/icons/js.svg",
    "/portfolio/static/icons/tailwindcss.svg",
    "/portfolio/static/icons/css3.svg",
    "/portfolio/static/icons/figma.svg",
    "/portfolio/static/icons/bootstrap4.svg",
    "/portfolio/static/icons/analytics.svg",
    "/portfolio/static/icons/ai.svg",
    "/portfolio/static/icons/git.svg",
    "/portfolio/static/icons/githubstack.svg",
    "/portfolio/static/icons/jira.svg",
    "/portfolio/static/icons/mysql.svg",
    "/portfolio/static/icons/php.svg",
    "/portfolio/static/icons/headlessui.svg",
];

const TimelineArr = [
    {
        idx: 1,
        timeline: 'Feb 2022 - Current',
        title: "Maybank Berhad",
        image: "/portfolio/static/img/maybank.jpg",
        description: demoText,
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap']
    },
    {
        idx: 2,
        timeline: 'Mar 2021 - Feb 2022',
        title: "Jabatan Komunikasi Komuniti",
        image: "/portfolio/static/img/jkom.jpg",
        description: demoText,
        badge: ['Html', 'Css', 'Php', 'Jquery']
    },
];

const ProjectArr = [
    {
        idx: 1,
        timeline: 'Nov 2023 - May 2023',
        title: "Maybank2u Transaction History Download",
        image: "/portfolio/static/img/maybank.jpg",
        recommended: false,
        description: 'This project is to allow user to download Transaction History in different formats such as CSV, PDF or XLS in a few period options.',
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://maybank2u.com.my"
    },
    {
        idx: 2,
        timeline: 'July 2023 - Aug 2023',
        title: "Maybank2u Browser Version Handling",
        image: "/portfolio/static/img/maybank.jpg",
        recommended: "BNM Mandatory",
        description: 'This project is to handle user accessing Maybank2u web via supported browser versions.',
        badge: ['Javascript'],
        link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/announcements/2023/august/web-browser-compatibility.page"
    },
    {
        idx: 3,
        timeline: 'Dec 2022 - Mar 2023',
        title: "Maybank2u Kill Switch (Phase 2)",
        image: "/portfolio/static/img/maybank.jpg",
        recommended: "BNM Mandatory",
        description: "This project objectives is to allow customers to perform suspend current/savings account or block credit card through Maybank2u as a new security measures to safeguard against online scams.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/kill-switch.page"
    },
    {
        idx: 4,
        timeline: 'Sep 2022 - Dec 2022',
        title: "Maybank2u Kill Switch (Phase 1)",
        image: "/portfolio/static/img/maybank.jpg",
        recommended: "BNM Mandatory",
        description: "This project objectives is to allow customers to perform deactivation of Maybank2u access via Maybank2u as a new security measures to safeguard against online scams.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/kill-switch.page"
    },
    {
        idx: 5,
        timeline: 'Sep 2022 - Jan 2023',
        title: "Maybank2u Personal Settings Enhancement",
        image: "/portfolio/static/img/maybank.jpg",
        recommended: false,
        description: "This project is to give a customers fresh look on personalize their details.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://maybank2u.com.my"
    },
    {
        idx: 6,
        timeline: 'Aug 2022 - Oct 2022',
        title: "Maybank2u London Statement",
        image: "/portfolio/static/img/maybank.jpg",
        recommended: false,
        description: "This project is to allow customers with Maybank2u United Kingdom's account to view and access their statement straight away from Maybank2u Malaysia.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://maybank2u.com.my"
    },
]

export { TechStackArr, TimelineArr, ProjectArr }