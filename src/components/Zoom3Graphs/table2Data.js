import React, { Component } from 'react';
import {Table } from 'react-bootstrap';
import { singlePullreqNcommitsAction } from '../../actions/zoom3Action';
import { connect } from 'react-redux';
import Header from '../commons/Header';
import { Col, Grid, Row, Button, Glyphicon }   from 'react-bootstrap';
import browserHistory from '../../history';

class Table2Data extends Component {
    componentWillMount() {
        const repoName = this.props.match.params.repoName;
        const prno = this.props.match.params.PRno;
        const user = this.props.match.params.user;
        this.setState({user})
        this.props.singlePullreqNcommitsAction({repoName, prno});
      }
  render() {
    return (
        <div>
          <Header/>
          <Grid>
            <Row className="show-grid">
                <Col xs={12} md={2}>
                <Button className="butn-top" bsStyle="primary" onClick={() => browserHistory.push(`/singleUserNCommits/${this.state.user}`)}><Glyphicon glyph="chevron-left" /> Back</Button>
                </Col>
               <Col xs={12} md={10}>
                <h4 className="header-color2">single user pullrequest and commits </h4>
               </Col>
            </Row>
            <Row className="show-grid table">
              <Col className="margin-row" xs={12} md={12}>
                <Table striped bordered condensed hover>
                  <thead>
                  <tr>
                    <th>Oid</th>
                    <th>Message</th>
                    <th>Author</th>
                  </tr>
                  </thead>
                  <tbody>
                   {this.props.table2_data && this.props.table2_data.map((obj, index) => {
                      return(<tr key={index}>
                      <td>{obj.oid}</td>
                      <td>{obj.message}</td>
                      <td>{obj.author}</td>
                     </tr>)
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { table2_data } = state.zoom3;
  return { table2_data };
}
export default connect(mapStateToProps, { singlePullreqNcommitsAction })(Table2Data);
