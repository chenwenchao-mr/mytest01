import { memo, forwardRef } from "react";

const Index = memo(
  forwardRef(() => {
    return <div>react-router-v6 调试首页1</div>;
  })
);

export default Index;
