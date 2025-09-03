/**
 * Modern Sprouse-Prouse Family Research Website
 * Interactive JavaScript functionality with vanilla JS
 * Features: Mobile menu, search, accordion, modal, smooth scrolling
 */

// ============================================================================
// Data - Family biographical information
// ============================================================================

const biographicalData = [
    {
        era: "I. Medieval & Early Modern Devon (1100–1600)",
        locationId: "exeter",
        people: [
            {
                name: "Osbert de Préaux",
                dates: "fl. c. 1120–1150",
                faith: "Catholic; patron of monastic houses in Devon and Normandy.",
                nexus: "Managed estates near coastal routes; oversaw grain and wool transport.",
                sources: "Devon manorial rolls; Norman charters.",
                genealogicalEvidence: [
                    {
                        type: "Manorial Roll Entry",
                        detail: "Records show Osbert de Préaux holding lands at Gidleigh, noting annual yields of wool sent to Exeter.",
                        sourceImage: "https://placehold.co/400x300/e2e8f0/64748b?text=Manorial+Roll",
                        sourceTranscript: "Item: To Osbert de Préaux, for the lands at Gidleigh, an accounting of XL stone of wool delivered to the port-reeve of Exeter..."
                    }
                ]
            },
            {
                name: "William de Préaux",
                dates: "fl. c. 1180–1210",
                faith: "Catholic; served in Angevin court.",
                nexus: "Engaged in Channel maritime provisioning for military expeditions.",
                sources: "Angevin administrative records; port customs accounts."
            },
            {
                name: "Lawrence Prouz",
                dates: "1480–1548",
                faith: "Catholic parish life pre-Reformation.",
                nexus: "Sword Bearer of Exeter; managed manorial agriculture and tin mining; coordinated shipments via Exeter quay.",
                sources: "Exeter Guild records; Devon subsidy rolls."
            },
            {
                name: "Richard Prouz",
                dates: "1509–",
                faith: "Catholic; later Anglican.",
                nexus: "Married Joane de Beaumont; invested in local market rights; maintained mercantile ties.",
                sources: "Heraldic Visitations of Devon (1620); parish registers."
            },
            {
                name: "Richard Prouse",
                dates: "1535–1607",
                faith: "Anglican post-Reformation.",
                nexus: "Married Richord Vincent and Ann Vaughn; integrated into Exeter's Merchant Adventurers; exported kerseys to Antwerp/Middelburg; used credit instruments and warehousing.",
                sources: "Exeter customs accounts; Merchant Adventurers' records."
            }
        ]
    },
    {
        era: "II. Colonial Chesapeake (1650–1780)",
        locationId: "talbot",
        people: [
            {
                name: "George Prouse II",
                dates: "1642–1696",
                faith: "Anglican; St. Peter's Parish, Talbot County.",
                nexus: "Assembled river-front plantations; leveraged London factor credit.",
                sources: "Talbot County land patents; parish registers.",
                genealogicalEvidence: [
                    {
                        type: "Land Patent",
                        detail: "Grant for 350 acres, 'Prouse's Landing,' described as 'fronting the Choptank River for the purpose of loading tobacco.'",
                        sourceImage: "https://placehold.co/400x300/e2e8f0/64748b?text=Land+Patent",
                        sourceTranscript: "By the authority of the Lord Proprietor, we do grant unto George Prouse a parcel of land of 350 acres... to be known as Prouse's Landing, for the cultivation and shipping of tobacco."
                    }
                ]
            },
            {
                name: "Mary Alford Prouse",
                dates: "",
                faith: "Anglican.",
                nexus: "Brought Exeter merchant-guild heritage; managed household provisioning and local trade accounts.",
                sources: "Exeter guild rolls; parish records."
            },
            {
                name: "George Prouse III",
                dates: "1675–1708",
                faith: "Anglican.",
                nexus: "Managed inherited tracts; 1708 will shows structured asset transfer; relied on local sureties.",
                sources: "Maryland wills; probate bonds."
            },
            {
                name: "George Prouse IV",
                dates: "1700–1758",
                faith: "Anglican.",
                nexus: "Married Jane Harding; linked rural production to Baltimore warehousing and finance.",
                sources: "St. Peter's Parish marriage register; Gittings family papers."
            },
            {
                name: "Jane Harding Prouse",
                dates: "",
                faith: "Anglican.",
                nexus: "Gittings family connections; facilitated access to urban storage and capital markets.",
                sources: "Baltimore County court records; family papers."
            },
            {
                name: "George Prouse V",
                dates: "1733–1781",
                faith: "Anglican; Church Warden.",
                nexus: "Managed plantation logistics and parish finances, a key source of local power.",
                sources: "St. Peter's Parish Vestry Minutes."
            }
        ]
    },
    {
        era: "III. Post-Colonial Expansion (1780–1850)",
        locationId: "robertson",
        people: [
            {
                name: "George Sprouse",
                dates: "1757–1845",
                faith: "Anglican roots; frontier Protestantism.",
                nexus: "Migrated to Robertson County, TN; diversified farming; Appleton merchant heritage.",
                sources: "Robertson County deed books; Appleton genealogies."
            },
            {
                name: "Margaret Appleton Sprouse",
                dates: "",
                faith: "Protestant.",
                nexus: "Descended from Ipswich, MA, merchant-magistrates; maintained literacy and record-keeping traditions.",
                sources: "Massachusetts Bay Colony records."
            },
            {
                name: "James W. Sprouse",
                dates: "c. 1798–1860",
                faith: "Protestant.",
                nexus: "Lawyer; landholder; handled deeds, contracts, estate settlements.",
                sources: "Robertson County court minutes; probate records."
            },
            {
                name: "William Sprouse (b. 1802)",
                dates: "1802–after 1880",
                faith: "Protestant.",
                nexus: "Black Hawk War veteran; blacksmith; patented \"Occidental Plow\"; TN→IL→KS; served under Abraham Lincoln in 1832.",
                sources: "U.S. Patent Office records; military muster rolls.",
                genealogicalEvidence: [
                    {
                        type: "Military Muster Roll",
                        detail: "1832, 4th Reg, IL Mounted Volunteers. Listed as a private in Captain Abraham Lincoln's company.",
                        sourceImage: "https://placehold.co/400x300/e2e8f0/64748b?text=Muster+Roll",
                        sourceTranscript: "Company: Captain A. Lincoln\\n4th Regiment, Illinois Mounted Volunteers\\nPrivate William Sprouse - Mustered in April 21, 1832..."
                    }
                ]
            },
            {
                name: "Martha Combs Sprouse",
                dates: "",
                faith: "Protestant.",
                nexus: "Virginia Northern Neck heritage; linked to Op den Graeff mercantile-heraldic line.",
                sources: "Virginia land and parish records."
            },
            {
                name: "William Sprouse (b. 1822)",
                dates: "1822–after 1880",
                faith: "Protestant.",
                nexus: "Involved in town-planning beside a rail line; boosted local market access.",
                sources: "County plat maps; rail company records."
            }
        ]
    },
    {
        era: "IV. Modern & Frontier Era (1850–1954)",
        locationId: "kinmundy",
        people: [
            {
                name: "William T. Sprouse",
                dates: "1822–1886",
                faith: "Protestant.",
                nexus: "Founded Kinmundy, IL, beside Illinois Central Railroad; built first saw and grist mill; Civil War captain.",
                sources: "Marion County plat maps; Civil War service records.",
                genealogicalEvidence: [
                    {
                        type: "County Land Deed",
                        detail: "Documents the purchase of the initial 80-acre tract for the town plat of Kinmundy, 'adjacent to the proposed Illinois Central right-of-way.'",
                        sourceImage: "https://placehold.co/400x300/e2e8f0/64748b?text=Land+Deed",
                        sourceTranscript: "Be it known that William T. Sprouse has this day purchased the 80 acre tract... for the establishment of a town to be named Kinmundy, situated upon the planned route of the Illinois Central Railroad..."
                    }
                ]
            },
            {
                name: "Granville Babbitt Sprouse",
                dates: "1863–1947",
                faith: "Protestant.",
                nexus: "Tobacco merchant; co-founded prizing house; mayor; bank director; operated within Robertson County's tobacco–banking complex.",
                sources: "Springfield city directories; bank records."
            },
            {
                name: "John Draughon Sprouse, Sr.",
                dates: "1904–1980",
                faith: "Protestant.",
                nexus: "Tennessee state senator; legislative influence on infrastructure.",
                sources: "Tennessee legislative records."
            },
            {
                name: "John Alwyn Sprouse",
                dates: "1908–1993",
                faith: "Presbyterian.",
                nexus: "President/CEO of Sprouse-Reitz Stores Inc.; pioneered overseas buying; multi-state retail logistics.",
                sources: "Company histories; trade journals."
            },
            {
                name: "George F. Sprouse",
                dates: "1837–1910",
                faith: "Protestant.",
                nexus: "Civil War officer; farmer in KS and AR; adapted to post-war commodity markets.",
                sources: "Military records; agricultural censuses."
            },
            {
                name: "William Claude Sprouse",
                dates: "1891–1954",
                faith: "Protestant.",
                nexus: "Tradesman; navigated economic shifts of two world wars and the Depression.",
                sources: "City directories; census records."
            }
        ]
    }
];

