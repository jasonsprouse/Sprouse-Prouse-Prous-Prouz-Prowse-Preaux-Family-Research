export const siteData = {
  eras: [
    {
      id: 1,
      title: "I. Feudal & Medieval Foundations",
      period: "c. 1100–1607",
      description: "From royal Dapifers (stewards) and Channel Island Wardens to the 1st Sword Bearer of Exeter and MP John Prouz, the family forged its commercial DNA in land logistics, international cloth guilds, and local governance.",
      image: "https://images.unsplash.com/photo-1594782480839-819708170198?q=80&w=800&auto=format&fit=crop",
      alt: "Historic medieval port city of Exeter",
      videoSummary: "Transitioned from Norman dapifers to Devonshire barons to Exeter merchants. Preserved the lineage through the White Ship disaster, built Gidleigh Castle, and mastered the medieval wool and tin trade."
    },
    {
      id: 2,
      title: "II. The Atlantic Enterprise",
      period: "c. 1650–1780",
      description: "Transplanting their logistical skills to the Chesapeake, they served as church wardens, patented riverfront tobacco ports like Prouse's Landing, and integrated with Baltimore finance networks.",
      image: "https://images.unsplash.com/photo-1620050143639-0d127713d2e2?q=80&w=800&auto=format&fit=crop",
      alt: "Colonial-era plantation house in Maryland",
      videoSummary: "Transplanted the logistical merchant instinct to the Chesapeake. Built riverfront tobacco plantations like Prouse's Landing, integrating into the elite planter and civic networks of colonial Maryland."
    },
    {
      id: 3,
      title: "III. Forging a New Nation",
      period: "c. 1780–1880",
      description: "Moving west along the Wilderness Road, they adapted to frontier law and spec. William Sprouse served under Captain Abraham Lincoln in the Black Hawk War before patenting the prairie Occidental Plow.",
      image: "https://images.unsplash.com/photo-1554224024-81a16b9b35b7?q=80&w=800&auto=format&fit=crop",
      alt: "Vintage steam train on a railroad track",
      videoSummary: "Forged into the American frontier. Served under Abraham Lincoln in the Black Hawk War, invented the Occidental Plow, and established legal and civic infrastructure in Tennessee and Illinois."
    },
    {
      id: 4,
      title: "IV. Railroads & Modern Retail",
      period: "c. 1850–1993",
      description: "Founder William T. Sprouse established the railroad junction town of Kinmundy, Illinois. The line culminated in mass retail leadership, with John Alwyn Sprouse serving as CEO of Sprouse-Reitz Stores.",
      image: "https://images.unsplash.com/photo-1528701920115-f5c71a39f40e?q=80&w=800&auto=format&fit=crop",
      alt: "Interior of a vintage 20th-century general store",
      videoSummary: "Founded the railroad junction town of Kinmundy, dominating local grain and timber milling, and eventually scaled this logistical instinct into a multi-state retail empire with Sprouse-Reitz Stores."
    }
  ],
  biographicalData: [
    {
      era: "I. Feudal & Medieval Foundations (1100–1607)",
      locationId: "exeter",
      people: [
        {
          name: "Eudo de Préaux",
          dates: "died c. 1120",
          faith: "Catholic; founder of St. John's Abbey in Colchester in 1096.",
          nexus: "Royal Seneschal (Dapifer) to William the Conqueror, William Rufus, and Henry I; Governor of Colchester Castle; held extensive Domesday estates across Essex and Suffolk. Married Rohais de Clare.",
          sources: "1086 Domesday Book; Colchester Castle construction charters; St. John's Abbey cartularies."
        },
        {
          name: "William de Pirou",
          dates: "fl. c. 1110–1123",
          faith: "Catholic.",
          nexus: "King's Dapifer (Royal Steward) to Henry I; witnessed the 1113 Savigny Charter ex parte mea; survived the 1120 White Ship sinking, as proven by Queen Adeliza's 1121 charter.",
          sources: "Cartulary of Savigny Abbey; 1121 Queen Adeliza Charter."
        },
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
              sourceImage: "/manorial_roll.png",
              sourceTranscript: "Item: To Osbert de Préaux, for the lands at Gidleigh, an accounting of XL stone of wool delivered to the port-reeve of Exeter..."
            }
          ]
        },
        {
          name: "Pierre (Peter) de Préaux",
          dates: "born c. 1170, died c. 1212",
          faith: "Catholic.",
          nexus: "Warden of the Channel Islands; Constable of Rouen; close companion to Richard I and King John; held the manor of Alton in Southampton; married Mary de Vernon, daughter of the 5th Earl of Devon.",
          sources: "1200 Patent Rolls; 1204 Rouen siege and capitulation charters."
        },
        {
          name: "John Prouz of Chagford",
          dates: "born c. 1410",
          faith: "Catholic.",
          nexus: "Acquired West Challacombe Manor via marriage to Jane Orchard; prominent freeholder and wool trader in North Devon. Stone porch features carved quartered arms of Prouz and Orchard.",
          sources: "Exmoor HER MDE20391; Westcote's View of Devonshire."
        },
        {
          name: "Lawrence Prouse",
          dates: "1480–1548",
          faith: "Catholic parish life pre-Reformation.",
          nexus: "Appointed 1st Sword Bearer of the City of Exeter; managed Exeter Quay tin logistics and municipal agriculture; active in the 1538 Exeter Conspiracy.",
          sources: "Exeter Guildhall Records; Devon subsidy rolls."
        },
        {
          name: "Bartholomew Prouz alias Sproute",
          dates: "born c. 1485",
          faith: "Anglican.",
          nexus: "JP and Justice of Assizes in Chelmsford; held Calverley manorial estates in Barking, Essex. Proves the use of the S-prefix variant in England as early as 1512.",
          sources: "Letters & Papers of Henry VIII; Barking manorial rolls (1515-1529)."
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
          name: "George Sprouse (Cotton Will)",
          dates: "fl. 1653",
          faith: "Protestant.",
          nexus: "St. Mary's County agricultural laborer; labor bequest recorded in the landmark 1653 Will of Edward Cotton (which established the first school in Maryland).",
          sources: "1653 Will of Edward Cotton; Maryland State Archives."
        },
        {
          name: "George Prouse II",
          dates: "1642–1696",
          faith: "Anglican; St. Peter's Parish, Talbot County.",
          nexus: "Assembled river-front plantations; leveraged London factor credit; patented 'Prouse's Landing' for direct tobacco export.",
          sources: "Talbot County land patents; parish registers.",
          genealogicalEvidence: [
            {
              type: "Land Patent",
              detail: "Grant for 350 acres, 'Prouse's Landing,' described as 'fronting the Choptank River for the purpose of loading tobacco.'",
              sourceImage: "/land_patent.png",
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
          nexus: "Gittings family connections; inherited enslaved woman Hagar (later litigated in Chancery Case #20978002).",
          sources: "Baltimore County court records; Gittings family papers."
        },
        {
          name: "George Prouse V",
          dates: "1733–1781",
          faith: "Anglican; Church Warden.",
          nexus: "Managed plantation logistics and parish finances. Estate administration recorded under the name George Sprouse in 1772.",
          sources: "St. Peter's Parish Vestry Minutes; Caroline County Admin Bonds."
        }
      ]
    },
    {
      era: "III. Post-Colonial Expansion & Law (1780–1850)",
      locationId: "robertson",
      people: [
        {
          name: "George Sprouse",
          dates: "1757–1845",
          faith: "Anglican roots; frontier Protestantism.",
          nexus: "Migrated to Robertson County, TN; established dark-fired tobacco homestead adjacent to Wessyngton Plantation; Appleton merchant heritage.",
          sources: "Robertson County deed books; Appleton genealogies."
        },
        {
          name: "Margaret Appleton Sprouse",
          dates: "",
          faith: "Protestant.",
          nexus: "Descended from Ipswich merchant-magistrates and the Glover printing-press line (dunster/Harvard connection).",
          sources: "Massachusetts Bay Colony records."
        },
        {
          name: "James W. Sprouse",
          dates: "c. 1798–1860",
          faith: "Protestant.",
          nexus: "Lawyer; landholder; handled deeds, contracts, estate settlements on the Tennessee frontier.",
          sources: "Robertson County court minutes; probate records."
        },
        {
          name: "William T. Sprouse (Black Hawk)",
          dates: "1802–after 1880",
          faith: "Protestant.",
          nexus: "Private in Captain Abraham Lincoln's Company (1832 Black Hawk War), gunsmith, Sangamon County blacksmith, patented the 'Occidental Plow'.",
          sources: "U.S. Patent Office records; military muster rolls; Sangamon marriage registers.",
          genealogicalEvidence: [
            {
              type: "Military Muster Roll",
              detail: "1832, 4th Reg, IL Mounted Volunteers. Listed as a private in Captain Abraham Lincoln's company.",
              sourceImage: "/muster_roll.png",
              sourceTranscript: "Company: Captain A. Lincoln\n4th Regiment, Illinois Mounted Volunteers\nPrivate William Sprouse - Mustered in April 21, 1832..."
            }
          ]
        },
        {
          name: "Martha Combs Sprouse",
          dates: "",
          faith: "Protestant.",
          nexus: "Virginia Northern Neck heritage; linked to Op den Graeff mercantile-heraldic line. Married William T. Sprouse in Sangamon County in 1830.",
          sources: "Virginia land and parish records; Sangamon marriage files."
        },
        {
          name: "William Sprouse",
          dates: "1822–after 1880",
          faith: "Protestant.",
          nexus: "Involved in town-planning beside a rail line; boosted local market access.",
          sources: "County plat maps; rail company records."
        }
      ]
    },
    {
      era: "IV. Railroads & Modern Retail (1850–1993)",
      locationId: "kinmundy",
      people: [
        {
          name: "William T. Sprouse (Founder)",
          dates: "1822–1886",
          faith: "Protestant.",
          nexus: "Founded Kinmundy, IL, beside Illinois Central Railroad; built first saw and grist mill; Civil War Captain.",
          sources: "Marion County plat maps; Civil War service records.",
          genealogicalEvidence: [
            {
              type: "County Land Deed",
              detail: "Documents the purchase of the initial 80-acre tract for the town plat of Kinmundy, 'adjacent to the proposed Illinois Central right-of-way.'",
              sourceImage: "/land_deed.png",
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
        name: "Exeter, Devon & Normandy Strongholds",
        coords: [50.7184, -3.5339],
        description: "Old World origins at Gidleigh Castle, Château de Pirou, West Challacombe, and Exeter guild halls."
      },
      {
        id: "talbot",
        name: "Talbot County, MD",
        coords: [38.783, -76.071],
        description: "Hub of the family's tobacco plantation and export operations at Prouse's Landing."
      },
      {
        id: "robertson",
        name: "Robertson County, TN",
        coords: [36.529, -86.885],
        description: "Center of frontier farming, tobacco prizing, and legal-financial activities."
      },
      {
        id: "kinmundy",
        name: "Kinmundy, IL",
        coords: [38.771, -88.846],
        description: "Founded by William T. Sprouse at a key railroad junction for the grain and timber trade."
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