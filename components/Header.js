import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import data from "../data";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      type: "none",
      curMember: data.members[0]
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  changeMember(member) {
    this.setState({
      curMember: member
    });
  }

  createMembers() {
    return data.members.map((member, index) => {
      return (
        <DropdownItem key={index}>
          {member.name}
        </DropdownItem>
      );
    })
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">MHMC Lab - Collect</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/LinYunWen/data-collect-web.git">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {this.state.curMember.name}
              </DropdownToggle>
              <DropdownMenu right>
                {this.createMembers()}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}