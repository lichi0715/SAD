import Item from "./Item";
const List = ({ listData, deleteData, submittingStatus }) => {
    return (
        <div className="list">
            {listData.map((item) => {
                const { number, name, dep, id } = item;
                return (
                    <Item
                        key={id}
                        id={id}
                        number={number}
                        name={name}
                        dep={dep}
                        deleteData={deleteData}
                        submittingStatus={submittingStatus}
                    />
                );
            })}
        </div>
    );
};

export default List;
