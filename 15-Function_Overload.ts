function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: boolean, y: boolean): boolean;
function add(x: any, y: any): any {
  return x + y;
}

add(10, 20);
add("Sajid", "Rajput");
add(true, false);
