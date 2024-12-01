function Sidebar() {
    return (
        <div className="sidebar">
        <h2>Filters</h2>
        <div className="cate-group">
        <h3>Categories</h3>
        <label>
          <input
            type="checkbox"
            value="electronics"
          />
          Electronics
        </label>
        <label>
          <input
            type="checkbox"
            value="fashion"
          />
          Fashion
        </label>
        <label>
          <input
            type="checkbox"
            value="home"
          />
          Home
        </label>
      </div>
      </div>
    )
} export default Sidebar;