import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
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
    this.props.putStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div className="profile__status">
        {!this.state.editMode && (
          <span onDoubleClick={this.activeMode}>
            {this.state.status}
          </span>
        )}
        {this.state.editMode && (
          <span>
            <input
            onChange={this.onStatusChange}
              onBlur={this.noActiveMode}
              autoFocus={true}
              value={this.state.status}
            />
          </span>
        )}
      </div>
    );
  }q
}

export default ProfileStatus;
