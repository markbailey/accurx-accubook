import { MouseEvent } from 'react';
import useMediaQuery, { MediaQuery } from '../hooks/useMediaQuery';
import { mount } from '../utilities/show';
import { ReactComponent as AddIcon } from '../assets/icons/add.svg';
import { FormGroup, SearchInput, FormGroupProps, SearchInputProps } from './form';
import Button, { ButtonProps } from './Button';

export type PageControlsProps = FormGroupProps & {
  search: string;
  onSearchChange: SearchInputProps['onChange'];
  onAddClick?: ButtonProps['onClick'];
};

function PageControls(props: PageControlsProps) {
  const { search, onSearchChange, onAddClick, ...otherProps } = props;
  const isMobile = useMediaQuery(MediaQuery.isMobile);

  const onAddButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (typeof onAddClick !== 'function') return alert('Functionality not implemented yet');
    onAddClick(event);
  };

  return (
    <FormGroup {...otherProps} noStacking>
      <SearchInput value={search} onChange={onSearchChange} />
      <Button iconOnly={isMobile} onClick={onAddButtonClick}>
        {mount(isMobile, <AddIcon />)}
        {mount(!isMobile, <span>Add Vaccination</span>)}
      </Button>
    </FormGroup>
  );
}

export default PageControls;
