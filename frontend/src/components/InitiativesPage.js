import React from "react";
import Manifesto from "./Manifesto";
function InitiativesPage() {
  return (
    <div className="container initiatives-page">
      <h1 className="text-center page-title">Initiatives of Mehraj Malik</h1>

      {/* Electricity Section */}
      <div className="initiative-section">
        <h2>Electricity for All</h2>
        <p>
          During my tenure, I ensured that the people of my constituency had
          access to electricity, even in the remotest hilly areas. With the
          installation of new transformers and the modernization of the electric
          grid, I successfully brought light to homes that had been in darkness
          for decades. This initiative has empowered families, students, and
          businesses by providing them with consistent and reliable energy.
        </p>
      </div>

      {/* Water Supply Section */}
      <div className="initiative-section">
        <h2>Improved Water Supply</h2>
        <p>
          Access to clean drinking water is a fundamental right, and I have
          taken strong steps to improve the water supply infrastructure. By
          installing new water pipelines and constructing reservoirs, I have
          ensured that every household in the constituency gets access to clean,
          safe drinking water. This initiative is especially important in the
          hilly areas where water scarcity was once a severe issue.
        </p>
      </div>

      {/* Education System Section */}
      <div className="initiative-section">
        <h2>Advancement in Education</h2>
        <p>
          Education has always been a top priority for me. I have worked
          relentlessly to upgrade the educational infrastructure by constructing
          modern schools, ensuring well-trained teachers, and providing
          scholarships to deserving students. Through these efforts, I have
          brought the education system of our constituency to a new level,
          giving our children the opportunity to succeed and compete at a global
          level.
        </p>
      </div>

      {/* Roads Infrastructure Section */}
      <div className="initiative-section">
        <h2>Roads Development</h2>
        <p>
          The constituency, being a hilly area, was once plagued by poor road
          conditions. I spearheaded the blacktopping of roads, connecting
          villages with major cities and improving the overall infrastructure.
          This has not only reduced travel time but has also made it easier for
          people to access hospitals, schools, and markets. The improvement in
          road infrastructure has also boosted tourism, creating job
          opportunities for locals.
        </p>
      </div>

      {/* Anti-Corruption Section */}
      <div className="initiative-section">
        <h2>Fighting Corruption</h2>
        <p>
          I have dedicated my political career to making the constituency a
          corruption-free zone. Through transparent governance and strict
          oversight, I have ensured that public funds are used for the benefit
          of the people. This has built trust among the citizens and has given
          them confidence that their voices are being heard and respected.
        </p>
      </div>

      {/* Voice of the Poor Section */}
      <div className="initiative-section">
        <h2>Voice of the Poor</h2>
        <p>
          I have always stood by the marginalized and underprivileged in our
          society. By addressing their concerns and providing them with access
          to basic amenities like education, healthcare, and financial support,
          I have become the voice of the poor. My efforts continue to focus on
          uplifting the most vulnerable sections of our community.
        </p>
      </div>
      <Manifesto />
      {/* Manifesto Section */}
    </div>
  );
}

export default InitiativesPage;
