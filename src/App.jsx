import './index.css'

function App() {

  return (
    <main className="page">
        <header className="mast">
          <div className="title">
            <h1>Five ways I used AI to elevate revenue management and strategy</h1>
          <div className="title-divider"></div>
          <div className="title-signature-card">
            <div className="title-author-wrapper">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQHaEfaaLcw8cg/profile-displayphoto-shrink_200_200/B56Zc88YjKGoAc-/0/1749074153088?e=2147483647&v=beta&t=ObcrBbWBKNUi7CwutC7Q9T5xlh5cGYHjrkeI8RIVIPU" 
                alt="Brittany Schilling" 
                className="title-author-image"
              />
              <div className="title-author-info">
                <span className="title-author">Brittany Schilling</span>
                <span className="title-author-role">Regional Revenue Manager</span>
              </div>
            </div>
            <div className="title-signature-divider"></div>
            <img 
              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_vq9wmdfu/def_height/2700/def_width/2700/version/100012/type/1" 
              alt="Pacific Hospitality Group" 
              className="title-company-image"
            />
          </div>
          </div>
        </header>

      <section className="hero-summary">
        <div className="hero-header">
          <h2 className="hero-title">Quick View</h2>
          <div className="hero-total">
            <div className="hero-total-label">Total Time Saved</div>
            <div className="hero-total-value">13.5-16.5 hours/week</div>
            <p className="note">Estimates reflect average weeks and will vary with promo cadence and forecast cycles.</p>
          </div>
        </div>
        <div className="hero-grid">
          <div className="hero-item">
            <div className="hero-number">01</div>
            <div className="hero-content">
              <div className="hero-name">Hotel promo and rate loading builder</div>
              <div className="hero-description">Streamlined creation and organization of hotel promotions and business travel rate offers</div>
              <div className="hero-metrics">
                <div className="hero-time-wrapper">
                  <span className="hero-time-label">Time Savings:</span>
                  <span className="hero-time">3 hours/week</span>
                </div>
                <span className="hero-stat">2× faster</span>
              </div>
            </div>
          </div>
          <div className="hero-item">
            <div className="hero-number">02</div>
            <div className="hero-content">
              <div className="hero-name">Rate code scraping tool</div>
              <div className="hero-description">AI-powered browser utility that quickly retrieves rate code data for internal review and competitive analysis</div>
              <div className="hero-metrics">
                <div className="hero-time-wrapper">
                  <span className="hero-time-label">Time Savings:</span>
                  <span className="hero-time">1-2 hours/week</span>
                </div>
                <span className="hero-stat">Only resource of its kind</span>
              </div>
            </div>
          </div>
          <div className="hero-item">
            <div className="hero-number">03</div>
            <div className="hero-content">
              <div className="hero-name">Revenue knowledge growth</div>
              <div className="hero-description">AI-accelerated learning and simplified information access for faster insights</div>
              <div className="hero-metrics">
                <div className="hero-time-wrapper">
                  <span className="hero-time-label">Time Savings:</span>
                  <span className="hero-time">2-3 hours/week</span>
                </div>
                <span className="hero-stat">50% faster ramp</span>
              </div>
            </div>
          </div>
          <div className="hero-item">
            <div className="hero-number">04</div>
            <div className="hero-content">
              <div className="hero-name">Rate offer content creation and communication</div>
              <div className="hero-description">AI-powered content creation for on-brand promotional offers and guest communications</div>
              <div className="hero-metrics">
                <div className="hero-time-wrapper">
                  <span className="hero-time-label">Time Savings:</span>
                  <span className="hero-time">1-2 hours/week</span>
                </div>
                <span className="hero-stat">Faster content</span>
              </div>
            </div>
          </div>
          <div className="hero-item">
            <div className="hero-number">05</div>
            <div className="hero-content">
              <div className="hero-name">Revenue and forecasting intelligence GPT <span className="status-badge">[IN PROGRESS]</span></div>
              <div className="hero-description">Forecast Navigator GPT that integrates historical and forward-looking data for improved forecast accuracy (in progress of building...)</div>
              <div className="hero-metrics">
                <div className="hero-time-wrapper">
                  <span className="hero-time-label">Time Savings:</span>
                  <span className="hero-time">5 Hours/Bi-Weekly</span>
                </div>
                <span className="hero-stat-inline">Quick review and data implementation</span>
              </div>
            </div>
          </div>
          <div className="hero-item hero-bonus">
            <div className="hero-number">BONUS</div>
            <div className="hero-content">
              <div className="hero-name">Agent mode for quick web scans</div>
              <div className="hero-description">Automated agent runs that collect rate examples, events, and competitor snapshots in one pass</div>
              <div className="hero-metrics">
                <div className="hero-time-wrapper">
                  <span className="hero-time-label">Time Savings:</span>
                  <span className="hero-time">4 hours/week</span>
                </div>
                <span className="hero-stat">More checks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="grid">
          {/* 1 */}
          <article className="card">
          <div className="card-sidebar">
            <div className="card-number">01</div>
            <div className="time-saved">
              <div className="time-number">3</div>
              <div className="time-unit">hours</div>
              <div className="time-period">saved per week</div>
            </div>
            <div className="sidebar-stats">
              <div className="stat-item">
                <div className="stat-value">2×</div>
                <div className="stat-label">Faster</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">30-40%</div>
                <div className="stat-label">Fewer errors</div>
              </div>
            </div>
            <div className="card-category">
              <svg className="category-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>Clean load packs and aligned team communication</span>
            </div>
          </div>
          <div className="card-content">
            <h2>Hotel promo and rate loading builder</h2>
            <p className="card-description">Streamlined creation and organization of hotel promotions and business travel rate offers</p>
            <div className="card-body">
              <p>I developed a customized GPT that streamlined the creation and organization of hotel promotions and business travel rate offers. This AI-driven process supported demand-generating strategies, managed the rate-loading workflow, and maintained consistent communication across teams.</p>
              <p>The result was greater efficiency, faster turnaround, and improved coordination when sharing promotions and rate details.</p>
            </div>
            <div className="card-results">
              <div className="result-item">
                <div className="result-label">Productivity difference</div>
                <div className="result-text">2× faster creation with 30–40% fewer corrections and improved cross-team visibility</div>
              </div>
              <div className="result-item">
                <div className="result-label">Extra learning and growth</div>
                <div className="result-text">Clearer templates for future promotions with future potential to upload Marriott's Rate Rules and Guidelines to assist with accuracy</div>
              </div>
            </div>
          </div>
          </article>

          {/* 2 */}
          <article className="card">
          <div className="card-sidebar">
            <div className="card-number">02</div>
            <div className="time-saved">
              <div className="time-number">1-2</div>
              <div className="time-unit">hours</div>
              <div className="time-period">saved per week</div>
            </div>
            <div className="sidebar-stats">
              <div className="stat-item">
                <div className="stat-value">🔍</div>
                <div className="stat-label">Reveals rate codes</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">⭐</div>
                <div className="stat-label">Only resource of its kind</div>
              </div>
            </div>
            <div className="card-category">
              <svg className="category-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 5h14v14H5z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>One click comp and parity sweeps</span>
            </div>
          </div>
          <div className="card-content">
            <h2>Rate code scraping tool</h2>
            <p className="card-description">AI-powered browser utility that quickly retrieves rate code data for internal review and competitive analysis</p>
            <div className="card-body">
              <p>I developed an AI-powered rate-code scraping tool built as a browser-based bookmark utility. The tool quickly retrieves rate code data, helping clarify offer structures, ensure proper rate loading, maintain parity, and reveal competitor promo offer codes. My husband helped with using JavaScript to access API data from Marriott.com and Hyatt.com. This data was previously accessible on Marriott.com, but was recently removed at the end of Q2 during their web update, making this tool necessary.</p>
            </div>
            <div className="card-results">
              <div className="result-item">
                <div className="result-label">Productivity difference</div>
                <div className="result-text">Unique tool that streamlines rate code research and offer analysis</div>
              </div>
              <div className="result-item">
                <div className="result-label">Extra learning and growth</div>
                <div className="result-text">Practical exposure to page structure and utility scripting</div>
              </div>
            </div>
          </div>
          </article>

          {/* 3 */}
          <article className="card">
          <div className="card-sidebar">
            <div className="card-number">03</div>
            <div className="time-saved">
              <div className="time-number">2-3</div>
              <div className="time-unit">hours</div>
              <div className="time-period">saved per week</div>
            </div>
            <div className="sidebar-stats">
              <div className="stat-item">
                <div className="stat-value">50%</div>
                <div className="stat-label">Faster ramp</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">∞</div>
                <div className="stat-label">Deeper insights</div>
              </div>
            </div>
            <div className="card-category">
              <svg className="category-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 8l8-3 8 3-8 3-8-3z" stroke="currentColor" strokeWidth="2"/>
                <path d="M4 12l8 3 8-3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Study and research coach for reports and standards</span>
            </div>
          </div>
          <div className="card-content">
            <h2>Revenue knowledge growth</h2>
            <p className="card-description">AI-accelerated learning and simplified information access for faster insights</p>
            <div className="card-body">
              <p>I leveraged AI to accelerate my learning and simplify information access. By referencing internal SOPs, policies, brand standards, and training resources, the system helped quickly find accurate information.</p>
              <p>It also interpreted STR and Demand 360 reports to deliver deeper insights into market performance, competitive positioning, and weekly performance shifts, enabling more informed, data-driven decisions and assisted in communicating these insights.</p>
            </div>
            <div className="card-results">
              <div className="result-item">
                <div className="result-label">Productivity difference</div>
                <div className="result-text">Customized learning that accelerates understanding and streamlines data communication after review</div>
              </div>
              <div className="result-item">
                <div className="result-label">Extra learning and growth</div>
                <div className="result-text">Deeper intuition for pricing levers and clearer narratives for stakeholders</div>
              </div>
            </div>
          </div>
          </article>

          {/* 4 */}
          <article className="card">
          <div className="card-sidebar">
            <div className="card-number">04</div>
            <div className="time-saved">
              <div className="time-number">1-2</div>
              <div className="time-unit">hours</div>
              <div className="time-period">saved per week</div>
            </div>
            <div className="sidebar-stats">
              <div className="stat-item">
                <div className="stat-value">⚡</div>
                <div className="stat-label">Faster content</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">✓</div>
                <div className="stat-label">Brand aligned</div>
              </div>
            </div>
            <div className="card-category">
              <svg className="category-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 10v4l6 3V7L4 10z" stroke="currentColor" strokeWidth="2"/>
                <path d="M10 8l8-3v14l-8-3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Hotel Tag Line and Rate Fact builder</span>
            </div>
          </div>
          <div className="card-content">
            <h2>Rate offer content creation and communication</h2>
            <p className="card-description">AI-powered content creation for on-brand promotional offers and guest communications</p>
            <div className="card-body">
              <p>I utilized AI to assist in the marketing details of promotional offers by building a Hotel Tag Line Builder GPT to develop promo titles and rate details that were eye-catching and appealing to guests while remaining on-brand and consistent.</p>
              <p>I also leveraged AI when creating pre-arrival emails and guest content.</p>
            </div>
            <div className="card-results">
              <div className="result-item">
                <div className="result-label">Productivity difference</div>
                <div className="result-text">Faster content creation with stronger brand consistency and quick suggestions for campaign variations</div>
              </div>
              <div className="result-item">
                <div className="result-label">Extra learning and growth</div>
                <div className="result-text">Better persuasive writing and reusable message blocks for future campaigns</div>
              </div>
            </div>
          </div>
          </article>

          {/* 5 */}
          <article className="card">
          <div className="card-sidebar">
            <div className="card-number">05</div>
            <div className="time-saved">
              <div className="time-number">5</div>
              <div className="time-unit">Hours</div>
              <div className="time-period">Bi-Weekly</div>
            </div>
            <div className="sidebar-stats">
              <div className="stat-item">
                <div className="stat-value">⚡</div>
                <div className="stat-label">Quick review and data implementation</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">↓</div>
                <div className="stat-label">Fewer reconciles</div>
              </div>
            </div>
            <div className="card-category">
              <svg className="category-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 18l4-5 3 3 5-7 4 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 20h16" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <span>Navigator that aligns OneYield with ProfitSage</span>
            </div>
          </div>
          <div className="card-content">
            <h2>Revenue and forecasting intelligence GPT <span className="status-badge">[IN PROGRESS]</span></h2>
            <p className="card-description">Forecast Navigator GPT to integrate historical and forward-looking data for improved forecast accuracy (in progress of building...)</p>
            <div className="card-body">
              <p>I started to build a Forecast Navigator GPT to integrate historical and forward-looking data in an attempt to assist in forecast accuracy. By connecting insights from One Yield's forecasting tools with Profitsage's reporting systems, the goal was to streamline data analysis and projection.</p>
              <p>This would allow faster, more precise forecasting for both transient and group segments, empowering timely, informed decisions that maximized profitability.</p>
            </div>
            <div className="card-results">
              <div className="result-item">
                <div className="result-label">Productivity difference</div>
                <div className="result-text">Quicker data review with clear deltas by segment and fewer manual reconciles</div>
              </div>
              <div className="result-item">
                <div className="result-label">Extra learning and growth</div>
                <div className="result-text">Tighter link and understanding between demand drivers and forecast choices</div>
              </div>
            </div>
          </div>
          </article>

          {/* 6 bonus */}
        <article className="card card-bonus">
          <div className="card-sidebar">
            <div className="card-number">BONUS</div>
            <div className="time-saved">
              <div className="time-number">4</div>
              <div className="time-unit">hours</div>
              <div className="time-period">saved per week</div>
            </div>
            <div className="sidebar-stats">
              <div className="stat-item">
                <div className="stat-value">↑</div>
                <div className="stat-label">More checks</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">📋</div>
                <div className="stat-label">Tidy notes</div>
              </div>
            </div>
            <div className="card-category">
              <svg className="category-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Faster comp rate and market pulse checks</span>
            </div>
          </div>
          <div className="card-content">
            <h2>Agent mode for quick web scans</h2>
            <p className="card-description">Automated agent runs that collect rate examples, events, and competitor snapshots in one pass</p>
            <div className="card-body">
              <p>I use agent-style runs to collect rate examples, events, and competitor snapshots in one pass, then capture the sources so follow-up is simple.</p>
            </div>
            <div className="card-results">
              <div className="result-item">
                <div className="result-label">Productivity difference</div>
                <div className="result-text">Quicker data research with tidy source notes that support faster action</div>
              </div>
              <div className="result-item">
                <div className="result-label">Extra learning and growth</div>
                <div className="result-text">Clearer view of competitor strategies and seasonal patterns across properties, with future potential to assist in parity research</div>
              </div>
            </div>
          </div>
          </article>
        </section>

        <section className="footer">
        <div className="sig">
          <span>Prepared by</span>
          <span className="sig-name">Brittany Schilling</span>
          <span className="sig-separator">|</span>
          <span className="sig-title">Regional Revenue Manager</span>
        </div>
          <div className="cheeky">I also used ChatGPT to help me with creating this easy to digest top five list of AI uses as a Pacific Hospitality Group Revenue Manager</div>
        </section>
      </main>
  )
}

export default App
