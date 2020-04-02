import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../home';

// 以下属于冒烟测试，目的是为了测该组件是否存在
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
});
