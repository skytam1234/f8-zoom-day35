import Button from "../../Components/ButtonComponent";
function ButtonE() {
    return (
        <>
            <Button onClick={() => alert("Clicked!")}>click</Button>
            <Button size="small">click</Button>
            <Button loading onClick={() => alert("Should not show")}>
                click
            </Button>
            <Button
                size="large"
                rounded
                bordered
                disabled
                onClick={() => alert("Should not show")}
            >
                click
            </Button>
        </>
    );
}
export default ButtonE;
