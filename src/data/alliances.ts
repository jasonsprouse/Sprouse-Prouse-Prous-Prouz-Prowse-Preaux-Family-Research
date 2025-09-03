import { AllianceData } from '../types';

export const allianceData: AllianceData = {
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
};

export default allianceData;