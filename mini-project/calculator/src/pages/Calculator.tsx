import Button from "../components/Button";
import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("0");

  const handleChange = (value: string) => {
    if (value === "C") {
      setResult("0");
    } else if (value === "<-") {
      setResult(result.slice(0, -1));
    } else if (value === "=") {
      setResult(eval(result).toString());
    } else {
      if (result === "0") {
        setResult(value);
      } else {
        setResult(result + value);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/5 max-w-md bg-white rounded-md h-3/5">
        <div className="grid grid-cols-4 p-4 w-full h-full gap-2 shadow-lg rounded-md items-center justify-center">
          <div className="col-span-4 bg-black h-full text-white text-2xl font-bold text-right p-2 rounded-md">
            {result}
          </div>

          <Button value="C" color="secondary" span="1" onClick={handleChange} />
          <Button
            value="<-"
            color="secondary"
            span="1"
            onClick={handleChange}
          />
          <Button value="%" color="secondary" span="1" onClick={handleChange} />
          <Button value="/" color="primary" span="1" onClick={handleChange} />
          <Button value="7" color="primary" span="1" onClick={handleChange} />
          <Button value="8" color="primary" span="1" onClick={handleChange} />
          <Button value="9" color="primary" span="1" onClick={handleChange} />
          <Button value="*" color="primary" span="1" onClick={handleChange} />
          <Button value="4" color="primary" span="1" onClick={handleChange} />
          <Button value="5" color="primary" span="1" onClick={handleChange} />
          <Button value="6" color="primary" span="1" onClick={handleChange} />
          <Button value="-" color="primary" span="1" onClick={handleChange} />
          <Button value="1" color="primary" span="1" onClick={handleChange} />
          <Button value="2" color="primary" span="1" onClick={handleChange} />
          <Button value="3" color="primary" span="1" onClick={handleChange} />
          <Button value="+" color="primary" span="1" onClick={handleChange} />
          <Button value="0" color="primary" span="1" onClick={handleChange} />
          <Button value="." color="primary" span="1" onClick={handleChange} />
          <Button value="=" color="third" span="2" onClick={handleChange} />
        </div>
      </div>
    </div>
  );
}
