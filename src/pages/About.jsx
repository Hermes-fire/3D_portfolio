import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { CTA } from '../components';
import { experiences, techStack } from '../constants';

import 'react-vertical-timeline-component/style.min.css';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{' '}
        <span className="blue-orange-gradient_text font-semibold drop-shadow"> Amine</span> 👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Full Stack Developer based in Morocco with over 4 years of experience, specializing in
          creating interactive and scalable web applications using React and Node.js.
        </p>
        <p>
          Experienced in delivering tailored solutions for clients across Morocco, France, and the
          UAE, including organizations like MIRAL, KONFIGEAR, and WINNERS CLUB.
        </p>
        <p>
          Currently, a key contributor to BCSolutions' R&D team, focusing on the development and
          maintenance of eas'Invoice, a sophisticated e-invoicing web platform.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Stack</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {techStack.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name} title={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with multiple companies, both in freelance and full-time roles, leveling up
            my skills and teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={(experience.company_name + '_', index)}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    {experience.icon ? (
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    ) : null}
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}>
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium text-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
