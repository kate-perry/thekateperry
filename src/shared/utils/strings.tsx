export const tagline1 = 'Atlanta-based tech fanatic making leading-edge solutions reality.'
export const tagline2 = 'It\'s nice to meet you!'
export const aboutMe = 'I am an IT professional with over 3 years of experience bringing solutions to reality. I’ve held a wide range of roles in a variety of industries, and with my diverse background in the development lifecycle, I bring an innovative perspective framed with technical possibility to business and product analysis.'
export const education = {
    institutionName: 'The University of Alabama',
    degree: 'Bachelor of Science in Commerce and Business Administration',
    dateSpan: ['2013', '2017'],
    major: 'Management Information Systems',
    minor: 'French',
    specializations: ['Management Communications', 'Business Information Technology']
}
export const experience = [
    {
        companyName: 'Groundspeed Analytics',
        jobTitle: 'Software Engineer II',
        location: 'Atlanta, GA',
        dateSpan: ['February 2021', 'present'],
        description: null,
        keyProjects: [
            {
                projectName: null,
                projectRole: null,
                bulletPoints: null,
            }
        ]
    },
    {
        companyName: 'Pariveda Solutions',
        jobTitle: 'IT Consultant',
        location: 'Atlanta, GA',
        dateSpan: ['July 2017', 'January 2021'],
        description: 'Designed, developed, and delivered technical solutions to clients across industries',
        keyProjects: [
            {
                projectName: 'Healthcare Financial Data Analytics',
                projectRole: 'Data Analyst, Tableau Developer',
                bulletPoints: [
                    'Visualized insights from doctor appointment metrics through dashboard development to inform administrative actions to take based on patient behavior',
                    'Identified and developed proofs of concept to incorporate predictive analytics and machine learning into current hospital and business operations'
                ],
            },
            {
                projectName: 'e-Commerce Data Platform Analytics',
                projectRole: 'Data Analyst, Architect',
                bulletPoints: [
                    'Assessed current set of data sources and utilization process to make business decisions',
                    'Strategized a phased data analytics plan to match domain expertise to the right data, maximize effectiveness of marketing spend, and enable data-driven decision making'
                ],
            },
            {
                projectName: 'Customer Persona Build',
                projectRole: 'UX Analyst',
                bulletPoints: [
                    'Designed and facilitated a workshop with executive team to harvest current understanding of the company’s customers',
                    'Synthesized outputs into personas, delivered recommendations and coaching to executive team regarding use of insights'
                ],
            },
            {
                projectName: 'Insurance Webform Redesign',
                projectRole: 'UX Analyst, Lead Developer',
                bulletPoints: [
                    'Redesigned an outdated input-heavy webform using a Design Think framework and workshops to ensure a thoughtful approach to user experience and content strategy',
                    'Led front-end development of the web application that resulted in increased speed to completion, improved data quality, and enabled user scalability'
                ],
            },
            {
                projectName: 'Pharmaceutical Services Design System',
                projectRole: 'Lead Developer, Design Liaison',
                bulletPoints: [
                    'Led a React team to advance an MVP-level component library to a verbose design system, enabling rapid prototyping and web application development across the organization',
                    'Collaborated between development and design teams and planned roadmap to integrate organization rebranding efforts into the design system'
                ],
            }
        ]
    },
    {
        companyName: 'ACT, Inc.',
        jobTitle: 'User Experience Analyst',
        location: 'Iowa City, IA',
        dateSpan: ['May 2016', 'August 2016'],
        description: 'Researched and prototyped an interactive data visualization tool to help students plan for academic and career success',
        keyProjects: [
            {
                projectName: null,
                projectRole: null,
                bulletPoints: [
                    'Interviewed subject matter experts including high school students, parents, and school counselors to understand student needs on the journey to college',
                    'Identified and experimented with data sources and ACT products that could be incorporated into the tool to enrich its offerings'
                ],
            }
        ]
    },
    {
        companyName: 'The Conference Board, European HQ',
        jobTitle: 'Marketing Assistant',
        location: 'Brussels, Belgium',
        dateSpan: ['May 2015', 'August 2015'],
        description: 'Supported the European Product Sales Team in recruitment processes to acquire participation of top executives of leading companies in international business conferences',
        keyProjects: [
            {
                projectName: null,
                projectRole: null,
                bulletPoints: [
                    'Maintained the integrity of the Prospective Member Database by verifying dated files, archiving prospective member communication threads, and updating records',
                    'Performed extensive online research to recommend and nominate qualified executives as prospective conference members',
                    'Contributed to initial research and recruitment efforts for several European conferences'
                ],
            }
        ]
    },
    {
        companyName: 'The University of Alabama',
        jobTitle: 'Teaching Assistant, Head of Grading',
        location: 'Tuscaloosa, AL',
        dateSpan: ['August 2015', 'May 2017'],
        description: 'Coordinated and counseled students taking an introductory programming course (C#, Java, C++) in order to support students\' development of technical and professional skills',
        keyProjects: [
            {
                projectName: null,
                projectRole: null,
                bulletPoints: [
                    'Managed a team of 8 TAs to design, analyze, and grade programming assignments',
                    'Mentored over 150 students a semester in problem solving techniques, project management, and technical application through personal instruction and assistance',
                    'Led groups of 35-40 students in weekly laboratory assignments to ensure material comprehension'
                ],
            }
        ]
    }
]
export const portfolio = [
    {
        projectTitle: 'International Insurance Claim Intake Process',
        projectRole: 'UX/UI Designer & Developer',
        problem: 'The core business of an insurance company is the ability to track incoming claims. The current form is outdated, slow, data intensive, and error prone. The process is so painful, users make phone calls to request an admin enter information on their behalf. How can we give the process a face lift and put the intended users back into the playing field?',
        approach: 'I held discovery workshops with user groups in different business units around the world to understand exactly what data is required for tracking and reporting. As I moved into the prototyping with Axure, I kept tight feedback loops with user groups to capture their reactions and ideas and bring them along on the design journey.',
        result: 'The new intake process cut completion times down from a minimum of 10 minutes to as low as 4 minutes. Users are less prone to errors as the process allows returning to previous tabs to make changes. The form is intuitive enough for most users to begin using with light training. Upon user approval of the prototype, I led UI development efforts using React.js.',
        artifacts: [
            {
                src: 'src/shared/static/artifacts/insurance1-wireframe.jpeg',
                title: 'Hi-Fi Wireframe',
                description: null,
            }
        ]
    },
    {
        projectTitle: 'Design Think Competition: BarHop',
        projectRole: 'UX Analyst & Designer',
        problem: 'Over the course of 17-weeks, solve a “wicked problem”: Closing out bar tabs is a buzz kill. How can we revolutionize this experience?',
        approach: 'I targeted discovery from the dual perspectives of the customer and bartender. I found that both parties were primarily concerned with security of information and time consumption of closing. For bartenders, mistakes are easy to make, there are always more drinks to pour. Customers want to know their credit cards are safe behind the counter and they have their next destination in mind.',
        result: 'I prototyped and iterated with Sketch and Figma tools on a mobile app focused on ease of use for customers: quick registration, photo-entry for payment method, and the ability to close the tab in three taps. While the customer experience becomes self-serving, the bartender’s POS experience does not change, outside of not needing to handle credit cards themselves. I also scoped opportunities for improvement, including a social aspect to organize bar crawls and integrations with rideshare options to ensure users get home safely.',
        artifacts: [
            {
                src: 'src/shared/static/artifacts/barhop1-regflow.png',
                title: 'Registration Flow',
                description: 'Because this app would likely be downloaded on the go, a hefty information collection would not be delightful. I split the registration into two flows to allow for a "quick start" entry into the app, and a longer flow to set up payment.'
            },
            {
                src: 'src/shared/static/artifacts/barhop2-orderflow.png',
                title: 'Drink Order Flow',
                description: null
            },
            {
                src: 'src/shared/static/artifacts/barhop3-closeflow.png',
                title: 'Close Tab Flow',
                description: null
            },
        ]
    },
    {
        projectTitle: 'Tough Conversations via Computer Interaction',
        projectRole: 'UX Analyst',
        problem: 'High school students view the ACT score as a barrier to collegiate and career success. When test results do not meet expectations, students feel they cannot pursue their dream schools or jobs. How can ACT guide students toward meaningful conversations that will keep them motivated to retest or explore other paths to reach their goals?',
        approach: 'I organized interviews with subject matter experts including high school students, parents, and a school counselor to gather user journeys and sentiments. I created user narratives from these interviews and hosted ideation sessions with the User Experience team. I also pursued other ACT data sources and products offered in the student portal such as career aptitude tests to find that the established website was ACT’s most valuable communication tool.',
        result: 'I prototyped an interactive data visualization tool for the student portal that would help students plan for academic and career success. Armed with historical data of ACT scores, careers, and “where are they now” data of past students and their current careers, students could plug their own scores and interests into the tool to receive next-step recommendations and talking points to bring to their parents or school counselors.',
        artifacts: [
            {
                src: 'src/shared/static/artifacts/conversation1-gauges.png',
                title: 'Projected Success Gauges',
                description: null
            },
            {
                src: 'src/shared/static/artifacts/conversation2-recommender.png',
                title: 'University Recommender',
                description: null
            },
            {
                src: 'src/shared/static/artifacts/conversation3-majormap.png',
                title: 'Major Map',
                description: null
            }
        ]
    }
]