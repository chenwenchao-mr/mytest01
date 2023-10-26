import { memo, forwardRef } from "react";

const Index = memo(
  forwardRef(() => {
    return (
      <div>
        <div>react-router-v6 调试首页-测试自动化部署test</div>
        <div>main分支改动</div>
      </div>
    );
  })
);

export default Index;
