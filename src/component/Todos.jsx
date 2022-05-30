
import React, { useEffect, useState } from "react";
import axios from "axios";


const Todos = () => {
    const [page, setPage] = useState(1);
    const [limit, setlimit] = useState(2);
    const [pageCount, setpageCount] = useState(0);
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const getTodo = async () => {
        let r = await axios.get(
          `http://localhost:8081/todos?_page=${page}&_limit=${limit}`
        );
        console.log(r);
        setTodos(r.data);
        setpageCount(+r.headers["x-total-count"]);
      };
      getTodo();
    }, [page, limit]);
  
    return (
      <div className="App">
        <button
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          {"<"}
        </button>
        <select onChange={(e) => setlimit(Number(e.target.value))}>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
        </select>
        <button
          disabled={pageCount < page * limit}
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </button>
        <div>
          {todos.map((elem) => (
            <div key={elem.id}>
              {" "}
              {elem.id} = {elem.value}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Todos