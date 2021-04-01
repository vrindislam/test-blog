import React from "react";
import { Result, Button, Row, Col } from "antd";
import { useHistory } from "react-router";

const ErrorBoundaryPage = ({ errorInfo, error, eventId }) => {

   const history = useHistory();

   return (
      <Result
         status="warning"
         title={error.message || "There are some problems with your operation."}
         extra={
            <>
               <Row gutter={[16, 16]} justify={"center"}>
                  <Col spn={16}>
                     <p>{(errorInfo && errorInfo.componentStack.toString()) || "Error info"}</p>
                  </Col>
               </Row>
               <Button
                  style={{ width: 160 }}
                  type="primary"
                  key="err_return-home"
                  onClick={() => { history.push("/") }}>
                  Return to Home
          </Button>
            </>
         }
      />
   );
};

export default ErrorBoundaryPage;