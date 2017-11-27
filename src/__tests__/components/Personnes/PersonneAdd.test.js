import "jsdom-global/register";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import PropTypes from "prop-types";

import PersonneAdd from "../../../components/Personnes/PersonneAdd";
import PersonnesStore from "../../../stores/PersonnesStore";
import { getMuiTheme } from "material-ui/styles/index";

configure({ adapter: new Adapter() });

describe("PersonneAdd tests", () => {
  test("Render PersonneAdd component", () => {
    let personnesStore = PersonnesStore.create();
    const muiTheme = getMuiTheme();
    const component = shallow(<PersonneAdd personnesStore={personnesStore} />, {
      context: { muiTheme },
      childContextTypes: { muiTheme: PropTypes.object.isRequired }
    });
    expect(component).toMatchSnapshot();
  });
});