// ============================================================================
// DOM Elements & Global Variables
// ============================================================================

let isInitialized = false;
let currentModal = null;
let searchTimeout = null;

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Debounce function to limit rapid function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Smooth scroll to element with offset for fixed navbar
 */
function smoothScrollTo(target, offset = 80) {
    const element = document.querySelector(target);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

/**
 * Check if element is in viewport
 */
function isElementInViewport(el, threshold = 0.1) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
    const verticalInView = (rect.top <= windowHeight * (1 - threshold)) && 
                          ((rect.top + rect.height) >= windowHeight * threshold);
    const horizontalInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return verticalInView && horizontalInView;
}

// ============================================================================
// Mobile Navigation Functions
// ============================================================================

/**
 * Initialize mobile navigation
 */
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger || !navMenu) return;

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
            
            // Smooth scroll to target
            const target = link.getAttribute('href');
            if (target.startsWith('#')) {
                smoothScrollTo(target);
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navMenu.contains(e.target) || hamburger.contains(e.target);
        
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================================================
// Scroll Effects
// ============================================================================

/**
 * Initialize scroll-based effects
 */
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');
    const revealElements = document.querySelectorAll('.reveal');
    
    let ticking = false;

    function updateOnScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background opacity
        if (navbar) {
            if (scrollTop > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.borderBottomColor = '#e5e7eb';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.borderBottomColor = 'transparent';
            }
        }
        
        // Back to top button
        if (backToTopBtn) {
            if (scrollTop > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
        
        // Reveal animations
        revealElements.forEach(el => {
            if (isElementInViewport(el, 0.15)) {
                el.classList.add('visible');
            }
        });
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }

    // Initial check
    updateOnScroll();
    
    // Optimized scroll listener
    window.addEventListener('scroll', requestTick, { passive: true });

    // Back to top button functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================================================
// Search Functionality
// ============================================================================

/**
 * Initialize search functionality
 */
function initSearch() {
    const searchInput = document.getElementById('family-search');
    const searchClear = document.getElementById('search-clear');
    
    if (!searchInput) return;

    // Search input handler with debounce
    const debouncedSearch = debounce((query) => {
        performSearch(query);
    }, 300);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        
        // Show/hide clear button
        if (searchClear) {
            if (query) {
                searchClear.classList.add('visible');
            } else {
                searchClear.classList.remove('visible');
            }
        }
        
        debouncedSearch(query);
    });

    // Clear search
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.classList.remove('visible');
            performSearch('');
            searchInput.focus();
        });
    }
}

