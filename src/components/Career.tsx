import './styles/Career.css'

const Career = () => {
  return (
    <div className='career-section section-container'>
      <div className='career-container'>
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className='career-info'>
          <div className='career-timeline'>
            <div className='career-dot'></div>
          </div>
          <div className='career-info-box'>
            <div className='career-info-in'>
              <div className='career-role'>
                <h4>ClassEdge Co-ordinator</h4>
                <h5>Tata ClassEdge</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Built 6+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className='career-info-box'>
            <div className='career-info-in'>
              <div className='career-role'>
                <h4>Central Coordination Cell</h4>
                <h5>SGT University</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led two development teams on Macro, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices.
            </p>
          </div>
          <div className='career-info-box'>
            <div className='career-info-in'>
              <div className='career-role'>
                <h4>Software Developer & Founder</h4>
                <h5>TulSip Media</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Founder of TulSip Media, a start-up company with a mission of
              "Local Brands. Global Voices". As a software developer and
              founder, I bridge the gap between advanced software framework logic
              and technical performance marketing. We don't build generic
              social media campaigns or chase transient, surface-level vanity
              metrics like cheap likes and empty reach. We design and install
              unyielding Revenue Architecture for high-ticket B2B companies,
              startups, and scaling D2C brands. Operating in an era where
              traditional keyword search links are collapsing and conversational
              AI search engines (ChatGPT, Perplexity, Gemini) are dictating the
              consumer buying journey, I scale companies using GEO (Generative
              Engine Optimization) and automated backend conversion
              infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
