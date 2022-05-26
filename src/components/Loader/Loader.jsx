import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import { LoaderContainer} from './Loader.styled';

export const Spinner = ({ height = 70, width = 70 }) => {
  
  return (
    <LoaderContainer>
      <Oval
        color="black"
        strokeWidth={5}
        height={height}
        width={width}
        secondaryColor="rgb(150, 191, 224)"
      />
    </LoaderContainer>
  );
}

Spinner.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};