/**
 * Perform search filtering
 */
function performSearch(query) {
    const personCards = document.querySelectorAll('.person-card');
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    if (!query) {
        // Show all cards and close accordions
        personCards.forEach(card => {
            card.style.display = 'block';
        });
        accordionItems.forEach(item => {
            item.classList.remove('active');
        });
        return;
    }

    const queryLower = query.toLowerCase();
    let hasMatches = {};
    
    // Check each person card for matches
    personCards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const eraContainer = card.closest('.accordion-item');
        const eraId = eraContainer ? eraContainer.dataset.location : '';
        
        if (text.includes(queryLower)) {
            card.style.display = 'block';
            if (eraId) {
                hasMatches[eraId] = true;
            }
        } else {
            card.style.display = 'none';
        }
    });

    // Open accordions that have matches, close others
    accordionItems.forEach(item => {
        const locationId = item.dataset.location;
        if (hasMatches[locationId]) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// ============================================================================
// Accordion Functionality
// ============================================================================

/**
 * Initialize accordion functionality
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');
            
            // Close all accordions first
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Open clicked accordion if it wasn't already active
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
}

// ============================================================================
// Modal Functionality
// ============================================================================

/**
 * Initialize modal functionality
 */
function initModal() {
    const modal = document.getElementById('document-modal');
    const modalClose = document.getElementById('modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalTranscript = document.getElementById('modal-transcript');

    if (!modal) return;

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        currentModal = null;
    }

    // Close modal on close button click
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Global function to open modal (called by evidence buttons)
    window.openModal = function(type, imageUrl, transcript) {
        if (modalTitle) modalTitle.textContent = type;
        if (modalImage) modalImage.src = imageUrl;
        if (modalTranscript) modalTranscript.textContent = transcript;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        currentModal = modal;
    };
}

// ============================================================================
// Biographical Data Population
// ============================================================================

/**
 * Create a person card element
 */
function createPersonCard(person) {
    const card = document.createElement('div');
    card.className = 'person-card';
    
    const header = document.createElement('div');
    header.className = 'person-header';
    
    const name = document.createElement('h4');
    name.className = 'person-name';
    name.textContent = person.name;
    
    const dates = document.createElement('span');
    dates.className = 'person-dates';
    dates.textContent = person.dates;
    
    header.appendChild(name);
    header.appendChild(dates);
    
    const details = document.createElement('div');
    details.className = 'person-details';
    
    const leftColumn = document.createElement('div');
    leftColumn.innerHTML = `
        <div class="person-detail">
            <strong>Faith & Community:</strong> ${person.faith}
        </div>
        <div class="person-detail">
            <strong>Commercial Nexus:</strong> ${person.nexus}
        </div>
    `;
    
    const rightColumn = document.createElement('div');
    rightColumn.innerHTML = `
        <div class="person-detail">
            <strong>Primary Sources:</strong> ${person.sources}
        </div>
    `;
    
    details.appendChild(leftColumn);
    details.appendChild(rightColumn);
    
    card.appendChild(header);
    card.appendChild(details);
    
    // Add genealogical evidence if present
    if (person.genealogicalEvidence && person.genealogicalEvidence.length > 0) {
        const evidenceSection = document.createElement('div');
        evidenceSection.className = 'evidence-section';
        
        const evidenceTitle = document.createElement('h5');
        evidenceTitle.className = 'evidence-title';
        evidenceTitle.textContent = 'Genealogical Evidence:';
        evidenceSection.appendChild(evidenceTitle);
        
        person.genealogicalEvidence.forEach(evidence => {
            const button = document.createElement('button');
            button.className = 'evidence-button';
            button.innerHTML = `<strong>${evidence.type}:</strong> ${evidence.detail}`;
            button.addEventListener('click', () => {
                openModal(evidence.type, evidence.sourceImage, evidence.sourceTranscript);
            });
            evidenceSection.appendChild(button);
        });
        
        card.appendChild(evidenceSection);
    }
    
    return card;
}

/**
 * Populate biographical data
 */
function populateBiographicalData() {
    const eraMapping = {
        'exeter': 'medieval-people',
        'talbot': 'colonial-people',
        'robertson': 'expansion-people',
        'kinmundy': 'modern-people'
    };
    
    biographicalData.forEach(era => {
        const containerId = eraMapping[era.locationId];
        const container = document.getElementById(containerId);
        
        if (container) {
            era.people.forEach(person => {
                const personCard = createPersonCard(person);
                container.appendChild(personCard);
            });
        }
    });
}

// ============================================================================
// Map Initialization (Placeholder for Leaflet)
// ============================================================================

/**
 * Initialize migration map
 */
function initMigrationMap() {
    const mapContainer = document.getElementById('migration-map');
    if (!mapContainer || typeof L === 'undefined') return;

    // Replace loading indicator with actual map
    mapContainer.innerHTML = '';
    mapContainer.style.height = '400px';
    
    try {
        // Initialize map centered on Atlantic region
        const map = L.map('migration-map').setView([40.0, -40.0], 3);
        
        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(map);
        
        // Migration route data
        const migrationPoints = [
            { lat: 50.7, lng: -3.5, name: "Exeter, Devon", era: "1100-1607" },
            { lat: 38.8, lng: -76.1, name: "Talbot County, MD", era: "1650-1780" },
            { lat: 36.5, lng: -86.9, name: "Robertson County, TN", era: "1780-1850" },
            { lat: 38.9, lng: -88.8, name: "Kinmundy, IL", era: "1850-1954" }
        ];
        
        // Add markers for each location
        migrationPoints.forEach((point, index) => {
            const marker = L.marker([point.lat, point.lng])
                .addTo(map)
                .bindPopup(`<strong>${point.name}</strong><br>${point.era}`);
            
            // Connect points with lines
            if (index > 0) {
                const prevPoint = migrationPoints[index - 1];
                L.polyline([[prevPoint.lat, prevPoint.lng], [point.lat, point.lng]], {
                    color: '#8b6f47',
                    weight: 3,
                    opacity: 0.7
                }).addTo(map);
            }
        });
        
        // Fit map to show all points
        const group = new L.featureGroup(migrationPoints.map(p => L.marker([p.lat, p.lng])));
        map.fitBounds(group.getBounds().pad(0.1));
        
    } catch (error) {
        console.error('Error initializing map:', error);
        mapContainer.innerHTML = '<div class="loading-indicator"><span>Map initialization failed</span></div>';
    }
}

/**
 * Initialize relationship diagram
 */
function initRelationshipDiagram() {
    const diagramContainer = document.getElementById('relationship-diagram');
    if (!diagramContainer) return;
    
    const svg = diagramContainer.querySelector('svg');
    if (!svg) return;
    
    // Simple relationship visualization
    svg.innerHTML = `
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                    refX="10" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#8b6f47" />
            </marker>
        </defs>
        
        <!-- Central node -->
        <circle cx="50%" cy="50%" r="30" fill="#8b6f47" stroke="#fff" stroke-width="3"/>
        <text x="50%" y="50%" text-anchor="middle" dy="5" fill="white" font-weight="bold">Core</text>
        
        <!-- Branch nodes -->
        <circle cx="20%" cy="20%" r="20" fill="#d4af37" stroke="#fff" stroke-width="2"/>
        <text x="20%" y="20%" text-anchor="middle" dy="3" fill="white" font-size="12">Devon</text>
        
        <circle cx="80%" cy="20%" r="20" fill="#2c3e50" stroke="#fff" stroke-width="2"/>
        <text x="80%" y="20%" text-anchor="middle" dy="3" fill="white" font-size="12">Maryland</text>
        
        <circle cx="20%" cy="80%" r="20" fill="#dc2626" stroke="#fff" stroke-width="2"/>
        <text x="20%" y="80%" text-anchor="middle" dy="3" fill="white" font-size="12">Tennessee</text>
        
        <circle cx="80%" cy="80%" r="20" fill="#6b7280" stroke="#fff" stroke-width="2"/>
        <text x="80%" y="80%" text-anchor="middle" dy="3" fill="white" font-size="12">Illinois</text>
        
        <!-- Connection lines -->
        <line x1="35%" y1="35%" x2="42%" y2="42%" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="65%" y1="35%" x2="58%" y2="42%" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="35%" y1="65%" x2="42%" y2="58%" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="65%" y1="65%" x2="58%" y2="58%" stroke="#8b6f47" stroke-width="2" marker-end="url(#arrowhead)"/>
    `;
}

// ============================================================================
// Performance Monitoring
// ============================================================================

/**
 * Monitor page performance
 */
function initPerformanceMonitoring() {
    // Log performance metrics in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Performance:', {
                    'DOM Content Loaded': `${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`,
                    'Page Load Complete': `${perfData.loadEventEnd - perfData.loadEventStart}ms`,
                    'Total Load Time': `${perfData.loadEventEnd - perfData.navigationStart}ms`
                });
            }, 0);
        });
    }
}

