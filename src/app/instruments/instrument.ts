export function rotationStr(deg: number): string {
  return `rotate(${deg}deg)`;
}

export interface Beacon {
  course: number;
  show: boolean;
  // Radial deviation
  error: number;
}
