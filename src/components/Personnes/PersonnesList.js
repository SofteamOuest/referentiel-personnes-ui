import React from "react";
import { observer, inject } from "mobx-react";
import PersonneCard from "./PersonneCard";

const PersonnesList = inject("personnesStore")(
  observer(({ personnesStore }) =>
    <section>
      <h1>Personnes List</h1>
      <ol>
        {personnesStore.personnes.map(personne =>
          <PersonneCard key={personne.id} personne={personne} />
        )}
      </ol>
    </section>
  )
);

export default PersonnesList;
