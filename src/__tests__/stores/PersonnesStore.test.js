import PersonnesStore from "../../stores/PersonnesStore";
import Personne from "../../models/Personne";
import { random } from "lodash";

describe("PersonneStore tests", () => {
  test("PersonneStore creation", () => {
    let personnesStore = PersonnesStore.create();

    expect(personnesStore.personnes.length).toBe(0);
    expect(personnesStore.edited).toBeNull();
    expect(personnesStore.fetchingData).toBeFalsy();
  });

  test("Force setting personnes list", () => {
    let personnesStore = PersonnesStore.create();
    let personne = Personne.create({ id: random(-1000, 0) });

    expect(() => personnesStore.personnes.push(personne)).toThrowError(
      /the object is protected and can only be modified by using an action/
    );
  });

  test("Set fetching data", () => {
    let personnesStore = PersonnesStore.create();

    personnesStore.markFecthingData(false);
    expect(personnesStore.fetchingData).toBeFalsy();

    personnesStore.markFecthingData(true);
    expect(personnesStore.fetchingData).toBeTruthy();
  });

  test("Set edited Personne", () => {
    let personnesStore = PersonnesStore.create();
    let personne = Personne.create({ id: random(-1000, 0) });
    personnesStore.setEdited(personne);

    expect(personnesStore.edited).toBe(personne);
  });

  test("Get Personne by id", () => {
    let personnesStore = PersonnesStore.create();

    expect(JSON.stringify(personnesStore.getPersonneById(1))).toBe(
      JSON.stringify([])
    );
  });
});
