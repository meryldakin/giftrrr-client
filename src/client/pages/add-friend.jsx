import React from "react";
import { Header, Icon, Modal, Button } from 'semantic-ui-react'

const AddFriend = props => {
  const { open, onClose } = props;
  return (
    <Modal
      // trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
      open={open}
      onClose={onClose}
      basic
      size='small'
    >
      <Header icon='browser' content='Cookies policy' />
      <Modal.Content>
        <h3>This website uses cookies to ensure the best user experience.</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='green' onClick={onClose} inverted>
          <Icon name='checkmark' /> Got it
      </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default AddFriend;
