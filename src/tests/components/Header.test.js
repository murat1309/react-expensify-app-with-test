import React from 'react';
import { shallow } from 'enzyme';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header correctly', () => {
  /*  const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();*/

    //çalıştırdığımızda __snapshots__ adında bir dosyaa oluşturuyor ve onla match'liyor.
    //sen header component'inde herhangi bir değişiklik yaparsan match yapamayacağından test scriptinde 1 fail olacak.
    //ama yaptığın değişikliğin kalılı olmasını istiyorsan konsolu okursan sana 'u' ya basmsanı söyller basarsan component'de yapılan değişikliği günceller ve match'ler.

    //ENZYME Yükledikten sonra
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify');
});
