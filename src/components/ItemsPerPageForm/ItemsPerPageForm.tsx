import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ItemsPerPageForm({
  itemsPerPage,
  setItemsPerPage,
}: {
  itemsPerPage: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [inputData, setInputData] = useState<number>(itemsPerPage);

  const navigate = useNavigate();

  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setItemsPerPage(inputData);
    localStorage.setItem('ItemsPerPage', inputData.toString());
    navigate(`../search/1`);
  };

  return (
    <>
      <form>
        <input
          type="number"
          min="1"
          max="10"
          placeholder="1 to 10"
          onChange={(e) => setInputData(Number(e.target.value))}
        />
      </form>
      <form>
        <button type="submit" onClick={onSubmitHandler}>
          Set Planets Per Page
        </button>
      </form>
    </>
  );
}
