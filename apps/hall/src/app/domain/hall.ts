export interface HallZone {
  id: string;
  sections: HallSection[];
}

export interface HallSection {
  id: number;
  rows: HallSectionRow[];
  firstSeatNumber: number;
  lastSeatNumber: number;
}

export interface HallSectionRow {
  id: number;
  leftOffset: number;
  seatCount: number;
}

// State

export class HallState {
  zones: Map<string, HallZoneState>;

  constructor();
  constructor(other: HallState);
  constructor(other?: HallState) {
    this.zones = new Map<string, HallZoneState>();
    if (other) {
      for (const [k, v] of other.zones) {
        this.zones.set(k, new HallZoneState(v));
      }
    }
  }

  getZone(zone: string): HallZoneState {
    if (!this.zones.get(zone)) {
      this.zones.set(zone, new HallZoneState());
    }
    return this.zones.get(zone) || new HallZoneState();
  }

  toggleSeat(zone: string, section: number, row: number, seat: number) {
    this.getZone(zone).toggleSeat(section, row, seat);
  }
}

export class HallZoneState {
  sections: Map<number, HallSectionState>;

  constructor();
  constructor(other: HallZoneState);
  constructor(other?: HallZoneState) {
    this.sections = new Map<number, HallSectionState>();
    if (other) {
      for (const [k, v] of other.sections) {
        this.sections.set(k, new HallSectionState(v));
      }
    }
  }

  getSection(section: number): HallSectionState {
    if (!this.sections.get(section)) {
      this.sections.set(section, new HallSectionState());
    }
    return this.sections.get(section) || new HallSectionState();
  }

  toggleSeat(section: number, row: number, seat: number) {
    this.getSection(section).toggleSeat(row, seat);
  }
}

export class HallSectionState {
  rows: Map<number, HallRowState>;

  constructor();
  constructor(other: HallSectionState);
  constructor(other?: HallSectionState) {
    this.rows = new Map<number, HallRowState>();
    if (other) {
      for (const [k, v] of other.rows) {
        this.rows.set(k, new HallRowState(v));
      }
    }
  }

  getRow(row: number): HallRowState {
    if (!this.rows.get(row)) {
      this.rows.set(row, new HallRowState());
    }
    return this.rows.get(row) || new HallRowState();
  }

  toggleSeat(row: number, seat: number) {
    this.getRow(row).toggleSeat(seat);
  }
}

export class HallRowState {
  seats: Map<number, boolean>;

  constructor();
  constructor(other: HallRowState);
  constructor(other?: HallRowState) {
    this.seats = new Map<number, boolean>();
    if (other) {
      for (const [k, v] of other.seats) {
        this.seats.set(k, v);
      }
    }
  }

  toggleSeat(seat: number) {
    this.seats.set(seat, !this.seats.get(seat));
  }
}

export class HallStateAction {
  zone: string;
  section: number;
  row: number;
  seat: number;

  constructor(zone: string, section: number, row: number, seat: number) {
    this.zone = zone;
    this.section = section;
    this.row = row;
    this.seat = seat;
  }
}

export function HallStateReducer(
  state: HallState,
  action: HallStateAction
): HallState {
  const clonedState = new HallState(state);
  clonedState.toggleSeat(action.zone, action.section, action.row, action.seat);
  return clonedState;
}

export interface SeatStatusStateProps {
  toggleSeatStatus: (
    zone: string,
    section: number,
    row: number,
    seat: number
  ) => void;
}

export function seatId(
  zone: string,
  section: number,
  row: number,
  seat: number
): string {
  return `${zone}-${section}-${row}-${seat}`;
}
