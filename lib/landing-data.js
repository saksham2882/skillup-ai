import { BookOpen, Cpu, Github, Globe, Instagram, Linkedin, Target, TrendingUp, Users } from "lucide-react";

export const navItems = [
    "Home",
    "AI Features",
    "How it Works",
    "Community",
    "Join Now",
];

export const features = [
    {
        icon: <Target className="w-8 h-8 text-purple-400" />,
        title: "AI-Generated Courses",
        desc: "Simply fill out a details—AI builds a complete personalized course roadmap based on your goals, difficulty, chapter count, and preferences.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-cyan-400" />,
        title: "Smart Content Engine",
        desc: "AI automatically generates detailed explanations, examples, tasks, and summaries for every chapter you choose.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-green-400" />,
        title: "Progress Tracking",
        desc: "WTrack your learning journey in real time—completed chapters, badges, streaks, and certificate progress.",
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-400" />,
        title: "Community Courses",
        desc: "All user-generated courses appear in the community section, allowing anyone to enroll and start learning instantly.",
    },
    {
        icon: <Users className="w-8 h-8 text-pink-400" />,
        title: "Unlimited Learning",
        desc: "Free users can generate limited course and enroll in limited community course. Upgrade to unlock unlimited generation and enrollments.",
    },
    {
        icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
        title: "Quizzes & Certificates (Coming Soon)",
        desc: "Earn badges after completing chapters and receive an AI-generated certificate upon completing the course.",
    },
]


export const working = [
    {
        step: "01",
        title: "Fill Course Details",
        text: "Enter details like course name, description, chapter count, difficulty level, category, and whether you want videos included.",
    },
    {
        step: "02",
        title: "AI Generates Your Course",
        text: "Our AI creates a structured roadmap with chapter flow, learning sequence, and skill progression.",
    },
    {
        step: "03",
        title: "Auto-Generated Chapter Content",
        text: "Each chapter gets fully generated content—explanations, examples, tasks, summaries, and learning outcomes.",
    },
    {
        step: "04",
        title: "Enroll & Start Learning",
        text: "You can enroll in your AI-generated course or explore and enroll in publicly available community courses.",
    },
]


export const testimonials = [
    {
        name: "Aarav Mehta",
        role: "Aspiring Developer",
        text: "The AI-generated roadmap was surprisingly accurate. It gave me exactly the topics I needed without wasting time.",
        bg: "bg-purple-900/20",
    },
    {
        name: "Riya Sharma",
        role: "Computer Science Student",
        text: "The community courses are a game changer! I enrolled in three user-made courses and learned faster than YouTube tutorials.",
        bg: "bg-cyan-900/20",
    },
    {
        name: "Arjun Patel",
        role: "Self-Learner",
        text: "The chapter-wise progress tracking and upcoming badges make learning feel motivating. Can't wait for certificates!",
        bg: "bg-blue-900/20",
    },
]


export const Plans = [
    [
        "Generate limited AI Course",
        "Enroll in limited Community Course",
        "Basic AI Roadmap",
    ],
    [
        "Unlimited AI Course Generation",
        "Unlimited Community Enrollments",
        "Advanced AI Content Engine",
        "Badges + Certificates (Coming Soon)",
        "Priority Access & Faster Generation",
        "Full Support"
    ]
]


export const footerData = {
    social: [
        { name: "Instagram", icon: "Instagram", link: '#' },
        { name: "LinkedIn", icon: "Linkedin", link: 'https://www.linkedin.com/in/saksham-agrahari/' },
        { name: "GitHub", icon: "Github", link: 'https://github.com/saksham2882' },
    ],

    menu1: [
        "AI Curriculum",
        "Skill Assessments",
        "Enterprise",
        "Pricing",
    ],

    menu2: [
        "About Us",
        "Careers",
        "Blog",
        "Contact",
    ],

    policies: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Settings",
    ],
}

export const iconMap = {
    Instagram: Instagram,
    Linkedin: Linkedin,
    Github: Github,
};