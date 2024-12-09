function Sidebar({props, array, onChange}) {
    return (
        <div className="sidebar">
            <input type="text" className="bookSearch"
                value={props}
                onChange={onChange}
            />
            <ul className="categories">{array.map((category, index) => 
                <li key={index}>{category}</li>)}</ul>
        </div>
    )
} export default Sidebar;