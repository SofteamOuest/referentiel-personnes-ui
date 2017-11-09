import React from "react";
import { observer, inject } from "mobx-react";
import PersonneCard from "./PersonneCard";

class PersonnesList extends React.Component {
  render() {
    const { personnesStore } = this.props;
    return (
      <section>
        <div className="row">
          {personnesStore.personnes.map(personne => (
            <PersonneCard key={personne.id} personne={personne} />
          ))}
        </div>
      </section>
    );
  }

  componentDidMount() {
    const { personnesStore } = this.props;
    personnesStore.fetchPersonnes();
  }
}

export default inject("personnesStore")(observer(PersonnesList));
