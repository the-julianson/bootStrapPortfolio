import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content'

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi, my name is Julian. I'am following a path to become a full stack engineer with experience in JavaScript, React, Django, Flask, PostgreSQL.</p>

                <p>I am an entrepeneur and have been working with the mindset for the last years of my life. Your project will get this mindset as well (and no extra Fees!) </p>
            
                <p>Found myself constantly seeking knowledge. Currently working on gaining more experience in React, Node JS, Express JS and Python for Data Science. </p>

                <p>I just LOVE building awesome stuff and I feel blessed that I can dot that using my imagination and a computer!</p>

                <p>In my free time, I train in the gym and go to the mountains to practice rock climbing.</p>

                <p>You can mail me of course, or you can just follow me in  <a href="https://www.instagram.com/the_julianson/" target="_blank" rel="noopener noreferrer">Instagram.</a> </p>
            </Content>

        </div>
    )

}
export default AboutPage