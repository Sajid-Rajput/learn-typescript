function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: boolean, y: boolean): boolean;
function add(x: any, y: any): any {
  return x + y;
}

add(10, 20);
add("Sajid", "Rajput");
add(false, false);

//============================================================================================

// Example 2
function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number): Date;
function createDate(
  dayOrtimestamp: number,
  month?: number,
  year?: number
): Date {
  return month === undefined || year === undefined
    ? new Date(dayOrtimestamp)
    : new Date(year, month, dayOrtimestamp);
}

console.log(createDate(40000));