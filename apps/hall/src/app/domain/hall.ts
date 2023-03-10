export interface HallZone {
  zoneId: string;
  sections: HallSection[];
}

export interface HallSection {
  sectionNumber: number;
  rows: HallSectionRow[];
}

export interface HallSectionRow {
  rowNumber: number;
  leftOffset: number;
  seatCount: number;
}
