import React, { Component, PropTypes } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Company extends Component {
    constructor(props) {
      super(props);
      // this.state = {'names': ["LALALA"]};
      this.companyList = this.companyList.bind(this);
      // this.setCompanys = this.setCompanys.bind(this);
    }

    // setCompanys(){
    //   this.setState({names: ["Placeholder Name"]});
    // }

    companyList(){
      if (this.props.data.companies) {
        return this.props.data.companies.map((company) => {
          return (
            <p key={company.name}><strong>Name: </strong> {company.name}</p>
          )
        });
      }
    }

    render(){
      return(
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h1> Companies Name Below: </h1>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button primary>Add Company</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <div>
              {this.props.data.loading ? "True" : "false"}
              {this.companyList()}
            </div>
          </Grid.Row>
        </Grid>
      );
    }
}

const CompanyListing =  gql`
  query CompanyListing {
    companies {
      name
    }
  }
`;

const CompanyWithData = graphql(CompanyListing)(Company);
export default CompanyWithData;
