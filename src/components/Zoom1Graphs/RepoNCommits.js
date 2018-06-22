import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, Hint} from 'react-vis';
import { connect } from 'react-redux';
import{Grid,Row,Col} from 'react-bootstrap';

class RepoNCommits extends Component {
  constructor () {
    super();
  }
  componentWillMount () {
    this.setState({mouseOverValue: false})
  }
  render(){
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={12}>
      <XYPlot height={300} width={1280} color="orange" stroke="black" xType="ordinal" >
        {/* <VerticalGridLines /> */}
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries data={this.props.repos_and_commits}
          onValueMouseOver={v => this.setState({ mouseOverValue: v })}
          onSeriesMouseOut={v => this.setState({ mouseOverValue: false })} />
        {this.state.mouseOverValue && <Hint value={this.state.mouseOverValue} />}
      </XYPlot>
      </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={12} md={12}>
      <h3>Gragh Second lies in this row</h3>
      </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={12} md={12}>
      <h3>Gragh third lies in this row</h3>
      </Col>
      </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  const { repos_and_commits } = state.repoNCommits;
  return { repos_and_commits };
}

export default connect(mapStateToProps) (RepoNCommits);
