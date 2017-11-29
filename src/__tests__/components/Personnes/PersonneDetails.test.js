import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import PropTypes from "prop-types";
import { getMuiTheme } from "material-ui/styles/index";

import PersonneDetails from "../../../components/Personnes/PersonneDetails";
import PersonnesStore from "../../../stores/PersonnesStore";

configure({ adapter: new Adapter() });

describe("PersonneDetails tests", () => {
  test("Render PersonneDetails component", () => {
    let personnesStore = PersonnesStore.create();
    const muiTheme = getMuiTheme({ userAgent: "all" });
    const component = shallow(
      <PersonneDetails personnesStore={personnesStore} />,
      {
        context: { muiTheme },
        childContextTypes: { muiTheme: PropTypes.object.isRequired }
      }
    );
    expect(component).toMatchSnapshot();
  });
});
