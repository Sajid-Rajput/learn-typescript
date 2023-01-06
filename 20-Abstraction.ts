// The first concept of OOP is Abstraction. Abstraction in OOP means to only expose the necessary details to the user of the class. Everything underlying doesn’t matter. To reach abstraction in TypeScript, you have multiple ways: abstract class/method, interfaces, and types.

abstract class Character {
  public name: string;
  public damage: number;
  public attackSpeed: number;

  constructor(name: string, damage: number, attackSpeed: number) {
    this.name = name;
    this.damage = damage;
    this.attackSpeed = attackSpeed;
  }

  public characterDetails(): string {
    return `*** Character Name: ${this.name} Damage: ${this.damage} Attack Speed: ${this.attackSpeed}  ***`;
  }

  public abstract damagePerSecond(): number; // abstract keywork in variable or fuction enforce the child class to write the definition.
}

class Goblin extends Character {
  constructor(name: string, damage: number, attackSpeed: number) {
    super(name, damage, attackSpeed);
  }

  public damagePerSecond(): number {
    return this.damage * this.attackSpeed;
  }
}

const character1 = new Goblin("Batman", 98, 92);
console.log("🚀 ~ file: 20-Abstraction.ts:28 ~ character1", character1);
console.log(
  "🚀 ~ file: 20-Abstraction.ts:28 ~ character1",
  character1.damagePerSecond()
);
console.log(
  "🚀 ~ file: 20-Abstraction.ts:28 ~ character1",
  character1.characterDetails()
);

//============================================================================================

// Example 2

abstract class Country {
  public name: string;
  public language: string;
  public population: number;
  public populationGrowthRate: number;
  private _statePrivacy: string;
  private _leader: string;
  public religion: string;
  public planet: string = "Earth";

  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    statePrivacy: string,
    leader: string,
    religion: string
  ) {
    (this.name = name),
      (this.language = language),
      (this.population = population),
      (this.populationGrowthRate = populationGrowthRate),
      (this._statePrivacy = statePrivacy),
      (this._leader = leader);
    this.religion = religion;
  }

  public abstract populationGrowth(): number;

  public get privateData(): string {
    return this._statePrivacy;
  }

  public set newLeader(leader: string) {
    this._leader = leader;
  }

  public greeting(): string {
    return "Hello";
  }
}

class OICCountry extends Country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationGrowthRate: number,
    statePrivacy: string,
    leader: string,
    religion: string = "Islam"
  ) {
    super(
      name,
      language,
      population,
      populationGrowthRate,
      statePrivacy,
      leader,
      religion
    );
  }

  public populationGrowth(): number {
    this.population = this.population * (1 + this.populationGrowthRate / 100);
    return this.population;
  }

  public greeting(): string {
    return "Assalam-o-Alaikum";
  }
}

const Pakistan = new OICCountry(
  "Islamic Republic of Pakistan",
  "urdu",
  3000000000,
  2.5,
  "State Privacy of Pakistan",
  "Pakistan's Leader"
);

console.log(Pakistan);

Pakistan.populationGrowth();
console.log(Pakistan); // population: 3074999999.9999995,

Pakistan.newLeader = "Hazrat Umer-e-Farooq R.A";
console.log(Pakistan);
console.log(Pakistan.privateData);
console.log(Pakistan.greeting()); // Assalam-o-Alaikum