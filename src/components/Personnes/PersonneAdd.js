import React from "react";
import {inject, observer} from "mobx-react";

const PersonneAdd = inject("personnesStore")(
  observer(({ personnesStore }) => <p>Add</p>)
);

export default PersonneAdd;
