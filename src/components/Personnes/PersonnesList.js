import React from "react";
import { observer, inject } from "mobx-react";
import PersonneCard from "./PersonneCard";

const PersonnesList = ({ personnesStore }) =>
  <section>
    <div className="row">
      {personnesStore.personnes.map(personne =>
        <PersonneCard key={personne.id} personne={personne} />
      )}
    </div>
  </section>;

export default inject("personnesStore")(observer(PersonnesList));
