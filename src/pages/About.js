import MissionCard from '../components/MissionCard';
import story from '../Assets/story.svg';
import Team from '../components/Team';
import team1 from '../Assets/team1.svg';
import team2 from '../Assets/team2.svg';
import team3 from '../Assets/team3.svg';
import team4 from '../Assets/team4.svg';
import mission from '../Assets/mission.svg';
import vision from '../Assets/vision.svg';
import silfrica from '../Assets/silfrica.svg';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <section className="container mx-auto mt-10 view px-4 md:px-0 relative overflow-x-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>

      <div className="mb-20">
        <MissionCard
          image={story}
          title="Our Story"
          text="In all sectors, we are bringing a new narrative of education to the forefront of the technological, industrial, and economic revolution. We are giving our creative minds the platform to reach the world. Finally, we have an answer: education is the key.
"
        />
      </div>
      <div className="grid place-items-center mb-20">
        <h1 className="text-3xl font-bold mb-10">Meet our team</h1>
        <div className="flex justify-between space-x-5 w-full absolute overflow-x-scroll md:relative lg:overflow-x-hidden overscroll-none">
          <div className="mt-52 md:mt-0 transform translate-x-1 lg:translate-x-0">
            <Team
              image={team1}
              name="Reward Perfection"
              position="FOUNDER, CEO"
            />
          </div>
          <div className="mt-52 md:mt-0 transform translate-x-2 lg:translate-x-0">
            <Team
              image={team2}
              name="Reward Perfection"
              position="FOUNDER, CEO"
            />
          </div>
          <div className="mt-52 md:mt-0 transform translate-x-3 lg:translate-x-0">
            <Team
              image={team3}
              name="Reward Perfection"
              position="FOUNDER, CEO"
            />
          </div>
          <div className="mt-52 md:mt-0 transform translate-x-4 lg:translate-x-0">
            <Team
              image={team4}
              name="Reward Perfection"
              position="FOUNDER, CEO"
            />
          </div>
        </div>
      </div>
      <div className="mb-20 mt-52 md:mt-0">
        <MissionCard
          left
          title="Our Mission"
          text="Our goal is to create digital economic ecosystems where businesses, academic institutions, and other stakeholders can seamlessly interact to seize new opportunities and strengthen innovation."
          image={mission}
        />
        <MissionCard
          title="Our Vision"
          text="To bring a new narrative of education to the forefront of the technological, industrial, and economic revolution with the undergraduate community as the primary driver."
          image={vision}
        />
        <MissionCard
          left
          title="Awards"
          text="Winner 2022 Sterling bank HEART pichathon in collaboration with Founder’s Institute"
          image={silfrica}
        />
      </div>
      <div className="grid place-items-center mb-20">
        <h3 className="text-3xl font-bold mb-6">Get in touch</h3>
        <button className="btn bg-bgColor-400 w-full md:w-96 px-8 py-2 text-white rounded-full full hover:bg-bgColor-100 hover:text-bgColor-400 border border-bgColor-400 transition-all duration-300 ease-linear">
          Learn now
        </button>
      </div>
    </section>
  );
};

export default About;
