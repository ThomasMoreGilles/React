
import {SiOpenaigym} from 'react-icons/si'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Plans",
        path: '/plans'
    },
    {
        name: "Trainers",
        path: '/trainers'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]


export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Strength Training",
        info: "Build muscle and increase your overall strength with our comprehensive weightlifting program.",
        path: "/programs/1"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Cardio Bootcamp",
        info: "Get your heart pumping and burn calories with our high-intensity cardio bootcamp program.",
        path: "/programs/2"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Yoga & Flexibility",
        info: "Improve your flexibility and balance instantly with our yoga-based program, perfect for all levels.",
        path: "/programs/3"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "CrossFit",
        info: "Push your limits with our intense functional fitness program, combining weightlifting and cardio.",
        path: "/programs/4"
    }
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Value One",
        desc: "We are dedicated to helping you achieve your fitness goals with personalized training and nutrition plans."
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Value Two",
        desc: "We offer a wide range of classes for all fitness levels, from beginner to advanced."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Value Three",
        desc: "Our state-of-the-art facility is equipped with the latest equipment and technology to support your workouts."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Value Four",
        desc: "We foster a supportive and inclusive community of members who inspire and motivate each other to reach their full potential."
    }
]


export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "It is recommended to engage in regular physical activity for at least 150 minutes a week for adults, or at least 30 minutes a day for five days a week."
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "The best time to work out is when it is most convenient for you to stick to a routine. Some people prefer to work out in the morning, while others prefer to work out in the evening. Experiment to find the best time for you."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "A general guideline for a full-body workout is to aim for at least 30 minutes. However, the duration of your workout can vary depending on your fitness level and goals."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Yes, it is important to warm up before any physical activity to prepare your muscles and joints for exercise, reduce your risk of injury, and improve your performance."
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Both strength training and cardio are important for overall health and fitness. A well-rounded exercise program should include a combination of both. "
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Weightlifting is one option for strength training, but there are also other options such as bodyweight exercises, resistance bands, and kettlebells. It's important to find a type of strength training that works for you and your fitness level."
    }
]


export const testimonials = [
    {
        id: 1,
        name: "John Smith",
        quote: "The service I received from this company was top-notch. They were professional, efficient, and made the process so easy. I would highly recommend them to anyone in need of their services.",
        job: "Business Owner",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Jane Doe",
        quote: "I was blown away by the quality of work provided by this company. They exceeded my expectations and I couldn't be happier with the results. I highly recommend them to anyone looking for exceptional service.",
        job: "Graphic Designer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Bob Johnson",
        quote: "I had a great experience working with this company. They were very responsive and always willing to go the extra mile to make sure I was satisfied with the service. I would definitely use them again in the future.",
        job: "Web Developer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Emily Davis",
        quote: "I was extremely impressed by the level of expertise and professionalism of this company. They provided me with valuable advice and delivered a high-quality end product. I highly recommend them to anyone in need of their services.",
        job: "Marketing Manager",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Michael Brown",
        quote: "I had a great experience working with this company. They were very knowledgeable and helped me to achieve my goals. I appreciate their hard work and dedication. I highly recommend them to anyone looking for quality service.",
        job: "Entrepreneur",
        avatar: require("./images/avatar5.jpg")
    }
]


export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    }
]


const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Gilles Rousseaux',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/gilles_rousseaux', 'https://twitter.com/gilles_rousseaux', 'https://facebook.com/gilles.rousseaux', 'https://linkedin.com/in/gilles-rousseaux']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Samantha Smith',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/samanthasmith_speed', 'https://twitter.com/samanthasmith_speed', 'https://facebook.com/samanthasmithspeed', 'https://linkedin.com/in/samanthasmith_speed']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Ahmed Queist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/ahmed_queist_flex', 'https://twitter.com/ahmed_queist_flex', 'https://facebook.com/ahmedqueistflex', 'https://linkedin.com/in/ahmed-queist-flex']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Jenna Davis',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/jennadavis_bodycomp', 'https://twitter.com/jennadavis_bodycomp', 'https://facebook.com/jennadavisbodycomp', 'https://linkedin.com/in/jennadavis_bodycomp']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Wale',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/diana_wale_circuit', 'https://twitter.com/diana_wale_circuit', 'https://facebook.com/dianawalecircuit', 'https://linkedin.com/in/diana-wale-circuit']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Gotee',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/wayne_gotee_physint', 'https://twitter.com/wayne_gotee_physint', 'https://facebook.com/waynegoteephysint', 'https://linkedin.com/in/wayne-gotee-physint']
    }
]