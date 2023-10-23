import { memo, forwardRef } from "react";

const Index = memo(
  forwardRef(() => {
    return <div>menus</div>;
  })
);

export default Index;
