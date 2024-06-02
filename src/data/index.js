const demoText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

const TechStackArr = [
    { label: "React Js", icon: "/static/icons/reactjs.svg" },
    { label: "Redux", icon: "/static/icons/redux.svg" },
    { label: "HTML", icon: "/static/icons/html5.svg" },
    { label: "Sass", icon: "/static/icons/sass.svg" },
    { label: "CSS", icon: "/static/icons/css3.svg" },
    { label: "JavaScript", icon: "/static/icons/js.svg" },
    { label: "Tailwind", icon: "/static/icons/tailwindcss.svg" },
    { label: "Figma", icon: "/static/icons/figma.svg" },
    { label: "Bootstrap", icon: "/static/icons/bootstrap4.svg" },
    { label: "Google Analytics", icons: "/static/icons/analytics.svg" },
    { label: "Illustrator", icons: "/static/icons/illustrator.svg" },
    { label: "Git", icon: "/static/icons/git.svg" },
    { label: "Jira", icon: "/static/icons/jira.svg" },
    { label: "Php", icon: "/static/icons/php.svg" },
];

const TimelineArr = [
    {
        idx: 1,
        timeline: 'Feb 2022 - Current',
        title: "Maybank Berhad",
        position: "Frontend Developer",
        location: "Kuala Lumpur",
        image: "/static/icons/maybank-avatar.svg",
        description: "• Lead frontend team for monthly releases and assume  responsibility for successful delivery\n\n• Perform first-level code review and merge UI code for monthly  production packages\n\n• Guide new team members in understanding React JS and  Maybank2u product domain knowledge\n\n• Address production issues raised by MGCC in a timely manner\n\n• Enforce standard guidelines for Maybank2u codebase across  project teams\n\n• Participate in sprint projects and contribute to business  requirements meetings for product quality assurance\n\n• Practice agile development methodology\n\n• Implement best practices for code-level optimization, including  high-order components and highly reusable dynamic components",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap']
    },
    {
        idx: 2,
        timeline: 'Mar 2021 - Feb 2022',
        title: "Prime Minister Office",
        position: "Fullstack Developer",
        location: "Putrajaya",
        image: "/static/icons/jata.svg",
        description: "• Developed internal systems for staff use, including Intranet Portal,  IT Helpdesk application, MCO attendance system, Sign Language  Interpreter Application System\n\n• Provided ongoing support and maintenance for existing  applications and servers.\n\n• Set up and configured internal network infrastructure.\n\n• Resolved tickets and provided technical support to ensure smooth  operations.",
        badge: ['Html', 'Css', 'Php', 'Jquery']
    },
];

