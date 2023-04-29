import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activeMode = () => {
    this.setState({
      editMode: true,
    });
  }
  noActiveMode = () => {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div className="profile__status">
        {!this.state.editMode && (
          <span onDoubleClick={this.activeMode}>
            {this.props.status}
          </span>
        )}
        {this.state.editMode && (
          <span>
            <input
              onBlur={this.noActiveMode}
              autoFocus={true}
              value={this.props.status}
            />
          </span>
        )}
      </div>
    );
  }q
}

export default ProfileStatus;
