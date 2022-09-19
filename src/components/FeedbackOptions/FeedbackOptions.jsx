import { Container, Button } from './FeedbackOptions.styled';
import propTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      {options.map((option, index) => {
        return (
          <Button
            type="button"
            name={option}
            onClick={onLeaveFeedback}
            key={index}
          >
            {option}
          </Button>
        );
      })}
    </Container>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;