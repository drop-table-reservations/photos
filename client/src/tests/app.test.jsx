import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/app';
import PhotoList from '../components/PhotoList';
import Header from '../components/header';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should render without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  it('should contain a PhotoList component', () => {
    expect(wrapper.find(PhotoList).exists()).toEqual(true);
  });
  it('should contain a Header component', () => {
    expect(wrapper.find(Header).exists()).toEqual(true);
  });
});
