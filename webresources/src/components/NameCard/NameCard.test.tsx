import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as classes from './NameCard.css';

import { INameCardProps, NameCard } from './NameCard';

configure({ adapter: new Adapter() });
const testParams: INameCardProps = {
  age: 18,
  name: 'Test Name',
};

describe('<NameCard />', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<NameCard {...testParams} />);
  });

  it('should render without error', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render a name tag', () => {
    const nameTag = <p className={classes.Name}>Name: {testParams.name}</p>;
    expect(wrapper.contains(nameTag)).toBe(true);
  });
});
