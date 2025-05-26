import React from "react";
// Import your actual project images here, replace mocks
import mjWebAppImg from '../assets/images/mj-web-app.jpg'; 
import mjAndroidAppImg from '../assets/images/mj-android-app.png'; 
import garbageClassifierImg from '../assets/images/garbage-classifier.png';
import deforestationStudyImg from '../assets/images/deforestation-study.png'; 
import calgaryTrafficAnalysisImg from '../assets/images/calgary-traffic-analysis.png';
import hkTaximeterImg from '../assets/images/hk-taximeter.png'; // Add this new import
import { Chip } from '@mui/material'; // Import Chip component

import '../assets/styles/Project.scss';

// Define tech stacks for each project
const mjWebTechStack = [
    "React", "Vite", "NestJS", "TypeScript", "PostgreSQL", 
    "TypeORM", "Docker", "AWS", "GitHub Actions"
];

const garbageClassifierTechStack = [
    "Python", "PyTorch", "Transformers Library", 
    "NLTK", "DistilBERT", "RegNet"
];

const mjAndroidTechStack = [
    "Java", "Android SDK", "XML", "AdMob"
];

const deforestationTechStack = [
    "Python", "ArcGIS Pro", "GDAL/OGR", 
    "Scikit-learn", "cuML", "Pandas"
];

const calgaryTrafficTechStack = [
    "Python", "GeoPandas", "Scikit-learn", 
    "Pandas", "NumPy", "Matplotlib"
];

