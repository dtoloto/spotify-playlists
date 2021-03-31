import React from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';

import { Container, Label, StyledSelect, Content, ArrowDown } from './styles';

interface IOptions {
  value: string;
  name: string;
}

interface IProps {
  label: string;
  filter: string;
  onChange: (value: string, filter: string) => void;
  options: IOptions[];
}

const Select: React.FC<IProps> = ({ label, onChange, options, filter }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value, filter);
  };
  return (
    <Container>
      <Label>{label}</Label>
      <Content>
        <StyledSelect onChange={handleChange}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </StyledSelect>
        <ArrowDown>
          <AiOutlineCaretDown />
        </ArrowDown>
      </Content>
    </Container>
  );
};

export default Select;
