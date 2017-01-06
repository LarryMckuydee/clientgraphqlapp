import React, { Component, PropTypes } from 'react';
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
        <div>
          {this.props.data.loading ? "True" : "false"}
          {this.companyList()}
        </div>
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
