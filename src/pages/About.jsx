import React from 'react'
import { skills } from '../constants'

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold
        drop-shadow">Giorgio</span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
          <p>Α software developer on a perpetual quest for knowledge 
            (and the perfect cup of coffee). While still a student,
             I've already tackled a variety of projects and can't wait to dive into even more.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20">
                <div>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default About