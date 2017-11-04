import React from "react";
import { observer, inject } from "mobx-react";
import PersonneCard from "./PersonneCard";

const PersonnesList = inject("personnesStore")(
  observer(({ personnesStore }) =>
    <section>
      <div class="row">
        {personnesStore.personnes.map(personne =>
          <PersonneCard key={personne.id} personne={personne} />
        )}
      </div>
    </section>
  )
);

export default PersonnesList;
