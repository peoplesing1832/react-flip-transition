import * as React from 'react';
import Transition from './Transition';

export interface FlipProps {
  children: React.ReactElement;
}

const Flip: React.FC<FlipProps> = (props) => {
  const {
    children,
  } = props;

  const {
    _inOutDuration: inOutDuration, // 离开，进入的过渡时长，需要和class中transtion一致
    _animation: animation, // 离开，进入动画的开关
    _onLeaveed: onLeaveed,
    _name: name, // class的前缀
  } = props as any;

  const child = React.cloneElement(React.Children.only(children));

  return (
    <Transition
      name={name}
      animation={animation}
      onLeaveed={onLeaveed}
      duration={inOutDuration}
      unmount={true}
    >
      { child }
    </Transition>
  );
};

export default Flip;
