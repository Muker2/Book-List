function Sidebar({props, onChange}) {
    return (
        <div className="sidebar">
            <input type="text" className="bookSearch"
                value={props}
                onChange={onChange}
            />
        </div>
    )
} export default Sidebar;