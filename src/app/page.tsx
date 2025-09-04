'use client'

import { useEffect, useState } from 'react'
import { siteData } from '../data'
import { Map } from '../components/Map/Map'
import { RelationshipGraph } from '../components/RelationshipGraph/RelationshipGraph'
import { Navigation } from '../components/Navigation/Navigation'
import { EraVisual } from '../components/EraVisual/EraVisual'

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
      <section className="hero-bg mt-16">
        <div className="container mx-auto px-6 text-center hero-content flex flex-col justify-center items-center min-h-screen">
          <h1 className="hero-title reveal">
            A Study in Commercial Genetics
          </h1>
          <p className="hero-subtitle reveal" style={{ transitionDelay: '200ms' }}>
            An Eight-Century Analysis of the Sprouse-Prouse Family and the Infrastructure of Power.
          </p>
          <a 
            href="#introduction" 
            className="hero-cta reveal"
            style={{ transitionDelay: '400ms' }}
          >
            <span>Explore the Legacy</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="content-section bg-bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-heading">
              The Journey of a Family, The History of Commerce
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-text">
                The history of the Sprouse/Prouse family offers a unique lens through which to view eight centuries of economic and social change. 
                Their path—from the wharves of medieval Exeter to the railheads of 19th-century Illinois—was not a series of accidents, 
                but the continuous application of a core principle: <span className="gradient-text font-semibold">wealth and influence are built at the junctions where goods and capital converge.</span>
              </p>
              <p className="text-text-light italic text-xl">
                This is a story not just of a family, but of a durable commercial strategy passed down through generations, 
                adapting to new technologies and new frontiers while remaining true to its foundational instinct.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Eras Section */}
      <section id="timeline" className="content-section section-divider">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 font-serif text-heading">
            Four Eras of Strategic Adaptation
          </h2>
          <div className="timeline-container">
            <div className="timeline-line hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
              {siteData.eras.map((era, index) => {
                const isOdd = index % 2 !== 0
                return (
                  <div key={era.id} className={`timeline-item reveal lg:col-start-${isOdd ? '2' : '1'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                    <div className="timeline-dot hidden lg:block"></div>
                    <div className="era-card">
                      <div className="era-visual">
                        <span className="text-white text-4xl">{era.theme.icon}</span>
                      </div>
                      <div className="era-card-content">
                        <h3 className="era-title">{era.title}</h3>
                        <p className="era-period">{era.period}</p>
                        <p className="era-description">{era.description}</p>
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
      <section id="legacy" className="content-section section-divider">
        <div className="container mx-auto px-6 reveal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif text-heading">The Enduring Legacy</h2>
            <blockquote className="text-2xl mb-12">
              &quot;From Exeter&apos;s guildhall to an Illinois railhead, the family kept choosing the same vantage points: where inventory turns into money.&quot;
            </blockquote>
            <p className="text-lg leading-relaxed text-text-light">
              The eight-century journey of the Sprouse-Prouse family is more than a sequence of names and dates; it is a case study in <span className="gradient-text font-semibold">commercial genetics</span>. 
              The core DNA—an instinct for logistics, an appreciation for strategic alliances, and a mastery of the legal and financial tools of the age—proved remarkably durable. 
              They understood that power flowed not just from owning land, but from controlling its access to markets. 
              This fundamental insight, passed down and adapted from the age of sail to the age of rail, is their ultimate legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Biographical Register */}
      <section id="register" className="content-section bg-bg-secondary">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-serif text-heading">
            Biographical Register & Genealogical Findings
          </h2>
          <div className="max-w-6xl mx-auto">
            {siteData.biographicalData.map((era, eraIndex) => (
              <div key={eraIndex} className="era-section mb-16">
                <div className="era-header glass rounded-2xl p-6 mb-8 text-center">
                  <h3 className="text-2xl font-bold text-heading font-serif mb-2">
                    {era.era}
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto rounded-full"></div>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                  {era.people.map((person, personIndex) => (
                    <div key={personIndex} className="person-card glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-heading font-serif">{person.name}</h4>
                        <span className="text-sm text-white font-semibold bg-primary px-3 py-1 rounded-full shadow-sm">{person.dates}</span>
                      </div>
                      <div className="space-y-4 text-sm mb-4">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                          <p className="text-text">
                            <strong className="text-primary flex items-center mb-2">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              Faith & Community:
                            </strong> 
                            {person.faith}
                          </p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                          <p className="text-text">
                            <strong className="text-primary flex items-center mb-2">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              Commercial Nexus:
                            </strong> 
                            {person.nexus}
                          </p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-primary/10">
                          <p className="text-text">
                            <strong className="text-primary flex items-center mb-2">
                              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                              Primary Sources:
                            </strong> 
                            {person.sources}
                          </p>
                        </div>
                      </div>
                      {person.genealogicalEvidence && (
                        <div className="border-t border-primary/20 pt-4">
                          <h5 className="font-bold mb-4 text-heading flex items-center">
                            <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Genealogical Evidence:
                          </h5>
                          <div className="space-y-3">
                            {person.genealogicalEvidence.map((evidence, evidenceIndex) => (
                              <button
                                key={evidenceIndex}
                                className="evidence-button w-full text-left p-4 bg-white/80 hover:bg-primary/10 border border-primary/20 rounded-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-md group"
                                onClick={() => openModal(evidence.type, evidence.sourceImage, evidence.sourceTranscript)}
                              >
                                <div className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                                  <div>
                                    <strong className="text-primary block mb-1">{evidence.type}:</strong> 
                                    <span className="text-text text-sm leading-relaxed">{evidence.detail}</span>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
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