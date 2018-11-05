import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import DataTable from "../Commans/DataTable";

class ResponsiveDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog
          fullScreen
          open={this.props.attOpen}
          onClose={e => this.props.actions.attDialog(false)}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"User Attendance"}
          </DialogTitle>
          <DialogContent>
            <DataTable {...this.props} />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={e => this.props.actions.attDialog(false)}
              color="primary"
              autoFocus
            >
              OKAY
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withMobileDialog()(ResponsiveDialog);
