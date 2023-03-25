import React from 'react';

class HelloClassComponent extends React.Component {
    render () {
        return <div>クラスコンポーネントから {this.props.name}</div>
    }
}

export default HelloClassComponent;