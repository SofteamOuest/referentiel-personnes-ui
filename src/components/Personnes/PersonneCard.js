import React from "react";
import { observer, inject } from "mobx-react";

const PersonneCard = inject("personnesStore")(
  observer(({ personne, personnesStore }) =>
    <li>
      <a
        href={`/personnes/${personne.id}`}
        onClick={e => {
          e.preventDefault();
          personnesStore.view.openPersonnePage(personne);
          return false;
        }}
      >
        {personne.nom} - {personne.prenom}
      </a>
    </li>
  )
);

export default PersonneCard;
