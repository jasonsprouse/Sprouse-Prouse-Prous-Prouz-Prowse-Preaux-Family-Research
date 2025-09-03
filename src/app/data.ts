export const siteData = {
  eras: [
    {
      id: 1,
      title: "I. The Crucible of Commerce",
      period: "c. 1100–1607",
      description: "From Devon manors to the powerful Society of Merchant Venturers in Exeter, the family forged its commercial DNA in the English wool and tin trades, mastering international logistics and credit.",
      image: "https://images.unsplash.com/photo-1594782480839-819708170198?q=80&w=800&auto=format&fit=crop",
      alt: "Historic medieval port city of Exeter"
    },
    {
      id: 2,
      title: "II. The Atlantic Enterprise",
      period: "c. 1650–1780",
      description: "Transplanting their skills to colonial Maryland, they established riverfront plantations as private logistical hubs for the lucrative tobacco trade, linking rural production to urban finance in Baltimore.",
      image: "https://images.unsplash.com/photo-1620050143639-0d127713d2e2?q=80&w=800&auto=format&fit=crop",
      alt: "Colonial-era plantation house in Maryland"
    },
    {
      id: 3,
      title: "III. Forging a New Nation",
      period: "c. 1780–1880",
      description: "Moving west, the family adapted again, mastering the legal infrastructure of the frontier before founding a town at a critical railroad junction, controlling the flow of timber and grain.",
      image: "https://images.unsplash.com/photo-1554224024-81a16b9b35b7?q=80&w=800&auto=format&fit=crop",
      alt: "Vintage steam train on a railroad track"
    },
    {
      id: 4,
      title: "IV. The Modern Apex",
      period: "c. 1860–1993",
      description: "The family's focus evolved to finance, politics, and finally, national retail, scaling their logistical instinct to manage a multi-state distribution network for the Sprouse-Reitz stores.",
      image: "https://images.unsplash.com/photo-1528701920115-f5c71a39f40e?q=80&w=800&auto=format&fit=crop",
      alt: "Interior of a vintage 20th-century general store"
    }
  ],
  biographicalData: [
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
  ],
  mapData: {
    locations: [
      {
        id: "exeter",
        name: "Exeter, Devon",
        coords: [50.7184, -3.5339],
        description: "The family's commercial origins in the wool and tin trades."
      },
      {
        id: "talbot",
        name: "Talbot County, MD",
        coords: [38.783, -76.071],
        description: "Hub of the family's tobacco plantation and export operations."
      },
      {
        id: "robertson",
        name: "Robertson County, TN",
        coords: [36.529, -86.885],
        description: "Center of frontier farming and legal-financial activities."
      },
      {
        id: "kinmundy",
        name: "Kinmundy, IL",
        coords: [38.771, -88.846],
        description: "Founded at a key railroad junction for the grain and timber trade."
      }
    ]
  },
  allianceData: {
    families: [
      { id: "Prouse", label: "Prouse/Sprouse", pos: { x: 50, y: 10 } },
      { id: "Vincent", label: "Vincent (Drapers)", pos: { x: 10, y: 30 } },
      { id: "Alford", label: "Alford (Merchants)", pos: { x: 90, y: 30 } },
      { id: "Harding", label: "Harding/Gittings (Finance)", pos: { x: 10, y: 60 } },
      { id: "Appleton", label: "Appleton (Magistrates)", pos: { x: 90, y: 60 } },
      { id: "Combs", label: "Combs (Landholders)", pos: { x: 50, y: 90 } }
    ],
    alliances: [
      { from: "Prouse", to: "Vincent", label: "c. 1559" },
      { from: "Prouse", to: "Alford", label: "c. 1670" },
      { from: "Prouse", to: "Harding", label: "c. 1731" },
      { from: "Prouse", to: "Appleton", label: "c. 1785" },
      { from: "Prouse", to: "Combs", label: "c. 1820" }
    ]
  }
};