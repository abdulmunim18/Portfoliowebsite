'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { skillLogos } from '@/data/skills'

export function SkillsMarquee() {
  return (
    <div className="reference-skills-inner">
      <div className="reference-skills-glow" aria-hidden="true" />
      <div className="reference-skills-top-line" aria-hidden="true" />
      <div className="reference-skills-heading">
        <span aria-hidden="true" />
        <h2>Skills</h2>
        <span aria-hidden="true" />
      </div>
      <div className="reference-skills-marquee" aria-label="Technology skills">
        <Marquee gradient={false} speed={80} pauseOnHover pauseOnClick delay={0} play direction="left">
          {skillLogos.map((skill) => (
            <div className="reference-skill-item" key={skill.name}>
              <div className="reference-skill-card">
                <div className="reference-skill-card-line" aria-hidden="true" />
                <div className="reference-skill-card-content">
                  <div className="reference-skill-logo">
                    <Image src={skill.image} alt={skill.name} width={40} height={40} style={{ width: 'auto', height: '100%' }} />
                  </div>
                  <p>{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}