// Add tech stack for HK Taximeter
const hkTaximeterTechStack = [
    "React", "Tailwind CSS", "Vite", "Geolocation API", 
    "Haversine Formula", "JavaScript", "CSS3", "HTML5"
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Selected Projects</h1> {/* Changed title */}
        <div className="projects-grid">

            {/* Personal Project: Hong Kong Taxi Meter */}
            <div className="project">
                <a href="https://likayiu.me/hktaximeter/" target="_blank" rel="noreferrer">
                    <div className="project-image-container">
                        <img src={hkTaximeterImg} className="zoom" alt="Hong Kong Taxi Meter Application" />
                    </div>
                </a>
                <a href="https://likayiu.me/hktaximeter/" target="_blank" rel="noreferrer">
                    <h2>Hong Kong Taxi Meter</h2>
                </a>
                <p>
                    <strong>Personal Project (2025):</strong> A modern, web-based taxi meter application that simulates the official Hong Kong taxi fare calculation system. <br />
                    <strong>Features:</strong> GPS tracking for accurate distance measurement, 
                    realistic digital display using 7-segment font, precise fare calculation based on latest rates, 
                    and extras calculation for toll fees and surcharges.
                </p>
                <div className="flex-chips">
                    <span className="chip-title">Key Tech:</span>
                    {hkTaximeterTechStack.map((tech, index) => (
                        <Chip key={index} className='chip' label={tech} />
                    ))}
                </div>
            </div>

            {/* Personal Project: Mahjong Score Calculation - Web */}
            <div className="project">
                <a href="https://likayiu.me/mjkit-frontend/" target="_blank" rel="noreferrer">
                    <div className="project-image-container">
                        <img src={mjWebAppImg} className="zoom" alt="Mahjong Score Calculation Web App" />
                    </div>
                </a>
                <a href="https://likayiu.me/mjkit-frontend/" target="_blank" rel="noreferrer">
                    <h2>Mahjong Score Calculation - Web</h2>
                </a>
                <p>
                    <strong>Personal Project:</strong> Full-stack web application to automate Mahjong scorekeeping. <br />
                    <strong>Features:</strong> Dynamic scoring engine, configurable rules, JWT-based multi-token auth, real-time score preview.
                </p>
                <div className="flex-chips">
                    <span className="chip-title">Key Tech:</span>
                    {mjWebTechStack.map((tech, index) => (
                        <Chip key={index} className='chip' label={tech} />
                    ))}
                </div>
            </div>

            {/* Course Project: Multimodal Garbage Classification System */}
            <div className="project">
                <a href="https://github.com/KayiuTommyLI/ENEL645_Fall_2024_Proj" target="_blank" rel="noreferrer">
                    <div className="project-image-container">
                        <img src={garbageClassifierImg} className="zoom" alt="Multimodal Garbage Classification System" />
                    </div>
                </a>
                <a href="https://github.com/KayiuTommyLI/ENEL645_Fall_2024_Proj" target="_blank" rel="noreferrer">
                    <h2>Multimodal Garbage Classification System</h2>
                </a>
                <p>
                    <strong>Course Project (M.Eng - ENEL645, 2024):</strong> Developed a system classifying garbage using combined image (CNN) and text (Transformer) data. <br />
                    <strong>My Role:</strong> All coding, implementation, experimentation, and results generation. <br />
                    Achieved 87.1% accuracy.
                </p>
                <div className="flex-chips">
                    <span className="chip-title">Key Tech:</span>
                    {garbageClassifierTechStack.map((tech, index) => (
                        <Chip key={index} className='chip' label={tech} />
                    ))}
                </div>
            </div>


            <div className="project">
                <a href="https://github.com/KayiuTommyLI/ENGO645_Winter_2024_Proj" target="_blank" rel="noreferrer">
                    <div className="project-image-container">
                        <img src={calgaryTrafficAnalysisImg} className="zoom" alt="Data Mining Analysis of Calgary Traffic Safety" />
                    </div>
                </a>
                <a href="https://github.com/KayiuTommyLI/ENGO645_Winter_2024_Proj" target="_blank" rel="noreferrer">
                    <h2>Data Mining Analysis: Calgary Traffic Safety</h2>
                </a>
                <p>
                    <strong>Course Project (M.Eng - ENGO645, 2024):</strong> Investigated the relationship between traffic control infrastructure and incident frequency in Calgary using data mining on Open Calgary spatial datasets.
                    <br />
                    <strong>My Role:</strong> Led the entire technical execution, from data acquisition and extensive preprocessing (spatial joins, feature engineering) to implementing and evaluating classification (Decision Trees, AdaBoost) and clustering (K-Means) models.
                    <br />
                    Identified high-risk traffic zones and provided actionable insights through geovisualizations.
                </p>
                <div className="flex-chips">
                    <span className="chip-title">Key Tech:</span>
                    {calgaryTrafficTechStack.map((tech, index) => (
                        <Chip key={index} className='chip' label={tech} />
                    ))}
                </div>
            </div>

            {/* Course Project: Deforestation Study at Fort McMurray */}
            <div className="project">
                <div className="project-image-container">
                    <img src={deforestationStudyImg} className="zoom" alt="Deforestation Study Fort McMurray" />
                </div>
                <h2>Deforestation Study at Fort McMurray (GIS & ML)</h2>
                <p>
                    <strong>Course Project (M.Eng - ENGG680, 2023):</strong> Analyzed deforestation (2015-2023) using Landsat 8 imagery and Random Forest. <br />
                    <strong>My Role:</strong> Led technical implementation, Python codebase, model training/testing on satellite images.
                </p>
                <div className="flex-chips">
                    <span className="chip-title">Key Tech:</span>
                    {deforestationTechStack.map((tech, index) => (
                        <Chip key={index} className='chip' label={tech} />
                    ))}
                </div>
            </div>

            {/* Personal Project: Mahjong Score Calculation App (Android) */}
            <div className="project">
                <div className="project-image-container">
                    <img src={mjAndroidAppImg} className="zoom" alt="Mahjong Score Calculation Android App" />
                </div>
                <h2>Mahjong Score Calculation App (Android)</h2>
                <p>
                    <strong>Personal Project (2015):</strong> Co-developed a native Android app for Mahjong score calculations and balance tracking. ~1,300 active devices by Dec 2021. <br />
                    <strong>Features:</strong> Configurable rules, ScoreMoney Matrix, custom UI, XML persistence, AdMob integration.
                </p>
                <div className="flex-chips">
                    <span className="chip-title">Key Tech:</span>
                    {mjAndroidTechStack.map((tech, index) => (
                        <Chip key={index} className='chip' label={tech} />
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Project;