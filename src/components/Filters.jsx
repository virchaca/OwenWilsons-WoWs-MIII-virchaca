import TextFilter from "./TextFilter";
import YearFilter from "./YearFilter";

const Filters = () => {
  return (
    <div>
      <form>
        <label htmlFor="">por nombre</label>
        <input type="text" name="" id="" />
        <label htmlFor=""> por año</label>
        <select name="" id="">
          <option value="">todos</option>
          <option value="">2001</option>
          <option value="">2002</option>
          <option value="">2003</option>
          <option value="">2004</option>
        </select>
      </form>
    </div>
  );
};

export default Filters;
