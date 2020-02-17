import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IDcard from "../Component/IDcard";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Stefan Todorovic",
        age: 29
      },
      popupState: false
    };
    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }
  openPopup() {
    this.setState({
      popupState: true
    });
  }
  closePopup() {
    this.setState({
      popupState: false
    });
  }
  // componentDidMount() {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // componentDidUpdate(prevProps, prevState) {}
  // componentWillUpdate(nextProps, nextState) {}
  render() {
    return (
      <div>
        <h1>Home Komponenta</h1>
        <Button onClick={this.openPopup} variant="contained">
          Open popup
        </Button>
        <Dialog
          open={this.state.popupState}
          onClose={this.closePopup}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <IDcard user={this.state.user} />
            <Button onClick={this.closePopup} variant="contained">
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Home;
