import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="navbar-user">
                    <img className="rounded-circle" src="https://profiles.csh.rit.edu/image/matted"
                         width={32} height={32}/>
                    Username
                    <span className="caret"/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>
                        Dashboard
                    </DropdownItem>
                    <DropdownItem>
                        Settings
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                        Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}

Profile.propTypes = {};

export default Profile;