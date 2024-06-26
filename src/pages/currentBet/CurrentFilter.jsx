
///styles
import "./styles.scss";
const Filter = () => {
 
  return (
    <div className="current-bet-form">
      <div className="w-full flex gap-4">
        <div className="select-menu w-[15%]">
          <select className="px-[2] py-[5] border-[1px] border-[#dbdbdb] w-full h-[38px] rounded-[5px]">
            <option value="0">
              <b>Select Report Type</b>
            </option>
            <option value="1">Sports</option>
            <option value="2">Casino</option>
          </select>
        </div>
        <div className="form-btn">
          <button className="btn">Submit</button>
        </div>
      </div>
      <div className="entries-container flex grid grid-cols-4 mt-10">
        <div className="entries flex items-center  gap-2">
          <span>Show</span>
          <select className="border-[1px] border-[#dbdbdb] w-[18%] h-[38px] rounded-[0px]">
            <option value="0">10</option>
            <option value="1">20</option>
            <option value="2">30</option>
            <option value="3">40</option>
          </select>
          <span>Entries</span>
        </div>
        <div className="all-back-lay  flex items-center gap-4">
          <div className="flex gap-1">
            <input
              type="radio"
              name="age"
              value="30"
              checked
              className="w-[15px] radio-input"
            />

            <label>All</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              name="age"
              value="60"
              className="w-[15px] radio-input"
            />

            <label>Back</label>
          </div>
          <div className="flex gap-1">
            <input
              type="radio"
              name="age"
              value="100"
              className="w-[15px] radio-input"
            />

            <label>Lay</label>
          </div>
        </div>
        <div className="soda-amount flex items-center">
          Total Bets: 0 Total Amount: 0
        </div>
        <div className="search flex items-center justify-end gap-[10px]">
          Search:
          <input
            placeholder="search..."
            className="w-[50%]  border-[1px] border-[#ced4da] rounded-[3px] h-[38px] p-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
