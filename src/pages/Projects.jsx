import { Link } from 'react-router-dom';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { CTA } from '../components';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My <span className="blue-orange-gradient_text drop-shadow font-semibold">Projects</span>
      </h1>
      <div className="my-4">
        <p className="text-slate-500 mt-2 leading-relaxed">
          I’ve embarked on a variety of impactful projects throughout my career, spanning multiple
          industries and regions. Each project has offered unique challenges and invaluable learning
          experiences—from developing advanced front-end interfaces and robust back-end systems to
          handling some DevOps tasks that shaped me into a versatile full-stack developer.
        </p>
        <p className="text-slate-500 mt-2 leading-relaxed">
          This blend of expertise enables me to quickly adapt to new technologies and deliver
          efficient, user-centered solutions tailored to diverse client needs.
        </p>
        <p className="text-slate-500 mt-2 leading-relaxed">
          Discover below some of the projects I’ve had the opportunity to work on:
        </p>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-2">
        {projects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold mb-1">{project.name}</h4>
              <Carousel key={`slider-${index}`} showArrows={true} showThumbs={false}>
                {project.imageList?.map((img, imgIndex) => (
                  <div key={`slider-img-${index}-${imgIndex}`}>
                    <img src={img} alt={`image-${project.name}-${index}`} />
                  </div>
                ))}
              </Carousel>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="flex gap-4">
                {project?.linkList?.length > 0 &&
                  project.linkList.map((link, linkIndex) => (
                    <div
                      className="mt-5 flex items-center gap-2 font-poppins"
                      key={`Link_${linkIndex}`}>
                      <Link
                        to={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600">
                        Link {`${linkIndex + 1}`}
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 mt-4" />

      <CTA />
    </section>
  );
};

export default Projects;
