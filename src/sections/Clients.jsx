// import React from 'react'
// import {clientReviews} from "../constants/index.js";
//
// const Clients = () => {
//     return (
//         <section className="c-space my-20">
//             <h3 className="head-text">Hear from My Clients</h3>
//
//             <div className="client-container">
//                 {clientReviews.map(({id, name, review, img, position}) => (
//                     <div key={id} className="client-review">
//                         <div>
//                             <p className="text-white font-light">{review}</p>
//                             <div className="client-content">
//                                 <div className="flex gap-3">
//                                     <img src={img} alt={name} className="w-12
//                                     h-12 rounded-full" />
//                                     <div className="flex flex-col">
//                                         <p className="font-semibold text-white-800">{name}</p>
//                                         <p className="text-white-500 md:text-base text-sm">{position}</p>
//                                     </div>
//                                 </div>
//
//                                 <div className="flex self-end items-center gap-2">
//                                     {Array.from({length:5}).map((_, index) =>(
//                                         <img key={index} src="/assets/star.png" alt="star" className="w-5 h-5"/>
//                                     ))}
//
//                                 </div>
//
//                             </div>
//                         </div>
//
//
//                     </div>
//                 ))}
//
//             </div>
//         </section>
//     )
// }
// export default Clients


import React from 'react';
import { skills } from "../constants/index.js";

const Clients = () => {
    return (
        <section className="c-space my-20">
            <h3 className="head-text">My Skills</h3>

            <div className="skills-container">

                <div className="grid xl:grid-cols-2 xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                    {skills.map((category, index) => (
                        <div key={index} className="col-span-1 xl:row-span-3">
                            <div className="grid-container-2">
                                <h5 className="category-title text-center">{category.category}</h5>
                                <div className="skills-list">
                                    {category.skills.map(({id, skill, level}) => (
                                        <div key={id} className="skill-item">
                                            <div className="flex items-center gap-3">
                                                <img src="/assets/star.png" alt="star" className="w-6 h-6"/>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold text-white-800">{skill}</p>
                                                    <p className="text-white-500 text-sm">{level}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Clients;