const ProjectArr = [
    {
        idx: 1,
        timeline: 'May 2024 - Jul 2024',
        title: "Maybank2u Recaptcha for Reset Password",
        image: "/static/img/maybank-tower.jpg",
        recommended: false,
        description: 'This project is to add ReCAPTCHA field for reset password section in order to prevent from bot attack.',
        badge: ['React', 'Google Recaptcha', 'Scss'],
        link: "https://maybank2u.com.my",
        projectId: "m2u-recaptcha-change-password-2024",
    },
    {
        idx: 1,
        timeline: 'Nov 2023 - Sep 2024',
        title: "Maybank2u Transaction History Download",
        image: "/static/img/maybank-tower.jpg",
        recommended: false,
        description: 'This project is to allow user to download Transaction History in different formats such as CSV, PDF or XLS in a few period options.',
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://maybank2u.com.my",
        projectId: "m2u-trx-history-2024",
        snapshot: ["/static/img/transaction-history-download.png"]
    },
    {
        idx: 2,
        timeline: 'July 2023 - Aug 2023',
        title: "Maybank2u Browser Version Handling",
        image: "/static/img/maybank-tower.jpg",
        recommended: "BNM Mandatory",
        description: 'This project is to handle user accessing Maybank2u web via supported browser versions.',
        badge: ['Javascript'],
        link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/announcements/2023/august/web-browser-compatibility.page",
        projectId: "m2u-browser-handling-2023",
        snapshot: ["/static/img/unsupported-browser.png"]
    },
    {
        idx: 3,
        timeline: 'Dec 2022 - Mar 2023',
        title: "Maybank2u Kill Switch (Phase 2)",
        image: "/static/img/maybank-tower.jpg",
        recommended: "BNM Mandatory",
        description: "This project objectives is to allow customers to perform suspend current/savings account or block credit card through Maybank2u as a new security measures to safeguard against online scams.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/kill-switch.page",
        projectId: "m2u-kill-switch-mvp2-2023",
        snapshot: ["/static/img/block-cards.png", "/static/img/suspend-account-1.png", "/static/img/suspend-account-2.png"]
    },
    {
        idx: 4,
        timeline: 'Sep 2022 - Dec 2022',
        title: "Maybank2u Kill Switch (Phase 1)",
        image: "/static/img/maybank-tower.jpg",
        recommended: "BNM Mandatory",
        description: "This project objectives is to allow customers to perform deactivation of Maybank2u access via Maybank2u as a new security measures to safeguard against online scams.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://www.maybank2u.com.my/maybank2u/malaysia/en/personal/services/digital_banking/kill-switch.page",
        projectId: "m2u-kill-switch-mvp1-2023",
        snapshot: ["/static/img/deactivate-m2u-access.png"]
    },
    {
        idx: 5,
        timeline: 'Sep 2022 - Jan 2023',
        title: "Maybank2u Personal Settings Enhancement",
        image: "/static/img/maybank-tower.jpg",
        recommended: false,
        description: "This project is to give a customers fresh look on personalize their details.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://maybank2u.com.my",
        projectId: "m2u-personal-settings-2023",
        snapshot: []
    },
    {
        idx: 6,
        timeline: 'Aug 2022 - Oct 2022',
        title: "Maybank2u London Statement",
        image: "/static/img/maybank-tower.jpg",
        recommended: false,
        description: "This project is to allow customers with Maybank2u United Kingdom's account to view and access their statement straight away from Maybank2u Malaysia.",
        badge: ['React', 'Redux', 'Scss', 'Webpack', 'Github Actions', 'Jira', 'Bootstrap', 'REST API'],
        link: "https://maybank2u.com.my",
        projectId: "m2u-london-statement-2022",
        snapshot: ["/static/img/london-account-linking.png"]
    },
];

let CoreDetails = [
    { icon: "LinkedIn", title: "LinkedIn", label: "linkedin.azhansyakirin.dev", actionUrl: "https://www.linkedin.com/in/azhansyakirin/" },
    { icon: "GitHub", title: "Website", label: "github.azhansyakirin.dev", actionUrl: "https://github.com/azhansyakirin" },
    { icon: "mail", title: "Email", label: "azhansyakirin@gmail.com", actionUrl: "mailto:azhansyakirin@gmail.com" },
    { icon: "phone", title: "Phone", label: "+60-142620833", actionUrl: "tel:+60142620833" },
];

let Education = [
    { course: "Bachelor of Computer Science", school: "Universiti Putra Malaysia", year: "2017-2021" },
    { course: "Matriculation Program", school: "Kolej Matrikulasi Selangor", year: "2015-2017" }
];

let Languages = [
    { lang: "Bahasa Malaysia", rate: "Excellent" },
    { lang: "English", rate: "Good" },
];

let ContactReferences = [
    { name: "Munigala Arun", company: "Maybank Berhad", position: "Senior Solution Analyst", contact: "+60-11********" },
    { name: "Muzalina Alias", company: "Prime Minister Office", position: "Head of IT Department", contact: "+60-12*******" },
]

export {
    TechStackArr, TimelineArr, ProjectArr, CoreDetails, Education,
    Languages, ContactReferences, demoText,
}
