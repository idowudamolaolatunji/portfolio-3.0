"use client";
import React from 'react'
import ProjectFigure from './ProjectFigure';
import quicka from '../assets/images/resources/quicka.png';
import build_spire from '../assets/images/resources/build_spire.png';
import passpro from '../assets/images/resources/passpro.png';
import gifta from '../assets/images/resources/gifta_dashboard.png';
import clubmerce from '../assets/images/resources/clubmerce.png';

function ProjectSection() {
    return (
        <section className='section project__section' id='project'>
            <div className="container">
                <div className="section__title-box">
                    <h3 className="section__title">Project</h3>
                    <p className="section__subtitle">My past projects worked on</p>
                </div>

                <div className="project--container">
                    <ProjectFigure
                        title="Passpro Africa"
                        text="PassPro is more than just ticketing, events can get better with PassPro. Whether you’re booking tickets for concerts, conferences, sports events, or festivals, Passpro makes it easy for you to explore, select, and secure your spot at your favorite experiences."
                        imageSrc={passpro} 
                        index={0}
                        linkDemo="https://organizer.passpro.africa/"
                        linkGithub={["https://github.com/idowudamolaolatunji/web-passpro.git"]}
                    />
                    
                    <ProjectFigure
                        title="Quicka"
                        text={`Quicka is an all-in-one business software that allows you to operate an online store. Through the platform, you can build your website with multiple theme option and premium drag-and-drop website builder, manage products, inventory and customer, create and calculate delivery rates, run sales, coupon & discounts, track and record sales, real time analytics, sell across multiple channels and more.`}
                        imageSrc={quicka} 
                        index={1}
                        fullStack={true}
                        linkDemo="https://web-app-getquick.vercel.app/"
                        linkGithub={[
                            "https://github.com/idowudamolaolatunji/web-app-getquick.git",
                            "https://github.com/idowudamolaolatunji/api-getquicka.git"
                        ]}
                    />

                    <ProjectFigure
                        title="Buildspire Ng"
                        text="Buildspire Ng is a IT & software agency that partners with businesses and individuals to drive growth and success, making businesses more efficient and innovative with software solution."
                        imageSrc={build_spire} 
                        index={2}
                        linkDemo="https://buildspire.vercel.app/"
                        linkGithub={["https://github.com/idowudamolaolatunji/software-agency.git"]}
                    />

                    <ProjectFigure
                        title="Gifta"
                        text="With innovative features like personalized wishlists, gift recommendations, and reminder to track important occasions, Gifta ensures that finding the perfect gift is as enjoyable as giving it. Build with React.js, Node.js, Express.js, MongoDb and mongoose."
                        imageSrc={gifta} 
                        index={3}
                        fullStack
                        linkDemo="https://app.getgifta.com/"
                        linkGithub={[
                            "https://github.com/idowudamolaolatunji/dashboard-getgifta.git",
                            "https://github.com/idowudamolaolatunji/api-getgifta.git"
                        ]}
                    />
                    <ProjectFigure
                        title="Clubemerce"
                        text="Clubmerce affiliate marketing platform, the exciting world of passive income how to leverage it through affiliate marketing. Whether you're a beginner seeking to start your online business or an experienced marketer looking to expand your revenue streams. Built with Node.js, Express.js, MongoDb mongoose, and PUG"
                        imageSrc={clubmerce} 
                        index={4}
                        linkDemo="https://clubemerce.com/"
                        linkGithub={["https://github.com/idowudamolaolatunji/Clubmerce-Affiliate-Marketing-Platform.git"]}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProjectSection