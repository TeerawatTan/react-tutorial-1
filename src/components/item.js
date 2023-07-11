export default function Item(props){

    const {items} = props;


    return (
        <div>
            <li>{items.title}-{items.name} {items.lastname}</li>
        </div>
    )
}