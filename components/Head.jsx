import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Tejas Athalye is a student, a developer and a data analyst"
      />
      <meta
        name="keywords"
        content="Tejas Athalye, developer, data analyst, web developer, software engineer, data science, machine learning, python, SQL, php, css, data visualization, programming, coding, software development, data analysis, portfolio, web development, technology, full stack developer"
      />
      <meta property="og:title" content="Tejas Athalye's portfolio" />
      <meta
        property="og:description"
        content="Tejas Athalye - Developer and Data Analyst. Crafting digital experiences, building powerful applications, and turning data into actionable insights."
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Tejas Athalye',
};
