import Personne from "../../models/Personne";
import { random } from "lodash";

describe("Personne tests", () => {
  test("Personne creation", () => {
    let personne = Personne.create({
      id: random(-1000, 0),
      nom: "salaun",
      prenom: "victor"
    });

    expect(personne.id).toBeLessThanOrEqual(0);
    expect(personne.nom).toEqual("SALAUN");
    expect(personne.prenom).toEqual("Victor");
  });
});
