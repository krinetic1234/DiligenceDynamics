import { InputGroup, FormControl, Button } from 'react-bootstrap';

const Search = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search for a company..."
        aria-label="Search for a company"
        aria-describedby="basic-addon2"
      />
      <Button variant="primary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
};

export default Search;