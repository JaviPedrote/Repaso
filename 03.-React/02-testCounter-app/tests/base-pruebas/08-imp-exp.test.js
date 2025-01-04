import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un héroe por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe de retornar undefined si no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  // Tarea:
  test("getHeroesByOwner debe de regresar heroes de DC", () => {

    const owner = "DC";
    const hero = getHeroesByOwner(owner);
    console.log(hero);
    expect(hero).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    expect(hero.length).toBe(3);


    const hero2 = getHeroesByOwner("Marvel");
    expect(hero2.length).toEqual(2);
    expect(hero2).toEqual(heroes.filter((h) => h.owner === "Marvel"));
  });
});
