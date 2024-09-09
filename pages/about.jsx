import styles from '../styles/HomePage.module.css';

const AboutPage = () => {
  return (
    <>
      <h2>A Little Bit About Me</h2>
      <br /><br />
      <p> Driven Computer Engineering student seeking an entry-level AI/ML role. Proficient in Python, Java, C++, and cloud technologies. Eager to apply technical skills to real-world projects, expand knowledge through advanced studies, and collaborate with experienced professionals. Passionate about solving complex problems and contributing to innovative AI/ML solutions.</p>
      <br />
      <p>I believe in: "The more you know, the more you realize how much less you know." This fosters my learning curve and motivates me to develop my knowledge and skills, and be a better version of myself through continuous learning.</p>
      <br />
      <p>Besides, I love to do pencil sketching. This also teaches me to grow continuously and contribute to the art and sketchers community. Alongside, I have also a deep passion for travel photography and trekking. One of my biggest aspirations is to climb Mt. K2 with the determination to conquer challenging goals</p>
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
