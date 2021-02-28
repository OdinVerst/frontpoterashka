export const data = {
    contacts: [
        {
            id: 1,
            name: "Email",
            value: "frontpoterashka@gmail.com",
            link: "mailto:frontpoterashka@gmail.com"
        },
        {
            id: 2,
            name: "GitHub",
            value: "@OdinVerst",
            link: "https://github.com/OdinVerst"
        },
        {
            id: 3,
            name: "LinkedIn",
            value: "Sergey Razdolyanskiy",
            link: "https://www.linkedin.com/in/сергей-раздолянский-3270ba117/"
        },
        {
            id: 4,
            name: "Telegram",
            value: "@frontpoterashka",
            link: "https://telegram.me/@frontpoterashka"
        },
    ],
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Svelte",
        "TypeScript",
        "Git",
        "Figma"
    ],
    images: {
        logo: {
            name: 'logo',
            format: 'png',
            webp: true,
            retina: true,
            avif: true,
            dark: true,
            alt: "Logo frontpoterashka"
        },
        photo: {
            name: 'photo',
            format: 'jpg',
            webp: true,
            retina: true,
            avif: true,
            alt: "Photo Sergey Razdolyanskiy"
        }
    },
    main: [
        {
            name: 'Experience',
            type: 'list',
            data: [
                {
                    title: 'Have commercial projects',
                    values: [
                        {
                            name: 'Count Art (Svelte/ Sapper)',
                            link: 'https://countart.ru/'
                        },
                        {
                            name: 'Intelligent Hookah (HTML/CSS/JS)',
                            link: 'https://intelligenthookah.com/'
                        },
                        {
                            name: 'Textelle - mobile (HTML/CSS/JS)',
                            link: 'https://www.textelle.ru/'
                        },
                        {
                            name: 'Vdali Poshtel (HTML/CSS/JS/PHP)',
                            link: 'https://vdaliposhtel.ru/'
                        }
                    ]
                },
                {
                    title: 'Create some small landing pages',
                    values: [
                        {
                            name: 'GettSleep (HTML/CSS/JS) and booking module (JS)',
                            link: 'https://gettsleep.ru/'
                        },
                        {
                            name: 'ZTS (HTML/CSS/JS)',
                            link: 'https://zts-spb.ru/'
                        }
                    ]
                },
                {
                    title: 'Learning projects',
                    values: [
                        {
                            name: 'Shop React (React/Node/Firebase)',
                            link: 'https://ecom-react-udem.herokuapp.com/'
                        },
                        {
                            name: 'Contact Keeper (React/Node)',
                            link: 'https://stark-caverns-41296.herokuapp.com/login'
                        },
                    ]
                }
            ]
        },
        {
            name:
                'Education',
            type:
                'text',
            data:
                'Russia, Orel state, Orel Oryol State University of Economics and Trade, Information Technology and Management, Business Informatics'
        },
        {
            name: 'Speaker',
            type: 'list',
            data: [
                {
                    title: '',
                    values: [
                        {
                            name: 'SEO vs A11Y',
                            link: 'https://www.youtube.com/watch?v=m3EStUvzSAs&t'
                        },
                        {
                            name: 'WSD conf review',
                            link: 'https://medium.com/@grafcorp01/%D0%BF%D0%BE%D1%87%D0%B5%D0%BC%D1%83-wsd-%D1%8D%D1%82%D0%BE-%D0%BD%D0%B5-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE-%D0%BA%D0%BE%D0%BD%D1%84%D0%B0-8cded9cab852'
                        },
                    ]
                }
            ]
        },
        {
            name:
                'Work',
            type:
                'text',
            data:
                'Alfa Site - WEB developer (2018-2019) <br><br> VMGR - Frontend developer (2019-2021)'
        },
    ]
}