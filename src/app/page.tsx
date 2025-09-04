'use client'

import { useEffect, useState } from 'react'
import { siteData } from '../data'
import { Map } from '../components/Map/Map'
import { RelationshipGraph } from '../components/RelationshipGraph/RelationshipGraph'
import { EraVisual } from '../components/EraVisual/EraVisual'

declare global {
  interface Window {
    L: any;
  }
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [openPersonAccordions, setOpenPersonAccordions] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Set body opacity for fade-in effect
    document.body.style.opacity = '1'
    document.body.classList.add('loaded')
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

  const togglePersonAccordion = (eraIndex: number, personIndex: number) => {
    const accordionId = `${eraIndex}-${personIndex}`
    setOpenPersonAccordions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(accordionId)) {
        newSet.delete(accordionId)
      } else {
        newSet.add(accordionId)
      }
      return newSet
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-40 bg-cover bg-center hero-bg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font-serif reveal">A Study in Commercial Genetics</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 reveal" style={{ transitionDelay: '200ms' }}>An Eight-Century Analysis of the Sprouse-Prouse Family and the Infrastructure of Power.</p>
          <a href="#introduction" className="btn-primary font-bold py-3 px-8 rounded-full inline-block reveal" style={{ transitionDelay: '400ms' }}>Explore the Legacy</a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">The Journey of a Family, The History of Commerce</h2>
            <p className="text-lg leading-relaxed mb-4">The history of the Sprouse/Prouse family offers a unique lens through which to view eight centuries of economic and social change. Their path—from the wharves of medieval Exeter to the railheads of 19th-century Illinois—was not a series of accidents, but the continuous application of a core principle: wealth and influence are built at the junctions where goods and capital converge.</p>
            <p className="text-lg leading-relaxed italic text-gray-600">This is a story not just of a family, but of a durable commercial strategy passed down through generations, adapting to new technologies and new frontiers while remaining true to its foundational instinct.</p>
          </div>
        </div>
      </section>

      {/* Timeline / Eras Section */}
      <section id="timeline" className="py-20 md:py-28 bg-white section-divider">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 font-serif">Four Eras of Strategic Adaptation</h2>
          <div id="eras-container" className="relative">
            {/* Timeline will be injected here */}
            <div className="timeline-line hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
              {siteData.eras.map((era, index) => {
                const isOdd = index % 2 !== 0
                return (
                  <div key={era.id} className={`timeline-item reveal lg:col-start-${isOdd ? '2' : '1'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className="timeline-dot hidden lg:block"></div>
                    <div className="era-card rounded-lg overflow-hidden shadow-lg">
                      <div className="era-visual p-8 bg-primary text-center">
                        <span className="text-white text-4xl">{era.theme.icon}</span>
                      </div>
                      <div className="era-card-content p-6">
                        <h3 className="text-xl font-bold font-serif mb-2">{era.title}</h3>
                        <p className="text-sm font-semibold text-primary mb-3">{era.period}</p>
                        <p className="text-gray-600 leading-relaxed">{era.description}</p>
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
      <section id="alliances" className="content-section bg-bg-secondary">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-serif text-heading">
            Strategic Alliances & Migrations
          </h2>
          <p className="text-center text-lg mb-16 max-w-3xl mx-auto text-text-light">
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
            <p className="text-lg leading-relaxed">The eight-century journey of the Sprouse-Prouse family is more than a sequence of names and dates; it is a case study in commercial genetics. The core DNA—an instinct for logistics, an appreciation for strategic alliances, and a mastery of the legal and financial tools of the age—proved remarkably durable. They understood that power flowed not just from owning land, but from controlling its access to markets. This fundamental insight, passed down and adapted from the age of sail to the age of rail, is their ultimate legacy.</p>
          </div>
        </div>
      </section>

      {/* Biographical Register */}
      <section id="appendix" className="py-20 md:py-28">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif">
            Biographical Register & Genealogical Findings
          </h2>
          <div className="max-w-4xl mx-auto" id="accordion-container">
            {siteData.biographicalData.map((era, eraIndex) => (
              <div key={eraIndex} className="era-section mb-16">
                <div className="era-header bg-white rounded-2xl p-6 mb-8 text-center shadow-lg border">
                  <h3 className="text-2xl font-bold font-serif mb-2">
                    {era.era}
                  </h3>
                  <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="space-y-4">
                  {era.people.map((person, personIndex) => {
                    const accordionId = `${eraIndex}-${personIndex}`
                    const isOpen = openPersonAccordions.has(accordionId)
                    
                    return (
                      <div key={personIndex} className="person-accordion polished-accordion bg-white rounded-2xl border border-gray-200 shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden">
                        {/* Accordion Header */}
                        <button
                          className={`w-full p-6 text-left flex justify-between items-center transition-all duration-300 relative overflow-hidden group ${isOpen ? 'bg-gradient-to-r from-primary/5 to-primary/10' : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-primary/5'}`}
                          onClick={() => togglePersonAccordion(eraIndex, personIndex)}
                          aria-expanded={isOpen}
                          aria-controls={`person-content-${accordionId}`}
                        >
                          {/* Animated top border */}
                          <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-light transition-all duration-500 ${isOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                          
                          <div className="flex items-center gap-6 flex-1">
                            <div className="flex flex-col">
                              <h4 className="text-xl font-bold font-serif text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{person.name}</h4>
                              <span className="text-sm text-gray-600 font-medium tracking-wide">{person.dates}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                            <span 
                              className={`text-xl text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                              aria-hidden="true"
                            >
                              ⌄
                            </span>
                          </div>
                        </button>
                        
                        {/* Accordion Content */}
                        <div
                          id={`person-content-${accordionId}`}
                          className={`accordion-content ${isOpen ? 'expanded' : 'collapsed'}`}
                        >
                          <div className="px-6 pb-6 pt-2 space-y-4 text-sm bg-gradient-to-b from-white to-gray-50/50">
                            <div className="bg-gradient-to-r from-primary/5 to-primary/8 rounded-xl p-5 border border-primary/10 shadow-soft hover:shadow-sm transition-all duration-300">
                              <p>
                                <strong className="text-primary flex items-center mb-3 font-semibold">
                                  <span className="w-3 h-3 bg-gradient-to-r from-primary to-primary-light rounded-full mr-3 shadow-sm"></span>
                                  Faith & Community:
                                </strong> 
                                <span className="text-gray-700 leading-relaxed">{person.faith}</span>
                              </p>
                            </div>
                            <div className="bg-gradient-to-r from-accent/8 to-accent/12 rounded-xl p-5 border border-accent/15 shadow-soft hover:shadow-sm transition-all duration-300">
                              <p>
                                <strong className="text-secondary flex items-center mb-3 font-semibold">
                                  <span className="w-3 h-3 bg-gradient-to-r from-accent to-gold rounded-full mr-3 shadow-sm"></span>
                                  Commercial Nexus:
                                </strong> 
                                <span className="text-gray-700 leading-relaxed">{person.nexus}</span>
                              </p>
                            </div>
                            <div className="bg-gradient-to-r from-secondary/5 to-secondary/8 rounded-xl p-5 border border-secondary/10 shadow-soft hover:shadow-sm transition-all duration-300">
                              <p>
                                <strong className="text-primary-dark flex items-center mb-3 font-semibold">
                                  <span className="w-3 h-3 bg-gradient-to-r from-primary-dark to-primary rounded-full mr-3 shadow-sm"></span>
                                  Primary Sources:
                                </strong> 
                                <span className="text-gray-700 leading-relaxed">{person.sources}</span>
                              </p>
                            </div>
                            {person.genealogicalEvidence && (
                              <div className="border-t border-gradient-to-r from-gray-200 to-primary/20 pt-6 mt-6">
                                <h5 className="font-bold mb-5 flex items-center text-lg text-gray-800">
                                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center mr-3 shadow-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                  </div>
                                  Genealogical Evidence:
                                </h5>
                                <div className="space-y-4">
                                  {person.genealogicalEvidence.map((evidence, evidenceIndex) => (
                                    <button
                                      key={evidenceIndex}
                                      className="enhanced-evidence-button w-full text-left p-5 bg-gradient-to-r from-white to-gray-50 hover:from-primary/5 hover:to-primary/10 border border-gray-200 hover:border-primary/30 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-medium group relative overflow-hidden"
                                      onClick={() => openModal(evidence.type, evidence.sourceImage, evidence.sourceTranscript)}
                                    >
                                      <div className="flex items-start">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                                        <div>
                                          <strong className="text-primary block mb-1">{evidence.type}:</strong> 
                                          <span className="text-gray-700 text-sm leading-relaxed">{evidence.detail}</span>
                                        </div>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
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
            className="modal-close"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 id="modal-title" className="text-2xl font-bold mb-6 font-serif text-heading pr-12"></h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4 text-primary">Document Image</h4>
              <div className="glass rounded-xl p-4 h-80 flex items-center justify-center">
                <img id="modal-image" src="" alt="Source Document" className="max-w-full max-h-full object-contain rounded-lg" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-primary">Transcript & Notes</h4>
              <div className="glass rounded-xl p-4 h-80 overflow-y-auto">
                <p id="modal-transcript" className="text-sm whitespace-pre-wrap font-mono text-text leading-relaxed"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        id="to-top-btn" 
        className="to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}