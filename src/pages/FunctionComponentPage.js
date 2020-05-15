import React, { useState, useEffect } from "react";

export function FunctionComponent(props) {
        //一个值,  和修改这个值的方法
  const [date, setDate] = useState(new Date());
  const [counter, setCounter] = useState(0);
  // console.log("enenne", useState(1));
  //副作用，有点像react三个生命周期的结合
  useEffect(() => {
    
    console.log("useEffecte");
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer); //组件卸载时候执行
  }, []);//第二个参数是依赖哪个对象
  //先执行console.log再执行useEffect里面的
  // console.log("return");
  
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter(counter + 2);
          console.log("enen", counter);
        }}
      >
        {counter}
      </button>
    </div>
  );
}
