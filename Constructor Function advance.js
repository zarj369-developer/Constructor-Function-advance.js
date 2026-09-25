function HousKeeper(name, age, abilities, languages, experience) {
    this.name = name;
    this.age = age;
    this.abilities = abilities;
    this.languages = languages;
    this.experience = experience;
    this.clean = function() {
        alert("May I wash your clothes?");
    };
}
var HousKeeper1 = new HousKeeper(
    "kate",20,["cleaning", "washing", "taking"],["persian", "german", "english"],5);
HousKeeper1.clean();
