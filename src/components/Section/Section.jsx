import { Component } from 'react';
import { StatisticSection } from './Section.styled';
import propTypes from 'prop-types';

class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <StatisticSection>
        <h1>{title}</h1>
        {children}
      </StatisticSection>
    );
  }
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;