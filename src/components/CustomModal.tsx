import React from "react";
import { Modal } from "@shopify/polaris";

const CustomFormModal = ({title, active, children, handleClose, handleSubmit}) => {
    return (
      <div style={{height: '800px'}}>
        <Modal
          open={active}
          title={title}
          onClose={handleClose}
          primaryAction={{
            content: 'Submit',
            onAction: handleSubmit,
          }}
          secondaryActions={[
            {
              content: 'Cancle',
              onAction: handleClose,
            },
          ]}
        >
          <Modal.Section>
            {children}
          </Modal.Section>
        </Modal>
      </div>
    );
  }

  export default CustomFormModal;