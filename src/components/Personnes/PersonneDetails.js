import React from "react";
import {inject, observer} from "mobx-react";

const PersonneDetails = inject("personnesStore")(
    observer(({ personnesStore }) => <p>Details</p>)
);

export default PersonneDetails;
