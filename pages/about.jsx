import styles from '../styles/HomePage.module.css';

const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <br /><br />
      <p>Highly motivated Computer Engineering student with a passion for data science, machine learning, and cloud computing. Skilled in programming, data analysis, and visualization, with strong problem-solving and critical thinking abilities. Seeking to leverage my expertise in developing innovative solutions, and my effective communication and leadership skills, to contribute to a dynamic team in a challenging and growth-oriented environment.</p>
      <br />
      <p>I have a deep passion for travel photography, using my journeys as inspiration to create compelling visual content. Alongside photography, I find joy in expressing creativity through pencil sketches, infusing detail and imagination into my artwork. One of my biggest aspirations is to climb Mt. K2, fueled by a sense of adventure and a determination to conquer challenging goals. These interests reflect my adventurous spirit, creative mindset, and dedication to personal growth and achievement.</p>
      <br />
      <p>Beyond my professional pursuits, I am an avid sports enthusiast and a three-time Maharashtra state Gold medalist in Karate. Competing in the National Games thrice has taught me perseverance, focus, and discipline—qualities I bring to all areas of my life and work.</p>
      <br /><br />
      <button className={styles.button} onClick={() => window.open('/resume.pdf', '_blank')}>Resume</button>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
