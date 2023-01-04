import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingGreeting } from "../redux/greetings";

function GreetingMessage() {
  const dispatch = useDispatch();
  const GeneratorGreeting = useSelector((state) => state.greeting);

    useEffect(() => {
        dispatch(fetchingGreeting());
      }, [dispatch]);

    return (
    <div>{Object.values(GeneratorGreeting).map((greeting) => (
        <h1>{greeting.message}</h1>
    ))}
    </div>
    );
};

export default GreetingMessage;

