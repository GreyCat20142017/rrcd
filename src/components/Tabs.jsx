import React from 'react';

const Tab = ({title, active, ...props}) =>  (
    <a
      className = {'tab ' + (active ? 'active' : '')}
      title={title}
      {...props}
    >
      {title}
    </a>
);

class Tabs extends React.Component {
  static Tab = Tab;
  constructor(props) {
    super(props);
    this.state = {activeTabIndex: 0};
  }

  changeActive = (index) => this.setState({activeTabIndex: index});

  isActive = (index) => (index === this.state.activeTabIndex);

  render() {
    const children =  this.props.children;
        return (
            <React.Fragment>
                <nav className="tabs">
                    {React.Children.map(children, (child, index) =>
                        React.cloneElement(child, {
                            active: this.isActive(index),
                            onClick: () => this.changeActive(index)
                        }, child.props.title)
                    )}
                </nav>

                {React.Children.map(children, (child, index) =>
                    this.isActive(index) && <section> {child.props.children} </section>
                )}
            </React.Fragment>
        );
    }
}


export default Tabs;
