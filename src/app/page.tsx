'use client'

import { useEffect, useState } from 'react'
import { siteData } from '../data'
import { Map } from '../components/Map/Map'
import { RelationshipGraph } from '../components/RelationshipGraph/RelationshipGraph'
import { Navigation } from '../components/Navigation/Navigation'

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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
      <Navigation />

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
              <Map mapData={siteData.mapData} className="" />
            </div>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <RelationshipGraph allianceData={siteData.allianceData} className="" />
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