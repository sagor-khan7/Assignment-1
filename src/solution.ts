function formatValue(
  value: string | number | boolean,
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

function filterByRating(
  items: { title: string; rating: number }[],
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating > 4);
}

function filterActiveUsers(
  items: { id: number; name: string; email: string; isActive: boolean }[],
): { id: number; name: string; email: string; isActive: boolean }[] {
  return items.filter((item) => item.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(value: Book): void {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable ? "Yes" : "No"}`,
  );
}
