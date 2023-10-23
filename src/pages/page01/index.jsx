import { memo, forwardRef } from "react";
import { useSearchParams } from "react-router-dom";

const Index = memo(
  forwardRef(() => {
    const [getParams, setParams] = useSearchParams();

    const handleSet = (data) => {
      setParams(data || {});
    };

    const handleGet = () => {
      const urlParams = getParams.getAll("name");
      console.log(urlParams);
    };

    return (
      <div>
        <div>page01</div>
        <button onClick={() => handleSet({ name: "cwc", age: 18 })}>
          设置
        </button>
        <button onClick={handleGet}>获取1</button>
        <button onClick={() => handleSet("")}>重置</button>
      </div>
    );
  })
);

export default Index;
