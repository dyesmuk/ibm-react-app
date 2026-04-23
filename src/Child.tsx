const Child = (props) => {
    return (
        <>
            <h2>Child Component</h2>
            <p>Parent data in child component: {props.dataFromParent}</p>

        </>
    );
};
export default Child;