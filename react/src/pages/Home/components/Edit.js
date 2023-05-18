import { useState } from "react";
import { v4 } from "uuid";
const Edit = ({ add, submittingStatus }) => {
    const [number, setNumber] = useState("");
    function numberChange(e) {
        setNumber(e.target.value);
    }

    const [name, setName] = useState("");
    function nameChange(e) {
        setName(e.target.value);
    }

    const [dep, setDep] = useState("");
    function depChange(e) {
        setDep(e.target.value);
    }

    console.log(number, name, dep);

    function addItem() {
        submittingStatus.current = true
        add(function (prevData) {
            return [
                {
                    id: v4(),
                    number,
                    name,
                    dep,
                },
                ...prevData,
            ];
        });
    }

    return (
        <div>
            <h1>學生資料</h1>
            <p>學號：</p>
            <input type="text" value={number} onChange={numberChange} />
            <p>姓名：</p>
            <input type="text" value={name} onChange={nameChange} />
            <p>系所：</p>
            <input type="text" value={dep} onChange={depChange} />
            <button onClick={addItem} className="add">
                新增
            </button>
        </div>
    );
};

export default Edit;
