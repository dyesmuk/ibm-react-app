import Child from "./Child";
const Parent = () => {
    const parentData = "Sonu";
    return (
        <>
            <h2>Parent Component</h2>
    <p>Parent data in parent component: {parentData}</p>
            <Child dataFromParent={parentData} />
        </>
    );
};
export default Parent;