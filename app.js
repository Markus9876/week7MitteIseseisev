const result = document.querySelector("#result");
const villainS = document.querySelector("#villain");
const launch = document.querySelector(`button`);
const heroSpan = document.querySelector("#hero");

const heroes = ["Harry Potter", "Luke Skywalker", "Superman", "Lara Croft", "Garfield"];
const villains = ["Saruman", "Joker", "Cruella", "Darth Vader"];
const weapons = ["plastic fork", "flip-flop", "banana peel", "magic wand"];

launch.addEventListener("click", () => {
    const randomHeroIndex = Math.floor(Math.random() * heroes.length);
    const randomHero = heroes[randomHeroIndex];
    const randomHeroWeaponIndex = Math.floor(Math.random() * weapons.length);
    const randomHeroWeapon = weapons[randomHeroWeaponIndex];
    heroSpan.innerHTML = `Hero ${randomHero} is armed with ${randomHeroWeapon}.`;
    
    
    const randomVillainIndex = Math.floor(Math.random() * villains.length);
    const randomVillain = villains[randomVillainIndex];
    const randomVillainWeaponIndex = Math.floor(Math.random() * weapons.length);
    const randomVillainWeapon = weapons[randomVillainWeaponIndex];
    villainS.innerHTML = `Villain ${randomVillain} is armed with ${randomVillainWeapon}.`;
    
    const heroStrike = randomHero.length + randomHeroWeapon.length;
    const villainStrike = randomHero.length + randomVillainWeapon.length;
    
    if(villainStrike === heroStrike)
    {
        result.innerHTML = `It's a tie!`;
    }
    else if(heroStrike > villainStrike)
    {
        result.innerHTML = `the Hero wins!`;
    }
    else if(heroStrike < villainStrike)
    {
        result.innerHTML = `the Villain wins!`;
    }
});