type ResultDTO = {
  name: string;
  surname: string;
  username: string;
};

function NameListContainer() {
  const getNameList = async () => {
    if (document) {
      const result: ResultDTO[] = await fetch(
        "http://isd-test.cucheck.in/users",
        {
          method: "GET",
          mode: "cors",
        }
      ).then((res) => res.json());
      const nameListContainer = document.getElementById("name-list-container");
      const searchInput =
        (document.getElementById("search") as HTMLInputElement) ?? null;
      const searchValue = searchInput ? searchInput.value.toLowerCase() : "";

      if (nameListContainer) {
        let htmlResultText = "";

        for (const name of result) {
          if (
            name.username.toLowerCase().indexOf(searchValue) != -1 ||
            name.name.toLowerCase().indexOf(searchValue) != -1 ||
            name.surname.toLowerCase().indexOf(searchValue) != -1
          )
            htmlResultText += `<div><h3>${name.username}</h3><p>${name.name} ${name.surname}</p></div>`;
        }
        nameListContainer.innerHTML = htmlResultText;
      }
    }
  };

  setInterval(getNameList, 1000);
  return (
    <>
      <div id="name-list-container"></div>
    </>
  );
}

export default NameListContainer;
