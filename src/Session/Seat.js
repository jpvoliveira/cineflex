export default function Seat({item}) {
  return (
    <li
      onClick={() => reserveSeat(item)}
      className={item.isAvailable ? "seat" : "seat unavailable"}
    >
      {item.name}
    </li>
  );

  function reserveSeat(item) {
    console.log(item)
    item.isAvailable = false;
    setSelected(true);

    const newArray = [...select, item];
    setSelect(newArray);
  }

}


