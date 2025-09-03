import { Era } from '../types';

export const eras: Era[] = [
  {
    id: 1,
    title: "I. The Crucible of Commerce",
    period: "c. 1100–1607",
    description: "From Devon manors to the powerful Society of Merchant Venturers in Exeter, the family forged its commercial DNA in the English wool and tin trades, mastering international logistics and credit.",
    theme: {
      icon: "⚱", // Ancient vessel for trade
      gradient: ["#8b5a3c", "#d4af37"], // Brown to gold
      accentColor: "#d4af37"
    },
    alt: "Medieval Commerce Era"
  },
  {
    id: 2,
    title: "II. The Atlantic Enterprise",
    period: "c. 1650–1780",
    description: "Transplanting their skills to colonial Maryland, they established riverfront plantations as private logistical hubs for the lucrative tobacco trade, linking rural production to urban finance in Baltimore.",
    theme: {
      icon: "⚓", // Anchor for Atlantic voyages
      gradient: ["#1e3a8a", "#3b82f6"], // Deep blue to lighter blue
      accentColor: "#3b82f6"
    },
    alt: "Colonial Atlantic Trade Era"
  },
  {
    id: 3,
    title: "III. Forging a New Nation",
    period: "c. 1780–1880",
    description: "Moving west, the family adapted again, mastering the legal infrastructure of the frontier before founding a town at a critical railroad junction, controlling the flow of timber and grain.",
    theme: {
      icon: "🚂", // Steam locomotive for railroad era
      gradient: ["#7c2d12", "#dc2626"], // Brown to red
      accentColor: "#dc2626"
    },
    alt: "American Frontier Railroad Era"
  },
  {
    id: 4,
    title: "IV. The Modern Apex",
    period: "c. 1860–1993",
    description: "The family's focus evolved to finance, politics, and finally, national retail, scaling their logistical instinct to manage a multi-state distribution network for the Sprouse-Reitz stores.",
    theme: {
      icon: "🏢", // Building for modern business
      gradient: ["#1f2937", "#6b7280"], // Dark gray to lighter gray
      accentColor: "#8b5cf6"
    },
    alt: "Modern Business Era"
  }
];

export default eras;