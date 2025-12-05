import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import skillForge_icon from './skill-forge.png';
import reportEase_icon from './report-ease_icon.png';
import babyCare_icon from './babyCare-icon.png';
import fixpoint_icon from './fixpoint-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.png';
import work2 from './work-2.png';
import work3 from './work-3.png';
import work4 from './work-4.png';
import Ach1 from './Ach-1.png';
import phone_icon from './phone-icon.png';
import phone_icon_dark from './phone-icon-dark.png';
import location_icon from './location_icon.png';
import location_dark from './location_dark.png';
import github_dark from './github_dark.png';
import linkedin_dark from './linkedin_dark.png';
import github_icon from './github_icon.png';
import linkedin_icon from './linkedin_icon.png';
import github2 from './github2.png';
import linkedin2 from './linkedin2.png';
import microsoftsqlserver from './microsoftsqlserver.png';
import mysql from './mysql.png';
import excel from './file-type-excel.png';
import tableau_icon from './tableau-icon.png';
import  power_bi from './microsoft-power-bi.png';
import jira from './jira.png';
import trello from './trello.png';
import notion from './notion.png';



export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    skillForge_icon,
    reportEase_icon,
    babyCare_icon,
    fixpoint_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    work1,
    work2,
    work3,
    work4,
    Ach1,
    phone_icon,
    phone_icon_dark,
    location_icon,
    location_dark,
    linkedin_icon,
    linkedin_dark,
    github_dark,
    github_icon,
    github2,
    linkedin2,
    microsoftsqlserver,
    mysql,
    excel,
    tableau_icon,
    power_bi,
    jira,
    trello,
    notion
};

export const volunteeringData = [
    {
        title: 'Public Relational Manager',
        description: 'IEEE WIE Student Branch Affinity Group Sabaragamuwa University of Sri Lanka',
        bgImage: assets.work1,
    },
    {
        title: 'University Ambassador',
        description: 'CodeRally 6.0 organized by Informatics Institute of Technology ',
        bgImage: assets.work2,
    },
    {
        title: 'Program Team Member',
        description: 'SabraXtream 3.0 - IEEE Student Branch Sabaragamuwa University of Sri Lanka',
        bgImage: assets.work3,
    },
    {
        title: 'Marketing Team Member',
        description: 'PearlHack V4.0 - IEEE WIE Student Branch Affinity Group of SUSL',
        bgImage: assets.work4,
    },
]

export const projectData = [
    { icon: assets.fixpoint_icon, title: 'FixPonit', description: 'A mobile-based ticket management system for Dominos Sri Lanka maintenance unit to digitize maintenance process.', link: 'https://github.com/fixpoint-tech' },
    { icon: assets.skillForge_icon, title: 'SkillForge', description: 'An AI-driven learning platform that generates personalized career roadmaps and guides users through skills and resources.', link: 'https://www.linkedin.com/posts/mariyeta-rodrigo-38a49b299_skillforge-ai-personalizedlearning-activity-7374020585888296960-PXvQ?utm_source=share&utm_medium=member_android&rcm=ACoAAEgnJVoBi5flDmUyH750qLHA1zDK8oK5RxQ' },
    { icon: assets.reportEase_icon, title: 'ReportEase', description: 'A university issue-tracking web based system offering role-based access, image management, and real-time progress tracking.', link: 'https://www.linkedin.com/posts/mariyeta-rodrigo-38a49b299_laravel-webdevelopment-softwareengineering-activity-7387411365046460416-nakH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgnJVoBi5flDmUyH750qLHA1zDK8oK5RxQ' },
    { icon: assets.babyCare_icon, title: 'Baby Care System', description: 'A web application that helps parents manage newborn vaccination schedules and receive timely healthcare reminders.', link: 'https://www.linkedin.com/posts/mariyeta-rodrigo-38a49b299_systemanalysisanddesign-is1234-babycaresystem-activity-7353729717805461504-K3B5?utm_source=share&utm_medium=member_android&rcm=ACoAAEgnJVoBi5flDmUyH750qLHA1zDK8oK5RxQ' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Project Management Skills', 
        description: (<>
            <strong>Agile Practices</strong><br />Scrum, Kanban, Sprint Planning, Backlog Management, Stand-ups, Reviews, Retros
            <br />
            <br />
            <strong>Collaboration & Leadership</strong><br />Team coordination, communication, task organization
        </>
    )},
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Data Analysis Skills', 
        description:  (<>
            <strong>Technical Skills</strong><br />SQL, DAX, Python
            <br />
            <br />
            <strong>Data Capabilities</strong><br />Data cleaning, interpretation, visualization, reporting
        </>
    ) },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'BSc (Hons) in Computing and Information Systems' }
    
];

export const toolsData = [
    assets.excel, assets.jira, assets.trello, assets.notion, assets.power_bi, assets.tableau_icon, assets.mysql, assets.vscode, assets.figma, assets.git
];