// ============================================================================
// Accessibility Enhancements
// ============================================================================

/**
 * Initialize accessibility features
 */
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.className = 'skip-link sr-only';
    skipLink.href = '#introduction';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 2001;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Announce page changes to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    document.body.appendChild(announcer);

    // Announce accordion state changes
    document.addEventListener('click', (e) => {
        if (e.target.matches('.accordion-header') || e.target.closest('.accordion-header')) {
            const header = e.target.closest('.accordion-header');
            const accordionItem = header.parentElement;
            const title = header.querySelector('h3').textContent;
            
            setTimeout(() => {
                const isOpen = accordionItem.classList.contains('active');
                announcer.textContent = `${title} section ${isOpen ? 'expanded' : 'collapsed'}`;
            }, 100);
        }
    });
}

// ============================================================================
// Error Handling
// ============================================================================

/**
 * Global error handler
 */
function initErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
        
        // Show user-friendly error message for critical failures
        if (e.error && e.error.message) {
            const errorDiv = document.createElement('div');
            errorDiv.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: #dc2626;
                color: white;
                padding: 1rem;
                border-radius: 8px;
                z-index: 2000;
                max-width: 300px;
                font-size: 0.9rem;
            `;
            errorDiv.innerHTML = `
                <strong>Error:</strong> Something went wrong. Please refresh the page.
                <button onclick="this.parentElement.remove()" style="float: right; background: none; border: none; color: white; cursor: pointer; font-size: 1.2rem; margin-left: 10px;">&times;</button>
            `;
            
            document.body.appendChild(errorDiv);
            
            // Auto-remove after 10 seconds
            setTimeout(() => {
                if (errorDiv.parentElement) {
                    errorDiv.remove();
                }
            }, 10000);
        }
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
        e.preventDefault();
    });
}

// ============================================================================
// Main Initialization
// ============================================================================

/**
 * Initialize all functionality when DOM is loaded
 */
function initializeApp() {
    if (isInitialized) return;
    
    try {
        // Core functionality
        initErrorHandling();
        initMobileNavigation();
        initScrollEffects();
        initSearch();
        initAccordion();
        initModal();
        initAccessibility();
        
        // Data population
        populateBiographicalData();
        
        // Enhanced features
        initMigrationMap();
        initRelationshipDiagram();
        initPerformanceMonitoring();
        
        isInitialized = true;
        
        // Trigger initial scroll effects check
        setTimeout(() => {
            window.dispatchEvent(new Event('scroll'));
        }, 100);
        
        console.log('Sprouse-Prouse Family Research website initialized successfully');
        
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// ============================================================================
// Event Listeners & Startup
// ============================================================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Handle page visibility changes (for performance optimization)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden - pause non-critical animations
        document.body.classList.add('page-hidden');
    } else {
        // Page is visible - resume animations
        document.body.classList.remove('page-hidden');
        // Re-trigger scroll effects
        window.dispatchEvent(new Event('scroll'));
    }
});

// Handle window resize for responsive adjustments
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Recalculate reveal elements on resize
        document.querySelectorAll('.reveal').forEach(el => {
            if (isElementInViewport(el, 0.15)) {
                el.classList.add('visible');
            }
        });
        
        // Re-initialize map if needed
        if (window.innerWidth !== resizeTimeout.lastWidth) {
            const mapContainer = document.getElementById('migration-map');
            if (mapContainer && mapContainer.querySelector('.leaflet-container')) {
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 100);
            }
        }
        
        resizeTimeout.lastWidth = window.innerWidth;
    }, 250);
});

// Export functions for potential external use
window.SprouseProuseApp = {
    smoothScrollTo,
    openModal,
    initializeApp
};