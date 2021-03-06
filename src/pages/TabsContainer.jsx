import React from 'react';
import Tabs from '../components/Tabs';

const TabsContainer = () => {
    return (
      <div className='tabs-wrapper'>
        <Tabs>
          <Tabs.Tab title='Tab-1'>
            Lorem One ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate perspiciatis dolores mollitia non aut eius dolorem alias, accusantium qui enim amet molestias doloremque voluptates aspernatur iure quidem illo repellat ducimus.
          </Tabs.Tab>
          <Tabs.Tab title='Tab-2'>
            Lorem Second ipsum dolor sit amet, consectetur adipisicing elit. Quis amet quibusdam nobis eius suscipit. Eius vel dolores, sapiente ipsa, eligendi saepe, soluta ex praesentium perspiciatis cupiditate libero veniam magni, unde.
          </Tabs.Tab>
          <Tabs.Tab title='Tab-3'>
            Lorem Third ipsum dolor sit amet, consectetur adipisicing elit. Nam ducimus eum blanditiis, eius sint ad eos veniam non reprehenderit incidunt, natus, error temporibus quis accusantium ea unde corrupti, modi recusandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eius architecto veniam numquam enim consequuntur sapiente doloremque cumque sint unde in reiciendis ullam quia blanditiis vel, asperiores minima quod quibusdam!
          </Tabs.Tab>
        </Tabs>
        </div>
    );
}

export default TabsContainer;
