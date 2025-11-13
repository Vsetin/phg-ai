import { Link } from 'react-router-dom'
import './EmailVersion.css'

function EmailVersion() {
  return (
    <div className="email-page">
      <div className="email-container">
        {/* Header */}
        <table className="email-header" width="100%" cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <td align="center" style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
              <table width="600" cellPadding="0" cellSpacing="0" border="0" style={{ maxWidth: '100%' }}>
                <tbody>
                <tr>
                  <td align="center">
                    <h1 style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold', 
                      color: '#1a1a1a', 
                      margin: '0 0 20px 0',
                      fontFamily: 'Arial, sans-serif'
                    }}>
                      Five ways I used AI to elevate revenue management and strategy
                    </h1>
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      padding: '16px', 
                      borderRadius: '8px',
                      display: 'inline-block',
                      marginBottom: '20px'
                    }}>
                      <table cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                        <tr>
                          <td style={{ paddingRight: '12px' }}>
                            <img 
                              src="https://media.licdn.com/dms/image/v2/D5603AQHaEfaaLcw8cg/profile-displayphoto-shrink_200_200/B56Zc88YjKGoAc-/0/1749074153088?e=2147483647&v=beta&t=ObcrBbWBKNUi7CwutC7Q9T5xlh5cGYHjrkeI8RIVIPU" 
                              alt="Brittany Schilling" 
                              width="40" 
                              height="40" 
                              style={{ borderRadius: '50%', display: 'block' }}
                            />
                          </td>
                          <td style={{ paddingRight: '12px', verticalAlign: 'middle' }}>
                            <div style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                              Brittany Schilling
                            </div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>
                              Regional Revenue Manager
                            </div>
                          </td>
                          <td style={{ paddingLeft: '12px', verticalAlign: 'middle' }}>
                            <img 
                              src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_vq9wmdfu/def_height/2700/def_width/2700/version/100012/type/1" 
                              alt="Pacific Hospitality Group" 
                              height="56" 
                              style={{ display: 'block' }}
                            />
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>

        {/* Quick View */}
        <table className="email-quick-view" width="100%" cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <td align="center" style={{ padding: '30px 20px', backgroundColor: '#ffffff' }}>
              <table width="600" cellPadding="0" cellSpacing="0" border="0" style={{ maxWidth: '100%' }}>
                <tbody>
                <tr>
                  <td style={{ paddingBottom: '20px', borderBottom: '2px solid #e5e7eb' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                      <tr>
                        <td>
                          <h2 style={{ 
                            fontSize: '18px', 
                            fontWeight: 'bold', 
                            color: '#1a1a1a', 
                            margin: '0',
                            fontFamily: 'Arial, sans-serif',
                            textTransform: 'uppercase'
                          }}>
                            Quick View
                          </h2>
                        </td>
                        <td align="right">
                          <div style={{ fontSize: '11px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', marginBottom: '4px' }}>
                            Total Time Saved
                          </div>
                          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#B8860B', fontFamily: 'Arial, sans-serif' }}>
                            13.5-16.5 hours/week
                          </div>
                          <div style={{ fontSize: '11px', color: '#666666', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', marginTop: '8px' }}>
                            Estimates reflect average weeks and will vary with promo cadence and forecast cycles.
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: '20px' }}>
                    {/* Quick View Items */}
                    {[
                      { num: '01', name: 'Hotel promo and rate loading builder', desc: 'Streamlined creation and organization of hotel promotions and business travel rate offers', time: '3 hours/week', stat: '2× faster' },
                      { num: '02', name: 'Rate code scraping tool', desc: 'AI-powered browser utility that quickly retrieves rate code data for internal review and competitive analysis', time: '1-2 hours/week', stat: 'Only resource of its kind' },
                      { num: '03', name: 'Revenue knowledge growth', desc: 'AI-accelerated learning and simplified information access for faster insights', time: '2-3 hours/week', stat: '50% faster ramp' },
                      { num: '04', name: 'Rate offer content creation and communication', desc: 'AI-powered content creation for on-brand promotional offers and guest communications', time: '1-2 hours/week', stat: 'Faster content' },
                      { num: '05', name: 'Revenue and forecasting intelligence GPT [IN PROGRESS]', desc: 'Forecast Navigator GPT that integrates historical and forward-looking data for improved forecast accuracy (in progress of building...)', time: '5 Hours/Bi-Weekly', stat: 'Quick review and data implementation' },
                      { num: 'BONUS', name: 'Agent mode for quick web scans', desc: 'Automated agent runs that collect rate examples, events, and competitor snapshots in one pass', time: '4 hours/week', stat: 'More checks' }
                    ].map((item, idx) => (
                      <table key={idx} width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                        marginBottom: '16px',
                        backgroundColor: '#fafafa',
                        border: '1px solid #e5e7eb',
                        borderRadius: '4px',
                        borderLeft: '3px solid #B8860B'
                      }}>
                        <tr>
                          <td style={{ padding: '16px' }}>
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td width="40" style={{ verticalAlign: 'top', paddingRight: '12px' }}>
                                  <div style={{ 
                                    fontSize: '14px', 
                                    fontWeight: 'bold', 
                                    color: '#B8860B',
                                    fontFamily: 'Arial, sans-serif'
                                  }}>
                                    {item.num}
                                  </div>
                                </td>
                                <td>
                                  <div style={{ 
                                    fontSize: '14px', 
                                    fontWeight: '600', 
                                    color: '#1a1a1a',
                                    marginBottom: '6px',
                                    fontFamily: 'Arial, sans-serif'
                                  }}>
                                    {item.name}
                                  </div>
                                  <div style={{ 
                                    fontSize: '12px', 
                                    color: '#666666',
                                    fontStyle: 'italic',
                                    marginBottom: '10px',
                                    fontFamily: 'Arial, sans-serif'
                                  }}>
                                    {item.desc}
                                  </div>
                                  <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>
                                    <tr>
                                      <td style={{ 
                                        backgroundColor: '#f9f9f9',
                                        padding: '6px 12px',
                                        borderRadius: '4px',
                                        border: '1px solid #e5e7eb',
                                        marginRight: '12px'
                                      }}>
                                        <span style={{ fontSize: '9px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif' }}>
                                          Time Savings:
                                        </span>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1a1a1a', marginLeft: '6px', fontFamily: 'Arial, sans-serif' }}>
                                          {item.time}
                                        </span>
                                      </td>
                                      <td style={{ verticalAlign: 'middle' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '600', color: '#666666', fontFamily: 'Arial, sans-serif' }}>
                                          {item.stat}
                                        </span>
                                      </td>
                                    </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    ))}
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>

        {/* Detailed Cards */}
        <table className="email-cards" width="100%" cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <td align="center" style={{ padding: '30px 20px', backgroundColor: '#f5f5f5' }}>
              <table width="600" cellPadding="0" cellSpacing="0" border="0" style={{ maxWidth: '100%' }}>
                <tbody>
                {/* Card 1 */}
                <tr>
                  <td style={{ paddingBottom: '24px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <tbody>
                      <tr>
                        <td width="140" style={{ 
                          backgroundColor: '#fafafa',
                          padding: '20px',
                          verticalAlign: 'top',
                          borderRight: '1px solid #e5e7eb'
                        }}>
                          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#B8860B', opacity: '0.3', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
                            01
                          </div>
                          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>3</div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>hours</div>
                            <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>saved per week</div>
                          </div>
                          <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '12px 0', marginBottom: '12px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>2×</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Faster</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>30-40%</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Fewer errors</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                            Clean load packs and aligned team communication
                          </div>
                        </td>
                        <td style={{ padding: '24px', verticalAlign: 'top' }}>
                          <h2 style={{ 
                            fontSize: '20px', 
                            fontWeight: 'bold', 
                            color: '#1a1a1a', 
                            margin: '0 0 8px 0',
                            fontFamily: 'Arial, sans-serif'
                          }}>
                            Hotel promo and rate loading builder
                          </h2>
                          <p style={{ 
                            fontSize: '13px', 
                            color: '#666666',
                            fontStyle: 'italic',
                            margin: '0 0 16px 0',
                            fontFamily: 'Arial, sans-serif'
                          }}>
                            Streamlined creation and organization of hotel promotions and business travel rate offers
                          </p>
                          <p style={{ 
                            fontSize: '14px', 
                            color: '#1a1a1a', 
                            lineHeight: '1.6',
                            margin: '0 0 12px 0',
                            fontFamily: 'Arial, sans-serif'
                          }}>
                            I developed a customized GPT that streamlined the creation and organization of hotel promotions and business travel rate offers. This AI-driven process supported demand-generating strategies, managed the rate-loading workflow, and maintained consistent communication across teams.
                          </p>
                          <p style={{ 
                            fontSize: '14px', 
                            color: '#1a1a1a', 
                            lineHeight: '1.6',
                            margin: '0 0 20px 0',
                            fontFamily: 'Arial, sans-serif'
                          }}>
                            The result was greater efficiency, faster turnaround, and improved coordination when sharing promotions and rate details.
                          </p>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                            backgroundColor: '#f9fafb',
                            borderTop: '1px solid #e5e7eb',
                            padding: '16px 0'
                          }}>
                            <tbody>
                            <tr>
                              <td style={{ paddingBottom: '12px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Productivity difference
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  2× faster creation with 30–40% fewer corrections and improved cross-team visibility
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Extra learning and growth
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Clearer templates for future promotions with future potential to upload Marriott's Rate Rules and Guidelines to assist with accuracy
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Card 2 */}
                <tr>
                  <td style={{ paddingBottom: '24px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <tbody>
                      <tr>
                        <td width="140" style={{ 
                          backgroundColor: '#fafafa',
                          padding: '20px',
                          verticalAlign: 'top',
                          borderRight: '1px solid #e5e7eb'
                        }}>
                          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#B8860B', opacity: '0.3', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
                            02
                          </div>
                          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>1-2</div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>hours</div>
                            <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>saved per week</div>
                          </div>
                          <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '12px 0', marginBottom: '12px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>🔍</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Reveals rate codes</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>⭐</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Only resource of its kind</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                            One click comp and parity sweeps
                          </div>
                        </td>
                        <td style={{ padding: '24px', verticalAlign: 'top' }}>
                          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 8px 0', fontFamily: 'Arial, sans-serif' }}>
                            Rate code scraping tool
                          </h2>
                          <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', margin: '0 0 16px 0', fontFamily: 'Arial, sans-serif' }}>
                            AI-powered browser utility that quickly retrieves rate code data for internal review and competitive analysis
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 20px 0', fontFamily: 'Arial, sans-serif' }}>
                            I developed an AI-powered rate-code scraping tool built as a browser-based bookmark utility. The tool quickly retrieves rate code data, helping clarify offer structures, ensure proper rate loading, maintain parity, and reveal competitor promo offer codes. My husband helped with using JavaScript to access API data from Marriott.com and Hyatt.com. This data was previously accessible on Marriott.com, but was recently removed at the end of Q2 during their web update, making this tool necessary.
                          </p>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '16px 0' }}>
                            <tbody>
                            <tr>
                              <td style={{ paddingBottom: '12px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Productivity difference
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Unique tool that streamlines rate code research and offer analysis
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Extra learning and growth
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Practical exposure to page structure and utility scripting
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Card 3 */}
                <tr>
                  <td style={{ paddingBottom: '24px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <tbody>
                      <tr>
                        <td width="140" style={{ 
                          backgroundColor: '#fafafa',
                          padding: '20px',
                          verticalAlign: 'top',
                          borderRight: '1px solid #e5e7eb'
                        }}>
                          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#B8860B', opacity: '0.3', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
                            03
                          </div>
                          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>2-3</div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>hours</div>
                            <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>saved per week</div>
                          </div>
                          <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '12px 0', marginBottom: '12px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>50%</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Faster ramp</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>∞</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Deeper insights</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                            Study and research coach for reports and standards
                          </div>
                        </td>
                        <td style={{ padding: '24px', verticalAlign: 'top' }}>
                          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 8px 0', fontFamily: 'Arial, sans-serif' }}>
                            Revenue knowledge growth
                          </h2>
                          <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', margin: '0 0 16px 0', fontFamily: 'Arial, sans-serif' }}>
                            AI-accelerated learning and simplified information access for faster insights
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 12px 0', fontFamily: 'Arial, sans-serif' }}>
                            I leveraged AI to accelerate my learning and simplify information access. By referencing internal SOPs, policies, brand standards, and training resources, the system helped quickly find accurate information.
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 20px 0', fontFamily: 'Arial, sans-serif' }}>
                            It also interpreted STR and Demand 360 reports to deliver deeper insights into market performance, competitive positioning, and weekly performance shifts, enabling more informed, data-driven decisions and assisted in communicating these insights.
                          </p>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '16px 0' }}>
                            <tbody>
                            <tr>
                              <td style={{ paddingBottom: '12px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Productivity difference
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Customized learning that accelerates understanding and streamlines data communication after review
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Extra learning and growth
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Deeper intuition for pricing levers and clearer narratives for stakeholders
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Card 4 */}
                <tr>
                  <td style={{ paddingBottom: '24px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <tbody>
                      <tr>
                        <td width="140" style={{ 
                          backgroundColor: '#fafafa',
                          padding: '20px',
                          verticalAlign: 'top',
                          borderRight: '1px solid #e5e7eb'
                        }}>
                          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#B8860B', opacity: '0.3', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
                            04
                          </div>
                          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>1-2</div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>hours</div>
                            <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>saved per week</div>
                          </div>
                          <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '12px 0', marginBottom: '12px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>⚡</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Faster content</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>✓</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Brand aligned</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                            Hotel Tag Line and Rate Fact builder
                          </div>
                        </td>
                        <td style={{ padding: '24px', verticalAlign: 'top' }}>
                          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 8px 0', fontFamily: 'Arial, sans-serif' }}>
                            Rate offer content creation and communication
                          </h2>
                          <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', margin: '0 0 16px 0', fontFamily: 'Arial, sans-serif' }}>
                            AI-powered content creation for on-brand promotional offers and guest communications
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 12px 0', fontFamily: 'Arial, sans-serif' }}>
                            I utilized AI to assist in the marketing details of promotional offers by building a Hotel Tag Line Builder GPT to develop promo titles and rate details that were eye-catching and appealing to guests while remaining on-brand and consistent.
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 20px 0', fontFamily: 'Arial, sans-serif' }}>
                            I also leveraged AI when creating pre-arrival emails and guest content.
                          </p>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '16px 0' }}>
                            <tbody>
                            <tr>
                              <td style={{ paddingBottom: '12px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Productivity difference
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Faster content creation with stronger brand consistency and quick suggestions for campaign variations
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Extra learning and growth
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Better persuasive writing and reusable message blocks for future campaigns
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Card 5 */}
                <tr>
                  <td style={{ paddingBottom: '24px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <tbody>
                      <tr>
                        <td width="140" style={{ 
                          backgroundColor: '#fafafa',
                          padding: '20px',
                          verticalAlign: 'top',
                          borderRight: '1px solid #e5e7eb'
                        }}>
                          <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#B8860B', opacity: '0.3', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>
                            05
                          </div>
                          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>5</div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>Hours</div>
                            <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Bi-Weekly</div>
                          </div>
                          <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '12px 0', marginBottom: '12px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>⚡</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Quick review and data implementation</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>↓</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Fewer reconciles</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                            Navigator that aligns OneYield with ProfitSage
                          </div>
                        </td>
                        <td style={{ padding: '24px', verticalAlign: 'top' }}>
                          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 8px 0', fontFamily: 'Arial, sans-serif' }}>
                            Revenue and forecasting intelligence GPT <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#d97706', background: 'rgba(217, 119, 6, 0.1)', padding: '3px 8px', borderRadius: '4px', marginLeft: '8px', border: '1px solid rgba(217, 119, 6, 0.2)' }}>[IN PROGRESS]</span>
                          </h2>
                          <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', margin: '0 0 16px 0', fontFamily: 'Arial, sans-serif' }}>
                            Forecast Navigator GPT to integrate historical and forward-looking data for improved forecast accuracy (in progress of building...)
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 12px 0', fontFamily: 'Arial, sans-serif' }}>
                            I started to build a Forecast Navigator GPT to integrate historical and forward-looking data in an attempt to assist in forecast accuracy. By connecting insights from One Yield's forecasting tools with Profitsage's reporting systems, the goal was to streamline data analysis and projection.
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 20px 0', fontFamily: 'Arial, sans-serif' }}>
                            This would allow faster, more precise forecasting for both transient and group segments, empowering timely, informed decisions that maximized profitability.
                          </p>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '16px 0' }}>
                            <tbody>
                            <tr>
                              <td style={{ paddingBottom: '12px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Productivity difference
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Quicker data review with clear deltas by segment and fewer manual reconciles
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Extra learning and growth
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Tighter link and understanding between demand drivers and forecast choices
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Card 6 Bonus */}
                <tr>
                  <td style={{ paddingBottom: '24px' }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ 
                      backgroundColor: '#ffffff',
                      border: '1px solid #2C5F5F',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}>
                      <tbody>
                      <tr>
                        <td width="140" style={{ 
                          backgroundColor: '#f0f7f7',
                          padding: '20px',
                          verticalAlign: 'top',
                          borderRight: '1px solid #2C5F5F'
                        }}>
                          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#2C5F5F', marginBottom: '16px', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>
                            BONUS
                          </div>
                          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2C5F5F', fontFamily: 'Arial, sans-serif' }}>4</div>
                            <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>hours</div>
                            <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>saved per week</div>
                          </div>
                          <div style={{ borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb', padding: '12px 0', marginBottom: '12px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>↑</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>More checks</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>📋</div>
                              <div style={{ fontSize: '9px', color: '#666666', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase' }}>Tidy notes</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '10px', color: '#666666', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
                            Faster comp rate and market pulse checks
                          </div>
                        </td>
                        <td style={{ padding: '24px', verticalAlign: 'top' }}>
                          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 8px 0', fontFamily: 'Arial, sans-serif' }}>
                            Agent mode for quick web scans
                          </h2>
                          <p style={{ fontSize: '13px', color: '#666666', fontStyle: 'italic', margin: '0 0 16px 0', fontFamily: 'Arial, sans-serif' }}>
                            Automated agent runs that collect rate examples, events, and competitor snapshots in one pass
                          </p>
                          <p style={{ fontSize: '14px', color: '#1a1a1a', lineHeight: '1.6', margin: '0 0 20px 0', fontFamily: 'Arial, sans-serif' }}>
                            I use agent-style runs to collect rate examples, events, and competitor snapshots in one pass, then capture the sources so follow-up is simple.
                          </p>
                          <table width="100%" cellPadding="0" cellSpacing="0" border="0" style={{ backgroundColor: '#f9fafb', borderTop: '1px solid #e5e7eb', padding: '16px 0' }}>
                            <tbody>
                            <tr>
                              <td style={{ paddingBottom: '12px' }}>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Productivity difference
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Quicker data research with tidy source notes that support faster action
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div style={{ fontSize: '10px', fontWeight: 'bold', color: '#666666', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'Arial, sans-serif' }}>
                                  Extra learning and growth
                                </div>
                                <div style={{ fontSize: '13px', color: '#1a1a1a', fontFamily: 'Arial, sans-serif' }}>
                                  Clearer view of competitor strategies and seasonal patterns across properties, with future potential to assist in parity research
                                </div>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>

        {/* Footer */}
        <table className="email-footer" width="100%" cellPadding="0" cellSpacing="0" border="0">
          <tr>
            <td align="center" style={{ padding: '30px 20px', backgroundColor: '#ffffff', borderTop: '2px solid #e5e7eb' }}>
              <table width="600" cellPadding="0" cellSpacing="0" border="0" style={{ maxWidth: '100%' }}>
                <tbody>
                <tr>
                  <td style={{ paddingBottom: '16px', textAlign: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#666666', fontFamily: 'Arial, sans-serif' }}>
                      <span>Prepared by</span>
                      <span style={{ fontWeight: '600', margin: '0 8px' }}>Brittany Schilling</span>
                      <span style={{ margin: '0 8px' }}>|</span>
                      <span style={{ fontWeight: '500' }}>Regional Revenue Manager</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ 
                    backgroundColor: '#f9fafb',
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center'
                  }}>
                    <div style={{ fontSize: '12px', color: '#666666', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
                      I also used ChatGPT to help me with creating this easy to digest top five list of AI uses as a Pacific Hospitality Group Revenue Manager
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: '20px', textAlign: 'center' }}>
                    <Link to="/" style={{ 
                      display: 'inline-block',
                      backgroundColor: '#B8860B',
                      color: '#ffffff',
                      padding: '12px 24px',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      fontFamily: 'Arial, sans-serif',
                      textTransform: 'uppercase'
                    }}>
                      ← Back to Full Version
                    </Link>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default EmailVersion

