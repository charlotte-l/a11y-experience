import styled from 'styled-components';
import debounce from 'lodash.debounce';
import { ChangeEvent, useState } from 'react';

const StyledInput = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  & > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > input {
      max-width: 450px;

      &:valid {
        border: 1px solid green;
        padding-right: calc(1.5em + 0.75rem);
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right calc(0.375em + 0.1875rem) center;
        background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
      }

      &:invalid {
        border: 1px solid red;
      }
    }
  }
`;

const Form = () => {
  const [inputIsValid, setInputIsValid] = useState(false);

  const setFieldValidity = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setInputIsValid(target.validity.valid);
  };

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <StyledInput>
        <label>
          Your email:
          <input
            type="email"
            required={true}
            aria-required="true"
            defaultValue="invalid-email.com"
            aria-invalid={!inputIsValid}
            onChange={debounce(setFieldValidity, 100)}
          />
        </label>
        <button type="submit">Subscribe</button>
      </StyledInput>
    </form>
  );
};

export default Form;
