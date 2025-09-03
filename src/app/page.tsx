'use client'

import { useEffect, useState } from 'react'
import { siteData } from './data'

declare global {
  interface Window {
    L: any;
  }
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Set body opacity for fade-in effect
    document.body.style.opacity = '1'
    setIsLoaded(true)

    const initializeComponents = () => {
      if (typeof window !== 'undefined' && window.L) {
        initMap()
        renderRelationshipDiagram()
      }
    }

    // Initialize the interactive components after load
    setTimeout(initializeComponents, 1000)

    // Set up intersection observer for reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Back to top button functionality
    const handleScroll = () => {
      const toTopBtn = document.getElementById('to-top-btn')
      if (toTopBtn) {
        if (window.scrollY > 300) {
          toTopBtn.classList.add('show')
        } else {
          toTopBtn.classList.remove('show')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', renderRelationshipDiagram)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', renderRelationshipDiagram)
    }
  }, [])

  const initMap = () => {
    if (typeof window === 'undefined' || !window.L) return

    const mapContainer = document.getElementById('map')
    if (!mapContainer) return

    const map = window.L.map('map').setView([40.0, -85.0], 4)
    
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    const mapMarkers: any = {}

    siteData.mapData.locations.forEach(location => {
      const marker = window.L.marker(location.coords)
        .addTo(map)
        .bindPopup(`<b>${location.name}</b><br/>${location.description}`)
      
      mapMarkers[location.id] = marker
    })

    // Store markers for later use
    ;(window as any).mapMarkers = mapMarkers
  }

  const renderRelationshipDiagram = () => {
    const container = document.getElementById('relationship-diagram')
    if (!container) return

    container.innerHTML = '<svg id="alliance-svg" width="100%" height="100%" style="position: absolute; top: 0; left: 0; pointer-events: none;"></svg>'
    const svg = document.getElementById('alliance-svg')
    if (!svg) return

    // Create family nodes
    siteData.allianceData.families.forEach(family => {
      const node = document.createElement('div')
      node.className = 'family-node'
      node.id = `node-${family.id}`
      node.textContent = family.label
      node.style.left = `${family.pos.x}%`
      node.style.top = `${family.pos.y}%`
      node.style.transform = `translate(-${family.pos.x}%, -${family.pos.y}%)`
      container.appendChild(node)
    })

    // Create alliance lines after a brief delay
    setTimeout(() => {
      const newSvg = document.getElementById('alliance-svg')
      if (!newSvg) return

      newSvg.innerHTML = ''
      
      siteData.allianceData.alliances.forEach(alliance => {
        const fromNodeEl = document.getElementById(`node-${alliance.from}`)
        const toNodeEl = document.getElementById(`node-${alliance.to}`)
        
        if (!fromNodeEl || !toNodeEl) return

        const fromPos = {
          x: fromNodeEl.offsetLeft + fromNodeEl.offsetWidth / 2,
          y: fromNodeEl.offsetTop + fromNodeEl.offsetHeight / 2
        }
        const toPos = {
          x: toNodeEl.offsetLeft + toNodeEl.offsetWidth / 2,
          y: toNodeEl.offsetTop + toNodeEl.offsetHeight / 2
        }

        // Create line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        line.setAttribute('x1', fromPos.x.toString())
        line.setAttribute('y1', fromPos.y.toString())
        line.setAttribute('x2', toPos.x.toString())
        line.setAttribute('y2', toPos.y.toString())
        line.classList.add('alliance-line')
        line.setAttribute('data-from', alliance.from)
        line.setAttribute('data-to', alliance.to)
        newSvg.appendChild(line)

        // Create label
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        label.setAttribute('x', ((fromPos.x + toPos.x) / 2).toString())
        label.setAttribute('y', ((fromPos.y + toPos.y) / 2).toString())
        label.setAttribute('data-from', alliance.from)
        label.setAttribute('data-to', alliance.to)
        label.classList.add('alliance-label')
        label.textContent = alliance.label
        newSvg.appendChild(label)
      })

      // Add hover effects
      addNodeInteractions()
    }, 100)
  }

  const addNodeInteractions = () => {
    const allNodes = document.querySelectorAll('.family-node')
    const allLines = document.querySelectorAll('.alliance-line')
    const allLabels = document.querySelectorAll('.alliance-label')

    allNodes.forEach(node => {
      const familyId = node.id.replace('node-', '')
      
      node.addEventListener('mouseenter', () => {
        allNodes.forEach(n => {
          const nId = n.id.replace('node-', '')
          if (nId === familyId) {
            n.classList.remove('fade')
            n.classList.add('highlight')
          } else {
            n.classList.add('fade')
          }
        })

        allLines.forEach(l => {
          const from = l.getAttribute('data-from')
          const to = l.getAttribute('data-to')
          if (from === familyId || to === familyId) {
            l.classList.remove('fade')
            l.classList.add('highlight')
          } else {
            l.classList.add('fade')
          }
        })

        allLabels.forEach(lbl => {
          const from = lbl.getAttribute('data-from')
          const to = lbl.getAttribute('data-to')
          if (from === familyId || to === familyId) {
            lbl.classList.remove('fade')
          } else {
            lbl.classList.add('fade')
          }
        })
      })

      node.addEventListener('mouseleave', () => {
        allNodes.forEach(n => n.classList.remove('fade', 'highlight'))
        allLines.forEach(l => l.classList.remove('fade', 'highlight'))
        allLabels.forEach(lbl => lbl.classList.remove('fade'))
      })
    })
  }

  const openModal = (title: string, img: string, transcript: string) => {
    const modalOverlay = document.getElementById('modal-overlay')
    const modalTitle = document.getElementById('modal-title')
    const modalImage = document.getElementById('modal-image') as HTMLImageElement
    const modalTranscript = document.getElementById('modal-transcript')
    
    if (modalTitle) modalTitle.textContent = title
    if (modalImage) modalImage.src = img
    if (modalTranscript) modalTranscript.textContent = transcript
    if (modalOverlay) modalOverlay.classList.add('show')
  }

  const closeModal = () => {
    const modalOverlay = document.getElementById('modal-overlay')
    if (modalOverlay) modalOverlay.classList.remove('show')
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-card-border fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl font-serif text-heading">Sprouse-Prouse Research</div>
            <div className="hidden md:flex space-x-8">
              <a href="#introduction" className="nav-link">Introduction</a>
              <a href="#timeline" className="nav-link">Timeline</a>
              <a href="#alliances" className="nav-link">Alliances</a>
              <a href="#legacy" className="nav-link">Legacy</a>
              <a href="#appendix" className="nav-link">Register</a>
            </div>
            <button id="menu-btn" className="md:hidden">
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <span className="w-4 h-0.5 bg-heading"></span>
                <span className="w-4 h-0.5 bg-heading"></span>
                <span className="w-4 h-0.5 bg-heading"></span>
              </div>
            </button>
          </div>
          <div id="mobile-menu" className="hidden md:hidden mt-4 pb-4 border-t border-card-border pt-4">
            <div className="flex flex-col space-y-2">
              <a href="#introduction" className="nav-link">Introduction</a>
              <a href="#timeline" className="nav-link">Timeline</a>
              <a href="#alliances" className="nav-link">Alliances</a>
              <a href="#legacy" className="nav-link">Legacy</a>
              <a href="#appendix" className="nav-link">Register</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 md:py-40 bg-cover bg-center hero-bg mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font-serif reveal">
            A Study in Commercial Genetics
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 reveal" style={{ transitionDelay: '200ms' }}>
            An Eight-Century Analysis of the Sprouse-Prouse Family and the Infrastructure of Power.
          </p>
          <a 
            href="#introduction" 
            className="btn-primary font-bold py-3 px-8 rounded-full inline-block reveal hover:bg-primary-light transition-colors"
            style={{ transitionDelay: '400ms' }}
          >
            Explore the Legacy
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              The Journey of a Family, The History of Commerce
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              The history of the Sprouse/Prouse family offers a unique lens through which to view eight centuries of economic and social change. 
              Their path—from the wharves of medieval Exeter to the railheads of 19th-century Illinois—was not a series of accidents, 
              but the continuous application of a core principle: wealth and influence are built at the junctions where goods and capital converge.
            </p>
            <p className="text-lg leading-relaxed italic text-gray-600">
              This is a story not just of a family, but of a durable commercial strategy passed down through generations, 
              adapting to new technologies and new frontiers while remaining true to its foundational instinct.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline / Eras Section */}
      <section id="timeline" className="py-20 md:py-28 bg-white section-divider">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 font-serif">
            Four Eras of Strategic Adaptation
          </h2>
          <div className="relative">
            <div className="timeline-line hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
              {siteData.eras.map((era, index) => {
                const isOdd = index % 2 !== 0
                return (
                  <div key={era.id} className={`timeline-item reveal lg:col-start-${isOdd ? '2' : '1'}`}>
                    <div className="lg:absolute timeline-dot hidden lg:block"></div>
                    <div className="era-card rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                      <img src={era.image} alt={era.alt} className="w-full h-56 object-cover" />
                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="font-bold text-2xl mb-3 font-serif">{era.title}</h3>
                        <p className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">{era.period}</p>
                        <p className="leading-relaxed text-gray-600 flex-grow">{era.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Alliances and Migrations Section */}
      <section id="alliances" className="py-20 md:py-28">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif">
            Strategic Alliances & Migrations
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
            The family&apos;s journey was physical as well as economic. This map traces their migration path, 
            while the interactive diagram below illustrates the key marriage alliances that fueled their commercial expansion in each new territory.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <h3 className="text-2xl font-bold font-serif mb-4">Migration Map</h3>
              <div id="map" className="h-96 bg-gray-100 border border-card-border rounded-lg"></div>
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold font-serif mb-4">Relationship Web</h3>
              <div id="relationship-diagram">
                <svg id="alliance-svg" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}></svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-20 md:py-28 bg-white section-divider">
        <div className="container mx-auto px-6 reveal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">The Enduring Legacy</h2>
            <blockquote className="text-2xl italic border-l-4 border-primary pl-6 mb-8">
              &quot;From Exeter&apos;s guildhall to an Illinois railhead, the family kept choosing the same vantage points: where inventory turns into money.&quot;
            </blockquote>
            <p className="text-lg leading-relaxed">
              The eight-century journey of the Sprouse-Prouse family is more than a sequence of names and dates; it is a case study in commercial genetics. 
              The core DNA—an instinct for logistics, an appreciation for strategic alliances, and a mastery of the legal and financial tools of the age—proved remarkably durable. 
              They understood that power flowed not just from owning land, but from controlling its access to markets. 
              This fundamental insight, passed down and adapted from the age of sail to the age of rail, is their ultimate legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Appendix / Biographical Register */}
      <section id="appendix" className="py-20 md:py-28">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">
            Biographical Register & Genealogical Findings
          </h2>
          <div className="max-w-4xl mx-auto">
            {siteData.biographicalData.map((era, eraIndex) => (
              <div key={eraIndex} className="mb-8">
                <div className="bg-white border border-card-border rounded-lg overflow-hidden shadow-sm">
                  <button 
                    className="accordion-button w-full text-left p-6 font-bold text-xl font-serif hover:bg-gray-50 transition-colors"
                    onClick={(e) => {
                      const button = e.currentTarget
                      const content = button.nextElementSibling as HTMLElement
                      const isActive = button.classList.contains('active')
                      
                      // Close all other accordions
                      document.querySelectorAll('.accordion-button.active').forEach(btn => {
                        if (btn !== button) {
                          btn.classList.remove('active')
                          const btnContent = btn.nextElementSibling as HTMLElement
                          if (btnContent) {
                            btnContent.classList.remove('active')
                          }
                        }
                      })
                      
                      button.classList.toggle('active')
                      if (content) {
                        content.classList.toggle('active')
                      }
                    }}
                    data-location-id={era.locationId}
                  >
                    {era.era}
                  </button>
                  <div className="accordion-content">
                    <div className="p-6 pt-0">
                      <div className="grid gap-6">
                        {era.people.map((person, personIndex) => (
                          <div key={personIndex} className="border border-gray-200 rounded p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-lg">{person.name}</h4>
                              <span className="text-sm text-gray-500">{person.dates}</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <p><strong>Faith & Community:</strong> {person.faith}</p>
                                <p><strong>Commercial Nexus:</strong> {person.nexus}</p>
                              </div>
                              <div>
                                <p><strong>Primary Sources:</strong> {person.sources}</p>
                              </div>
                            </div>
                            {person.genealogicalEvidence && (
                              <div className="mt-4">
                                <h5 className="font-semibold mb-2">Genealogical Evidence:</h5>
                                <div className="grid gap-2">
                                  {person.genealogicalEvidence.map((evidence, evidenceIndex) => (
                                    <button
                                      key={evidenceIndex}
                                      className="view-record-btn text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                                      onClick={() => openModal(evidence.type, evidence.sourceImage, evidence.sourceTranscript)}
                                    >
                                      <strong>{evidence.type}:</strong> {evidence.detail}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="modal-overlay" className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button 
            id="modal-close" 
            className="absolute top-4 right-4 text-2xl hover:text-gray-600"
            onClick={closeModal}
          >
            ×
          </button>
          <h3 id="modal-title" className="text-xl font-bold mb-4"></h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Document Image</h4>
              <div className="bg-gray-100 border rounded h-64 flex items-center justify-center">
                <img id="modal-image" src="" alt="Source Document" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Transcript & Notes</h4>
              <p id="modal-transcript" className="text-sm bg-gray-50 p-3 border rounded h-64 overflow-y-auto whitespace-pre-wrap font-mono"></p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        id="to-top-btn" 
        className="to-top"
        onClick={scrollToTop}
      >
        ↑
      </button>
    </>
  )
}